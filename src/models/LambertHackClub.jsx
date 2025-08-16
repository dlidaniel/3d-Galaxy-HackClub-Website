import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

import LambertScene from '../assets/3d/LambertHackClub.glb'

const LambertHackClub = ({ computerRotationY = 0, position = [0, 0, 0], scale = [1, 1, 1] }) => {
  const ref = useRef()
  const { scene } = useGLTF(LambertScene)


  return (
    <primitive
      ref={ref}
      object={scene}
      position={position}
      scale={scale}
    />
  )
}

export default LambertHackClub
