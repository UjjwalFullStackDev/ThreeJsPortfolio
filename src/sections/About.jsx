import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    const handleCopy = () => {
        navigator.clipboard.writeText("ujjwal.tyagi90611@gmail.com");

        setHasCopied(true);

        setTimeout(() => {
            setHasCoied(false);
    }, 2000)};

    return (
        <section className='c-space my-20' id='about'>
            <div className='grid xl:grid-cols-3 xl:grid-row-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid1.png" alt="grid-1" className='w-full sm:h-[276] h-fit object-contain ' />
                        <div>
                            <p className='grid-headtext'>Hay, I am Ujjwal</p>
                            <p className='grid-subtext'>With 2 years of experience, I have honed my skills in frontend and backend development, with a focus on 3D animation websites. </p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid2.png" alt="grid-2" className='w-full sm:h-[276px] h-fit object-contain ' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I specialized in JavaScript / Tailwind / BootStrap with a focus on React, Node and Next.js ecosystem</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-4'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0, 0, 0, 0)'
                                bakroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>I work remotely across most timezomes</p>
                            <p className='grid-subtext'>I'm based in India, with remote work available</p>
                            <a href="#contact" className="w-fit">
                            <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src="/assets/grid3.png" alt="grid-3" className='w-full sm:h-[266px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My Passion for Coding</p>
                            <p className='grid-subtext'>I love solve problems and building things through codes. Coding isn't just my proffession - it is my passion.</p>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src="/assets/grid4.png" alt="grid-4" className='w-full sm:h-[126px]sm:h-[276px] h-fit object-contain sm:object-top'/>
                        <div className='space-y-2'>
                            <p className='grid-headtext text-center'>
                                Contact Me
                            </p>
                            <div className='copy-container' onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About