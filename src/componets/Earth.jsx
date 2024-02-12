//Earth.jsx
import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Earth = () => {
  const earthRef = useRef();

  // Cargar la textura con TextureLoader
  const texture = new TextureLoader().load("/texturas/earth_texture.jpg");

  useFrame((state, delta) => {
    // Ajusta la velocidad de rotación y traslación según tus preferencias
    const rotationSpeed = 0.12;

    // Actualiza la rotación alrededor del sol
    earthRef.current.rotation.y += rotationSpeed * delta;

    // Calcula la nueva posición en la órbita circular alrededor del sol
    const angle = earthRef.current.rotation.y;
    const distanceFromSun = 55;
    const newX = Math.cos(angle) * distanceFromSun;
    const newZ = Math.sin(angle) * distanceFromSun;

    // Actualiza la posición en la órbita
    earthRef.current.position.set(newX, 0, newZ);
  });

  return (
    <mesh ref={earthRef} position={[9, 0, 0]} name="Earth">
      <sphereGeometry args={[4, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Earth;
