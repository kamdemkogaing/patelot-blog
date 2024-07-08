import { useState } from "react";

const EmailFormRestAPI = () => {
  // state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // comportement
  const handleSubmit = async (e) => {};

  // render
  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Dein Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="mb-4"
      />
      <input
        type="email"
        placeholder="Dein E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-4"
      />

      <textarea
        cols={30}
        rows={10}
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        className="mt-3 "
      />
      <button
        type="submit"
        className="p-4 my-4 bg-[olive] rounded-2xl font-bold"
      >
        E-mail senden
      </button>
    </form>
  );
};

export default EmailFormRestAPI;
