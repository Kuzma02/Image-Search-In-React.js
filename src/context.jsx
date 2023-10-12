import { createContext, useContext, useEffect, useState } from "react";

const GlobalContext = createContext();

// pravimo custom hook da ne moramo stalno u komponenti 
// u kojoj zelimo da koristimo context kucamo useContext(imeContexta)
export const useGlobalContext = () => useContext(GlobalContext);

// podesavamo mehanizam da bi vrednosti mogle da se prenose na children
const AppContext = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [ searchValue, setSearchValue ] = useState("cat");


  const toggleDarkTheme = () => {
    document.body.classList.toggle("dark-theme");
    setIsDarkTheme(!isDarkTheme);

  }

  return <GlobalContext.Provider value={{isDarkTheme, toggleDarkTheme, searchValue, setSearchValue}}>
      { children }
  </GlobalContext.Provider>
}

export default AppContext;