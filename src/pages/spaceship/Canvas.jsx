import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
function Spaceship() {
  return (
    <>
      <Canvas camera={{ position: [4, 2, 5], fov: 75, near: 0.1, far: 100 }}>
        <Experience />
      </Canvas>
    </>
  );
}

export default Spaceship;
