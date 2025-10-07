import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { options } from "../config/particles-config";

const ParticlesJS = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {}, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};

export default ParticlesJS;
