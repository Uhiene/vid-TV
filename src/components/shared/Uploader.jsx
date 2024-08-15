/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaCloudUploadAlt } from "react-icons/fa";
import { LuPlus } from "react-icons/lu";

const Uploader = ({ type, size, name, onUploadSuccess, onFileSelected }) => {
  const [files, setFiles] = useState([]);

  const removeFile = () => {
    setFiles([]);
  };

  const handleClickOpenFileExplorer = () => {
    // Create a hidden file input element
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = type; // Limit file types to MP4
    fileInput.style.display = "none"; // Hide the file input

    const handleFileSelection = (event) => {
      // Use event.currentTarget to access the input element
      const target = event.currentTarget;
      const file = target.files?.[0]; // Now safely accessing the files property

      if (!file) return;

      // Check file size
      if (file.size > size * 1024 * 1024) {
        // 150 MB in bytes
        alert(`File size must be less than ${size}MB.`);
        return;
      }

      onFileSelected(file);

      setFiles([file]);
    };

    // Attach the modified event listener
    fileInput.onchange = handleFileSelection;

    // Append the file input to the body temporarily
    document.body.appendChild(fileInput);
    fileInput.click(); // Open the file dialog

    // Remove the file input after the dialog is closed
    fileInput.addEventListener("change", () => {
      document.body.removeChild(fileInput);
    });
  };

  return (
    <>
      {files.length < 1 && (
        <div
          className="flex flex-col items-center border-dashed border-2
        border-slate-500 w-full h-32 justify-center rounded-xl
        cursor-pointer hover:border-green-500"
          onClick={handleClickOpenFileExplorer}
        >
          <LuPlus className="text-3xl" />
          <p>Upload {name}</p>
          <p className="text-sm text-slate-400">{size}mb Max</p>
        </div>
      )}

      {files.length > 0 && (
        <div className="flex flex-col justify-center shadow-md w-full h-32 rounded-lg overflow-hidden">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>

            <div className="relative h-full">
              {type.includes("video") ? (
                <video
                  className="w-full h-full object-cover"
                  src={URL.createObjectURL(files[0])}
                />
              ) : (
                <img
                  className="w-full h-full object-cover"
                  src={URL.createObjectURL(files[0])}
                  alt="photo"
                />
              )}

              <button
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                    bg-white text-green-600 rounded-full p-1.5 py-1.5 
                    hover:bg-black hover:bg-opacity-70"
              >
                <FaCloudUploadAlt size={30} />
              </button>
              <button
                className="absolute top-1 right-1 text-white bg-black bg-opacity-70
                  hover:text-red-500 rounded-full p-1"
                onClick={removeFile}
              >
                <AiOutlineClose />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Uploader;
