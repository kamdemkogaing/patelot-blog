import { useState } from "react";

const Form = () => {
  // state
  const [name, setName] = useState<string>("KAMDEM KOGAING");
  const [surName, setsurName] = useState<string>("PATRICK LUDOVIC");
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    console.log({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("KAMDEM FORM");
  };

  //comportements
  const getFullname = (name: string, surName: string): string => {
    return name + " " + surName;
  };

  // render
  return (
    <div className="container mx-auto my-4 text-xl">
      {name} {surName}
      <br />
      {getFullname(name, surName)}
      <form className="border-2 p-4 w-1/3 my-5" onSubmit={handleSubmit}>
        <div className="border-2 p-2 mb-2">
          <label>Email :</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="border-2 p-2 mb-2">
          <label>Subject :</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className="border-2 p-2 mb-2">
          <label>Message :</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="block p-4 rounded-2xl bg-slate-500 mt-4 hover:bg-orange-400 hover:text-white hover:font-bold"
          type="submit"
        >
          Send Email
        </button>
      </form>
    </div>
  );
};

export default Form;
