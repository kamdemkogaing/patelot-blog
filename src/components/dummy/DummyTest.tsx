import { createContext, useContext, useState } from "react";

//Créer un contexte avec React.createContext().
const ThemeContext = createContext(null);

//Fournir une valeur de contexte avec le composant Provider.
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//Consommer cette valeur dans un composant enfant à l'aide du hook useContext().
const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <p className="text-white">Le thème actuel est : {theme}</p>
      {theme === "light" && (
        <div className="bg-white text-black p-4 w-48 mt-4">JE SUIS LIGHT</div>
      )}
      {theme === "dark" && (
        <div className="bg-red-700 text-white p-4 w-48 mt-4">JE SUIS DARK</div>
      )}
      <button
        className="btn mt-4"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        Changer de thème
      </button>
    </div>
  );
};

const DummyTest = () => {
  return (
    <ThemeProvider>
      <div className="text-white text-xl font-bold mt-4">
        <span>Application de changement de thème</span>
      </div>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default DummyTest;
