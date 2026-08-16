import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import butterfly from "../../assets/butterfly.png";
import heart from "../../assets/heart.webp";
import heart2 from "../../assets/heart2.webp";

type FlyingElement = {
  id: number;
  type: "butterfly" | "heart" | "heart2";
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
};

export default function FlyingElements() {
  const [elements, setElements] = useState<FlyingElement[]>([]);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    let id = 0;

    const spawnElement = () => {

      const random = Math.random();

      let type: FlyingElement["type"];

      if (random > 0.7) {
        type = "butterfly";
      } else if (random > 0.3) {
        type = "heart";
      } else {
        type = "heart2";
      }


      const startFromLeft = Math.random() > 0.5;

      const startX = startFromLeft ? -15 : 105;

      const startY = Math.random() * 80 + 5;

      const endX = startFromLeft ? 105 : -15;

      const endY = Math.max(
        5,
        Math.min(
          90,
          startY + (Math.random() * 30 - 15)
        )
      );


      let size: number;

      if (type === "butterfly") {
        size = Math.random() * 35 + 45;
      } else if (type === "heart2") {
        size = Math.random() * 25 + 30;
      } else {
        size = Math.random() * 20 + 25;
      }

      const newElement: FlyingElement = {
        id: id++,

        type,

        startX,
        startY,

        endX,
        endY,

        size,

        duration: Math.random() * 4 + 6,

        delay: 0,

        rotate: Math.random() * 30 - 15,
      };

      setElements((current) => [
        ...current,
        newElement,
      ]);

      setTimeout(() => {
        setElements((current) =>
          current.filter(
            (element) => element.id !== newElement.id
          )
        );
      }, (newElement.duration + 1) * 1000);


      const nextSpawn =
        Math.random() * 3500 + 2500;

      timeout = setTimeout(
        spawnElement,
        nextSpawn
      );
    };


    timeout = setTimeout(
      spawnElement,
      2500
    );

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className="
        absolute
        inset-0
        z-20
        pointer-events-none
        overflow-hidden
      "
    >
      {elements.map((element) => {

        let image;

        if (element.type === "butterfly") {
          image = butterfly;
        } else if (element.type === "heart2") {
          image = heart2;
        } else {
          image = heart;
        }

        return (
          <motion.img
            key={element.id}
            src={image}
            alt=""
            className="absolute object-contain"
            style={{
              width: element.size,
              height: "auto",
              left: `${element.startX}%`,
              top: `${element.startY}%`,
            }}
            initial={{
              opacity: 0,
              scale: 0.6,
              rotate: element.rotate,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: [0, 1, 1, 0],

              scale: [
                0.6,
                1,
                1.05,
                0.8,
              ],

              rotate: [
                element.rotate - 8,
                element.rotate + 8,
                element.rotate - 5,
                element.rotate + 3,
                element.rotate,
              ],

              x: [
                0,
                50,
                -20,
                70,
                0,
              ],

              y: [
                0,
                -30,
                20,
                -25,
                0,
              ],

              left: `${element.endX}%`,
              top: `${element.endY}%`,
            }}
            transition={{
              duration: element.duration,
              ease: "easeInOut",


              times: [
                0,
                0.25,
                0.5,
                0.75,
                1,
              ],
            }}
          />
        );
      })}
    </div>
  );
}