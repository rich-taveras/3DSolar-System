import React, { useRef } from 'react';
import { SphereGeometry, MeshBasicMaterial } from 'three';

const Sun = () => {
  const sunRef = useRef();

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshBasicMaterial attach="material" color={0xffff00} />
    </mesh>
  );
};

export default Sun;
