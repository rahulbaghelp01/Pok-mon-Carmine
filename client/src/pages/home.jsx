import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/3d_pokeball";
import Navbar from "../components/navbar";

function Home() {
  return (
    <main className="flex flex-col h-screen overflow-hidden">
  <Navbar />
  <div className="flex-1 min-h-0 flex items-center justify-center">
    <div className="h-[60%] w-[40%]">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Suspense fallback={null}>
          <Model />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  </div>
</main>
  );
}

export default Home;