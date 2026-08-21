import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

export default function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <motion.h2 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="text-2xl font-bold text-white mb-8 border-b border-border-subtle pb-4"
    >
      {children}
    </motion.h2>
  );
}
