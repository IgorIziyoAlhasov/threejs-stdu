import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';
import { CastleFraction } from '../models';
// import Island from '../models/Island';

const Projects = () => {
  const adjustCastleForScreenDimensions = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];;
    let rotation = [0.55, 5.5, 0]
    let fullScale = .37

    window.innerWidth < 768 ?
      screenScale = [fullScale * 0.9, fullScale * 0.9, fullScale * 0.9] :
      screenScale = [fullScale, fullScale, fullScale];

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

          <CastleFraction
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