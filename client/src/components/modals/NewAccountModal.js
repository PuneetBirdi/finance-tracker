import React from 'react';
import NewAccount from '../../pages/NewAccount';
const NewAccountModal = ({ closeModal, modalStatus }) => {
  return (
    <div className='fixed top-0 bg-gray-800 bg-opacity-75 h-screen w-screen z-10 flex justify-center items-center'>
      <NewAccount closeModal={closeModal} modalStatus={modalStatus} />
    </div>
  );
};

export default NewAccountModal;
