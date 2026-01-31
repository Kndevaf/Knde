import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  { name: "CompTIA CySA+", year: "2025", type: "security" },
  { name: "CompTIA Security+", year: "2024", type: "security" },
  { name: "ISC2 Certified in Cybersecurity", year: "2026", type: "security" },
  { name: "MATLAB Onramp", year: "2025", type: "technical" },
  { name: "Certified Pharmacy Technician (CPhT)", year: "", type: "professional" },
  { name: "Introduction to Cybersecurity: Cisco Networking Academy", year: "", type: "technical" },
  { name: "Advanced Design Application, Fairmont Heights HS", year: "", type: "design" },
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
            Credentials
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Certifications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cybersecurity and technical domains.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ x: 8, transition: { duration: 0.2 } }}
                className="glass-card rounded-xl p-5 flex items-center gap-4 border border-border/50 hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-gradient-peach/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.name}
                  </h3>
                  {cert.year && (
                    <p className="text-sm text-muted-foreground">{cert.year}</p>
                  )}
                </div>
                
                <CheckCircle className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
