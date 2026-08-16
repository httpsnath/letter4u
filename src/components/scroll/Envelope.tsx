import { useState } from "react";
import { motion, Variants } from "framer-motion";
import LetterContent from "./LetterContent";

type EnvelopeProps = {
  onOpen?: () => void;
};

export default function Envelope({
  onOpen,
}: EnvelopeProps) {
  const [isOpen, setIsOpen] = useState(false);

const wrapperVariants: Variants = {
  closed: {
    y: [0, -3, 1, -2, 0],
    rotate: [0, 0.4, -0.3, 0.2, 0],

    transition: {
      y: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },

      rotate: {
        duration: 7,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  },

  open: {
    y: 0,
    rotate: 0,
  },
};

  const envelopeBodyVariants: Variants = {
    closed: {
      y: 0,
    },

    open: {
      y: 0,
    },
  };

  const flapVariants: Variants = {
    closed: {
      rotateX: 0,
      opacity: 1,

      transition: {
        rotateX: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        },

        opacity: {
          duration: 0.2,
        },
      },
    },

    open: {
      rotateX: 155,
      opacity: 0,

      transition: {
        rotateX: {
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        },

        opacity: {
          duration: 0.2,
          delay: 0.5,
          ease: "easeOut",
        },
      },
    },
  };

  const letterVariants: Variants = {
    closed: {
      height: "85%",
      y: "0%",
      zIndex: 10,

      transition: {
        height: {
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        },

        y: {
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        },

        zIndex: {
          delay: 0.8,
        },
      },
    },

    open: {
      height: "220%",
      y: "-40%",
      zIndex: 40,

      transition: {
        height: {
          duration: 0.9,
          delay: 0.55,
          ease: [0.16, 1, 0.3, 1],
        },

        y: {
          duration: 0.9,
          delay: 0.55,
          ease: [0.16, 1, 0.3, 1],
        },

        zIndex: {
          delay: 0.55,
        },
      },
    },
  };

  const noiseTexture = `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.15'/%3E%3C/svg%3E")`;

  return (
    <div className="w-full flex items-center justify-center relative">


      <style>{`
        .letter-scroll::-webkit-scrollbar {
          width: 6px;
        }

        .letter-scroll::-webkit-scrollbar-track {
          background: transparent;
        }

        .letter-scroll::-webkit-scrollbar-thumb {
          background-color: #D8A7E3;
          border-radius: 20px;
        }
      `}</style>



      <motion.div
        variants={wrapperVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="
          relative
          w-[85vw]
          max-w-[320px]
          sm:max-w-[450px]
          aspect-[3/2]
        "
        style={{
          perspective: "1200px",
        }}
      >


        <motion.div
          variants={envelopeBodyVariants}
          className="
            absolute
            inset-0
            bg-gradient-to-br
            from-[#7E4A89]
            via-[#6D3B78]
            to-[#4B2356]
            rounded-md
            shadow-2xl
            overflow-hidden
            z-10
          "
        >


          <div
            className="
              absolute
              inset-0
              opacity-30
              mix-blend-overlay
            "
            style={{
              backgroundImage: noiseTexture,
            }}
          />

        </motion.div>


        <motion.div
          variants={letterVariants}
          className="
            absolute
            top-2
            left-3
            right-3
            bg-[#fdfaf5]
            rounded-sm
            shadow-xl
            p-0
            md:p-3
            overflow-y-auto
            letter-scroll
            origin-top
            text-slate-800
            border
            border-[#E9D5FF]
          "
          style={{
            backgroundImage: noiseTexture,
          }}
        >

          <div className="max-w-prose mx-auto">


            <LetterContent />


            {isOpen && (
              <div className="mt-12 flex justify-center pb-4">

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  className="
                    px-6
                    py-2
                    border
                    border-[#D8A7E3]
                    text-[#6D3B78]
                    font-serif
                    text-sm
                    uppercase
                    tracking-widest
                    hover:bg-[#F3E8FF]
                    transition-colors
                    rounded-sm
                    cursor-pointer
                  "
                >
                  Fold Away
                </button>

              </div>
            )}

          </div>

        </motion.div>



        <motion.svg
          variants={envelopeBodyVariants}
          viewBox="0 0 300 200"
          className="
            absolute
            inset-0
            w-full
            h-full
            z-20
            pointer-events-none
            drop-shadow-[0_4px_10px_rgba(0,0,0,0.3)]
          "
        >


          <polygon
            points="0,0 145,100 0,200"
            fill="#7E4A89"
          />

          <polygon
            points="0,0 145,100 0,200"
            fill="url(#flapGradient)"
            opacity="0.4"
          />



          <polygon
            points="300,0 155,100 300,200"
            fill="#7E4A89"
          />

          <polygon
            points="300,0 155,100 300,200"
            fill="url(#flapGradient)"
            opacity="0.4"
          />



          <polygon
            points="0,200 150,95 300,200"
            fill="#8B4F96"
          />

          <path
            d="M0,200 L150,95 L300,200"
            stroke="#C084D4"
            strokeWidth="0.5"
            fill="none"
            opacity="0.4"
          />


          <defs>

            <linearGradient
              id="flapGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >

              <stop
                offset="0%"
                stopColor="transparent"
              />

              <stop
                offset="100%"
                stopColor="#3B1747"
                stopOpacity="0.5"
              />

            </linearGradient>

          </defs>

        </motion.svg>



        <motion.div
          className="
            absolute
            top-0
            left-0
            w-full
            h-[55%]
            z-30
            pointer-events-none
          "
          style={{
            perspective: "1200px",
          }}
        >

          <motion.div
            variants={flapVariants}
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            className="
              relative
              w-full
              h-full
              origin-top
              pointer-events-auto
              cursor-pointer
            "
            style={{
              transformStyle: "preserve-3d",
            }}
            onClick={() => {
              if (!isOpen) {
                setIsOpen(true);
                onOpen?.();
              }
            }}
          >


            <svg
              viewBox="0 0 300 110"
              preserveAspectRatio="none"
              className="
                absolute
                inset-0
                w-full
                h-full
              "
              style={{
                backfaceVisibility: "hidden",
              }}
            >

              <polygon
                points="0,0 150,110 300,0"
                fill="#A85CAD"
                filter="drop-shadow(0 5px 5px rgba(0,0,0,0.4))"
              />

              <path
                d="M0,0 L150,110 L300,0"
                stroke="#D8A7E3"
                strokeWidth="0.5"
                fill="none"
                opacity="0.6"
              />


              <g transform="translate(150, 100)">

             
                <circle
                  cx="0"
                  cy="0"
                  r="15"
                  fill="#4B2356"
                  filter="drop-shadow(0px 3px 3px rgba(0,0,0,0.5))"
                />

   
                <circle
                  cx="0"
                  cy="0"
                  r="12"
                  fill="none"
                  stroke="#7E4A89"
                  strokeWidth="1"
                  opacity="0.9"
                />


                <path
                  d="M-4,0 L0,-4 L4,0 L0,4 Z"
                  fill="#D8A7E3"
                  opacity="0.9"
                />

              </g>

            </svg>


            <svg
              viewBox="0 0 300 110"
              preserveAspectRatio="none"
              className="
                absolute
                inset-0
                w-full
                h-full
              "
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)",
              }}
            >

              <polygon
                points="0,0 150,110 300,0"
                fill="#5A2D66"
              />

              <path
                d="M0,0 L150,110 L300,0"
                stroke="#8B4F96"
                strokeWidth="0.5"
                fill="none"
                opacity="0.45"
              />

            </svg>

          </motion.div>

        </motion.div>



        {!isOpen && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1.5,
              duration: 1,
            }}
            className="
              absolute
              -bottom-12
              left-0
              right-0
              text-center
              text-[#6D3B78]/60
              font-serif
              italic
              text-sm
              pointer-events-none
            "
          >
            Tap the seal to open
          </motion.div>
        )}

      </motion.div>

    </div>
  );
}