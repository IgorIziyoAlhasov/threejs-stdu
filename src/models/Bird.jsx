import { useRef, useEffect } from 'react';
import { useAnimations, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import birdScene from '../assets/3d/bird.glb';

const Bird = ({ isRotating, ...props }) => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  const sceneScale = 0.003;

  useEffect(() => {
    actions[`Take 001`].play();
    // if(isRotating){
    //   actions[`Take 001`].play();
    // } else {
    //   actions[`Take 001`].stop();
    // }
  }, [actions, isRotating]);

  useFrame(({ clock, camera }, delta) => {
    // birdRef.current.rotation.y += 0.15 * delta
    //Update bird Y position to simulate birds motion in a sinusiod like pattern
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * .2 + 2

    //Checking if bird reached one of the endpoints relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      //Roate the bird 180 deg and change direction backwards 
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      //Restore direction and angle
      birdRef.current.rotation.y = 0;
    }


    //Update movement according to direction setting propper X,Z coordinates
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += .01;
      birdRef.current.position.z -= .01;
    } else {
      birdRef.current.position.z += .01;
      birdRef.current.position.x -= .01;
    }
  });
  return (
    <mesh
      position={[-5, 2, -2]}
      scale={[sceneScale, sceneScale, sceneScale]}
      ref={birdRef}>
      <primitive object={scene} />
    </mesh>
  )
}

export default Bird;