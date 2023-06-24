import React from 'react'
import { deleteComment } from '../../../../../Redux/service/PostInteractService';
import { useState } from 'react';

export default function DeleteCommentPopUp({index, postId, commentId, comments, setComments, isOpen, setIsOpen}) {
  const [isOpenDel, setIsOpenDel] = useState (false);

  const toggleModal = () => {
    setIsOpenDel(!isOpenDel);
  };


  const handleDelete = () => {
    deleteComment(postId, commentId).then((result) => {
      if(result.data){
        if(result.data.payload === 'Successfully'){
          comments[postId].splice(index, 1);
          setComments(comments);
          setIsOpen({...isOpen, [commentId] : false});
        }
      }
    });

    toggleModal();
  };

  const handleCancelDelete = () => {
    toggleModal();
  };
  

  return (
    <div>
        <button
          data-modal-target="popup-modal"
          data-modal-toggle="popup-modal"
          className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          type="button"
          onClick={toggleModal}
        >
          Delete
        </button>
        {isOpenDel && (
          <div
            id="popup-modal"
            tabIndex="-1"
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 p-4 overflow-x-hidden overflow-y-auto"
          >
            <div className="relative m-auto w-full max-w-md max-h-full">
              <div className="relative bg-white rounded-lg shadow ">
                <button
                  type="button"
                  className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                  data-modal-hide="popup-modal"
                  onClick={()=>toggleModal()}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-6 text-center">
                  <svg
                    aria-hidden="true"
                    className="mx-auto mb-4 text-gray-400 w-14 h-14 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                    Are you sure you want to delete this comment?
                  </h3>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    onClick={handleDelete}
                  >
                    Yes, I'm sure
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    onClick={handleCancelDelete}
                  >
                    No, cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
  )
}
