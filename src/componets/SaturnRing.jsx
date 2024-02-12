import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three';

const SaturnRing = () => {
  const ringRef = useRef();

  // Cargar la textura del anillo con TextureLoader
  const texture = new TextureLoader().load('/texturas/saturn_ring_texture.png');

  useFrame((state, delta) => {
    // Ajusta la velocidad de rotación del anillo según tus preferencias
    const rotationSpeed = 0;

    // Actualiza la rotación del anillo alrededor de Saturno
    ringRef.current.rotation.y += rotationSpeed * delta;

    // Ajusta la inclinación del anillo en 45 grados
    ringRef.current.rotation.x = Math.PI / -3; // 45 grados en radianes

   // Obtiene la posición actual de la Tierra en el escenario
   const saturnPosition = state.scene.getObjectByName("Saturn").position;

   // Calcula la nueva posición en la órbita circular alrededor de la Tierra
   const angle = ringRef.current.rotation.y;
   const distanceFromSaturn = 0; // Puedes ajustar la distancia de la Luna a la Tierra
   const newX = saturnPosition.x + Math.cos(angle) * distanceFromSaturn;
   const newZ = saturnPosition.z + Math.sin(angle) * distanceFromSaturn;

     // Actualiza la posición en la órbita
     ringRef.current.position.set(newX, 0, newZ);
    });

  return (
    <mesh ref={ringRef} position={[0, 0, 0]}>
      <ringGeometry args={[8, 11, 50]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
};

export default SaturnRing;
