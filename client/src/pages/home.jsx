import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import { OrbitControls } from "@react-three/drei";
import Model from "../components/3d_pokeball";
import Navbar from "../components/navbar";
import CardBack from "../components/POKEMONCARD-backside";

function Home() {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  return (
    <main className="flex flex-col h-screen overflow-hidden">
      <Navbar />
      <div className="flex-1 min-h-0 flex items-center flex-col justify-center text-3xl text-[var(--white)] font-cinzel gap-5 border border-[var(--gold)]/20">
        <div className="flex flex-col items-center gap-1">
          <p className="font-cinzel text-[var(--gold)] text-4xl tracking-wide">
            Add pokemon to your collection:
          </p>
          <p className="text-[var(--white)]/70 text-lg font-cormorant">
            Discover a new companion add them to your collection
          </p>
        </div>
        {isCardFlipped ? ( 
        <div>
          <CardBack />
        </div>) :(

        <div className="h-[60%] w-[40%] flex flex-col items-center justify-center gap-1">
          <Canvas className="flex-1 w-full" camera={{ position: [0, 0, 3], fov: 50 }}>
            <ambientLight intensity={5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <Suspense fallback={null}>
              <Model />
            </Suspense>
            <OrbitControls enableZoom={false} />
          </Canvas>

          <button className="bg-[var(--gold)] border border-[var(--black)]/60 text-[var(--black)] text-2xl px-8 py-4 rounded-xl font-cinzel hover:brightness-110 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer">
            CATCH POKEMON
          </button>
        </div>
        )}

      </div>
    </main>
  );
}

export default Home;