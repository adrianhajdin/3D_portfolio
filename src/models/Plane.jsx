import { PerspectiveCamera, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

import planeScene from "../assets/3d/plane.glb";

export function Plane() {
  const ref = useRef();
  const plane = useGLTF(planeScene);

  return (
    <group>
      <mesh position={[20, -5, 0]} scale={0.01} rotation={[0, -10, 0]}>
        <primitive ref={ref} object={plane.scene} />
      </mesh>
    </group>
  );
}
