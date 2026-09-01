import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import gsap from "gsap";


import Model from "../components/3d_pokeball";
import Navbar from "../components/navbar";
import Card from "../components/card"
import { pokemonInfo, savePokemons, getUserData } from "../api/mainPageApi";

import { addPokemon, setPokemons } from "../store/pokemonSlice.js";
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

import { useNavigate } from "react-router-dom";
import { validateToken } from "../api/authPageApi";



function CameraController({ onCameraReady }) {
  const { camera } = useThree();


  useEffect(() => {
    onCameraReady(camera);
  }, [camera, onCameraReady]);

  return null;
}

function Home() {

  const dispatch = useDispatch();

  const [enableRotate, setEnableRotate] = useState(true);
  const [showCards, setShowCards] = useState(false);
  const [pokemonData, setPokemonData] = useState(null);
  const [flippedCards, setFlippedCards] = useState(0);
  const [obtainedCards, setObtainedCards] = useState([]);



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


  const navigate = useNavigate();

  const obj = {
    id: 25,
    name: "pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    types: ["electric"],
    hp: 35,
    attack: 55
  };


  async function handleGameLogic() {

    if (showCards) return;

    setEnableRotate(false);

    const data = await pokemonInfo();
    setPokemonData(data);

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
        duration: 0.3,
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




  const handleCardFlip = (cardRef, hasFlipped, cardData) => {

    if (flippedCards >= 3) return;

    if (hasFlipped.current) {
      return;
    }

    hasFlipped.current = true;

    setFlippedCards((prev) => prev + 1);
    setObtainedCards((prev) => [...prev, cardData]);

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

  const handleClaimRewards = async () => {
    await savePokemons(obtainedCards);

    setShowCards(false);

    const savedPokemon = obtainedCards.filter(
      (pokemon) => pokemon.id
    );

    savedPokemon.forEach((pokemon) => {
      dispatch(addPokemon(pokemon));
    });

    setFlippedCards(0)
  };



  useEffect(() => {

    const initializeUser = async () => {

      const result = await validateToken();

      if (!result.ok) {
        navigate("/signup");
        return;
      }

      const userData = await getUserData();

      dispatch(setUser(userData));

      // dispatch pokemon collection
      dispatch(
        setPokemons(
          userData.pokemon.map((item) => item.pokemon)
        )
      );
    };

    initializeUser();

  }, []);

  useEffect(() => {
    if (showCards && cardRef1.current) {
      gsap.to(cardRef1.current, {
        x: -625,
        y: 0,
        duration: 1
      });
    }

    if (showCards && cardRef2.current) {
      gsap.to(cardRef2.current, {
        x: -375,
        y: 0,
        duration: 1
      });
    }

    if (showCards && cardRef3.current) {
      gsap.to(cardRef3.current, {
        x: -125,
        y: 0,
        duration: 1
      });
    }

    if (showCards && cardRef4.current) {
      gsap.to(cardRef4.current, {
        x: 125,
        y: 0,
        duration: 1
      });
    }

    if (showCards && cardRef5.current) {
      gsap.to(cardRef5.current, {
        x: 375,
        y: 0,
        duration: 1
      });
    }

    if (showCards && cardRef6.current) {
      gsap.to(cardRef6.current, {
        x: 625,
        y: 0,
        duration: 1
      });
    }
  }, [showCards]);


  return (
    <main className="flex flex-col h-screen overflow-x-hidden overflow-y-auto gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8 xl:overflow-hidden">
      <Navbar
        pokemonCount={pokemonData ? pokemonData.length : 0}
        deck={pokemonData ? pokemonData.slice(0, 3) : []}
      />

      <div className={`flex-1 min-h-0 flex items-center flex-col justify-center px-3 sm:px-4 md:px-5 lg:px-6 xl:px-0 text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl text-[var(--white)] font-cinzel ${showCards ? "gap-1" : "gap-3 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-5"}`}>
        <div className="flex max-w-full flex-col items-center gap-1 text-center mt-12 sm:mt-14 md:mt-16 lg:mt-0 xl:mt-0">
          <p className="font-cinzel text-[var(--gold)] text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl tracking-wide">
            Add pokemon to your collection:
          </p>
          {showCards ? (<p className="text-[var(--white)]/70 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg font-cormorant">
            <span className="text-[var(--gold)] font-cinzel font-bold text-xl">{3 - flippedCards}</span>{" "}CHANCES ARE REMAINING
          </p>) :
            (<p className="text-[var(--white)]/70 text-sm sm:text-base md:text-lg lg:text-lg xl:text-lg font-cormorant">
              Discover a new companion add them to your collection
            </p>)
          }
        </div>


        <div className={`h-[80%] w-full flex flex-col items-center xl:h-full xl:min-h-[28rem] justify-center  sm:h-[80%] sm:w-[96%] md:h-[80%] md:w-[88%] lg:h-[80%] lg:w-[65%] 2xl:h-[80%] 2xl:w-[100%] ${showCards ? "m-3 gap-2 sm:m-4 sm:gap-3 md:m-4 lg:m-5 xl:m-5 xl:gap-3" : "gap-1"}`}>
          {showCards ?
            (<div className="relative flex-1 w-full overflow-x-auto overflow-y-hidden 2xl:overflow-x-hidden">
              <div className="relative h-full min-w-[1500px] xl:min-w-0 xl:w-full">


                <Card
                  pokemonsObject={pokemonData[0]}
                  classNameTwo="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  ref={cardRef1}
                  onCardClick={() => handleCardFlip(cardRef1, hasFlipped1, pokemonData[0])}

                />

                <Card
                  pokemonsObject={pokemonData[1]}
                  classNameTwo="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  ref={cardRef2}
                  onCardClick={() => handleCardFlip(cardRef2, hasFlipped2, pokemonData[1])}

                />

                <Card
                  pokemonsObject={pokemonData[2]}
                  classNameTwo="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  ref={cardRef3}
                  onCardClick={() => handleCardFlip(cardRef3, hasFlipped3, pokemonData[2])}

                />
                <Card
                  pokemonsObject={pokemonData[3]}
                  classNameTwo="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  ref={cardRef4}
                  onCardClick={() => {
                    handleCardFlip(cardRef4, hasFlipped4, pokemonData[3])
                  }}

                />

                <Card
                  pokemonsObject={pokemonData[4]}
                  classNameTwo="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  ref={cardRef5}
                  onCardClick={() => handleCardFlip(cardRef5, hasFlipped5, pokemonData[4])}

                />

                <Card
                  pokemonsObject={pokemonData[5]}
                  classNameTwo="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  ref={cardRef6}
                  onCardClick={() => handleCardFlip(cardRef6, hasFlipped6, pokemonData[5])}

                />

              </div>
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
          {showCards ? (
            <button
              onClick={handleClaimRewards}
              className="shrink-0 bg-red-500/60 border border-[var(--black)]/60 text-[var(--white)] text-lg px-5 py-3 rounded-xl font-cinzel hover:brightness-110 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer sm:text-xl sm:px-6 sm:py-3 md:text-xl md:px-7 md:py-4 lg:text-2xl lg:px-8 lg:py-4 xl:text-2xl xl:px-8 xl:py-4">
              Save Pokemons
            </button>)
            :
            (<button
              onClick={handleGameLogic}
              className="shrink-0 bg-[var(--gold)] border border-[var(--black)]/60 text-[var(--black)] text-lg px-5 py-3 rounded-xl font-cinzel hover:brightness-110 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 hover:cursor-pointer sm:text-xl sm:px-6 sm:py-3 md:text-xl md:px-7 md:py-4 lg:text-2xl lg:px-8 lg:py-4 xl:text-2xl xl:px-8 xl:py-4">
              CATCH POKEMON
            </button>)
          }
        </div>


      </div>
    </main>
  );
}

export default Home;