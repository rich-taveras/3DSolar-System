import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";

const Moon = () => {
  const moonRef = useRef();

  // Cargar la textura con TextureLoader
  const texture = new TextureLoader().load("/texturas/moon_texture.jpg");

  useFrame((state, delta) => {
    // Ajusta la velocidad de rotación y traslación según tus preferencias
    const rotationSpeed = .1;

    // Actualiza la rotación alrededor de la Tierra
    moonRef.current.rotation.y += rotationSpeed * delta;

    // Obtiene la posición actual de la Tierra en el escenario
    const earthPosition = state.scene.getObjectByName("Earth").position;

    // Calcula la nueva posición en la órbita circular alrededor de la Tierra
    const angle = moonRef.current.rotation.y;
    const distanceFromEarth = 6; // Puedes ajustar la distancia de la Luna a la Tierra
    const newX = earthPosition.x + Math.cos(angle) * distanceFromEarth;
    const newZ = earthPosition.z + Math.sin(angle) * distanceFromEarth;

    // Actualiza la posición en la órbita
    moonRef.current.position.set(newX, 0, newZ);
  });

  return (
    <mesh ref={moonRef} position={[0, 0, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default Moon;
