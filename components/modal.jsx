export default function Modal({
  title,
  description,
  onModalClick,
  modalButtonText,
  ModalButtonIcon,
}) {
  return (
    <>
      <div className='justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
        <div className='relative w-auto my-6 mx-auto max-w-3xl px-2'>
          <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gradient-background bg-cover outline-none focus:outline-none'>
            <div className='flex items-start justify-between p-5 rounded-t'>
              <h3 className='text-3xl w-full text-center sm:text-start text-secondary font-semibold'>
                {title}
              </h3>
            </div>
            <div className='py-2 px-6 flex-auto'>
              <p className='my-2 text-lg text-center sm:text-left leading-relaxed text-white font-light'>
                {description}
              </p>
            </div>
            <div className='flex items-center justify-center sm:justify-end p-6 rounded-b'>
              <button
                className='flex gap-2 items-center justify-center border border-white rounded-md p-3 hover:bg-white hover:text-black transition-all h-[50px]'
                onClick={onModalClick}
              >
                {modalButtonText} <ModalButtonIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='opacity-80 fixed inset-0 z-40 bg-black' />
    </>
  );
}
