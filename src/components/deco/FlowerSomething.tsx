import { motion } from "framer-motion";

import Butterfly from "./Butterfly";
import Flower from "./Flower";
import Flower2 from "./Flower2";

export default function FlowerGarden() {
    return (
        <footer className="absolute bottom-0 left-0 w-full h-64 pointer-events-none">

            <motion.div
                className="
                    absolute
                    left-[-5%]
                    sm:left-[-4%]
                    md:left-[-3%]
                    lg:left-[-2%]
                    xl:left-[-2%]

                    bottom-[-5rem]
                    sm:bottom-[-6rem]
                    md:bottom-[-7rem]
                    lg:bottom-[-9rem]
                    xl:bottom-[-11rem]

                    w-36
                    sm:w-40
                    md:w-60
                    lg:w-75
                    xl:w-80

                    rotate-110
                "
                animate={{
                    rotate: [0, 1.5, -1, 0.5, 0],
                    y: [0, -2, 1, -1, 0],
                }}
                transition={{
                    duration: 5.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                <Flower className="w-full" />
            </motion.div>

            <motion.div
                className="
                    absolute
                    left-[15%]
                    sm:left-[14%]
                    md:left-[14%]
                    lg:left-[15%]
                    xl:left-[15%]

                    bottom-[-5rem]
                    sm:bottom-[-6rem]
                    md:bottom-[-7rem]
                    lg:bottom-[-9rem]
                    xl:bottom-[-11rem]

                    w-32
                    sm:w-36
                    md:w-40
                    lg:w-48
                    xl:w-56

                    rotate-85
                "
                animate={{
                    rotate: [0, -1, 1.5, -0.5, 0],
                    y: [0, -1, 2, 0, 0],
                }}
                transition={{
                    duration: 6.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
            >
                <Flower className="w-full" />
            </motion.div>



            <motion.div
                className="
                    absolute
                    left-[2%]
                    sm:left-[2%]
                    md:left-[3%]
                    lg:left-[4%]
                    xl:left-[4%]

                    bottom-[-1rem]
                    sm:bottom-[-2rem]
                    md:bottom-[-2rem]
                    lg:bottom-[-3rem]
                    xl:bottom-[-4rem]

                    w-28
                    sm:w-32
                    md:w-60
                    lg:w-60
                    xl:w-70

                    rotate-15
                "
                animate={{
                    rotate: [0, 1, -1.5, 0.5, 0],
                    y: [0, -2, 1, -1, 0],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
            >
                <Flower2 className="w-full" />
            </motion.div>


   
            <motion.div
                className="
                    absolute
                    left-[18%]
                    sm:left-[18%]
                    md:left-[20%]
                    lg:left-[21%]
                    xl:left-[21%]

                    bottom-[-1rem]
                    sm:bottom-[-2rem]
                    md:bottom-[-2rem]
                    lg:bottom-[-3rem]
                    xl:bottom-[-4rem]

                    w-32
                    sm:w-36
                    md:w-40
                    lg:w-48
                    xl:w-64

                    rotate-45
                "
                animate={{
                    rotate: [0, -1.5, 1, -0.5, 0],
                    y: [0, -1, 2, -1, 0],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                }}
            >
                <Flower2 className="w-full" />
            </motion.div>


            <motion.div
                className="
                    absolute
                    left-[35%]
                    sm:left-[35%]
                    md:left-[37%]
                    lg:left-[38%]
                    xl:left-[38%]

                    bottom-[-1rem]
                    sm:bottom-[-2rem]
                    md:bottom-[-2rem]
                    lg:bottom-[-3rem]
                    xl:bottom-[-4rem]

                    w-36
                    sm:w-40
                    md:w-44
                    lg:w-52
                    xl:w-64

                    -rotate-15
                "
                animate={{
                    rotate: [0, 1.2, -1.2, 0.5, 0],
                    y: [0, -2, 1, -1, 0],
                }}
                transition={{
                    duration: 5.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.8,
                }}
            >
                <Flower2 className="w-full" />
            </motion.div>


            <motion.div
                className="
                    absolute
                    left-[52%]
                    sm:left-[52%]
                    md:left-[54%]
                    lg:left-[55%]
                    xl:left-[55%]

                    bottom-[-1rem]
                    sm:bottom-[-2rem]
                    md:bottom-[-2rem]
                    lg:bottom-[-3rem]
                    xl:bottom-[-4rem]

                    w-32
                    sm:w-36
                    md:w-40
                    lg:w-48
                    xl:w-56

                    rotate-30
                "
                animate={{
                    rotate: [0, -1, 1.5, -0.5, 0],
                    y: [0, -1, 2, -1, 0],
                }}
                transition={{
                    duration: 6.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
            >
                <Flower2 className="w-full" />
            </motion.div>


            <motion.div
                className="
                    absolute
                    left-[43%]
                    sm:left-[43%]
                    md:left-[45%]
                    lg:left-[46%]
                    xl:left-[46%]

                    bottom-[-5rem]
                    sm:bottom-[-6rem]
                    md:bottom-[-7rem]
                    lg:bottom-[-9rem]
                    xl:bottom-[-11rem]

                    w-20
                    sm:w-24
                    md:w-28
                    lg:w-32
                    xl:w-40

                    rotate-90
                "
                animate={{
                    rotate: [0, 1.5, -1, 0.5, 0],
                    y: [0, -2, 1, -1, 0],
                }}
                transition={{
                    duration: 6.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2,
                }}
            >
                <Flower className="w-full" />
            </motion.div>

            <motion.div
                className="
                    absolute
                    left-[50%]
                    sm:left-[50%]
                    md:left-[52%]
                    lg:left-[53%]
                    xl:left-[53%]

                    bottom-20
                    sm:bottom-[6rem]
                    md:bottom-[6rem]
                    lg:bottom-[6rem]
                    xl:bottom-[6rem]

                    w-30
                    sm:w-40
                    md:w-45
                    lg:w-50
                    xl:w-60
                "
                animate={{
                    rotate: [0, 3, -2, 2, 0],
                    y: [0, -4, 2, -3, 0],
                    x: [0, 2, -2, 1, 0],
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                }}
            >
                <Butterfly className="w-full" />
            </motion.div>

        </footer>
    );
}