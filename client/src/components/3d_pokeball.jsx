import { useGLTF, Center } from "@react-three/drei";
import pokeballModel from "../assets/Pokeball_textured_fixed.glb?url";

export default function Model() {
  const { scene } = useGLTF(pokeballModel);

  return (
    <Center>
      <primitive object={scene} scale={1.8} />
    </Center>
  );
}

useGLTF.preload(pokeballModel);