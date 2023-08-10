import { createContext, useContext, useState } from 'react';

const LangContext = createContext();

export function LangProvider({ children }) {
  const [lang, setLang] = useState(true);

  const toggleEng = () => {
    setLang(prevLang => true);
  };
  const toggleAlb = () => {
    setLang(prevLang => false);
  };

  return (
    <LangContext.Provider value={{ lang, toggleEng , toggleAlb }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}