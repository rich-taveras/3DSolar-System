// App.jsx
import React, { useRef } from 'react';
import styled from 'styled-components';
import { Canvas, extend, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import Sun from './componets/Sun';
import Venus from './componets/Venus';

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
        style={{ background: 'black', width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 60] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sun />
        <Venus/>
        {/* Otros componentes */}
        <CameraControls />
      </Canvas>
    </AppContainer>
  );
};

export default App;
