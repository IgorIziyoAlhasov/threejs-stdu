import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import Loader from '../components/Loader';

const Home = () => {
  return (
    <section className='w-full h-full relative'>
      {/* <div className="absolute top-28 left-0 right-0 z-20 flex items-center justify-center">
        content goes here
      </div> */}
      <Canvas
        className='w-full h-full bg-transparent'
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense
          fallback={<Loader />}
        >

        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home