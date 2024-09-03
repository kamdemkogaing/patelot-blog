import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Page from "../assets/helpers/Page";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    body: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const tmp_date = new Date().toISOString().split("T");
    const date = `${tmp_date[0]} ${tmp_date[1]}`;
    const blog = { ...formData, date };
    setIsLoading(true);

    fetch("https://patelot-mock.onrender.com/blogs", {
      method: "POST",
      headers: { "content-Type": "application/json" },
      body: JSON.stringify(blog),
    }).then(() => {
      console.log("Der Blog wurde erfolgreich hinzugefügt.");
      setIsLoading(false);
      history("/blog");
    });
  };

  return (
    <Page>
      <div className="container mx-auto">
        <div className="max-w-md mx-auto my-10 p-6 bg-[olive] shadow-md rounded-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[black]"
              >
                Blog Titel
              </label>
              <input
                type="text"
                name="title"
                id="name"
                value={formData.title}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Titelname"
                required
              />
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-[black]"
              >
                Ein Autor auswählen
              </label>
              <select
                name="author"
                id="option"
                value={formData.author}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              >
                <option value="">Auswählen</option>
                <option value="Patrick">Patrick</option>
                <option value="Ludovic">Ludovic</option>
                <option value="Luca">Luca</option>
                <option value="Elyas">Elyas</option>
                <option value="Binja">Binja</option>
                <option value="James">James</option>
                <option value="Maliya">Maliya</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[black]"
              >
                Blog Artikel schreiben
              </label>
              <textarea
                name="body"
                id="message"
                value={formData.body}
                onChange={handleChange}
                rows={10}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm resize-none"
                placeholder="Blog Artikel schreiben"
                required
              ></textarea>
            </div>

            <div>
              {!isLoading && (
                <button
                  type="submit"
                  className="md:w-1/3 bg-[black] text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Blog erstellen
                </button>
              )}
              {isLoading && (
                <div>
                  <span className="loading loading-dots loading-xs"></span>
                  <span className="loading loading-dots loading-sm"></span>
                  <span className="loading loading-dots loading-md"></span>
                  <span className="loading loading-dots loading-lg"></span>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
};

export default CreateBlog;

// local Mock Data: http://localhost:8000/blogs/
// port: 8000
// json-server --watch data/db.json --port 8000
