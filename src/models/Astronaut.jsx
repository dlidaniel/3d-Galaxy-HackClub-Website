import React, { useEffect, useRef } from 'react'
import AstronautScene from '../assets/3d/astronaut.glb'
import { useAnimations, useGLTF } from '@react-three/drei'

const Astronaut = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(AstronautScene);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (isRotating) {
      actions['floating'].play();
    } else {
      actions['floating'].play();
    }
  }, [actions, isRotating]);
  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
      
    </mesh>
  );
}

export default Astronaut
