import { Canvas } from "@react-three/fiber";
import { Box, OrthographicCamera, Plane, Stats } from "@react-three/drei";
import React from "react";

export const Game = () => {
  return (
    <Canvas
      shadows={"soft"}
      style={{
        width: "1000px",
        height: "800px",
      }}
    >
      <OrthographicCamera makeDefault position={[0, 0, 10]} zoom={10} />
      <Plane position={[0, 0, -10]} scale={100}>
        <meshBasicMaterial color={"#222222"} />
      </Plane>
    </Canvas>
  );
};
