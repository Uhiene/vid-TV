import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { LuPlus } from "react-icons/lu";

const CreateMovie = () => {
  const [videos, setVideos] = useState([]);
  const [movieDetails, setMovieDetails] = useState({
    name: "",
    synopsis: "",
    genres: "",
  });

  const handleVideoUpload = (event) => {
    const files = Array.from(event.target.files);
    setVideos((prevVideos) => [...prevVideos, ...files]);
  };

  const handleRemoveVideo = (index) => {
    setVideos((prevVideos) => prevVideos.filter((_, i) => i !== index));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setMovieDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = Array.from(event.dataTransfer.files);
    setVideos((prevVideos) => [...prevVideos, ...files]);
  };

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-lg font-bold mb-4 text-slate-200">Upload video</h3>
      <div className="bg-gray-800 bg-opacity-75 border border-slate-500 w-full md:w-2/5 p-4 rounded-xl text-slate-200">
        <div className="flex flex-col items-center justify-center gap-2">
          <div
            className="flex flex-col items-center border-dashed border-2 border-slate-500 w-full h-40 justify-center rounded-xl"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <LuPlus className="text-3xl" />
            <p>Upload video</p>
            <p className="text-sm text-slate-400">
              Choose video you want for your content
            </p>
          </div>

          <div className="w-full flex justify-center">
            {videos.length > 0 && (
              <div className="mb-4">
                <h4 className="text-lg font-semibold mb-2">Uploaded Videos:</h4>
                <div className="flex flex-wrap gap-4">
                  {videos.map((video, index) => (
                    <div
                      key={index}
                      className="relative w-20 h-20 border border-slate-400 rounded-lg overflow-hidden"
                    >
                      <video
                        className="w-full h-full object-cover"
                        src={URL.createObjectURL(video)}
                        controls
                      />
                      <button
                        className="absolute top-1 right-1 text-white bg-red-600 rounded-full p-1"
                        onClick={() => handleRemoveVideo(index)}
                      >
                        <AiOutlineClose />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="w-full mt-4">
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Movie Name
              </label>
              <input
                type="text"
                name="name"
                value={movieDetails.name}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-700 border border-slate-500 rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Synopsis
              </label>
              <textarea
                name="synopsis"
                value={movieDetails.synopsis}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-700 border border-slate-500 rounded"
                rows="4"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-200 mb-1">
                Genres
              </label>
              <input
                type="text"
                name="genres"
                value={movieDetails.genres}
                onChange={handleInputChange}
                className="w-full p-2 bg-gray-700 border border-slate-500 rounded"
              />
              <small className="text-slate-400">
                Separate genres with commas (e.g., Action, Drama)
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMovie;
