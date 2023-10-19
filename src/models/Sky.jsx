import { useGLTF } from "@react-three/drei";

import skyScene from "../assets/3d/sky.glb";

export function Sky() {
  const sky = useGLTF(skyScene);

  return (
    <mesh>
      <primitive object={sky.scene} />
    </mesh>
  );
}
