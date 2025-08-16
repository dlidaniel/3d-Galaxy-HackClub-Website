import { Suspense, useState } from 'react'
import { Canvas} from '@react-three/fiber'
import Loader from '../components/Loader'
import Computer from '../models/Computer'
import Astronaut from '../models/Astronaut'
import Asteroid from '../models/Asteroid'
import { Environment } from '@react-three/drei'
import { EffectComposer, Bloom } from '@react-three/postprocessing'
import LambertHackClub from '../models/LambertHackClub'
import HomeInfo from '../components/Homeinfo'
import Galaxy from '../components/Galaxy';

<Environment preset="city" />


const Home = () => {
  const [isRotating, setIsRotating] = useState(false)
  const [currentStage, setCurrentStage] = useState(1);
  const adjustComputerForScreenSize = () => {
    let screenScale = [1.5,1.5,1.5]; 
    let screenPosition = [0, 0, 0];
    let rotation = [0.1,0,0]

    if (window.innerWidth < 768) {
      screenScale = [0.34, 0.34, 0.34];
      screenPosition = [0, -1.35, 0];
    } else {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, -1.5, 0];
    }

    return [screenScale, screenPosition, rotation];
  }
  
  const adjustAstronautForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.35, 0.35, 0.35];
      screenPosition = [0, -0.5, 0];
    } else {
      screenScale = [0.2, 0.2, 0.2];
      screenPosition = [0, -0.75, 3];
    }

    return [screenScale, screenPosition];
  }
  const [ComputerScale, ComputerPosition, ComputerRotation] = adjustComputerForScreenSize();
  const [AstronautScale, AstronautPosition] = adjustAstronautForScreenSize();
  return (
    <section className="w-full h-screen relative"> 
      <div className="absolute top-[12rem] left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>

      <div className="fixed top-0 left-0 w-full h-full z-0 bg-black">
        <Galaxy mouseRepulsion={true}
            mouseInteraction={true}
            density={1.5}
            glowIntensity={0.5}
            saturation={0.8}
            hueShift={240} />
      </div>

      <Canvas 
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera = {{near: 0.1, far: 1000}}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight intensity={1} position={[5, 5, 5]} />
          <ambientLight intensity={0.5}/>
          <pointLight intensity={0.8} position={[-5, 5, 5]} />
          <mesh position={[0, -.25, 3]}>
            <sphereGeometry args={[0.6, 32, 32]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.2} />
          </mesh>
          <spotLight />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000"
          intensity={1}/>
          <Asteroid />
          <LambertHackClub
          position={[-4, -0.175, 0]}
          scale={[1, 1, 1]}
          />
          <Computer 
            position={ComputerPosition}
            scale={ComputerScale}
            rotation={ComputerRotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
          />
          <Astronaut
            isRotating={isRotating}
            scale={AstronautScale}
            position={AstronautPosition}
            rotation ={[0,20,0]}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home
