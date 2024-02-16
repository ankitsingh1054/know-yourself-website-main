'use client';

import axios from 'axios';
import useSWR from 'swr';
import TitleForm from './_components/title-form';
import ColorForm from './_components/color-form';
import QuestionForm from './_components/question-form';
import QuestionCreationForm from './_components/question-creation-form';
import DeletePromptForm from './_components/delete-prompt-form';

const fetcher = async (url) => axios.post(url).then((res) => res.data);

export default function ManagePromptPage({ params }) {
  const { data: prompt, mutate } = useSWR(
    `/api/manage/${params.promptId}?promptId=${params.promptId}`,
    fetcher,
    { revalidateIfStale: true }
  );

  return (
    <div className='flex flex-col w-full h-full items-center'>
      <div className='flex flex-col w-full max-w-xl sm:max-w-3xl px-2'>
        <h1 className='text-2xl p-5 text-center font-semibold text-secondary'>
          PROMPT {params.promptId}
        </h1>
        <TitleForm
          promptId={params.promptId}
          label={prompt?.label}
          refresh={mutate}
        />
        <ColorForm
          promptId={params.promptId}
          color={prompt?.color}
          refresh={mutate}
        />
        {prompt?.questions.map((question) => (
          <QuestionForm
            key={question._id}
            promptId={params.promptId}
            questionData={question}
            refresh={mutate}
          />
        ))}
        <QuestionCreationForm promptId={params.promptId} refresh={mutate} />
        <DeletePromptForm promptId={params.promptId} />
      </div>
    </div>
  );
}
