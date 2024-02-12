//Uranus.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Uranus = () => {
  const uranusRef = useRef();

   // Cargar la textura con TextureLoader
   const texture = new TextureLoader().load('/texturas/uranus_texture.jpg');

  useFrame((state, delta) => {
    // Ajusta la velocidad de rotación y traslación según tus preferencias
    const rotationSpeed = 0.1;

    // Actualiza la rotación alrededor del sol
    uranusRef.current.rotation.y += rotationSpeed * delta;

    // Calcula la nueva posición en la órbita circular alrededor del sol
    const angle = uranusRef.current.rotation.y;
    const distanceFromSun = 150;
    const newX = Math.cos(angle) * distanceFromSun;
    const newZ = Math.sin(angle) * distanceFromSun;

    // Actualiza la posición en la órbita
    uranusRef.current.position.set(newX, 0, newZ);
  });

  return (
    <mesh ref={uranusRef} position={[6, 0, 0]}>
      <sphereGeometry args={[4, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Uranus;