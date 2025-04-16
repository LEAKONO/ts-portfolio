import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { TypeAnimation } from "react-type-animation";
import GradientText from "../ui/GradientText";
import MagneticButton from "../ui/MagneticButton";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* 3D Background */}
      <Canvas className="absolute inset-0 -z-10">
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars 
          radius={50} 
          depth={30} 
          count={2000} 
          factor={3} 
          saturation={0} 
          fade 
          speed={1} 
        />
        <OrbitControls 
          enableZoom={false} 
          autoRotate 
          autoRotateSpeed={0.3} 
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6">
          <GradientText 
            text="Emmanuel Leakono" 
            from="from-purple-400" 
            to="to-pink-600"
          />
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
          repeat={Infinity}
        />
        <MagneticButton className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all">
          Explore My Universe
        </MagneticButton>
      </div>
    </section>
  );
}