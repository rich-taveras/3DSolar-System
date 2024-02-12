// App.jsx
import React, { useRef } from "react";
import styled from "styled-components";
import { Canvas, extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Stars from "./componets/Stars";
import Sun from "./componets/Sun";
import Mercury from "./componets/Mercury";
import Venus from "./componets/Venus";
import Earth from "./componets/Earth";
import Moon from "./componets/Moon";
import Mars from "./componets/Mars";
import Jupiter from "./componets/Jupiter";
import Saturn from "./componets/Saturn";
import Neptune from "./componets/Neptune";
import Uranus from "./componets/Uranus";

extend({ OrbitControls });

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

// ... (otros componentes)

const AppContainer = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Canvas
        style={{ background: "black", width: "100%", height: "100%" }}
        camera={{ position: [0, 75, 200] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <Sun />
        <Mercury />
        <Venus />
        <Earth />
        <Moon />
        <Mars />
        <Jupiter />
        <Saturn />

        <Neptune />
        <Uranus />
        {/* Otros componentes */}
        <CameraControls />
      </Canvas>
    </AppContainer>
  );
};

export default App;
