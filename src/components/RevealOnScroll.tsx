"use client";

import { ReactNode, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

type Variant = "slideUp" | "fadeIn" | "slideLeft" | "slideRight" | "scaleUp";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: Variant;
  threshold?: number;
}

const variants: Record<Variant, Variants> = {
  slideUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideLeft: {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0 },
  },
  slideRight: {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  variant = "slideUp",
  threshold = 0.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={variants[variant]}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      transition={{
        duration: 0.65,
        delay: delay / 1000,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
