import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

import planeScene from "../assets/3d/plane.glb";

export function Plane() {
  const ref = useRef();
  const plane = useGLTF(planeScene);

  return (
    <mesh position={[20, -5, 10]} scale={0.01} rotation={[-0.5, -5, 0.5]}>
      <primitive ref={ref} object={plane.scene} />
    </mesh>
  );
}
