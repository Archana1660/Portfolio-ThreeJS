import { Suspense } from "react"
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import Loader from '../Loader'

export const Earth = () => {
  const earth = useGLTF('./planet/scene.gltf')
  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={ 0} />
  )
}

export const EarthCanvas = () => {
  return (
    <Canvas frameloop="demand"
      camera={{ fov: 45, near: 0.1, far: 200, position: [-4, 4, 6] }} //check the camera value
    >
      <Suspense fallback={<Loader/>}>
        <OrbitControls autoRotate={true} enableZoom={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2}
        />
        <Earth/>
      </Suspense>
      <Preload all/>
    </Canvas>
  )
}