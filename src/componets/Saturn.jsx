import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';
import SaturnRing from './SaturnRing'; // Asegúrate de que la ruta sea correcta

const Saturn = () => {
  const saturnRef = useRef();

  // Cargar la textura con TextureLoader
  const texture = new TextureLoader().load('/texturas/saturn_texture.jpg');

  useFrame((state, delta) => {
    // Ajusta la velocidad de rotación y traslación según tus preferencias
    const rotationSpeed = .05;

    // Actualiza la rotación alrededor del sol
    saturnRef.current.rotation.y += rotationSpeed * delta;

    // Calcula la nueva posición en la órbita circular alrededor del sol
    const angle = saturnRef.current.rotation.y;
    const distanceFromSun = 98;
    const newX = Math.cos(angle) * distanceFromSun;
    const newZ = Math.sin(angle) * distanceFromSun;

    // Actualiza la posición en la órbita
    saturnRef.current.position.set(newX, 0, newZ);
  });

  return (
    <>
      <mesh ref={saturnRef} position={[6, 0, 0]} name="Saturn">
        <sphereGeometry args={[6, 32, 32]} />
        <meshStandardMaterial map={texture} />
      </mesh>
      <SaturnRing />
    </>
  );
};

export default Saturn;
