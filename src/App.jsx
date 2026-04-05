import React from "react";
import NavBar from "./Components/NavBar";
import Logo from "./Components/Logo";
import Rank from "./Components/Rank";
import ImageLinkForm from "./Components/ImageLinkForm";
import Particles from "./Components/Particles";

const App = () => {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Particle background */}
      <div style={{ width: '100%', height: '100%', position: 'fixed', top: 0, left: 0, zIndex: 0 }}>
        <Particles
          particleColors={["#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>


        <NavBar />
        <div className="flex sm:justify-center justify-start">
          <Logo />
        </div>
        <div className="flex justify-center">
          <Rank />
        </div>
        <ImageLinkForm />
      </div>
    </div>
  )
}

export default App;