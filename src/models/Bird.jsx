import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import birdScene from '../assets/3d/bird.glb';

const Bird = () => {
  const { scene, animations } = useGLTF(birdScene);
  const sceneScale = 0.003;
  return (
    <mesh position={[-5,2,-2]} scale={[sceneScale,sceneScale,sceneScale]}>
      <primitive object={scene}/>
    </mesh>
  )
}

export default Bird;