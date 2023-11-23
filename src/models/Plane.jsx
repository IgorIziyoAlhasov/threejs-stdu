import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import planeScene from '../assets/3d/plane.glb';

const Plane = ({isRotating,...props}) => {
    const planeRef = useRef();
    const { scene, animations } = useGLTF(planeScene);
    const sceneScale =1;

    return (
        <mesh {...props}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default Plane;