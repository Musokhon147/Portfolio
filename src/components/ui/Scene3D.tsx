"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function HeroGeometry({ color }: { color: string }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002;
      meshRef.current.rotation.x += 0.001;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshBasicMaterial
          wireframe
          color={color}
          transparent
          opacity={0.12}
        />
      </mesh>
    </Float>
  );
}

export default function Scene3D() {
  const [canRender, setCanRender] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const hasPower = navigator.hardwareConcurrency > 2;
    setCanRender(hasFinePointer && hasPower);

    // Detect theme
    const isLight = document.documentElement.classList.contains("light");
    setTheme(isLight ? "light" : "dark");

    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("light") ? "light" : "dark"
      );
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  if (!canRender) return null;

  const color = theme === "dark" ? "#2563eb" : "#7c3aed";

  return (
    <div className="pointer-events-none absolute inset-0" style={{ zIndex: 1 }}>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <HeroGeometry color={color} />
      </Canvas>
    </div>
  );
}
