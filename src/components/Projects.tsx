import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Shield, Search, Lock, Fish, Users, FileText, X } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Project {
  title: string;
  description: string;
  icon: typeof Shield;
  color: string;
  technologies: string[];
  fullContent: {
    overview: string;
    objectives?: string[];
    keyOutcomes?: string[];
    process?: string[];
    findings?: string[];
    skills?: string[];
    sections?: { title: string; content: string }[];
  };
}

const projects: Project[] = [
  {
    title: "Endpoint Threat Monitoring (Wazuh)",
    description: "Deploying Wazuh to monitor system logs, detecting threats, and enabling real-time alerting on Ubuntu.",
    icon: Shield,
    color: "from-primary/20 to-gradient-peach/20",
    technologies: ["Wazuh", "Ubuntu", "Elastic Stack", "Filebeat", "Kibana"],
    fullContent: {
      overview: "Implemented a single-host Wazuh SIEM on Ubuntu integrated with the Elastic Stack to centralize log collection, detect threats, and provide real-time alerting and visualizations. The deployment included Wazuh Manager, Wazuh Dashboard (Kibana), Filebeat for Elasticsearch integration, and a locally registered Wazuh agent. Custom detection rules and File Integrity Monitoring were configured to identify brute-force attempts, suspicious file modifications, and rootkit indicators.",
      keyOutcomes: [
        "Deployed and configured Wazuh Manager, Dashboard, Filebeat, and local agent on Ubuntu",
        "Implemented real-time alerting and custom detection rules for brute-force, FIM, and rootcheck events",
        "Built dashboard visualizations for alert trends, top sources, and FIM activity; exported actionable reports",
        "Validated detection with simulated SSH failures and file modification tests; documented mitigation steps"
      ],
      sections: [
        {
          title: "Project Environment",
          content: "Host System: Ubuntu | SIEM Tool: Wazuh (open-source SIEM and XDR) | Elastic Stack: Elasticsearch, Logstash, Kibana | Monitored Device: Same host (localhost) | Network: Local network (single node)"
        },
        {
          title: "Phase 1: Installation & Setup",
          content: "Installed dependencies, added Wazuh repository, installed Wazuh manager, Filebeat, and Wazuh dashboard. Configured system access through browser at https://<ip>:5601."
        },
        {
          title: "Phase 2: Agent Configuration",
          content: "Configured the Wazuh agent on the same host with server address set to 127.0.0.1, enabled and started the wazuh-agent service."
        },
        {
          title: "Phase 3: Log Collection & Analysis",
          content: "Wazuh parses and analyzes common logs including: /var/log/auth.log (authentication attempts), /var/log/syslog (system activity), /var/log/dpkg.log (package installs), /var/log/ufw.log (firewall logs)."
        },
        {
          title: "Threat Detection",
          content: "Configured Brute Force Detection by generating failed SSH logins. Enabled File Integrity Monitoring (FIM) via syscheck to monitor directories. Enabled Rootkit & Malware Detection through rootcheck for hidden processes and suspicious binaries."
        },
        {
          title: "Outcome",
          content: "Successfully deployed a functional SIEM on Ubuntu using Wazuh. Monitored endpoint activity, detected suspicious login attempts, configured real-time alerts and FIM. Skills demonstrated include SIEM configuration, Linux administration, log analysis, rule creation, FIM, and dashboard creation."
        }
      ],
      skills: ["SIEM Configuration", "Linux Administration", "Log Analysis", "Rule Creation", "File Integrity Monitoring", "Dashboard Creation"]
    }
  },
  {
    title: "Nessus Vulnerability Assessment",
    description: "Performed vulnerability scanning with Nessus Essentials, prioritized CVEs, and produced reports.",
    icon: Search,
    color: "from-gradient-blue/20 to-gradient-lavender/20",
    technologies: ["Nessus Essentials", "VMware Workstation", "Windows 10 VM", "Kali Linux"],
    fullContent: {
      overview: "Conducted a vulnerability assessment using Nessus Essentials to identify and evaluate security weaknesses within a controlled virtual network environment. The project simulated a real-world vulnerability management process to enhance understanding of network security posture and remediation strategies.",
      objectives: [
        "Learn to configure and operate Nessus Essentials for vulnerability scanning",
        "Identify high-risk vulnerabilities and misconfigurations in a target system",
        "Analyze scan results and recommend remediation actions based on severity"
      ],
      process: [
        "Installed Nessus Essentials on a host machine and activated it with Tenable's free license",
        "Configured a Windows 10 virtual machine as the target using VMware Workstation",
        "Verified connectivity between host and target with ICMP and Nmap scans",
        "Created a Basic Network Scan profile in Nessus and defined the target IP address",
        "Executed the scan and reviewed discovered vulnerabilities across ports and services",
        "Exported the report in PDF format and summarized critical vulnerabilities with remediation steps"
      ],
      findings: [
        "Detected outdated Apache HTTP Server with multiple CVEs",
        "Identified SMBv1 protocol still enabled and vulnerable to ransomware attacks",
        "Found weak administrative credentials accessible over network services"
      ],
      sections: [
        {
          title: "Remediation Recommendations",
          content: "Apply latest software patches for all detected CVEs. Disable SMBv1 and enforce SMBv2 or SMBv3 where possible. Implement strong password policies and remove default credentials."
        },
        {
          title: "Outcome",
          content: "Successfully identified, documented, and proposed mitigations for multiple system vulnerabilities using Nessus Essentials. The project reinforced practical experience in vulnerability management and threat prioritization, aligning with real-world cybersecurity operations."
        }
      ],
      skills: ["Vulnerability Scanning & Analysis", "Security Configuration Management", "Network & Host-based Security", "Report Writing and Risk Assessment", "Understanding of CVSS Scores and CVE databases"]
    }
  },
  {
    title: "Password Cracking Simulator",
    description: "JavaScript project simulating brute force and dictionary attacks.",
    icon: Lock,
    color: "from-gradient-pink/20 to-primary/20",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6)"],
    fullContent: {
      overview: "This project is an Ethical Password Cracking Simulator built with vanilla JavaScript to demonstrate how weak passwords are vulnerable to common attack techniques. The simulator is strictly educational and designed to promote secure password practices.",
      objectives: [
        "Demonstrate how dictionary attacks exploit commonly used passwords",
        "Show why short passwords are vulnerable to brute-force attacks",
        "Promote the importance of strong, complex password creation"
      ],
      sections: [
        {
          title: "How the Simulator Works",
          content: "1. The user enters a password into an input field. 2. The system performs a dictionary attack using a predefined list of common passwords. 3. If the dictionary attack fails, a brute-force feasibility check is simulated based on password length. 4. Results are displayed in real time to explain the outcome."
        },
        {
          title: "Security Concepts Demonstrated",
          content: "Dictionary-based password cracking, brute-force attack feasibility, password entropy and length considerations, ethical hacking principles."
        },
        {
          title: "Ethical Notice",
          content: "This simulator does NOT perform real password cracking. It is intended solely for educational purposes to promote cybersecurity awareness and ethical security testing."
        }
      ],
      skills: ["JavaScript Development", "Security Awareness Training", "Educational Tool Design", "Ethical Hacking Principles"]
    }
  },
  {
    title: "Phishing Defense Training",
    description: "Training module to teach detection and reporting of phishing attempts.",
    icon: Fish,
    color: "from-gradient-lavender/20 to-gradient-blue/20",
    technologies: ["Security Awareness", "Social Engineering", "Training Development"],
    fullContent: {
      overview: "A comprehensive training module designed to equip employees with the skills to instantly recognize, analyze, and safely report phishing attempts, making them the organization's first line of defense.",
      sections: [
        {
          title: "What is Phishing?",
          content: "Phishing is a form of social engineering where an attacker attempts to trick you into clicking a malicious link, downloading a malicious file, or voluntarily giving up sensitive information. Types include: Email Phishing (broad attacks), Spear Phishing (targeted attacks), Vishing (voice phishing), and Smishing (SMS phishing)."
        },
        {
          title: "The Attacker's Playbook: Red Flags",
          content: "The Pressure Cooker: Creating false urgency with phrases like 'Immediate action required' or 'Your account will be suspended'. Identity Deception: Sender spoofing where the display name looks correct but the email address is suspicious. Hidden Destinations: Links that display one URL but navigate to a different, malicious site. Unprofessional Look: Spelling mistakes, poor grammar, weird formatting, or low-resolution logos."
        },
        {
          title: "The Defender's Playbook",
          content: "Step 1: Stop and Hover - Do NOT click any links or open any attachments. Hover over sender's name and all links to inspect the true destination. Step 2: Verify Out-of-Band - If the email requests an action, verify using a separate communication channel. Step 3: Report Immediately - Use the official 'Report Phishing' button or follow internal security procedures."
        },
        {
          title: "Learning Outcomes",
          content: "Recognize the most common phishing techniques and social-engineering patterns. Apply a short, repeatable verification workflow (Stop, Verify, Report). Report suspected phishing promptly with useful context to the security team."
        },
        {
          title: "Module Breakdown",
          content: "Module 1: Understanding phishing - definitions, common types, and attacker TTPs. Module 2: Simulated phishing exercise - a controlled campaign to practice identifying suspicious messages. Module 3: Incident reporting & follow-up - what the security team needs and how to recover if credentials are exposed."
        }
      ],
      skills: ["Security Awareness Training", "Social Engineering Recognition", "Incident Reporting", "Risk Communication"]
    }
  },
  {
    title: "Usability Testing (HCI)",
    description: "User testing to improve interface design and workflows.",
    icon: Users,
    color: "from-gradient-peach/20 to-gradient-pink/20",
    technologies: ["Usability Testing", "Data Collection", "User Research", "HCI Methodology"],
    fullContent: {
      overview: "Conducted a comprehensive usability test on the Hakone Japan travel website with a team of 5 members, testing 10 participants to evaluate functionality and usability. The study aimed to gather real data from real users to improve user experience and guide evidence-based design decisions.",
      sections: [
        {
          title: "Website Evaluated",
          content: "The Hakone Japan website (hakone-japan.com), developed by the Hakone Tourist Association, serves as a one-stop shop for tourists planning visits to Hakone. Features include a slideshow of landscapes, navigation tabs for Discover, Things to Do, and Plan Your Trip sections."
        },
        {
          title: "Typical Users",
          content: "Target demographic: People aged 40-60 with basic computer skills who frequently use travel websites and have interest in traveling to Hakone, Japan. Primary environment: home devices such as laptops or tablets."
        },
        {
          title: "Methodology",
          content: "Study conducted on October 21st, 2025, from 12:26 PM to 1:54 PM. Process included: group testing of the website, pre/post questionnaires, consent forms, defined metrics for data collection, role assignments, and multiple dry runs before test day."
        },
        {
          title: "Tasks & Metrics",
          content: "Three tasks were given to participants: find a place to stay, find a restaurant/food, and find an activity. Metrics measured: Time on Task and Number of Pages Opened. Average results: Task 1 (3.9 pages, 1:17), Task 2 (3.4 pages, 1:00), Task 3 (3.1 pages, 0:42)."
        },
        {
          title: "Usability Problems Found",
          content: "1. Lack of Tab Visual Representation - some tabs didn't show what content looked like. 2. Small fonts on essential tabs caused users to skip vital information. 3. Dead links found in important areas like transportation booking. 4. Crucial information hidden under broad categories instead of being immediately visible."
        },
        {
          title: "Key Learnings",
          content: "Users navigate interfaces in different ways - some completed tasks in seconds, others took much longer. The importance of flexibility and 'reading the room' when conducting tests. Authentic and genuine data produces invaluable insights that can change how a product is received."
        }
      ],
      skills: ["Usability Testing", "Data Collection", "User Research", "Statistical Analysis", "Report Writing", "Team Coordination"]
    }
  },
  {
    title: "Incident Response Playbook",
    description: "Ransomware response plan with containment, recovery, and lessons learned.",
    icon: FileText,
    color: "from-primary/20 to-gradient-blue/20",
    technologies: ["Incident Response", "NIST Framework", "SIEM", "Splunk", "Wireshark"],
    fullContent: {
      overview: "A structured and practical playbook for responding to ransomware attacks in academic or simulated cybersecurity environments. Applicable to student lab environments, academic networks, and virtual systems used for cybersecurity training and research.",
      sections: [
        {
          title: "Ransomware Indicators",
          content: "Files renamed or encrypted with new extensions (.crypt, .locky). Presence of ransom notes or payment instructions. Unusual CPU or disk usage. Security tools disabled unexpectedly. Outbound traffic to suspicious IPs or servers."
        },
        {
          title: "Roles and Responsibilities",
          content: "Incident Commander: Oversees incident handling, coordinates communication. SOC Analyst: Reviews alerts, validates IOCs, identifies affected systems. System Administrator: Isolates infected machines, restores clean backups. Network Analyst: Blocks malicious IPs, monitors network traffic. Faculty Advisor: Provides guidance and ensures academic compliance."
        },
        {
          title: "Phase 1: Preparation",
          content: "Maintain secure and verified backups. Ensure endpoint detection and SIEM tools are active. Conduct cyber hygiene and awareness training. Maintain updated incident contact list. Use isolated virtual environments for malware testing."
        },
        {
          title: "Phase 2: Identification",
          content: "Detect suspicious behavior through alerts, logs, or user reports. Confirm ransomware indicators. Record affected systems, accounts, and timestamps. Classify the event and begin evidence collection. Tools: Splunk, Wireshark, Sysinternals Suite."
        },
        {
          title: "Phase 3: Containment",
          content: "Short-Term: Disconnect infected systems, disable file sharing and RDP, change passwords. Long-Term: Segment network, monitor for recurring encryption signatures, preserve forensic data."
        },
        {
          title: "Phase 4: Eradication",
          content: "Identify and delete malicious files and registry keys. Patch vulnerabilities and update security software. Reimage or reset compromised systems. Verify system health before reconnecting to network."
        },
        {
          title: "Phase 5: Recovery",
          content: "Restore clean backups and verify file integrity. Re-enable services gradually. Monitor for signs of re-infection. Document restoration steps for future reference."
        },
        {
          title: "Phase 6: Lessons Learned",
          content: "Conduct post-incident debrief. Document timeline, containment actions, and results. Identify improvements for detection and response. Update training materials and procedures."
        },
        {
          title: "Metrics & Reporting",
          content: "Time to Detect (TTD): Time between infection and alert detection. Time to Contain (TTC): Detection to isolation. Time to Recover (TTR): Containment to full restoration. Data Impact: Amount of lost, encrypted, or restored data."
        },
        {
          title: "References",
          content: "NIST SP 800-61 Rev. 2: Computer Security Incident Handling Guide. CISA: Ransomware Response Checklist. SANS: Incident Handler's Handbook. MITRE ATT&CK Framework: Ransomware Techniques & Mitigation."
        }
      ],
      skills: ["Incident Response", "Ransomware Analysis", "Forensic Investigation", "Documentation", "Team Coordination", "NIST Framework Application"]
    }
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3}
                    </Badge>
                  )}
                </div>
                
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex items-center gap-2 text-primary font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer hover:underline"
                >
                  <span>Learn more</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0 gap-0 overflow-hidden">
          <ScrollArea className="max-h-[90vh]">
            <div className="p-6 lg:p-8">
              <DialogHeader className="mb-6">
                <div className="flex items-start gap-4 mb-4">
                  {selectedProject && (
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${selectedProject.color} flex items-center justify-center flex-shrink-0`}>
                      <selectedProject.icon className="w-7 h-7 text-foreground" />
                    </div>
                  )}
                  <div>
                    <DialogTitle className="text-2xl font-display font-bold text-foreground">
                      {selectedProject?.title}
                    </DialogTitle>
                    <DialogDescription className="mt-2">
                      {selectedProject?.description}
                    </DialogDescription>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject?.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </DialogHeader>

              {selectedProject && (
                <div className="space-y-6">
                  {/* Overview */}
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Overview</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.fullContent.overview}
                    </p>
                  </div>

                  {/* Key Outcomes */}
                  {selectedProject.fullContent.keyOutcomes && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Key Outcomes</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {selectedProject.fullContent.keyOutcomes.map((outcome, i) => (
                          <li key={i}>{outcome}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Objectives */}
                  {selectedProject.fullContent.objectives && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Objectives</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {selectedProject.fullContent.objectives.map((objective, i) => (
                          <li key={i}>{objective}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Process */}
                  {selectedProject.fullContent.process && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Process</h3>
                      <ol className="list-decimal list-inside space-y-1 text-muted-foreground">
                        {selectedProject.fullContent.process.map((step, i) => (
                          <li key={i}>{step}</li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Findings */}
                  {selectedProject.fullContent.findings && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Key Findings</h3>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {selectedProject.fullContent.findings.map((finding, i) => (
                          <li key={i}>{finding}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Sections */}
                  {selectedProject.fullContent.sections && (
                    <div className="space-y-4">
                      {selectedProject.fullContent.sections.map((section, i) => (
                        <div key={i} className="border-l-2 border-primary/30 pl-4">
                          <h4 className="font-semibold text-foreground mb-1">{section.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{section.content}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Skills */}
                  {selectedProject.fullContent.skills && (
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">Skills Demonstrated</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.fullContent.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="bg-accent/50">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
