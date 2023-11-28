import { useGLTF } from "@react-three/drei";
import skyScene from '../assets/3d/sky.glb';
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
/**
 * 
 * @param {Boolean} isRotating 
 * @returns 
 */
const SkySphere = ({ isRotating, ...props }) => {
  const skyRef = useRef();
  const skySphere = useGLTF(skyScene);
  // const { materials } = useGLTF(skyScene);

  useFrame(({ clock, camera }, delta) => {

    // const scaleX = Math.sin(clock.elapsedTime) * .002 + 2; // Calculate new scale factors
    // const scaleY = Math.cos(clock.elapsedTime) * .002 + 2;
    // skyRef.current.material.map.repeat.set(scaleX, 1);
    // skyRef.current.material.map.needsUpdate = true;
    if (isRotating) {
      skyRef.current.rotation.y += .25 * delta;
    }
  })
  return (
    <mesh ref={skyRef}
      // material={materials["Scene_-_Root"]}
    >
      <primitive object={skySphere.scene} />
    </mesh>
  )
}

export default SkySphere