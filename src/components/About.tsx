// import Profile from '../assets/profile1.png';
import { useState } from 'react';
import ContactModal from './ContactModal';
import call from "../assets/designarena_image_2lfkyw7j.jpg";

function About() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {/* About Header */}
      <section>
        <div className="space-y-6 text-center mt-10">
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-md font-medium text-violet-600">About</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <h2 className="mx-auto max-w-lg text-3xl md:text-4xl  font-semibold">
            Here's what sets me apart and makes me unique
          </h2>
        </div>
      </section>

      <div className="flex-1 h-px bg-gray-300"></div>

      {/* Cards Grid */}
      <div className="px-4 md:px-8 lg:px-16 mt-20">
        <div className="flex-1 h-px bg-gray-300"></div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">

          {/* Book a call card */}
          <div className="col-span-1 md:col-span-5 lg:col-span-5">
            <button onClick={() => setModalOpen(true)} className="block w-full text-left">
              <div className="group relative flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white overflow-hidden h-[275px] md:h-[304px] lg:h-[220px]">
                {/* Hover Icon */}
                <div className="absolute bottom-4 right-4 z-[999] flex h-9 w-9 rotate-6 items-center justify-center rounded-full bg-indigo-200 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-[-8px] group-hover:rotate-0 group-hover:opacity-100">
                  <svg className="h-6 w-6 text-indigo-600" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.25 15.25V6.75H8.75" />
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7L6.75 17.25" />
                  </svg>
                </div>
                {/* Gradient Hover Effect */}
                <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100" />
                {/* Content */}
                <div className="group flex h-full">
                  <div className="text-balance">
                    <h2 className="mb-4 text-base font-medium">Book a call with me</h2>
                    <p className="mb-2 text-text-secondary md:pr-4">
                      <br />I'd love to chat even if there's no agenda!
                    </p>
                  </div>
                  <div className="relative">
                    <div className="inline-block text-center">
                      <div className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 ease-out group-hover:border-indigo-400" style={{ width: "188px", height: "278px" }}>
                        <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0]" style={{ boxShadow: "rgba(165, 174, 184, 0.32) 0px 2px 1.5px 0px inset" }} />
                      </div>
                    </div>
                    <img src={call} alt="A headshot" className="absolute -top-1 left-0 h-[270px] w-[180px] rotate-[8deg] rounded-lg object-cover shadow transition-all duration-500 group-hover:rotate-[4deg] group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Skills card */}
          <div className="md:col-span-5 md:row-start-1 lg:col-span-7">
            <a href="/skills" className="block">
              <div className="group relative flex flex-col rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white overflow-hidden md:h-[304px] lg:h-[270px]">
                <div className="pointer-events-none absolute inset-0 z-30 bg-gradient-to-tl from-indigo-400/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="absolute inset-y-0 left-0 z-20 w-1/5 bg-gradient-to-r from-bg-primary to-transparent group-hover:from-white"></div>
                <div className="absolute inset-y-0 right-0 z-20 w-1/5 bg-gradient-to-l from-bg-primary to-transparent group-hover:from-white"></div>
                <div className="z-20 text-center">
                  <h2 className="text-base font-medium">Tech Stack</h2>
                  <p className="mt-1 text-text-secondary">Check out my Skills around the web.</p>
                </div>
                <div className="mt-10 flex items-center justify-center gap-3 md:mt-12">
                  {[
                    { src: "https://cdn-icons-png.flaticon.com/128/8637/8637101.png", size: "w-[70px] h-[70px]" },
                    { src: "https://cdn-icons-png.flaticon.com/128/226/226777.png", size: "w-[90px] h-[90px]" },
                    { src: "https://cdn-icons-png.flaticon.com/128/919/919853.png", size: "w-[110px] h-[110px]" },
                    { src: "https://cdn-icons-png.flaticon.com/128/1183/1183672.png", size: "w-[130px] h-[130px]" },
                    { src: "https://cdn-icons-png.flaticon.com/128/4248/4248443.png", size: "w-[110px] h-[110px]" },
                    { src: "https://cdn-icons-png.flaticon.com/128/5968/5968292.png", size: "w-[90px] h-[90px]" },
                    { src: "https://cdn-icons-png.flaticon.com/128/919/919825.png", size: "w-[70px] h-[70px]" },
                  ].map((icon, i) => (
                    <div key={i} className="inline-block text-center">
                      <div className={`${icon.size} rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:border-indigo-400 group-hover:-translate-y-3`}>
                        <div className="grid h-full place-items-center rounded-xl border-2 border-[#A5AEB81F]/10 bg-[#EDEEF0] shadow-inner">
                          <img src={icon.src} className="h-10 w-10" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>

      {/* GitHub Contribution Graph */}
      <div className="px-4 md:px-8 lg:px-16 mt-8">
        <div className="rounded-2xl border border-border-primary bg-bg-primary p-6 hover:bg-white transition-colors duration-300">
          <h2 className="text-base font-medium mb-1">GitHub Contributions</h2>
          <p className="text-sm text-text-secondary mb-4">My coding activity over the past year</p>
          <div className="overflow-x-auto">
            <img src="https://ghchart.rshah.org/6366f1/vijaysingh384" alt="GitHub contribution graph" className="w-full min-w-[600px]" />
          </div>
        </div>
      </div>

      {/* Projects */}
      <div>
        <div>
          <div className="flex-1 h-px bg-gray-300"></div>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-md font-medium text-violet-600">Projects</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>
          <p className="max-w-3xl text-base dark:text-zinc-400 text-zinc-600 leading-relaxed px-15 mt-10">
            A selection of projects I've built that reflect my approach to clean code, thoughtful UI, and real-world problem solving.
            Each one pushed me to learn something new — from architecture decisions to pixel-level design details.
          </p>
        </div>

        <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12 px-10 mt-10">
          {[
            {
              title: "Nike Clone",
              desc: "A pixel-perfect e-commerce storefront built with React. Features product listings, dynamic cart, and a fully responsive layout that mirrors the Nike shopping experience.",
              img: "https://cdn-icons-png.flaticon.com/128/732/732229.png",
              href: "https://nike-clone-xvfv.vercel.app/"
            },
            {
              title: "LocalCart",
              desc: "A full-featured online store with product management, cart functionality, and a clean checkout flow — built to simulate a real-world retail experience.",
              img: "https://cdn-icons-png.flaticon.com/128/1356/1356596.png",
              href: "https://apni-dukan-k7e4.vercel.app/"
            },
            {
              title: "Chat App",
              desc: "Developed a real-time chat application that enables users to communicate instantly through one-to-one messaging in a secure and responsive environment.",
              img: "https://cdn-icons-png.flaticon.com/128/4096/4096358.png",
              href: "https://github.com/vijaysingh384"
            },
          ].map((project, i) => (
            <a key={i} href={project.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-x-4 dark:bg-primary-bg bg-zinc-50 border border-transparent dark:hover:border-zinc-700 hover:border-zinc-200 p-4 rounded-lg transition-colors duration-150">
              <img src={project.img} alt={project.title} width={60} height={60} loading="lazy" className="dark:bg-zinc-800 bg-zinc-100 rounded-md p-2 object-contain shrink-0" />
              <div>
                <h2 className="text-lg tracking-wide mb-1">{project.title}</h2>
                <p className="text-sm dark:text-zinc-400 text-zinc-600">{project.desc}</p>
              </div>
            </a>
          ))}
        </section>
      </div>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

export default About;
