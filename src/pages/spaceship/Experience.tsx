import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useControls } from "leva";
import { Suspense } from "react";
import { RepeatWrapping, TextureLoader } from "three";

export default function Experience() {
  const floorColorTexture = useLoader(
    TextureLoader,
    "./textures/sandy_gravel_02_1k/sandy_gravel_02_diff_1k.jpg"
  );
  floorColorTexture.repeat.set(4, 4);
  floorColorTexture.wrapS = RepeatWrapping;
  floorColorTexture.wrapT = RepeatWrapping;

  const floorARMTexture = useLoader(
    TextureLoader,
    "./textures/sandy_gravel_02_1k/sandy_gravel_02_arm_1k.jpg"
  );
  floorARMTexture.repeat.set(4, 4);
  floorARMTexture.wrapS = RepeatWrapping;
  floorARMTexture.wrapT = RepeatWrapping;

  const floorNormalTexture = useLoader(
    TextureLoader,
    "./textures/sandy_gravel_02_1k/sandy_gravel_02_nor_gl_1k.png"
  );
  floorNormalTexture.repeat.set(4, 4);
  floorNormalTexture.wrapS = RepeatWrapping;
  floorNormalTexture.wrapT = RepeatWrapping;

  const floorDisplacementTexture = useLoader(
    TextureLoader,
    "./textures/sandy_gravel_02_1k/sandy_gravel_02_disp_1k.jpg"
  );
  floorDisplacementTexture.repeat.set(4, 4);
  floorDisplacementTexture.wrapS = RepeatWrapping;
  floorDisplacementTexture.wrapT = RepeatWrapping;
  const { displacementBias, displacementScale } = useControls("floor", {
    displacementBias: {
      value: -0.2,
      min: -1,
      max: 1,
      step: 0.01,
    },
    displacementScale: {
      value: 0.3,
      min: 0,
      max: 1,
      step: 0.01,
    },
  });
  return (
    <>
      <color attach={"background"} args={["#262837"]} />
      <PerspectiveCamera />
      <Environment preset="warehouse" />
      <OrbitControls makeDefault maxPolarAngle={Math.PI} />
      <Suspense fallback={null}>
        <mesh receiveShadow rotation={[-Math.PI * 0.5, 0, 0]}>
          <planeGeometry args={[20, 20, 100, 100]} />
          <meshStandardMaterial
            map={floorColorTexture}
            aoMap={floorARMTexture}
            roughnessMap={floorARMTexture}
            metalnessMap={floorARMTexture}
            normalMap={floorNormalTexture}
            displacementMap={floorDisplacementTexture}
            displacementScale={displacementScale}
            displacementBias={displacementBias}
          />
        </mesh>
        <mesh receiveShadow rotation={[-Math.PI * 0.5, 0, 0]}>
          <sphereGeometry args={[1, 32, 32]} />
          <meshStandardMaterial />
        </mesh>
      </Suspense>
    </>
  );
}
