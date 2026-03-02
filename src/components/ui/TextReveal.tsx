"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  staggerDelay?: number;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function TextReveal({
  text,
  className = "",
  staggerDelay = 0.04,
}: TextRevealProps) {
  const words = text.split(" ");

  const variants = {
    ...containerVariants,
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };

  return (
    <motion.span
      className={`inline ${className}`}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {words.map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className="inline-block"
        >
          {word}
          {i < words.length - 1 && "\u00A0"}
        </motion.span>
      ))}
    </motion.span>
  );
}
