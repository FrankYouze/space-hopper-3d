import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState, useRef } from "react";

const Scene = ({ exoplanetsData }) => {
  const [targetPosition, setTargetPosition] = useState([0, 0, 0]);
  const cameraRef = useRef();

  useFrame(() => {
    // Smooth transition to the target position
    cameraRef.current.position.lerp(
      { x: targetPosition[0], y: targetPosition[1], z: targetPosition[2] },
      0.1
    );
    cameraRef.current.lookAt(targetPosition[0], targetPosition[1], targetPosition[2]);
  });

  return (
    <Canvas camera={{ position: [0, 0, 50], fov: 50 }} ref={cameraRef}>
      <OrbitControls />
      <ambientLight intensity={0.5} />

      {exoplanetsData.map((item, index) => {
        const position = [item.x * 1000, item.y * 1000, item.z * 1000];
        return (
          <mesh
            key={index}
            position={position}
            onClick={() => setTargetPosition(position)}
          >
            <sphereGeometry args={[1, 32, 32]} />
            <meshStandardMaterial color={"red"} />
          </mesh>
        );
      })}
    </Canvas>
  );
};

export default Scene;
