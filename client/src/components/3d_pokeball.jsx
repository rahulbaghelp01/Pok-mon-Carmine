import { useGLTF, Center } from "@react-three/drei";

import pokeballModel from "../assets/Pokeball_textured_fixed.glb?url";

import { useRef } from "react";

const BUTTON_POS = [-0.150, 0.4, 0.95];

function Model({ onLightReady, onModelReady }) {
  const { scene } = useGLTF(pokeballModel);
  onModelReady(scene);

  const lightRef = useRef(null);


  return (
    <Center>
      <primitive object={scene} scale={1.8} />

      <pointLight
        ref={(light) => {
          lightRef.current = light;
          onLightReady(light);
        }}
        position={BUTTON_POS}
        intensity={0}
        distance={5}
        decay={1}
      />
    </Center>
  );

}

useGLTF.preload(pokeballModel);

export default Model;