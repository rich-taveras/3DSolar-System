//Jupiter.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Jupiter = () => {
  const jupiterRef = useRef();

   // Cargar la textura con TextureLoader
   const texture = new TextureLoader().load('/texturas/jupiter_texture.jpg');

  useFrame((state, delta) => {
    // Ajusta la velocidad de rotación y traslación según tus preferencias
    const rotationSpeed = 0.15;

    // Actualiza la rotación alrededor del sol
    jupiterRef.current.rotation.y += rotationSpeed * delta;

    // Calcula la nueva posición en la órbita circular alrededor del sol
    const angle = jupiterRef.current.rotation.y;
    const distanceFromSun = 78;
    const newX = Math.cos(angle) * distanceFromSun;
    const newZ = Math.sin(angle) * distanceFromSun;

    // Actualiza la posición en la órbita
    jupiterRef.current.position.set(newX, 0, newZ);
  });

  return (
    <mesh ref={jupiterRef} position={[6, 0, 0]}>
      <sphereGeometry args={[8, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Jupiter;