import { useState } from "react";

const CreatePost = ({ addPost }) => {
  // state
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // comportement
  const handleSubmit = (e) => {
    e.preventDefault();

    addPost({ title, content });
    setTitle("");
    setContent("");
  };

  // render
  return (
    <form onSubmit={handleSubmit} className="m-8">
      <div className="p-4 w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        />
        <textarea
          cols={60}
          rows={5}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="resize-none block w-full p-2 text-sm text-gray-800 bg-white border-2 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center px-5 py-2.5 text-sm text-center text-black bg-[#cece99] rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-white font-bold hover:text-[olive]"
      >
        Ein Post erstellen
      </button>
    </form>
  );
};

export default CreatePost;
