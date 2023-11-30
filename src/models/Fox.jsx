import { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import foxScene from '../assets/3d/fox.glb';

const Fox = ({ currentAnimation, ...props }) => {
    const group = useRef();
    const { nodes, materials, animations } = useGLTF(foxScene);
    const { actions } = useAnimations(animations, group);
    const sceneScale = 0.5;


    useEffect(() => {
        Object.values(actions).forEach(action => action.stop());
        if(actions[currentAnimation]){
            actions[currentAnimation].play();
        }
    }, [actions, currentAnimation]);

    return (
        <group ref={group} scale={[sceneScale, sceneScale, sceneScale]} {...props} dispose={null}>
            <group name="Sketchfab_Scene">
                <primitive object={nodes.GLTF_created_0_rootJoint} />
                <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_7.skeleton}
                />
                <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_8.skeleton}
                />
                <skinnedMesh
                    name="Object_9"
                    geometry={nodes.Object_9.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_9.skeleton}
                />
                <skinnedMesh
                    name="Object_10"
                    geometry={nodes.Object_10.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_10.skeleton}
                />
                <skinnedMesh
                    name="Object_11"
                    geometry={nodes.Object_11.geometry}
                    material={materials.PaletteMaterial001}
                    skeleton={nodes.Object_11.skeleton}
                />
            </group>
        </group>
    )
}

export default Fox;