import { useGLTF } from "@react-three/drei";
import skyScene from '../assets/3d/sky.glb';

const SkySphere = () => {
    const skySphere = useGLTF(skyScene);
  return (
    <mesh>
        <primitive object={skySphere.scene} />
    </mesh>
  )
}

export default SkySphere