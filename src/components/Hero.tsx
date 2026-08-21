import { Database, Shield, Cpu, Lock, Code } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Subtle Tech Grid Background */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#10B981_1px,transparent_1px),linear-gradient(to_bottom,#10B981_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_20%,transparent_100%)]"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full relative z-10">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start text-center md:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-sans text-white mb-4 leading-tight">
              CESAR FREDDY <br className="hidden md:block" /> JACAY CARRASCO
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-400 mb-8 font-light">
              Cybersecurity Specialist & Cloud Security
            </h2>
            
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center w-full max-w-[400px] mx-auto aspect-square mb-10 md:mb-0"
          >
            {/* Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-brand/20 animate-[spin_10s_linear_infinite]" />
            {/* Inner Ring */}
            <div className="absolute inset-6 rounded-full border border-brand/40 animate-[spin_15s_linear_infinite_reverse]" />
            
            {/* Main Image */}
            <div className="absolute inset-10 rounded-full overflow-hidden bg-bg-card border-2 border-brand/50 z-10">
              <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
            </div>

            {/* Floating Icons */}
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute top-[10%] left-[5%] z-20 bg-black/60 backdrop-blur-md border border-brand/30 p-3 rounded-2xl text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.2)]"
            >
              <Database size={24} />
            </motion.div>

            <motion.div 
              animate={{ y: [10, -10, 10] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute top-[5%] right-[10%] z-20 bg-black/60 backdrop-blur-md border border-brand/30 p-3 rounded-2xl text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
            >
              <Shield size={24} />
            </motion.div>
            
            <motion.div 
              animate={{ y: [-8, 8, -8] }} 
              transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut", delay: 2 }}
              className="absolute bottom-[20%] right-[-5%] z-20 bg-black/60 backdrop-blur-md border border-brand/30 p-3 rounded-2xl text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.2)]"
            >
              <Cpu size={24} />
            </motion.div>

            <motion.div 
              animate={{ y: [12, -12, 12] }} 
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[10%] left-[10%] z-20 bg-black/60 backdrop-blur-md border border-brand/30 p-3 rounded-2xl text-green-400 shadow-[0_0_15px_rgba(74,222,128,0.2)]"
            >
              <Lock size={24} />
            </motion.div>
            
            <motion.div 
              animate={{ y: [-10, 10, -10] }} 
              transition={{ repeat: Infinity, duration: 5.5, ease: "easeInOut", delay: 1.5 }}
              className="absolute bottom-[-5%] right-[30%] z-20 bg-black/60 backdrop-blur-md border border-brand/30 p-3 rounded-2xl text-red-400 shadow-[0_0_15px_rgba(248,113,113,0.2)]"
            >
              <Code size={24} />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
