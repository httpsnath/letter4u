import { motion } from "framer-motion";

import FlowerGarden from "./components/deco/FlowerSomething";
import RedRectangle from "./components/deco/RedSomething";

import candyshet from "./assets/candyshet.png";
import stringshet from "./assets/stringshet.png";
import pseudoletter from "./assets/pseudoletter.png";
import heart from "./assets/heart.png";
import clock from "./assets/clock.png";

import Bear from "./components/deco/Bear";

import RomanticEnvelope from "./components/scroll/Envelope";
import FlyingElements from "./components/deco/FlyingElements";

export default function App() {
  return (
    <div className="relative min-h-screen overflow-hidden justify-center align-middle">

      {/* =========================================================
          BACKGROUND
      ========================================================== */}

      <div
        className="
          absolute
          inset-0
          bg-[url(./assets/background.webp)]
          bg-center
          opacity-30
          pointer-events-none
        "
      />


      {/* =========================================================
          TOP RED DECORATION

          Kept mostly still because this is a large decorative
          element. A tiny floating movement prevents it from
          looking completely static.
      ========================================================== */}

      <motion.div
        className="absolute -top-10 -left-5"
        animate={{
          y: [0, -2, 1, 0],
          rotate: [0, 0.4, -0.3, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <RedRectangle />
      </motion.div>


      {/* =========================================================
          CLOCK

          Very slow pendulum-like movement.
      ========================================================== */}

      <motion.img
        src={clock}
        alt=""
        className="
          absolute
          -top-5
          right-30
          w-25

          sm:w-40
          sm:right-100

          origin-top
        "
        animate={{
          rotate: [-20, -18, -22, -19, -20],
          y: [0, 1, 0, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />


      {/* =========================================================
          HEART

          Gentle floating effect.
      ========================================================== */}

      <motion.img
        src={heart}
        alt=""
        className="
          absolute
          top-50
          -left-10
          w-25

          sm:w-40
          sm:top-90
          sm:-left-10
        "
        animate={{
          rotate: [10, 12, 8, 11, 10],
          y: [0, -4, 2, -3, 0],
          x: [0, 1, -1, 1, 0],
        }}
        transition={{
          duration: 5.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.8,
        }}
      />


      {/* =========================================================
          STRING SHEET

          VERY subtle movement.

          This one should barely move because it's a large
          background decoration.
      ========================================================== */}

      <motion.img
        src={stringshet}
        alt=""
        className="
          absolute
          -z-10
          w-150
          origin-top
        "
        animate={{
          rotate: [0, 0.5, -0.4, 0.3, 0],
          y: [0, -1, 1, -0.5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />


      {/* =========================================================
          PSEUDO LETTER

          Slow floating / paper-like movement.
      ========================================================== */}

      <motion.img
        src={pseudoletter}
        alt=""
        className="
          absolute
          -right-50
          sm:-right-70
          -z-15
          origin-center
        "
        animate={{
          rotate: [30, 31.5, 29, 30.8, 30],
          y: [0, -3, 1, -2, 0],
          x: [0, 1, -1, 0.5, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />


      {/* =========================================================
          BEAR

          Very subtle rocking.

          We preserve your -rotate-10 by using an outer wrapper
          for the static rotation and an inner motion wrapper.
      ========================================================== */}

      <motion.div
        className="
          absolute
          bottom-20
          sm:bottom-60
          sm:left-10
          w-30
          sm:w-40
          -rotate-10
          origin-bottom
        "
        animate={{
          y: [0, -2, 1, -1, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.2,
        }}
      >
        <motion.div
          animate={{
            rotate: [0, 1, -1.2, 0.6, 0],
          }}
          transition={{
            duration: 5.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Bear className="w-full" />
        </motion.div>
      </motion.div>


      {/* =========================================================
          BOTTOM FLOWERS
      ========================================================== */}

      <FlowerGarden />


      {/* =========================================================
          CANDY SHEET

          Since this hangs off the bottom/right side, give it
          a very slow swinging motion.
      ========================================================== */}

      <motion.img
        src={candyshet}
        alt=""
        className="
          absolute
          right-0
          -bottom-30

          w-50
          h-70

          sm:w-100
          sm:h-150
          sm:-bottom-70
          sm:-right-15  

          -z-10
          -rotate-90
          origin-top-right
        "
        animate={{
          rotate: [60, 61.5, 58.8, 61, 60],
          x: [0, 1, -1, 0.5, 0],
          y: [0, -2, 1, -1, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />


      {/* =========================================================
          FLYING ELEMENTS

          Butterflies/hearts already have their own animation,
          so DON'T put another motion animation around them.
      ========================================================== */}

      <FlyingElements />


      {/* =========================================================
          ENVELOPE

          Keep this completely still until the user interacts
          with it.
      ========================================================== */}

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <RomanticEnvelope />
      </div>

    </div>
  );
}