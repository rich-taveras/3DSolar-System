//Mars.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Mars = () => {
  const marsRef = useRef();

     // Cargar la textura con TextureLoader
     const texture = new TextureLoader().load('/texturas/mars_texture.jpg');

  useFrame((state, delta) => {
    // Ajusta la velocidad de rotación y traslación según tus preferencias
    const rotationSpeed = 0.05;

    // Actualiza la rotación alrededor del sol
    marsRef.current.rotation.y += rotationSpeed * delta;

    // Calcula la nueva posición en la órbita circular alrededor del sol
    const angle = marsRef.current.rotation.y;
    const distanceFromSun = 67;
    const newX = Math.cos(angle) * distanceFromSun;
    const newZ = Math.sin(angle) * distanceFromSun;

    // Actualiza la posición en la órbita
    marsRef.current.position.set(newX, 0, newZ);
  });

  return (
    <mesh ref={marsRef} position={[6, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Mars;
