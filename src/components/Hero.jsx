import { motion } from "framer-motion";
import React from "react";

export function Hero() {
  // Animation Variants
  const slideLeft = {
    hidden: { opacity: 0, x: -80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div className="bg-black text-white overflow-hidden relative">

      {/* Background Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-pink-500 blur-[180px] opacity-20 rounded-full"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ top: 40, left: -160 }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] bg-blue-500 blur-[200px] opacity-20 rounded-full"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 6, repeat: Infinity }}
        style={{ bottom: 40, right: -160 }}
      />

      {/* HERO SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 md:py-20">

        <motion.div
          className="max-w-md mb-12 md:mb-0"
          variants={slideLeft}
          initial="hidden"
          animate="show"
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            variants={fadeUp}
          >
            CREATE YOUR PC
          </motion.h1>

          <motion.p
            className="text-gray-300 mb-6 text-base md:text-lg"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
          >
            Build your dream PC with ease. Choose components, compare performance,
            and customize every part.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="neon-btn px-8 py-3 rounded-lg text-lg"
          >
            Read more
          </motion.button>
        </motion.div>

        <motion.div
          className="max-w-xl"
          variants={slideRight}
          initial="hidden"
          animate="show"
        >
          <motion.img
            src="/icon/img1.jpg"
            className="w-full rounded-2xl shadow-xl border border-gray-700"
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4 }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -1, 1, 0],
              transition: { duration: 0.4 }
            }}
          />
        </motion.div>
      </section>

      {/* SECOND SECTION */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-16">

        <motion.div
          className="max-w-md mb-10 md:mb-0"
          variants={slideLeft}
          initial="hidden"
          animate="show"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Next-Gen 3D Build
          </h2>

          <p className="text-gray-300 text-base md:text-lg mb-4">
            Beginner friendly for users to add components of their choice and
            customize PC builds according to their needs.
          </p>
        </motion.div>

        <motion.div
          className="max-w-md"
          variants={slideRight}
          initial="hidden"
          animate="show"
        >
          <motion.img
            src="/icon/3dmodel.jpg"
            className="w-full rounded-2xl border border-gray-700 shadow-[0_10px_30px_rgba(255,255,255,0.15)]"
            animate={{ y: [0, -15, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            whileHover={{
              scale: 1.1,
              rotate: [0, 1, -1, 0],
              transition: { duration: 0.4 }
            }}
          />
        </motion.div>

      </section>
    </div>
  );
}

export default Hero;
