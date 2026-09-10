"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import { Suspense, useEffect } from "react";

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

/**
 * Con `frameloop="demand"` el Canvas solo dibuja cuando algo llama a `invalidate()`.
 * Este driver lo llama a ~30fps mientras `active` sea true, y deja de hacerlo
 * cuando el hero sale de pantalla / la pestaña se oculta / la animación "reposa":
 * ahí el hilo principal queda libre por completo.
 */
function FrameDriver({ active, fps = 30 }: { active: boolean; fps?: number }) {
  const invalidate = useThree((s) => s.invalidate);

  useEffect(() => {
    if (!active) return;
    let raf = 0;
    let last = performance.now();
    const interval = 1000 / fps;

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (now - last >= interval) {
        last = now;
        invalidate();
      }
    };

    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, [active, fps, invalidate]);

  return null;
}

export default function Hero3D({ active }: { active: boolean }) {
  return (
    <Canvas
      frameloop="demand"
      camera={{ position: [0, 0, 5.5], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 3, 5]} intensity={60} color="#8ed1ae" />
      <pointLight position={[-4, -2, -3]} intensity={30} color="#2f80ed" />
      <Suspense fallback={null}>
        <Blob />
      </Suspense>
      <FrameDriver active={active} fps={30} />
    </Canvas>
  );
}
