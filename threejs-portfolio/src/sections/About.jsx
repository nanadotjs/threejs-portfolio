import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import { Color } from 'three';
import Button from '../components/Button';

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText('nana@');
        setHasCopied(true);
        setTimeout(() => {
            setHasCopied(false);
        }, 2000)
    }

  return (
    <section className='c-space my-20' id='about'>
        <div className='grid xl:grid-cols-3 xl-grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276px] h-fit object-container' />
                    <div>
                        <p className='grid-headtext'>Hi, I'm Nana</p>
                        <p className='grid-subtext'>With almost 3 years of webdevelopment experience, I have honed my skills in frontend and backend development, currently learning about animated 3D websites</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:w-[276px] h-fit object-contain' />
                    <div>
                        <p className='grid-headtext'>Tech Stack</p>
                        <p className='grid-subtext'>Specialits in Javascript with a focus on React</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 xl:row-span-4'>
                <div className='grid-container'>
                    <div className='rounded-3xl w-full  sm:h-[326px] h-fit flex justify-center items-center'>
                        <Globe 
                            height={326} 
                            width={326} 
                            backgroundColor='rgba(0,0,0,0)' 
                            backgroundImageOpacity={0.5} 
                            showAtmosphere 
                            showGraticules 
                            globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                            bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            labelsData={[{
                                lat: -23, lng: -46,
                                text: "I'm here!",
                                color: 'white',
                                size: 20,
                            }]}
                        />
                    </div>

                    <div>
                        <p className='grid-headtext'>I work remote to a Phoenix based company in the US</p>
                        <p className='grid-subtext'>With remote work available anywhere!</p>
                        <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                    </div>
                </div>
            </div>

            <div className='xl:col-span-2 xl:row-span-3'>
                <div className='grid-container'>
                    <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />

                    <div>
                        <p className='grid-headtext'>My passion for coding</p>
                        <p className='grid-subtext'>I love transforming blank white pages into interative, colorful and functional websites.</p>
                    </div>
                </div>
            </div>

            <div className='xl:col-span-1 xl:row-span-2'>
                <div className='grid-container'>
                    <img src="assets/grid4.png" alt="grid-4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top' />

                    <div className='space-y-2'>
                        <p className='grid-subtext text-center'>Contat Me</p>
                        <div className='copy-container' onClick={handleCopy}>
                            <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" />
                            <p className='lg:text-sm md:text-sm font-medium text-gray_gradient text-white'>nana@</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
