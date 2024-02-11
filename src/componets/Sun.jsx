import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { SphereGeometry, MeshBasicMaterial } from 'three';

const Sun = () => {
  const sunRef = useRef();

  // Cargar la textura con TextureLoader
  const texture = new TextureLoader().load('/texturas/sun_texture.jpg');

  useFrame((state, delta) => {
    // Ajusta la velocidad de rotación y traslación según tus preferencias
    const rotationSpeed = -0.1;

        // Actualiza la rotación alrededor del sol
        sunRef.current.rotation.y += rotationSpeed * delta;
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Sun;
