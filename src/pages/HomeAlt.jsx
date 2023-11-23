import React, { Suspense, useRef, useEffect } from 'react';
import { Canvas, events } from '@react-three/fiber';
import Loader from '../components/Loader';
import { CastleFraction, Island } from '../models';

const HomeAlt = () => {
  const castleScales = .37;
  const adjustIslandForScreenDimensions = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0]

    window.innerWidth < 768 ?
      screenScale = [0.9, 0.9, 0.9] :
      screenScale = [1, 1, 1];

    return [screenScale, screenPosition, rotation];
  }
  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenDimensions();

  const scrollContainerRef = useRef(null);
  useEffect(() => {
    const handleWheel = (event) => {
      event.preventDefault();
      const { deltaY } = event;

      if (deltaY > 0) {
        console.log('Scrolling down');

        // Perform actions for scrolling down
      } else if (deltaY < 0) {
        console.log('Scrolling up');
        // Perform actions for scrolling up
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

      return () => {
        scrollContainer.removeEventListener('wheel', handleWheel);
      };
    }
  }, []);


  return (
    <section className='w-full h-screen relative'>
      {/* <div className="absolute top-28 left-0 right-0 z-20 flex items-center justify-center">
        content goes here
      </div> */}
      <Canvas
        className='w-full h-screen bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
        ref={scrollContainerRef}
      >
        <Suspense
          fallback={<Loader />}
        >
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />

          <CastleFraction
            position={[0,-6.5,-40]}
            rotation={[0.2, 5.5, 0]}
            scale={[castleScales, castleScales, castleScales]}
          />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
          />
        </Suspense>
      </Canvas>
    </section>
  )
}

export default HomeAlt