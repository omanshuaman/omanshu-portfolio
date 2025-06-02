import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import { Leva } from "leva";
function Spaceship() {
  return (
    <>
      <Leva collapsed />
      <Canvas camera={{ position: [4, 2, 5], fov: 75, near: 0.1, far: 100 }}>
        <Experience />
      </Canvas>
    </>
  );
}

export default Spaceship;
