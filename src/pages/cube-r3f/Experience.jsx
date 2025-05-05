import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience() {
  const cubeRef = useRef();

  return (
    <mesh scale={1.5} ref={cubeRef}>
      <boxGeometry />
      <meshBasicMaterial color="red" />
    </mesh>
  );
}
