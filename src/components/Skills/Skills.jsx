// src/components/Skills/Skills.jsx
import React, { useState } from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null); // supports tap-to-flip on mobile

  return (
    <section
      id="skills"
      className="py-24 px-[8vw] md:px-[7vw] lg:px-[15vw] font-sans bg-skills-gradient clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-14">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-wide drop-shadow-lg">
         SKILLS
        </h2>
        <div className="w-28 h-1 bg-gradient-to-r from-[#8245ec] to-[#3b82f6] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
          A showcase of my technical skills and expertise 
        </p>
      </div>

      {/* Flip Card Grid */}
      <div className="flex flex-wrap gap-8 justify-center">
        {SkillsInfo.map((category, idx) => {
          const isActive = hovered === idx || clicked === idx;
          const isDimmed =
            (hovered !== null || clicked !== null) && !isActive;

          return (
            <div
              key={category.title}
              className={[
                "card group relative w-full sm:w-[45%] lg:w-[40%] xl:w-[30%] h-72 md:h-80",
                "perspective transition-transform duration-500 transform-gpu",
                isActive ? "scale-105 z-10" : isDimmed ? "scale-95 opacity-70" : "scale-100",
              ].join(" ")}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => setClicked(clicked === idx ? null : idx)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setClicked(clicked === idx ? null : idx);
                }
              }}
              /* add flip state as class */
              data-active={isActive ? "true" : "false"}
            >
              {/* Inner that actually flips */}
              <div className="flip-card w-full h-full">
                {/* FRONT */}
                <div className="card-face front flex items-center justify-center bg-gray-900/80 border border-gray-700 rounded-2xl shadow-lg backdrop-blur-md">
                  <h3 className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8245ec] to-[#3b82f6]">
                    {category.title}
                  </h3>
                </div>

                {/* BACK */}
                <div className="card-face back bg-gray-900/90 border border-[#8245ec] rounded-2xl shadow-xl px-6 py-6 flex flex-col justify-center items-center">
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
                    {category.skills.map((skill, i) => (
                      <div
                        key={skill.name}
                        className="flex flex-col items-center justify-center bg-gray-800/60 border border-gray-700 rounded-xl py-3 px-3 text-center backdrop-blur-sm 
                                   hover:border-[#8245ec] hover:scale-105 transition-transform duration-300 ease-in-out"
                        style={{
                          animation: `fadeInUp 0.4s ease ${i * 0.06}s forwards`,
                          opacity: 0,
                        }}
                      >
                        <img
                          src={skill.logo}
                          alt={`${skill.name} logo`}
                          className="w-8 h-8 sm:w-10 sm:h-10 mb-1"
                        />
                        <span className="text-sm sm:text-base font-medium text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Needed CSS for 3D flip */}
      <style>{`
        .perspective { perspective: 1200px; }
        .flip-card {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 700ms cubic-bezier(.2,.85,.25,1);
        }
        /* Hover flip (desktop) */
        .card:hover .flip-card { transform: rotateY(180deg); }
        /* Persist flip when active via state (mobile/click) */
        .card[data-active="true"] .flip-card { transform: rotateY(180deg); }

        .card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          border-radius: 1rem; /* match rounded-2xl */
        }
        .card-face.back { transform: rotateY(180deg); }

        /* Pretty entrance animation for skills */
        @keyframes fadeInUp {
          0% { transform: translateY(12px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default Skills;
