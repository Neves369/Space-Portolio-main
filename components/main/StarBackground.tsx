"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import React, { useState, useRef, Suspense, useContext } from "react";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";
import ThemeContext from "@/context/theme";

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(5000), { radius: 1.2 })
  );
  const { themed } = useContext(ThemeContext);

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  if (themed === "light") {
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled
          {...props}
        >
          <PointMaterial
            transparent
            color="black"
            size={0.002}
            sizeAttenuation={true}
            dethWrite={false}
          />
        </Points>
      </group>
    );
  }

  if (themed === "dark") {
    return (
      <group rotation={[0, 0, Math.PI / 4]}>
        <Points
          ref={ref}
          positions={sphere}
          stride={3}
          frustumCulled
          {...props}
        >
          <PointMaterial
            transparent
            color="white"
            size={0.002}
            sizeAttenuation={true}
            dethWrite={false}
          />
        </Points>
      </group>
    );
  }
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[10]">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;
