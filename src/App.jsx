import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/MainContainer/Container";
import ParticlesJs from "./components/ParticlesJS";
import Loader from "./components/Loader/Loader";
import { AppProvider } from "./store/store";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous task
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="app_wrapper">
      <ParticlesJs />
      {isLoading ? (
        <Loader />
      ) : (
        <AppProvider>
          <Container />
        </AppProvider>
      )}
    </div>
  );
}

export default App;
