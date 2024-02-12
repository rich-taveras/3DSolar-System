//Mercury.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Mercury = () => {
  const mercuryRef = useRef();

   // Cargar la textura con TextureLoader
   const texture = new TextureLoader().load('/texturas/mercury_texture.jpg');

  useFrame((state, delta) => {
    // Ajusta la velocidad de rotación y traslación según tus preferencias
    const rotationSpeed = 0.08;

    // Actualiza la rotación alrededor del sol
    mercuryRef.current.rotation.y += rotationSpeed * delta;

    // Calcula la nueva posición en la órbita circular alrededor del sol
    const angle = mercuryRef.current.rotation.y;
    const distanceFromSun = 30;
    const newX = Math.cos(angle) * distanceFromSun;
    const newZ = Math.sin(angle) * distanceFromSun;

    // Actualiza la posición en la órbita
    mercuryRef.current.position.set(newX, 0, newZ);
  });

  return (
    <mesh ref={mercuryRef} position={[6, 0, 0]}>
      <sphereGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Mercury;