import emailjs from "@emailjs/browser";
import { useState } from "react";

const EmailForm = () => {
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //comportements
  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_dlr7ypp";
    const templateId = "template_ip9lbnn";
    const publicKey = "vUVw9wfTXfv9P3mos";

    // Create a new objet that containt dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Patrick Kamdem",
      message: message,
    };

    // Send the email using EmailJs
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email send successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };

  // render
  return (
    <div className="container mx-auto my-10 flex flex-wrap justify-center items-center p-4">
      <form onSubmit={handleSubmit}>
        <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Dein Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              type="text"
              placeholder="Dein Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Dein E-Mail
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              type="email"
              placeholder="Dein E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
            <label className="sr-only">Publish post</label>
            <textarea
              cols={60}
              rows={5}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="resize-none block w-full p-2 text-sm text-gray-800 bg-white border-2 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
              placeholder="Email screiben ..."
              required
            ></textarea>
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 text-sm text-center text-white bg-[olive] rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-gray-800 font-bold"
        >
          E-mail senden
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
