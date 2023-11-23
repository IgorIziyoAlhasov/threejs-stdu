import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
// import Island from '../models/Island';
import Castle from '../models/Castle';

const Projects = () => {
  const adjustCastleForScreenDimensions = () => {
    let screenScale = null;
    let screenPosition = [0, -20, -120];
    let rotation = [0.55, 5.5, 0]

    window.innerWidth < 768 ?
      screenScale = [0.9, 0.9, 0.9] :
      screenScale = [1, 1, 1];

    return [screenScale, screenPosition, rotation];
  }
  const [castleScale, castlePosition, castleRotation] = adjustCastleForScreenDimensions();
  return (
    <section className='w-full h-screen relative'>
      {/* <div className="absolute top-28 left-0 right-0 z-20 flex items-center justify-center">
        content goes here
      </div> */}
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense
          fallback={<Loader />}
        >
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Castle
            position={castlePosition}
            scale={castleScale}
            rotation={castleRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default Projects;