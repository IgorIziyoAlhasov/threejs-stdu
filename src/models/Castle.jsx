import { useRef, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import castleObject from '../assets/3d/castle.glb';
import { a } from '@react-spring/three';

const Castle = (props) => {
    const castleRef = useRef();
    const { nodes, materials } = useGLTF(castleObject);
    return (
        <a.group {...props} ref={castleRef}>
            <mesh
                geometry={nodes.imagetostl_mesh0.geometry}
                material={materials.mat0}
            />
        </a.group>
    );
}

export default Castle
