import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef();
  useFrame((state, deltaTime, frame) => {
    // state.camera.position.x = Math.sin(state.clock.elapsedTime) * 1;
    // console.log(Math.sin(state.clock.elapsedTime));
    state.camera.position.z = Math.cos(state.clock.elapsedTime) * 4;
    // console.log(state.clock.elapsedTime);
  });
  return (
    <mesh scale={1.5} ref={cubeRef}>
      <boxGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}
