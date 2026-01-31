import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-mesh opacity-70" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Get In Touch
          </span>
          <h2 className="font-display text-3xl lg:text-5xl font-bold text-foreground mt-4 mb-4">
            Let's Connect
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, cybersecurity projects, or collaborations.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                
                <div className="space-y-4">
                  <motion.a
                    href="mailto:contact@example.com"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span>Email me</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center group-hover:bg-accent/80 transition-colors">
                      <Linkedin className="w-5 h-5 text-accent-foreground" />
                    </div>
                    <span>LinkedIn</span>
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/kndevaf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-secondary/80 transition-colors">
                      <Github className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <span>GitHub</span>
                  </motion.a>
                  
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-10 h-10 rounded-full bg-gradient-peach/20 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span>Towson, Maryland</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-2xl p-8">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Send a Message
                </h3>
                
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 rounded-xl bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
