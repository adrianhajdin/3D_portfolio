import React from 'react'
import { projects } from "../constants";
import { ContainerScroll } from '../components/ui/container-scroll-animation';
import { ParallaxScroll } from '../components/ui/parallax-scroll';

function Projectsb() {
  return (
    <main className='max-container'>
      <div className='flex flex-col overflow-hidden'>
        <ContainerScroll
          users={projects}
          titleComponent={
            <>
              <h1 className='head-text relative z-30'>
                My{" "}
                <span className='blue-gradient_text drop-shadow font-semibold'>
                  Projects
                </span>
              </h1>
              <p className='text-slate-500 mt-2 leading-relaxed relative z-30'>
                I've embarked on numerous projects throughout the years, but these are
                the ones I hold closest to my heart. Many of them are open-source, so if
                you come across something that piques your interest, feel free to
                explore the codebase and contribute your ideas for further enhancements.
                Your collaboration is highly valued!
              </p>
            </>
          }
        />
      </div>
      <div className="p-10">
        <ParallaxScroll images={projects} />
      </div>
    </main>
  );
}

export default Projectsb