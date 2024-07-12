import { useState } from "react";
import DomainChecker from "../domain-checker/DomainChecker";
import WorldMap from "../world-map/WorldMap";

const PasswordGenerator = () => {
  // state
  const [length, setLength] = useState(12);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [password, setPassword] = useState("");

  // comportement
  const generatePassword = () => {
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let allChars = lowerCaseChars;
    if (includeUppercase) allChars += upperCaseChars;
    if (includeNumbers) allChars += numberChars;
    if (includeSymbols) allChars += symbolChars;

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allChars.length);
      generatedPassword += allChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  //render
  return (
    <div className="bg-black p-4 text-white">
      <div className="container mx-auto my-8">
        <div className="flex flex-wrap space-x-0 md:space-x-10 lg:space-x-10 xl:space-x-10 justify-start items-center">
          <div className="bg-[olive] w-full md:w-1/2 lg:w-3/12 p-4 mb-4 rounded-lg">
            <div className="block text-2xl font-overpass-regular my-4">
              Password Generator
            </div>
            <ul className="p-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
              <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    type="number"
                    value={length}
                    onChange={(e) => setLength(parseInt(e.target.value, 10))}
                    className="p-3 w-20 h-10 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Großbuchstaben einschließen
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Großbuchstaben einschließen
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    type="checkbox"
                    checked={includeNumbers}
                    onChange={(e) => setIncludeNumbers(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Zahlen einschließen
                  </label>
                </div>
              </li>
              <li className="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                <div className="flex items-center ps-3">
                  <input
                    type="checkbox"
                    checked={includeSymbols}
                    onChange={(e) => setIncludeSymbols(e.target.checked)}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    Symbole einschließen
                  </label>
                </div>
              </li>
            </ul>
            <button
              className="inline-flex items-center px-5 py-2.5 text-sm text-center text-black hover:text-[olive] bg-white rounded-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-900 hover:bg-slate-300 font-bold my-4"
              onClick={generatePassword}
            >
              Generieren
            </button>
            <div className="">
              <div className="font-bold">Generiertes Passwort:</div>
              <div className="text-xl break-words">{password}</div>
            </div>
          </div>
          <div className="bg-[olive] w-full md:w-1/2 lg:w-5/12 p-4 mb-4 rounded-lg">
            <WorldMap />
          </div>
          <div className=" bg-[olive] w-full md:w-1/2 lg:w-3/12 p-4 mb-4 rounded-lg">
            <DomainChecker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
