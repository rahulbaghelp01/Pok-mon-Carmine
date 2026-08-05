import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/3d_pokeball";

function Home() {
  return (
    <main className="min-h-screen w-screen flex items-center justify-center bg-[var(--black)]">
      <div className="w-full h-[90vh] max-w-[900px]">
        <Canvas
          className="block h-full w-full"
          camera={{ position: [0, 0, 8], fov: 40, near: 0.1, far: 1000 }}
          dpr={[1, 2]}
        >
          <color attach="background" args={["#161311"]} />
          <ambientLight intensity={1.2} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <Suspense fallback={null}>
            <Model />
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={true} />
        </Canvas>
      </div>
    </main>
  );
}

export default Home;