import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

import birdScene from "../assets/3d/bird.glb";

export function Bird() {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);
  const { actions } = useAnimations(animations, birdRef);

  // Create a variable to track the bird's position and direction
  const [birdPosition, setBirdPosition] = useState({ x: -5, y: 2, z: 1 });
  const [isMovingForward, setIsMovingForward] = useState(true);

  useEffect(() => {
    actions["Take 001"].play();

    return () => {
      Object.values(actions).forEach((action) => action.stop());
    };
  }, []);

  useFrame(({ clock, camera }) => {
    // Update the Y position to simulate bird-like motion
    setBirdPosition((prevPosition) => ({
      ...prevPosition,
      y: Math.sin(clock.elapsedTime) * 0.2 + 2,
    }));

    // Check if the bird reached a certain endpoint
    if (birdPosition.x > camera.position.x + 10) {
      // Change direction to backward and rotate the bird 180 degrees
      setIsMovingForward(false);
      birdRef.current.rotation.y = Math.PI; // Rotate 180 degrees on Y-axis
    } else if (birdPosition.x < camera.position.x - 10) {
      // Change direction to forward and reset the bird's rotation
      setIsMovingForward(true);
      birdRef.current.rotation.y = 0; // Reset rotation
    }

    // Update the X and Z positions based on the direction
    if (isMovingForward) {
      setBirdPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x + 0.01,
        z: prevPosition.z - 0.01,
      }));
    } else {
      setBirdPosition((prevPosition) => ({
        ...prevPosition,
        x: prevPosition.x - 0.01,
        z: prevPosition.z + 0.01,
      }));
    }

    // Update the bird's position
    birdRef.current.position.set(
      birdPosition.x,
      birdPosition.y,
      birdPosition.z
    );
  });

  return (
    <mesh
      ref={birdRef}
      position={[birdPosition.x, birdPosition.y, birdPosition.z]}
      scale={[0.001, 0.001, 0.001]}
    >
      <primitive object={scene} />
    </mesh>
  );
}
