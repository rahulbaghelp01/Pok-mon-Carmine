import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";


import Model from "../components/3d_pokeball";
import Navbar from "../components/navbar";
import Card from "../components/card"




function CameraController({ onCameraReady }) {
  const { camera } = useThree();


  useEffect(() => {
    onCameraReady(camera);
  }, [camera, onCameraReady]);

  return null;
}

function Home() {

  const [enableRotate, setEnableRotate] = useState(true);
  const [intensity, setIntensity] = useState(0);
  const [showCards, setShowCards] = useState(false);

  const cameraRef = useRef(null);

  const lightRef = useRef(null);
  const modelRef = useRef(null);


  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);
  const cardRef3 = useRef(null);
  const cardRef4 = useRef(null);
  const cardRef5 = useRef(null);
  const cardRef6 = useRef(null);

  // Prevent each card from animating more than once
  const hasFlipped1 = useRef(false);
  const hasFlipped2 = useRef(false);
  const hasFlipped3 = useRef(false);
  const hasFlipped4 = useRef(false);
  const hasFlipped5 = useRef(false);
  const hasFlipped6 = useRef(false);




  const obj = {
    id: 25,
    name: "pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    types: ["electric"],
    hp: 35,
    attack: 55
  };


  function handleGameLogic() {
    setEnableRotate(false);

    const camera = cameraRef.current;
    const light = lightRef.current;
    const model = modelRef.current;

    gsap.timeline()
      // Camera moves + light starts at the SAME TIME
      .to(camera.position, {
        x: -1.803124,
        y: 1.151087,
        z: 2.103269,
        duration: 0.35,
        ease: "power2.out"
      })
      .to(camera.position, {
        x: -0.741165,
        y: 1.407466,
        z: 2.543563,
        duration: 1,
        ease: "power3.out"
      })
      .to(light, {
        intensity: 10,
        duration: 1.35,
        ease: "power2.out"
      }, 0)

      // SHAKE 1
      .to(model.rotation, {
        z: 0.30,
        duration: 0.08,
        repeat: 9,
        yoyo: true,
        ease: "sine.inOut"
      })
      .to({}, { duration: 0.25 })

      // SHAKE 2
      .to(model.rotation, {
        z: 0.30,
        duration: 0.08,
        repeat: 9,
        yoyo: true,
        ease: "sine.inOut"
      })
      .to({}, { duration: 0.25 })
      .to(light, {
        intensity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
       
      .to(light, {
        intensity: 0,
        duration: 0.8,
        ease: "power2.out"
      })
      .to(model.scale, {
        x: 0,
        y: 0,
        z: 0,
        duration: 0.5,
        ease: "power2.in"
      })
      .call(() => {
        setShowCards(true);
      });

  }

  function testCardPosition() {
    gsap.to(cardRef1.current, {
      x: 200,
      y: -100,
      duration: 1
    });
  }


  const handleCardHover = (cardRef, hasFlipped) => {
    if (hasFlipped.current) {
      return;
    }

    hasFlipped.current = true;

    const tl = gsap.timeline();

    tl.to(cardRef.current, {
      z: 20,
      duration: 0.2,
      ease: "power2.out",
    })
      .to(cardRef.current, {
        rotationY: 110,
        duration: 0.65,
        ease: "power3.in",
      })
      .to(cardRef.current, {
        rotationY: 180,
        z: 0,
        duration: 0.75,
        ease: "power3.out",
      });


  };


  useEffect(() => {
    if (showCards) {
      gsap.to(cardRef1.current, {
        x: 200,
        y: -100,
        duration: 1
      });
    }
  }, [showCards]);


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


        <div className={`h-[60%] w-[40%] flex flex-col items-center justify-center ${showCards ? "gap-1" : "gap-1"}`}>
          {showCards ?
            (<div className="relative m-5" >
              <Card
                classNameTwo="absolute"
                ref={cardRef2}
                onMouseEnter={() =>
                  handleCardHover(
                    cardRef2,
                    hasFlipped2
                  )
                }

                pokemonsObject={obj}
              />
              <Card
                className="absolute"
                ref={cardRef2}
                onMouseEnter={() =>
                  handleCardHover(
                    cardRef2,
                    hasFlipped2
                  )
                }

                pokemonsObject={obj}


              />
            </div>)
            : (<Canvas
              className="flex-1 w-full"
              camera={{
                position: [-0.741165, 1.407466, 2.543563],
                fov: 50
              }}
            >
              <CameraController
                onCameraReady={(camera) => {
                  cameraRef.current = camera;
                }}
              />
              <ambientLight intensity={5} />
              <directionalLight position={[5, 5, 5]} intensity={1} />
              <Suspense fallback={null}>

                <Model
                  onLightReady={(light) => {
                    lightRef.current = light;
                  }}
                  onModelReady={(scene) => {
                    modelRef.current = scene;
                  }}
                />

              </Suspense>
              <OrbitControls enableRotate={enableRotate} enableZoom={false} />
            </Canvas>)
          }

          <button
            onClick={handleGameLogic}
            className="bg-[var(--gold)] border border-[var(--black)]/60 text-[var(--black)] text-2xl px-8 py-4 rounded-xl font-cinzel hover:brightness-110 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer">
            CATCH POKEMON
          </button>
        </div>


      </div>
    </main>
  );
}

export default Home;