import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const Venus = () => {
  const venusRef = useRef();

  // Cargar la textura con TextureLoader
  const texture = new TextureLoader().load('/texturas/venus_texture.jpg');

  useFrame((state, delta) => {
    // Ajusta la velocidad de rotación y traslación según tus preferencias
    const rotationSpeed = 0.35;

    // Actualiza la rotación alrededor del sol
    venusRef.current.rotation.y += rotationSpeed * delta;

    // Calcula la nueva posición en la órbita circular alrededor del sol
    const angle = venusRef.current.rotation.y;
    const distanceFromSun = 10;
    const newX = Math.cos(angle) * distanceFromSun;
    const newZ = Math.sin(angle) * distanceFromSun;

    // Actualiza la posición en la órbita
    venusRef.current.position.set(newX, 0, newZ);
  });

  return (
    <mesh ref={venusRef} position={[6, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Venus;
