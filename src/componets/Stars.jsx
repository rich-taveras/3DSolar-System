import React, { useRef } from 'react';
import { Group, Points, BufferGeometry, BufferAttribute, PointsMaterial } from 'three';

const Stars = () => {
  const starsRef = useRef();

  // Creamos una geometría de partículas con posiciones aleatorias
  const particles = new Float32Array(5000 * 3);
  for (let i = 0; i < 5000; i++) {
    particles[i * 3] = (Math.random() - 0.5) * 2000; // Posición X
    particles[i * 3 + 1] = (Math.random() - 0.5) * 2000; // Posición Y
    particles[i * 3 + 2] = (Math.random() - 0.5) * 2000; // Posición Z
  }

  // Configuramos la geometría y los materiales para las estrellas
  const geometry = new BufferGeometry();
  geometry.setAttribute('position', new BufferAttribute(particles, 3));
  const material = new PointsMaterial({ color: 0xffffff, size: 0.1 });

  // Creamos el grupo y añadimos las partículas
  const starsGroup = new Group();
  starsGroup.add(new Points(geometry, material));

  return (
    <primitive ref={starsRef} object={starsGroup} />
  );
};

export default Stars;
