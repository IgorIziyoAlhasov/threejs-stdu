import React, { Suspense, useRef, useEffect, useState } from 'react';
import { Canvas, events } from '@react-three/fiber';
import Loader from '../components/Loader';
import { Island, SkySphere, Bird, Plane } from '../models';
import HomeInfo from '../components/HomeInfo';

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);

  const adjustIslandForScreenDimensions = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    window.innerWidth < 768
      ? (screenScale = [0.9, 0.9, 0.9])
      : (screenScale = [1, 1, 1]);

    return [screenScale, screenPosition, rotation];
  };

  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenDimensions();

  const adjustPlaneForScreenDimensions = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0, 20, 0];

    window.innerWidth < 768
      ? ((screenScale = [1.5, 1.5, 1.5]), (screenPosition = [0, -1.5, 0]))
      : ((screenScale = [2, 2, 2]), (screenPosition = [0, -4, -4]));

    return [screenScale, screenPosition, rotation];
  };
  const [planedScale, planePosition, planeRotation] =
    adjustPlaneForScreenDimensions();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-20 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />

          <Bird
            isRotating={isRotating}
          />

          <SkySphere
            isRotating={isRotating}
          />

          <Island
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            setCurrentStage={setCurrentStage}
            position={islandPosition}
            rotation={[0.1, 4.7077, 0]}
            scale={islandScale}
          />

          <Plane
            position={planePosition}
            scale={planedScale}
            rotation={planeRotation}
            isRotating={isRotating}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
