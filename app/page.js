'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      {/* Glassmorphism Navbar */}      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-1/2 -translate-x-1/2 w-[60%] mt-6 backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl px-8 py-5 flex items-center justify-between z-50 shadow-2xl shadow-black/20"
      >        <span className="font-['Cormorant'] text-3xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent tracking-wider">
          LUXE
        </span>
        <div className="flex items-center gap-6">
          <i className="ph ph-instagram text-white/80 text-xl hover:text-white cursor-pointer transition-colors"></i>
          <i className="ph ph-twitter-logo text-white/80 text-xl hover:text-white cursor-pointer transition-colors"></i>
          <i className="ph ph-envelope-simple text-white/80 text-xl hover:text-white cursor-pointer transition-colors"></i>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="min-h-screen bg-[#0A0A0A] relative overflow-hidden">
        {/* Gradient Orbs */}        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-0 -left-40 w-96 h-96 bg-purple-500/30 rounded-full blur-[128px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 -right-40 w-96 h-96 bg-indigo-500/30 rounded-full blur-[128px]"
        />
        
        {/* Content Container */}
        <div className="relative min-h-screen flex items-center justify-center px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-white/60 uppercase tracking-[0.2em] font-['Inter'] mb-6"
            >
              Launching Soon
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}              className="font-['Cormorant'] text-6xl md:text-8xl font-semibold text-white mb-8 tracking-tight"
            >
              Something Extraordinary<br />Is Coming
            </motion.h1>
              <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-white/60 font-['Inter'] mb-12 max-w-2xl mx-auto"
            >
              We're crafting something exceptional. Join our waitlist to be among the first to experience it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:w-72 px-6 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
              />
              <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 flex items-center justify-center gap-2">
                Notify Me
                <i className="ph ph-arrow-right"></i>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-16 flex items-center justify-center gap-12"
            >
              <div className="text-center">
                <p className="text-3xl font-['Cormorant'] font-bold text-white tracking-tight">2.5K+</p>
                <p className="text-white/60 text-sm mt-1">Waitlist Members</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-['Cormorant'] font-bold text-white">14</p>
                <p className="text-white/60 text-sm mt-1">Days to Launch</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-['Cormorant'] font-bold text-white">98%</p>
                <p className="text-white/60 text-sm mt-1">Completion</p>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </>
  );
}