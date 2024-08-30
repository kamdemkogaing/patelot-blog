import { useState } from "react";
import Page from "../assets/helpers/Page";

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    name: "",
    option: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
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
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Titelname"
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
                name="option"
                id="option"
                value={formData.option}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Auswählen</option>
                <option value="option1">Patrick</option>
                <option value="option2">Ludovic</option>
                <option value="option3">Luca</option>
                <option value="option4">Elyas</option>
                <option value="option5">Binja</option>
                <option value="option6">James</option>
                <option value="option7">Maliya</option>
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
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Blog Artikel schreiben"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-1/3 bg-[black] text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Blog erstellen
              </button>
            </div>
          </form>
        </div>
      </div>
    </Page>
  );
};

export default CreateBlog;
