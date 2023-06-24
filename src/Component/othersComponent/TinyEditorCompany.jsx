import React, { useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { StaticImage } from "../../utils/StaticImage";
import { saveReferenceCreated, updateRefOnProgress, updateRefToComplete, updateReference } from "../../Redux/service/Reference";
import ask_to_cancel from "../../assets/ask_to_cancel.svg"
import { useSelector } from "react-redux";
import { BASE_URL1, BASE_URL2 } from "../../utils/Utils";
import { sendNotification } from "../../Redux/service/Notification";

export default function TinyEditorCompany({form,status,type,cerId,userId}) {
  const editorRef = useRef();
  const [savedContent, setSavedContent] = useState(null);
  const companyName = useSelector(
    (state) => state.companyDetail.company_detail.companyName
  );
  function onClickHandler() {
    let content = editorRef.current.getContent();
    updateRefOnProgress(cerId,{form:content}).then((res)=>{
      })
    }
  function onClickCompleteHandler() {
    let content = editorRef.current.getContent();
    updateRefOnProgress(cerId,{form:content}).then((res)=>{
      updateRefToComplete(cerId).then((res1)=>{
        sendNotification('user'+userId,"Reject Reference",companyName+" has Complete your request",BASE_URL2+"/home/reference")
      })
    })
  }
  const handleImageUpload = (blobInfo) => {
    return new Promise((resolve, reject) => {
      // const file = new File([blobInfo.blob()],"sokreach");
       const file = blobInfo.blob()
      // Perform the API call to upload the image
      // Replace 'uploadUrl' with the actual endpoint for uploading images
      const formData = new FormData();
formData.append('image', file, 'filename.jpg');

      fetch(`${BASE_URL1}/api/v1/images/Files`, {
        method: "POST",
        body: formData,
        // headers: {
        //   "Content-Type": "multipart/form-data"
        // },
        onUploadProgress: (event) => {
          const progressPercentage = Math.round(
            (event.loaded * 100) / event.total
          );
          // You can update the progress if needed
        },
      })
        .then((response) => response.json())
        .then((result) => {
          resolve(`${BASE_URL1}/api/v1/images/PROFILE?fileName=`+result.payload); // Resolve the Promise with the image URL
        })
        .catch((error) => {
          // resolve(URL.createObjectURL(file)); // Reject the Promise with an error message
        });
    });
  };

  return (
    <div className="w-[83.5vw] h-[90vh]">
      <Editor
        apiKey="fo6mbz4uz1n1jhnhuols7ar2n13xg9cktwxuf7zb23fojgzq"
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={form}
        init={{
          height: 500,
          menubar: true,
          plugins: [
            "advlist",
            "autolink",
            "lists",
            "link",
            "image",
            "charmap",
            "preview",
            "anchor",
            "searchreplace",
            "visualblocks",
            "fullscreen",
            "insertdatetime",
            "media",
            "table",
            "help",
            "wordcount",
            "image",
          ],
          toolbar:
            "undo redo | casechange blocks | bold italic backcolor | " +
            "alignleft aligncenter alignright alignjustify | " +
            "bullist numlist checklist outdent indent | removeformat | a11ycheck code table help | image",
          images_upload_handler: handleImageUpload,
          content_style:
            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
        }}
      />
      <div className="flex justify-end py-5">
        <label
        htmlFor="my-modal-save-ref"
          className="border-2 px-4 py-1 bg-green_custom text-xl text-white rounded-[20px] ml-56"
          type="button"
          // onClick={onClickHandler}
        >
          update
        </label>
      </div>

      {savedContent && (
        <div>
          <h2>Saved Content:</h2>
          <div dangerouslySetInnerHTML={{ __html: savedContent }} />
        </div>
      )}
      <input type="checkbox" id="my-modal-save-ref" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box h-auto">
          <div className="flex justify-center items-center">
            <img className="w-20 h-20" src={ask_to_cancel} alt="" />
          </div>
          <div className="w-full h-10 flex justify-center items-center mt-10">
            <h3 className="font-semibold text-3xl">Are you sure to Save?</h3>
          </div>
          <div className="modal-action flex justify-center">
            <label onClick={onClickHandler}
              htmlFor="my-modal-save-ref"
              className="btn  w-28 bg-red-500 border-0 capitalize hover:bg-red-700 rounded-3xl"
            >
              Yes, sure!
            </label>
            <label onClick={onClickCompleteHandler}
              htmlFor="my-modal-save-ref"
              className="btn w-28 bg-gray-500 hover:bg-gray-700 border-0 capitalize rounded-3xl"
            >
              Complete
            </label>
            <label 
              htmlFor="my-modal-save-ref"
              className="btn w-28 bg-gray-500 hover:bg-gray-700 border-0 capitalize rounded-3xl"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
