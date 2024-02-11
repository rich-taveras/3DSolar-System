import React, { useRef } from 'react';
import styled from 'styled-components';
import { Canvas, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

const CameraControls = () => {
  const { camera, gl } = useThree();
  const controlsRef = useRef();

  return <orbitControls ref={controlsRef} args={[camera, gl.domElement]} />;
};

const Sun = () => {
  const sunRef = useRef();

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshBasicMaterial color={0xffff00} />
    </mesh>
  );
};

const FirstPlanet = () => {
  const planetRef = useRef();

  return (
    <mesh ref={planetRef} position={[5, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={0x888888} />
    </mesh>
  );
};

const SecondPlanet = () => {
  const planetRef = useRef();

  return (
    <mesh ref={planetRef} position={[8, 0, 0]}>
      <sphereGeometry args={[1.5, 32, 32]} />
      <meshBasicMaterial color={0xffa500} />
    </mesh>
  );
};

const ThirdPlanet = () => {
  const planetRef = useRef();

  return (
    <mesh ref={planetRef} position={[12, 0, 0]}>
      <sphereGeometry args={[0.8, 32, 32]} />
      <meshBasicMaterial color={0x00ff00} />
    </mesh>
  );
};

const AppContainer = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <AppContainer>
      <Canvas
        style={{ background: 'black', width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 15] }}
      >
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sun />
        <FirstPlanet />
        <SecondPlanet />
        <ThirdPlanet />
        <CameraControls />
      </Canvas>
    </AppContainer>
  );
};

export default App;
