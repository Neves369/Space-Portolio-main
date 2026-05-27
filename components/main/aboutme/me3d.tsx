"use client";
import { motion } from "framer-motion";
import { Suspense, useRef } from "react";
import { slideInFromTop } from "@/utils/motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, OrbitControls } from "@react-three/drei";

function Model() {
  const modelRef = useRef<any>(null);

  // Busca o arquivo direto da pasta public
  const { scene } = useGLTF("/assets/images/eu.glb");

  useFrame((_, delta) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += delta * 0.3;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={2} />;
}

export default function Page3D() {
  return (
    <motion.div
      variants={slideInFromTop}
      initial="hidden"
      animate="visible"
      style={{
        width: 650,
        height: 650,
        backgroundImage: "url('/assets/icons/mainIconsDark.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />

        <Suspense fallback={null}>
          <Model />
        </Suspense>

        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />
      </Canvas>
    </motion.div>
  );
}
