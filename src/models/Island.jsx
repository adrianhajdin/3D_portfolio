import { a } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";

import islandScene from "../assets/3d/island.glb";

export function Island(props) {
  const { nodes, materials } = useGLTF(islandScene);
  const islandGroup = useRef();

  const { camera } = useThree();
  let isRotating = false;
  const previousCameraRotation = { x: 0, y: 0, z: 0 };

  useFrame(() => {
    const { x, y, z } = camera.rotation;

    // Check if the camera's rotation has changed
    if (
      x !== previousCameraRotation.x ||
      y !== previousCameraRotation.y ||
      z !== previousCameraRotation.z
    ) {
      isRotating = true;
    } else if (isRotating) {
      console.log("Camera rotation stopped");
      isRotating = false;
    }

    // Update the previous rotation for the next frame
    previousCameraRotation.x = x;
    previousCameraRotation.y = y;
    previousCameraRotation.z = z;
  });

  return (
    // {Island 3D model from: https://sketchfab.com/3d-models/foxs-islands-163b68e09fcc47618450150be7785907}
    <a.group ref={islandGroup} {...props}>
      <mesh
        geometry={nodes.polySurface944_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface945_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface946_tree2_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface947_tree1_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface948_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.polySurface949_tree_body_0.geometry}
        material={materials.PaletteMaterial001}
      />
      <mesh
        geometry={nodes.pCube11_rocks1_0.geometry}
        material={materials.PaletteMaterial001}
      />
    </a.group>
  );
}
