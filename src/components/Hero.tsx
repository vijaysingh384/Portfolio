import Profile from '../assets/profile1.png';
import { useState } from 'react';
import ContactModal from './ContactModal';
import CVModal from './CVModal';
function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
    const [cvOpen, setCvOpen] = useState(false);
  return (
    
      <section className="max-w-7xl mx-auto px-4 pt-12 text-center">

        <div style={{ opacity: 1, willChange: "auto", transform: "none" }}>
          
      <div className="relative my-5 md:mt-9">
        <div className="relative">
          {/* Background Circle */}
          <svg
            className="mx-auto"
            width="180"
            height="180"
            viewBox="0 0 148 148"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: "scale(0.95)" }}
          >
            <circle
              cx="74"
              cy="74"
              r="73.5"
              stroke="#D6DADE"
              strokeOpacity="0.5"
            />

            <g filter="url(#filter0_i_0_1)">
              <rect
                x="16"
                y="16"
                width="116"
                height="116"
                rx="58"
                fill="#F7F7F8"
              />
              <rect
                x="16.75"
                y="16.75"
                width="114.5"
                height="114.5"
                rx="57.25"
                stroke="#D6DADE"
                strokeOpacity="0.5"
                strokeWidth="1.5"
              />
            </g>

            <defs>
              <filter
                id="filter0_i_0_1"
                x="16"
                y="14"
                width="116"
                height="118"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="-2" />
                <feGaussianBlur stdDeviation="1" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.647059 0 0 0 0 0.682353 0 0 0 0 0.721569 0 0 0 0.5 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect1_innerShadow_0_1"
                />
              </filter>
            </defs>
          </svg>

          {/* Profile Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={Profile}
              alt="Profile"
              className="h-[150px] w-[150px] cursor-pointer rounded-full transition-opacity hover:opacity-90"
              style={{ opacity: 1, willChange: "auto", transform: "scale(0.997791)" }}
            />
          </div>
        </div>
      </div>
    </div>

       <div className="relative text-balance">
      
      {/* Heading section */}
      <div className="flex-1 h-px bg-gray-300"></div>
      <div className="relative w-full before:absolute before:top-0 before:h-px before:bg-border-primary/50 before:-left-4 before:right-[-1rem] md:before:-left-8 md:before:right-[-2rem] lg:before:inset-x-0 after:absolute after:bottom-0 after:h-px after:bg-border-primary/50 after:-left-4 after:right-[-1rem] md:after:-left-8 md:after:right-[-2rem] lg:after:inset-x-0">
        <h1
          className="mx-auto max-w-2xl text-center text-4xl font-medium leading-tight tracking-tighter text-text-primary md:text-6xl md:leading-[64px]"
          style={{ opacity: 1, willChange: "auto", transform: "none" }}
        >
          Hey, I'm Vijay!
          <br />
          Welcome to my corner of the internet!
        </h1>
      </div>

      {/* Paragraph section */}
      <div className="relative w-full before:absolute before:top-0 before:h-px before:bg-border-primary/50 before:-left-4 before:right-[-1rem] md:before:-left-8 md:before:right-[-2rem] lg:before:inset-x-0 after:absolute after:bottom-0 after:h-px after:bg-border-primary/50 after:-left-4 after:right-[-1rem] md:after:-left-8 md:after:right-[-2rem] lg:after:inset-x-0">
        <div className="mt-4 text-center md:mt-8">
          <div className="flex-1 h-px bg-gray-300"></div>
          <p
            className="leading-8 text-text-secondary font-incognito"
            style={{ opacity: 1, willChange: "auto", transform: "none" }}
          >
            I'm a full-stack developer who enjoys building clean, performant web apps from the ground up.
            I work across the stack — React on the front, Node.js and Express on the back, MongoDB for data —
            and I care deeply about writing code that's readable, scalable, and actually ships.
          </p>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
      </div>

    </div>
    <div className="opacity-100 transform-none">
      <div>
        <ul className="flex items-center flex-wrap gap-x-5 gap-y-4 my-10">

          {/* GitHub */}
          <li>
            <a
              href="https://github.com/vijaysingh384"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-b border-zinc-200 dark:border-zinc-800 group"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-white duration-300"
                fill="currentColor"
              >
                <path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" />
              </svg>
              <span className="ml-2">GitHub</span>
            </a>
          </li>

          
          <li>
            <a
              href="https://leetcode.com/u/vijaysingh384/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-b border-zinc-200 dark:border-zinc-800 group"
            >
             <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-white duration-300"
    >
      <path d="M13.483 0a1.374 1.374 0 00-.973.403L2.402 10.51a3.421 3.421 0 000 4.837l10.108 10.108a1.375 1.375 0 001.946 0l2.857-2.857a1.375 1.375 0 000-1.946l-9.05-9.05 9.05-9.05a1.375 1.375 0 000-1.946L14.456.403A1.374 1.374 0 0013.483 0zM20.25 11.25h-9a1.125 1.125 0 000 2.25h9a1.125 1.125 0 000-2.25z" />
    </svg>
              <span className="ml-2">Leetcode</span>
            </a>
          </li>

          {/* LinkedIn */}
          <li>
            <a
              href="https://linkedin.com/in/vijaysingh384"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center border-b border-zinc-200 dark:border-zinc-800 group"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-zinc-500 group-hover:text-zinc-800 dark:group-hover:text-white duration-300"
                fill="currentColor"
              >
                <path d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zm11.335 9.763h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092v4.71z" />
              </svg>
              <span className="ml-2">LinkedIn</span>
            </a>
          </li>

          
         

        </ul>
     <button
    onClick={() => setCvOpen(true)}
    className="inline-flex items-center gap-2 rounded-full border border-border-primary bg-white px-5 py-2.5 text-sm font-medium text-text-primary shadow-sm hover:border-indigo-400 hover:text-indigo-600 transition-all duration-200"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
    View CV
  </button>
      </div>
    </div>
    <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
       <CVModal isOpen={cvOpen} onClose={() => setCvOpen(false)} />
       
      </section>
    
  );
}

export default Hero;
