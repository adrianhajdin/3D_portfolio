import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

import { Island } from "../models";
import { Loader } from "../components";
import { OrbitControls } from "@react-three/drei";

const Home = () => {
  const adjustIslandForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [0.5, 0.5, 0.5];
      screenPosition = [0, 0, -43.4];
    } else {
      screenScale = [0.65, 0.65, 0.65];
      screenPosition = [0, -7, 0];
    }

    return [screenScale, screenPosition];
  };

  const [islandScale, islandPosition] = adjustIslandForScreenSize();

  return (
    <section className='w-screen h-screen'>
      <Canvas
        className='w-screen h-screen'
        camera={{ near: 0.1, far: 1000, position: [20, 20, 20] }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={1.5} />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 5, 10]} intensity={2} />
          <spotLight
            position={[0, 50, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />
          <hemisphereLight
            skyColor='#b1e1ff'
            groundColor='#000000'
            intensity={1}
          />

          <OrbitControls
            enableDamping
            dampingFactor={1}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            enableZoom={false}
          />
          <Island position={islandPosition} scale={islandScale} />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
