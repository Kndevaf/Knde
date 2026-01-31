import { motion } from "framer-motion";
import { ExternalLink, Shield, Search, Lock, Fish, Users, FileText } from "lucide-react";

const projects = [
  {
    title: "Endpoint Threat Monitoring (Wazuh)",
    description: "Deploying Wazuh to monitor system logs, detecting threats, and enabling real-time alerting on Ubuntu.",
    icon: Shield,
    color: "from-primary/20 to-gradient-peach/20",
  },
  {
    title: "Nessus Vulnerability Assessment",
    description: "Performed vulnerability scanning with Nessus Essentials, prioritized CVEs, and produced reports.",
    icon: Search,
    color: "from-gradient-blue/20 to-gradient-lavender/20",
  },
  {
    title: "Password Cracking Simulator",
    description: "JavaScript project simulating brute force and dictionary attacks.",
    icon: Lock,
    color: "from-gradient-pink/20 to-primary/20",
  },
  {
    title: "Phishing Defense Training",
    description: "Training module to teach detection and reporting of phishing attempts.",
    icon: Fish,
    color: "from-gradient-lavender/20 to-gradient-blue/20",
  },
  {
    title: "Usability Testing (HCI)",
    description: "User testing to improve interface design and workflows.",
    icon: Users,
    color: "from-gradient-peach/20 to-gradient-pink/20",
  },
  {
    title: "Incident Response Playbook",
    description: "Ransomware response plan with containment, recovery, and lessons learned.",
    icon: FileText,
    color: "from-primary/20 to-gradient-blue/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-mesh-fixed opacity-50" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
            My Work
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of cybersecurity projects showcasing threat detection, vulnerability assessment, and security awareness training.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="h-full glass-card rounded-2xl p-6 hover:shadow-xl transition-all duration-300 border border-border/50 hover:border-primary/30">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-7 h-7 text-foreground" />
                </div>
                
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
