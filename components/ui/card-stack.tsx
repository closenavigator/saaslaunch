"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

let interval: NodeJS.Timeout;

type Card = {
  id: number;
  content: React.ReactNode;
};

export const CardStack = ({
  items,
  offset = 10,
  scaleFactor = 0.06,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();
    return () => clearInterval(interval);
  }, []);

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards];
        newArray.push(newArray.shift()!);
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative w-full">
      <AnimatePresence>
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className="absolute top-0 left-0 w-full card-shadow"
            style={{
              transformOrigin: "top center",
            }}
            initial={{ scale: 0, y: 105, opacity: 0 }}
            animate={{
              scale: 1 - index * scaleFactor,
              y: index * -offset,
              zIndex: cards.length - index,
              opacity: 1,
            }}
            exit={{ scale: 0, y: -105, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {card.content}
          </motion.div>
        ))}
      </AnimatePresence>
      <style jsx global>{`
        .card-shadow {
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.3);
          transition: box-shadow 0.3s ease;
        }
        .card-shadow:hover {
          box-shadow: 0 20px 40px -5px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
};
