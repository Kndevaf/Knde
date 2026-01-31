import { motion } from "framer-motion";
import { ArrowDown, Shield, Code, Server } from "lucide-react";
import profileImage from "@/assets/profile.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-mesh" />
      
      {/* Floating decorative elements */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full bg-gradient-peach/30 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-gradient-blue/30 blur-xl"
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-40 w-16 h-16 rounded-full bg-gradient-pink/30 blur-xl"
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-gradient-pink/30 to-gradient-blue/40 blur-2xl scale-110" />
              <img
                src={profileImage}
                alt="Kehinde Madagu"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover relative z-10 border-4 border-card shadow-2xl glow"
              />
            </motion.div>
            
            {/* Floating badges */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -left-4 top-10 glass-card rounded-xl p-3 shadow-lg"
            >
              <Shield className="w-6 h-6 text-primary" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="absolute -right-4 top-1/2 glass-card rounded-xl p-3 shadow-lg"
            >
              <Code className="w-6 h-6 text-accent-foreground" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute left-10 -bottom-4 glass-card rounded-xl p-3 shadow-lg"
            >
              <Server className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                DevSecOps Engineer
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="font-display text-4xl lg:text-6xl font-bold text-foreground mb-4"
            >
               Kehinde
              <span className="block text-primary">Madagu</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg lg:text-xl text-muted-foreground mb-2"
            >
              Bachelor of Science: Information Technology.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-muted-foreground mb-8"
            >
              Towson University • Security Engineering, Operations & GRC.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity shadow-lg"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full glass-card text-foreground font-medium hover:bg-card transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
