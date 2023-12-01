import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei'
import PropTypes from "prop-types"
import Loader from '../Loader'

export const Ball = ({imgUrl}) => {
  const [decal] = useTexture([imgUrl])
  return (
    //Float is to hover the 3D object
    <Float speed={.75} rotationIntensity={1} floatIntensity={2}>
      {/*ambientLight is for the light that is equally spread across the scene  */}
      <ambientLight intensity={0.25} /> 
      {/**light comes from a specific direction and fall on the object */}
      <directionalLight position={[0, 0, 0.25]} />
      <mesh scale={2.75}>
        {/** below component is a 3D model */}
        <icosahedronGeometry args={[1, 1]} /> 
        {/**add appearance's property */}
        {/*this is the 3D geometrical ball */}
        <meshStandardMaterial
          color="#fff8eb"
        />
        {/*Decal is for the model texture */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal} />
      </mesh>

    </Float>
  )
}

Ball.propTypes = {
  imgUrl:PropTypes.string
}

export const BallCanvas = ({icon}) => {
  return <Canvas frameloop='demand'>
    <Suspense fallback={<Loader/>}>
      <OrbitControls enableZoom={false} />
      <Ball imgUrl={icon} />
    </Suspense>
    <Preload all/>
  </Canvas>
}

BallCanvas.propTypes = {
icon:PropTypes.string
}
