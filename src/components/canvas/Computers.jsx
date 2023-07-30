import {Suspense, useEffect, useState} from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';

import Loader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // for screen size of max-width 500 check true or false
    const mediaQuery = window.matchMedia("(max-width:500px)");

//matches: true / false based on if screen is max-width 500px
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
    setIsMobile(event.matches)
    }

//while component mount add the event listener, here to call callback func. and set the state whenever there is change in mediaQuery.
    mediaQuery.addEventListener('change', handleMediaQueryChange)

    return () => {
      // Cleanup function to remove the event listener on component unmount
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
    
  },[])

  return (
    <mesh>
      <hemisphereLight
        intensity={0.15}
        groundColor="black" />
      {/* { It gives the extra glare on the object at particular point} */}
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        // castShadow
        // shadow-mapSize={1024}
      />
      {/* {to get 3D model} */}
      <primitive
        object={computer.scene}
        scale={isMobile? 0.6:0.75}
        position={isMobile? [0,-3.5,-1]:[0, -3.5, -1.5]}
        rotation={[-0.01, -0.2, -0.1]} // rotate (but not to animate) the object in a position
      />
   </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<Loader/>}>
        {/* {If we dont add the orbit control} */}
        <OrbitControls
        // It zoom in and zoom out on the 3d model is not set to false
          enableZoom={false}
          maxPolarAngle={Math.PI/2} //hold vertical moment towards top
          minPolarAngle={Math.PI / 2} //hold vertical moment towards bottom
        />
<Computers/>
      </Suspense>
      <Preload all/>
  </Canvas>
)  
}

export default ComputersCanvas