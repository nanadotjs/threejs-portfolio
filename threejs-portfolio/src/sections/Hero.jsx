import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { PerspectiveCamera, Ring } from '@react-three/drei';
import CanvasLoader from "../components/CanvasLoader";
import {HackerRoom} from "../components/hackerRoom";
import { Leva, useControls } from "leva";
import { useMediaQuery } from "react-responsive";
import { calculateSizes } from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";

const Hero = () => {

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    //Calls funtion in index.js file and passes params to there
    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    // const x = useControls('HackerRoom', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },

    //     rotationX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10
    //     },

    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10,
    //     }
    // })

  return (
    <section className="min-h-screen border-2 border-blue-500 flex flex-col relative">
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className="sm:text-3xl text-2xl font-medium text-white text-center font-generalsans">
                Hi, I am Nana <span className="waving-hand">👋</span>
            </p>
            <p className="hero_tag text-gray_gradient">Building Ideas into Pages</p>
        </div>

        <div className="w-full h-full absolute inset-0">
            {/* <Leva /> -> manual components to adjust */}
            {/* Space for creating 3D components, inside every scene there must have light, perspective and the element */}
            <Canvas className="w-full h-full">
                <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                    <HeroCamera isMobile={isMobile}>
                        <HackerRoom 
                            position={[0.1, -7, 1.9]}
                            rotation={[0.35, -3.2, 0]}
                            scale={sizes.deskScale}
                            />
                    </HeroCamera>
                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition} />
                            <Ring position={sizes.ringPosition} />
                        </group>
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 10]} intensity={0.5} />
                </Suspense>
            </Canvas>
        </div>
        <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
            <a href="#about" className="w-fit">
                <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
            </a>

        </div>
    </section>
  )
}

export default Hero
