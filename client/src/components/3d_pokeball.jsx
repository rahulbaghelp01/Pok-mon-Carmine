import { useEffect } from "react";
import { Center, useGLTF } from "@react-three/drei";
import pokeballModel from "../assets/Pokeball_textured.glb?url";

export default function Model() {
  const model = useGLTF(pokeballModel);

  useEffect(() => {
    console.log(model);
  }, [model]);

  return (
    <Center>
      <primitive object={model.scene} scale={0.14} />
    </Center>
  );
}