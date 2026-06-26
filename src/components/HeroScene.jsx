import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";

function ParticleField() {
  const count = 140;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 3.3 + Math.random() * 1.6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  const pointsRef = useRef();

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.04;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#e879f9"
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  );
}

function Lattice() {
  const outerRef = useRef();
  const innerRef = useRef();
  const groupRef = useRef();

  useFrame((_, delta) => {
    if (outerRef.current) {
      outerRef.current.rotation.x += delta * 0.12;
      outerRef.current.rotation.y += delta * 0.18;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= delta * 0.08;
      innerRef.current.rotation.y -= delta * 0.13;
    }
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#6366f1" wireframe transparent opacity={0.6} />
      </mesh>
      <mesh ref={innerRef} scale={0.82}>
        <icosahedronGeometry args={[1.7, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.35} />
      </mesh>
      <ParticleField />
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6.2], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <Lattice />
    </Canvas>
  );
}
