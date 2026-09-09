"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense } from "react";

function Blob() {
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh scale={2.1}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          attach="material"
          color="#2e9e6e"
          distort={0.45}
          speed={1.6}
          roughness={0.15}
          metalness={0.25}
        />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.5], fov: 40 }}
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 3, 5]} intensity={60} color="#8ed1ae" />
      <pointLight position={[-4, -2, -3]} intensity={30} color="#2f80ed" />
      <Suspense fallback={null}>
        <Blob />
      </Suspense>
    </Canvas>
  );
}
