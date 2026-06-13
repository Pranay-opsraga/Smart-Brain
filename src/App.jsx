import React, { useState, useEffect } from "react";
import NavBar from "./Components/NavBar";
import Logo from "./Components/Logo";
import Rank from "./Components/Rank";
import ImageLinkForm from "./Components/ImageLinkForm";
import FaceRecognition from "./Components/FaceRecognition";
import Particles from "./Components/Particles";
import SignIn from "./Components/signIn";
import SignUp from "./Components/signUp";
import * as faceapi from "@vladmandic/face-api";

const App = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [boxes, setBoxes] = useState([]); // To store an array of face box coordinates
  // Restore session from localStorage on load
  const savedUser = JSON.parse(localStorage.getItem('smartBrainUser'));
  const [route, setRoute] = useState(savedUser ? 'home' : 'signin');
  const [IsSignedIn, setIsSignedIn] = useState(savedUser ? true : false);
  const initialUser = {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
  const [user, setUser] = useState(savedUser || initialUser);

  const loadUser = (data) => {
    const userData = {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    };
    setUser(userData);
    localStorage.setItem('smartBrainUser', JSON.stringify(userData));
  }

  const onRouteChange = (route) => {
    if (route === 'signout') {
      setIsSignedIn(false);
      setRoute('signin');
      setUser(initialUser);
      setImageUrl('');
      setInput('');
      setBoxes([]);
      localStorage.removeItem('smartBrainUser');
    } else {
      if (route === 'home') {
        setIsSignedIn(true);
      }
      setRoute(route);
    }
  }



  // Load face-api models from CDN when the component mounts
  useEffect(() => {
    const loadModels = async () => {
      try {
        await faceapi.nets.tinyFaceDetector.loadFromUri(
          "https://cdn.jsdelivr.net/gh/justadudewhohacks/face-api.js@master/weights"
        );
        console.log("Face-api models loaded successfully!");
      } catch (err) {
        console.error("Error loading face-api models:", err);
      }
    }
    loadModels();
  }, []);

  // Run face detection locally when the image finishes loading in the DOM
  const onImageLoad = async () => {
    const image = document.getElementById("inputimage");
    if (!image || !imageUrl) return;

    try {
      const detections = await faceapi.detectAllFaces(
        image,
        new faceapi.TinyFaceDetectorOptions()
      );

      const imgWidth = Number(image.width);
      const imgHeight = Number(image.height);
      const natWidth = image.naturalWidth;
      const natHeight = image.naturalHeight;

      // Map over all detected faces and calculate scaled coordinates for each
      const calculatedBoxes = detections.map((detection) => {
        const { x, y, width, height } = detection.box;
        return {
          leftCol: (x / natWidth) * imgWidth,
          topRow: (y / natHeight) * imgHeight,
          rightCol: imgWidth - (((x + width) / natWidth) * imgWidth),
          bottomRow: imgHeight - (((y + height) / natHeight) * imgHeight),
        };
      });

      setBoxes(calculatedBoxes);
    } catch (err) {
      console.error("Face-api detection failed:", err);
    }
  };

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onButtonSubmit = () => {
    setBoxes([]); // Reset the boxes array for the new image
    setImageUrl(input);
    // Update entries on the server
    fetch('http://localhost:3001/image', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: user.id })
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          setUser(prev => {
            const updated = { ...prev, entries: data.entries };
            localStorage.setItem('smartBrainUser', JSON.stringify(updated));
            return updated;
          });
        }
      })
      .catch(err => console.error('Error updating entries:', err));
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Particle background */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
      >
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
      <div style={{ position: "relative", zIndex: 1 }}>
        <NavBar isSignedIn={IsSignedIn} onRouteChange={onRouteChange} />
        {route === 'home' ? (
          <>
            <div className="logo-wrapper">
              <Logo />
            </div>
            <div className="flex-center">
              <Rank name={user.name} entries={user.entries} />
            </div>
            <ImageLinkForm
              onInputChange={onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <FaceRecognition imageUrl={imageUrl} boxes={boxes} onImageLoad={onImageLoad} onRouteChange={onRouteChange} />
          </>
        ) : route === 'signup' ? (
          <SignUp onRouteChange={onRouteChange} />
        ) : (
          <SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
        )}
      </div>
    </div>

  );
};

export default App;