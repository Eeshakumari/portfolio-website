import { useContext, createContext, useState, useCallback } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState("all");
  const [selectedHobby, setSelectedHobby] = useState("travel");

  const setProject = useCallback((value) => {
    setSelectedProject(value);
  }, []);

  const setHobby = useCallback((value) => {
    setSelectedHobby(value);
  }, []);

  return (
    <AppContext.Provider
      value={{
        selectedProject,
        setProject,
        selectedHobby,
        setHobby,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
