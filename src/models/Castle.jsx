import { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import castlefractionScene from '../assets/3d/castle.glb';

const CastleFraction = (props) => {
    const castlefractionRef = useRef();
    const { scene, animations } = useGLTF(castlefractionScene);
    const sceneScale = .37;

    return (
        <mesh {...props} ref={castlefractionRef}>
            <primitive object={scene}/>
        </mesh>
    )
}

export default CastleFraction;