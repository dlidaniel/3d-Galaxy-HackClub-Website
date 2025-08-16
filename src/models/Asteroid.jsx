import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import asteroidScene from "../assets/3d/Asteroid.glb";

export default function AsteroidField({ center = [0, 0, 0] }) {
  const { scene } = useGLTF(asteroidScene);

  const maxAsteroids = 6;
  const refs = [useRef(), useRef(), useRef(), useRef(), useRef(), useRef()];

  const [asteroidCount] = useState(() => Math.floor(Math.random() * 4) + 3);

  const [asteroids] = useState(() =>
    Array.from({ length: asteroidCount }).map(() => ({
      radius: Math.random() * 4 + 2.5,
      speed: Math.random() * 0.02 + 0.005,
      scale: [Math.random() * 0.4 + 0.3, Math.random() * 0.4 + 0.3, Math.random() * 0.4 + 0.3],
      angle: Math.random() * Math.PI * 2,
      yOffset: Math.random() * 1 - 0.5,
    }))
  );

  useFrame(() => {
    for (let i = 0; i < asteroidCount; i++) {
      const ref = refs[i];
      if (!ref.current) continue;
      const a = asteroids[i];

      a.angle += a.speed;

      ref.current.position.x = center[0] + a.radius * Math.cos(a.angle);
      ref.current.position.z = center[2] + a.radius * Math.sin(a.angle);
      ref.current.position.y = center[1] + a.yOffset + Math.sin(a.angle * 2) * 0.5;

      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <>
      {refs.slice(0, asteroidCount).map((ref, i) => (
        <primitive
          key={i}
          ref={ref}
          object={scene.clone()} 
          scale={asteroids[i].scale}
        />
      ))}
    </>
  );
}
