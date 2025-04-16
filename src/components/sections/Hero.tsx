import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* 3D Background */}
      <Canvas className="absolute inset-0 z-0">
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Emmanuel Leakono
          </span>
        </h1>
        <TypeAnimation
          sequence={[
            "Full-Stack Developer",
            1000,
            "React/TypeScript Expert",
            1000,
            "Backend Wizard",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="text-2xl md:text-4xl text-gray-300 mb-8"
        />
        <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-purple-500/50 transition-all animate-float">
          Explore My Universe
        </button>
      </div>
    </section>
  );
}