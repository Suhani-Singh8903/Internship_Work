import { useState } from "react";

const Form = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [media, setMedia] = useState("");
  const [file, setFile] = useState(null);
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");

  const handleAddTag = () => {
    if (tagInput.trim() !== "" && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      description,
      media,
      file,
      tags,
    });
  };

  return (
    <div className="w-full flex items-center justify-center min-h-screen bg-gray-900">
      <div className="w-full max-w-md px-4">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-white text-2xl font-semibold mb-6 text-center">Upload Media</h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500 h-24"
            ></textarea>
            <input
              type="text"
              placeholder="Enter media URL"
              value={media}
              onChange={(e) => setMedia(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div>
              <label className="block text-gray-400 text-sm mb-2">Upload a file:</label>
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Add a tag"
                value={tagInput}
                onChange={(e) => setTagInput(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={handleAddTag}
                className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                +
              </button>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-blue-600 text-white text-sm px-2 py-1 rounded flex items-center"
                >
                  {tag}
                  <button
                    type="button"
                    onClick={() => handleRemoveTag(tag)}
                    className="ml-2 text-red-400 hover:text-red-600"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;