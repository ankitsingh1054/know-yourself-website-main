'use client';

import axios from 'axios';
import useSWRMutation from 'swr/mutation';
import { MdDelete, MdEdit } from 'react-icons/md';
import toast from 'react-hot-toast';

export default function QuestionForm({ promptId, questionData, refresh }) {
  const { trigger: deleteQuestion, isMutating: isDeleteLoading } = useSWRMutation(
    `/api/manage/${promptId}/question`,
    (url, { arg }) => {
      return axios.delete(url, {
        data: {
          arg,
        },
      });
    },
    {
      onSuccess: () => {
        refresh();
        toast.success('Question deleted.');
      },
      onError: () => {
        toast.error('Failed to delete question.');
      },
    }
  );

  const editOptions = () => {
  }

  return (
    <div className='flex relative flex-col w-full items-left space-y-2 border p-5 mb-5'>
      <h1 className='text-primary font-bold'>
        Question {questionData.questionId}:
      </h1>
      <h2 className='text-sm'>Question Type:</h2>
      <p className='opacity-70 text-sm'>{questionData.category}</p>
      <h2 className='text-sm'>Question:</h2>
      <p className='opacity-70 text-sm italic'>{questionData?.question}</p>
      {questionData?.choices?.length > 0 && (
        <>
          <h2 className='text-sm'>Options:</h2>
          <ul>
            {questionData?.choices?.map((choice, index) => (
              <li key={index} className='opacity-70 text-sm italic'>
                {choice}
              </li>
            ))}
          </ul>
        </>
      )}
        <button
          className='absolute right-6 top-5 hover:text-red-500 transition-colors'
          disabled={isDeleteLoading}
          onClick={() =>
            deleteQuestion({ promptId: promptId, questionId: questionData._id })
          }
        >
          <MdDelete className='w-6 h-6' />
        </button>
        <button
          className='absolute right-16 top-5 hover:text-red-500 transition-colors'
          disabled={isEditLoading}
          onClick={() =>
            editOptions(questionData)
          }
        >
          <MdEdit className='w-6 h-6' />
        </button>
    </div>
  );
}
