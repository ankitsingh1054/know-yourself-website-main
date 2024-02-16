'use client';

import Modal from '@/components/modal';
import { RedirectToSignIn, SignedOut } from '@clerk/nextjs';
import { useState } from 'react';
import { FiLogIn } from 'react-icons/fi';

export default function SigninModal() {
  const [isModalClicked, setIsModalClicked] = useState(false);

  return (
    <SignedOut>
      <Modal
        title='Know Yourself'
        description='Access to more when you log in'
        modalButtonText='Signin'
        onModalClick={() => setIsModalClicked(true)}
        ModalButtonIcon={FiLogIn}
      />
      {isModalClicked && <RedirectToSignIn />}
    </SignedOut>
  );
}
