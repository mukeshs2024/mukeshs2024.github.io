"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  MapPin,
  ArrowRight,
  ExternalLink,
  Download,
  FileText,
  X,
  Menu,
} from "lucide-react";
import {
  navLinks,
  heroContent,
  experiences,
  projects,
  skillGroups,
  certifications,
  hackathonsAndEvents,
  education,
  resumePath,
  contactDetails,
  footerLinks,
} from "@/lib/portfolio";
import { TechBadge, SkillCard } from "@/components/tech-badge";
import { useImageExists, useExistingImages } from "@/lib/images";

// Custom Blur Reveal component to reuse animations once on scroll
function FadeUp({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function StackedCard({ children, index, total }: { children: React.ReactNode, index: number, total: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, margin: "-50px" }}
      className="md:sticky z-10 w-full"
      style={{
        top: `calc(100px + ${index * 30}px)`,
        zIndex: index + 10,
        marginBottom: index === total - 1 ? '0' : '8vh'
      }}
    >
      <div className="bg-gradient-to-b from-[#151515] to-[#111111] border border-[rgba(255,255,255,0.08)] rounded-none shadow-none hover:shadow-[0_0_15px_rgba(240,122,82,0.08)] hover:-translate-y-1 transition-all duration-500 ease-out p-8 md:p-10 will-change-transform">
        {children}
      </div>
    </motion.div>
  );
}

export function PortfolioPage() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll Progress Bar hooks
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Client-side image exist validations
  const profileExists = useImageExists(heroContent.profileImage);
  const cert1Exists = useImageExists(certifications[0]?.image);
  const cert2Exists = useImageExists(certifications[1]?.image);
  const cert3Exists = useImageExists(certifications[2]?.image);
  const cert4Exists = useImageExists(certifications[3]?.image);
  const certExistsArray = [cert1Exists, cert2Exists, cert3Exists, cert4Exists];
  const hasAnyCertImage = certExistsArray.some(Boolean);

  const exp1CertExists = useImageExists(experiences[0]?.certificateImage);
  const exp2CertExists = useImageExists(experiences[1]?.certificateImage);
  const expCertExistsArray = [exp1CertExists, exp2CertExists];

  const event1Images = useExistingImages(hackathonsAndEvents[0]?.images);
  const event2Images = useExistingImages(hackathonsAndEvents[1]?.images);
  const hasAnyEvents = event1Images.length > 0 || event2Images.length > 0;

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = navLinks.map((l) => l.href.slice(1));
      setIsScrolled(window.scrollY > 50);
      let currentSection = "home";
      const scrollPosition = window.scrollY + 250;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPosition) {
          currentSection = id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-darkbg text-heading font-mono overflow-x-hidden pt-[72px]">

      {/* Navigation */}
      <header
        className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${isScrolled ? "bg-darkbg border-b border-bordercol" : "bg-darkbg border-b border-transparent"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[72px] flex items-center justify-between">
          <a href="#home" className="text-base font-mono font-bold tracking-widest text-heading uppercase z-10">
            MUKESH S
          </a>

          <nav className="hidden md:flex items-center space-x-6 z-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`group relative py-2 px-1 text-sm font-mono font-bold tracking-[0.15em] uppercase transition-colors ${activeSection === link.href.slice(1) ? "text-accent" : "text-heading hover:text-accent"
                  }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  className={`absolute left-1/2 bottom-0 h-[2px] bg-orange-500 transition-all duration-300 -translate-x-1/2 ${activeSection === link.href.slice(1) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                />
              </a>
            ))}
          </nav>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-heading hover:text-accent focus:outline-none z-10"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-bordercol bg-darkbg overflow-hidden"
            >
              <nav className="flex flex-col py-4 px-4 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-semibold py-3 px-4 rounded-none transition-colors ${activeSection === link.href.slice(1)
                        ? "bg-gridcol text-accent border border-activeborder"
                        : "text-heading hover:bg-white/5"
                      }`}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Content wrapper */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ======================= HOME SECTION ======================= */}
        <div id="home" className="flex flex-col pb-12 border-b border-bordercol">

          {/* HERO */}
          <section className="relative py-20 md:py-28 flex flex-col items-start justify-center min-h-[85vh] overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gridcol rounded-none blur-[120px] pointer-events-none opacity-20" />

            <FadeUp className="relative z-10 flex flex-col items-start text-left space-y-8 w-full max-w-5xl">
              <div className="space-y-4 w-full">
                <h1 className="text-5xl sm:text-6xl md:text-[80px] lg:text-[90px] md:leading-[0.9] tracking-tight font-black text-heading uppercase flex flex-col w-full">
                  <span>CLOUD ENGINEER <span className="text-accent">&</span></span>
                  <span><span className="text-accent">AI SYSTEMS</span> BUILDER</span>
                </h1>
                <p className="text-xl sm:text-2xl font-mono font-bold text-muted uppercase tracking-widest pt-4 flex items-center">
                  {heroContent.name} // AI & CLOUD ENGINEER <span className="inline-block w-3 h-5 bg-accent ml-2 animate-blink" />
                </p>
              </div>

              <p className="text-[#94A3B8] font-semibold tracking-wider text-base sm:text-lg">
                {heroContent.techInline}
              </p>

              <div className="flex flex-wrap gap-4 pt-4 justify-start">
                <a
                  href="#projects"
                  className="group inline-flex items-center px-5 py-2.5 border border-activeborder text-sm font-semibold rounded-none shadow-none text-heading bg-gridcol hover:bg-surface hover:border-accent transition-all uppercase tracking-widest"
                >
                  OPEN_PROJECTS
                  <motion.span className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" transition={{ type: "tween", duration: 0.15 }}>
                    <ArrowRight className="h-4 w-4" />
                  </motion.span>
                </a>
                <a
                  href={resumePath}
                  className="group inline-flex items-center justify-center px-6 py-3 border border-activeborder text-xs font-mono font-bold rounded-none shadow-none text-accent bg-gridcol hover:bg-surface hover:border-accent transition-all uppercase tracking-widest"
                  download
                >
                  OPEN_RESUME
                  <motion.span className="ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" transition={{ type: "tween", duration: 0.15 }}>
                    <Download className="h-4 w-4" />
                  </motion.span>
                </a>

              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-8 mt-8 border-t border-bordercol">
                {heroContent.stats.map((stat) => (
                  <div key={stat.label} className="bg-secondarybg border border-bordercol rounded-none p-5 hover:border-activeborder hover:shadow-none transition-all duration-300">
                    <p className="text-3xl sm:text-4xl md:text-[32px] font-extrabold text-accent">{stat.value}</p>
                    <p className="text-xs font-semibold text-secondary uppercase tracking-wider mt-1.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </section>

          {/* ABOUT */}
          <section className="py-12 border-t border-bordercol mt-12">
            <FadeUp className="space-y-6 max-w-4xl">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold tracking-tight text-heading leading-tight uppercase font-sans font-black">
                  [ ENGINEERING PROFILE ]
                </h2>
                <p className="text-xs text-muted uppercase tracking-[0.2em] font-mono mt-2">SYSTEM ARCHITECTURE OVERVIEW</p>
              </div>
              <p className="text-xl sm:text-2xl text-body leading-relaxed font-medium">
                {heroContent.summary}
              </p>
            </FadeUp>
          </section>

          {/* HACKATHONS */}
          {hasAnyEvents && (
            <section className="py-12 border-t border-bordercol mt-12">
              <FadeUp className="space-y-8">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold tracking-tight text-heading leading-tight uppercase font-sans font-black">
                    [ Achievements & Hackathons ]
                  </h2>
                  <p className="text-xs text-muted uppercase tracking-[0.2em] font-mono mt-2">Prototyping runs and team competitions</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
                  {hackathonsAndEvents.map((item, idx) => {
                    const images = idx === 0 ? event1Images : event2Images;
                    if (images.length === 0) return null;

                    return (
                      <div
                        key={idx}
                        className="bg-secondarybg border border-bordercol rounded-none overflow-hidden hover:border-activeborder transition-colors group flex flex-col"
                      >
                        <div className="relative h-48 bg-darkbg border-b border-bordercol overflow-hidden hover:z-[9999]">
                          {images[0] && (
                            <img
                              src={images[0]}
                              alt={`${item.title} primary`}
                              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
                          <h3 className="absolute bottom-4 left-4 text-xl font-bold text-heading pointer-events-none">{item.title}</h3>
                        </div>

                        <div className="p-5 flex-1 flex flex-col justify-between">
                          <p className="text-sm text-body leading-relaxed mb-4">{item.description}</p>

                          {images.length > 1 && (
                            <div className="flex gap-2 mt-auto">
                              {images.slice(1, 4).map((img, imgIdx) => (
                                <button
                                  key={imgIdx}
                                  onClick={() => setSelectedImage(img)}
                                  className="relative h-12 w-16 rounded-none border border-bordercol overflow-hidden hover:border-accentHover transition-colors hover:z-[9999]"
                                >
                                  <img src={img} alt="thumbnail" className="w-full h-full object-cover" />
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </FadeUp>
            </section>
          )}

          {/* EXPERIENCE */}
          <section className="py-12 border-t border-bordercol relative mt-12">
            <FadeUp className="space-y-8">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold tracking-tight text-heading leading-tight uppercase font-sans font-black">
                  [ Internship Experience ]
                </h2>
                <p className="text-xs text-muted uppercase tracking-[0.2em] font-mono mt-2">Timeline of professional assignments</p>
              </div>

              <div className="relative pt-4">
                {experiences.map((exp, idx) => {
                  const certUrl = exp.certificateImage;
                  const hasCertificate = expCertExistsArray[idx];
                  return (
                    <StackedCard key={idx} index={idx} total={experiences.length}>
                      <div className={`grid gap-8 items-start ${hasCertificate ? "md:grid-cols-12" : "md:grid-cols-1"}`}>
                        <div className={`space-y-8 ${hasCertificate ? "md:col-span-7 lg:col-span-8" : ""}`}>
                          <div className="flex flex-wrap justify-between items-start gap-4">
                            <div className="space-y-2">
                              <h3 className="text-3xl md:text-4xl font-black text-heading uppercase tracking-tight">{exp.role}</h3>
                              <p className="text-base font-mono font-bold text-accent uppercase tracking-widest">{exp.organization}</p>
                            </div>
                            <div className="flex flex-col items-end space-y-3">
                              <span className="text-xs font-mono font-bold px-3 py-1.5 rounded-none bg-darkbg text-heading border border-[rgba(255,255,255,0.12)] uppercase tracking-widest">
                                [ {exp.status.toUpperCase()} ]
                              </span>
                              <span className="text-sm font-mono font-semibold text-muted tracking-wider">{exp.duration}</span>
                            </div>
                          </div>

                          <ul className="list-disc list-inside text-sm md:text-base text-body space-y-3 pl-1 leading-loose tracking-wide">
                            {exp.responsibilities.map((resp, rIdx) => <li key={rIdx}>{resp}</li>)}
                          </ul>

                          <div className="space-y-4 pt-4 border-t border-[rgba(255,255,255,0.05)]">
                            <h4 className="text-xs uppercase font-bold tracking-[0.15em] font-mono text-muted">SYSTEM_REQUIREMENTS</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.tech.map((t) => <TechBadge key={t} name={t} compact />)}
                            </div>
                          </div>
                        </div>

                        {hasCertificate && certUrl && (
                          <div className="md:col-span-5 lg:col-span-4 flex flex-col space-y-4 p-4 bg-darkbg border border-[rgba(255,255,255,0.05)] rounded-none">
                            <div className="relative w-full aspect-[4/3] rounded-none overflow-hidden border border-[rgba(255,255,255,0.08)] bg-[#0f0f0f] flex items-center justify-center">
                              {certUrl.endsWith('.pdf') ? (
                                <div className="flex flex-col items-center justify-center">
                                  <FileText className="h-10 w-10 text-muted mb-2" />
                                  <span className="text-xs text-muted font-mono font-semibold uppercase tracking-widest">[ PDF DOCUMENT ]</span>
                                </div>
                              ) : (
                                <img src={certUrl} alt="Certificate preview" className="w-full h-full object-cover opacity-70 grayscale-[0.2]" />
                              )}
                            </div>
                            <button
                              onClick={() => setSelectedImage(certUrl)}
                              className="group w-full flex items-center justify-center px-4 py-3 border border-[rgba(255,255,255,0.12)] rounded-none text-xs font-mono font-bold text-heading bg-secondarybg hover:bg-surface hover:border-accent transition-all uppercase tracking-widest"
                            >
                              <FileText className="h-4 w-4 mr-2 text-muted group-hover:text-accent transition-colors" />
                              OPEN_CERTIFICATE
                            </button>
                          </div>
                        )}
                      </div>
                    </StackedCard>
                  );
                })}
              </div>
            </FadeUp>
          </section>

        </div>

        {/* ======================= PROJECTS SECTION ======================= */}
        <div id="projects" className="py-16 border-b border-bordercol relative">
          <FadeUp className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold tracking-tight text-heading leading-tight uppercase font-sans font-black">
                [ Featured Projects ]
              </h2>
              <p className="text-xs text-muted uppercase tracking-[0.2em] font-mono mt-2">All project case studies</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
              {projects.map((project, idx) => {
                const shortFilename = project.title.split(':')[0].split(' ')[0].replace(/[^a-zA-Z0-9]/g, '_').toUpperCase();
                
                return (
                  <div key={idx} className="group relative flex flex-col bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-none hover:border-[rgba(240,122,82,0.4)] hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden cursor-pointer shadow-none">
                    
                    {/* Terminal Title Bar */}
                    <div className="flex items-center justify-between px-3 py-2 border-b border-[rgba(255,255,255,0.08)] bg-[#151515]">
                      <span className="text-[10px] font-mono font-bold text-muted uppercase tracking-widest">{shortFilename}.EXE</span>
                      <button className="text-[#555] hover:text-accent transition-colors">
                        <X className="h-3 w-3" />
                      </button>
                    </div>

                    {/* Project Screenshot Placeholder */}
                    {project.title.includes('VOLTIX') ? (
                      <div className="relative aspect-video bg-[#0B0B0B] border-b border-[rgba(255,255,255,0.05)] overflow-hidden">
                        <img src="/images/voltix.png" alt="Voltix Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30 mix-blend-overlay"></div>
                      </div>
                    ) : (
                      <div className="relative aspect-video bg-[#0B0B0B] border-b border-[rgba(255,255,255,0.05)] flex flex-col items-center justify-center p-4 text-center">
                        <span className="text-[10px] font-mono text-[#444] uppercase tracking-widest mb-1">------------------------------------</span>
                        <span className="text-xs font-mono font-bold text-muted uppercase tracking-wider">PROJECT_PREVIEW.PNG</span>
                        <span className="text-[10px] font-mono text-[#444] uppercase tracking-widest mt-1">------------------------------------</span>
                        <span className="text-[10px] font-mono text-[#555] mt-3">Image Placeholder<br/>Screenshot will be added later</span>
                        <span className="text-[10px] font-mono text-[#444] uppercase tracking-widest mt-3">------------------------------------</span>
                        
                        {/* CRT scanline effect specifically for the image area */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-30 mix-blend-overlay"></div>
                      </div>
                    )}

                    {/* Content Area */}
                    <div className="p-5 flex flex-col flex-grow">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-x-2 gap-y-2 mb-4">
                        {project.tech.slice(0, 4).map((t) => (
                          <span key={t} className="px-2 py-1 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] text-[10px] font-mono font-bold text-[#F07A52] uppercase tracking-widest">
                            #{t.toUpperCase()}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-base font-bold text-heading leading-tight mb-2 line-clamp-2 uppercase">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm font-mono text-muted leading-relaxed line-clamp-3 mb-6">
                        {project.description}
                      </p>

                      {/* Button */}
                      <div className="mt-auto pt-4 border-t border-[rgba(255,255,255,0.05)]">
                        <button 
                          onClick={() => { setSelectedProject(project); setCurrentSlide(0); }}
                          className="w-full py-1 text-[11px] font-mono font-bold text-muted uppercase tracking-[0.2em] group-hover:text-[#F07A52] transition-colors flex items-center justify-center focus:outline-none"
                        >
                          VIEW PROJECT
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>

        {/* ======================= SKILLS SECTION ======================= */}
        <div id="skills" className="py-16 border-b border-bordercol">
          <FadeUp className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold tracking-tight text-heading leading-tight uppercase font-sans font-black">
                [ Technical Skills ]
              </h2>
              <p className="text-xs text-muted uppercase tracking-[0.2em] font-mono mt-2">Categorized tool proficiency</p>
            </div>

            <div className="space-y-12">
              {skillGroups.map((group) => (
                <div key={group.title} className="space-y-5">
                  <h3 className="text-sm uppercase font-extrabold tracking-wider text-accent border-b border-bordercol pb-2">
                    {group.title}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {group.items.map((skill) => (
                      <SkillCard key={skill} name={skill} category={group.title} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* ======================= RESUME SECTION ======================= */}
        <div id="resume" className="py-16 border-b border-bordercol">
          <FadeUp className="space-y-12">

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold tracking-tight text-heading leading-tight uppercase font-sans font-black">
                  [ Resume ]
                </h2>
                <p className="text-xs text-muted uppercase tracking-[0.2em] font-mono mt-2">Academic details, certifications, and download</p>
              </div>
              <a
                href={resumePath}
                className="group inline-flex items-center px-6 py-3 border border-activeborder text-sm font-semibold rounded-none shadow-none text-heading bg-gridcol hover:bg-orange-700 transition-colors"
                download
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </a>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-heading border-b border-bordercol pb-2">Education</h3>
              <div className="max-w-4xl bg-secondarybg border border-bordercol rounded-none p-5 shadow-none flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 hover:border-activeborder transition-colors">
                <div>
                  <h3 className="text-xl font-bold text-heading">{education.college}</h3>
                  <p className="text-base font-semibold text-accent mt-1">{education.degree}</p>
                  <p className="text-sm text-muted mt-1">{education.duration}</p>
                </div>
                <div className="sm:text-right sm:border-l border-bordercol sm:pl-6 py-2">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-muted">CGPA</p>
                  <p className="text-3xl font-extrabold text-accent mt-1">{education.cgpa}</p>
                </div>
              </div>
            </div>

            {hasAnyCertImage && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-heading border-b border-bordercol pb-2">Certifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl">
                  {certifications.map((cert, certIdx) => {
                    const hasCertImg = certExistsArray[certIdx];
                    if (!hasCertImg) return null;

                    return (
                      <div key={certIdx} className="bg-secondarybg border border-bordercol rounded-none p-4 flex items-center gap-4 hover:border-activeborder transition-colors">
                        <div className="w-16 h-16 rounded-none overflow-hidden bg-darkbg border border-bordercol flex-shrink-0 flex items-center justify-center relative cursor-pointer" onClick={() => setSelectedImage(cert.image)}>
                          {cert.image.endsWith('.pdf') ? (
                            <FileText className="h-6 w-6 text-muted" />
                          ) : (
                            <img src={cert.image} alt={cert.title} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                          )}
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-bold text-heading truncate">{cert.title}</h3>
                          <p className="text-xs font-semibold text-accent mt-0.5 truncate">{cert.issuer}</p>
                        </div>

                        <button
                          onClick={() => setSelectedImage(cert.image)}
                          className="p-2 border border-bordercol rounded-none text-muted hover:text-heading hover:bg-surface transition-colors flex-shrink-0"
                          aria-label="View Certificate"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </FadeUp>
        </div>

        {/* ======================= PROFILES SECTION ======================= */}
        <div id="profiles" className="py-16">
          <FadeUp className="space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-[48px] font-extrabold tracking-tight text-heading leading-tight uppercase font-sans font-black">
                [ Profiles ]
              </h2>
              <p className="text-xs text-muted uppercase tracking-[0.2em] font-mono mt-2">Direct communication and professional links</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {contactDetails.map((contact, idx) => {
                const getIcon = (label: string) => {
                  switch (label.toLowerCase()) {
                    case "email": return <Mail className="h-6 w-6 text-accent" />;
                    case "phone": return <Phone className="h-6 w-6 text-accent" />;
                    case "linkedin": return <Linkedin className="h-6 w-6 text-accent" />;
                    case "github": return <Github className="h-6 w-6 text-accent" />;
                    case "location": return <MapPin className="h-6 w-6 text-accent" />;
                    case "leetcode": return <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png" className="h-6 w-6 filter invert opacity-80 hue-rotate-180 sepia brightness-150 text-accent" alt="LeetCode" />;
                    default: return <ExternalLink className="h-6 w-6 text-accent" />;
                  }
                };

                return (
                  <a
                    key={idx}
                    href={contact.href}
                    target={contact.href.startsWith("http") ? "_blank" : undefined}
                    rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                    className="bg-secondarybg border border-bordercol hover:border-activeborder rounded-none p-5 flex flex-col items-center text-center space-y-4 justify-center hover:-translate-y-1 transition-all duration-200"
                  >
                    <div className="p-3 bg-darkbg/40 rounded-none border border-bordercol">
                      {getIcon(contact.label)}
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-muted uppercase tracking-wider mb-1">
                        {contact.label}
                      </span>
                      <p className="text-sm font-bold text-heading truncate w-full max-w-[100px] leading-tight">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </FadeUp>
        </div>

      </main>

      {/* Footer */}
      <footer className="bg-darkbg border-t border-bordercol py-10 text-center text-xs text-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <p className="font-bold text-heading text-sm">
            Mukesh S · Data Analyst Candidate · Coimbatore
          </p>
          <div className="flex justify-center space-x-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors font-semibold"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="text-muted text-[10px] pt-2">
            &copy; {new Date().getFullYear()} Mukesh S. Data Analyst Candidate. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Fullscreen Certificate/Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-darkbg/85 "
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-4xl max-h-[90vh] bg-secondarybg rounded-none p-2 shadow-2xl overflow-hidden border border-bordercol"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 bg-darkbg/80 hover:bg-darkbg text-heading rounded-none shadow-none transition-colors z-10 border border-bordercol"
                aria-label="Close preview"
              >
                <X className="h-5 w-5" />
              </button>
              {selectedImage.endsWith('.pdf') ? (
                <iframe
                  src={selectedImage}
                  className="w-full h-[85vh] rounded-none bg-white"
                  title="PDF preview"
                />
              ) : (
                <img
                  src={selectedImage}
                  alt="Certificate / Image Preview"
                  className="max-w-full max-h-[85vh] object-contain rounded-none"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================= PROJECT DETAILS MODAL ======================= */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] bg-[#111111] border border-[rgba(255,255,255,0.08)] rounded-none shadow-2xl p-8 flex flex-col"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-[#555] hover:text-accent transition-colors focus:outline-none z-[11000]"
              >
                <X className="h-5 w-5" />
              </button>
              
              <div className="flex-1 overflow-y-auto pr-2" style={{ scrollbarWidth: 'thin', scrollbarColor: '#444 transparent' }}>
                <h3 className="text-2xl font-bold text-heading uppercase tracking-tight mb-2 pr-8 whitespace-pre-wrap">{selectedProject.title}</h3>
                <p className="text-sm font-mono font-bold text-accent uppercase tracking-widest mb-6">Status: {selectedProject.status}</p>

                {/* Carousel */}
                {(selectedProject as any).carouselImages && (selectedProject as any).carouselImages.length > 0 && (
                  <div className="relative w-full aspect-video bg-[#0B0B0B] border border-[rgba(255,255,255,0.05)] overflow-hidden mb-8 group">
                    <img 
                      src={(selectedProject as any).carouselImages[currentSlide]} 
                      alt={`${selectedProject.title} screenshot ${currentSlide + 1}`} 
                      className="w-full h-full object-cover" 
                    />
                    
                    {/* Navigation buttons */}
                    <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide((prev) => (prev === 0 ? (selectedProject as any).carouselImages.length - 1 : prev - 1)); }}
                        className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-full border border-[rgba(255,255,255,0.1)] transition-colors"
                      >
                        <ArrowRight className="w-5 h-5 rotate-180" />
                      </button>
                      <button 
                        onClick={(e) => { e.stopPropagation(); setCurrentSlide((prev) => (prev === (selectedProject as any).carouselImages.length - 1 ? 0 : prev + 1)); }}
                        className="p-2 bg-black/50 hover:bg-black/80 text-white rounded-full border border-[rgba(255,255,255,0.1)] transition-colors"
                      >
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Dots indicator */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                      {((selectedProject as any).carouselImages).map((_: string, idx: number) => (
                        <button
                          key={idx}
                          onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                          className={`w-2 h-2 rounded-full transition-all ${currentSlide === idx ? "bg-[#F07A52] w-4" : "bg-white/40 hover:bg-white/80"}`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                {/* Conditional rendering for detailed Voltix content */}
                {(selectedProject as any).overview ? (
                  <div className="space-y-8">
                    <section>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] font-mono text-[#666] mb-3 border-b border-[rgba(255,255,255,0.05)] pb-2">PROJECT OVERVIEW</h4>
                      <p className="text-sm font-mono text-muted leading-relaxed whitespace-pre-wrap">{(selectedProject as any).overview}</p>
                    </section>

                    <section>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] font-mono text-[#666] mb-3 border-b border-[rgba(255,255,255,0.05)] pb-2">KEY FEATURES</h4>
                      <ul className="list-none space-y-2">
                        {((selectedProject as any).keyFeatures || []).map((feature: string, i: number) => (
                          <li key={i} className="text-sm font-mono text-muted flex items-start">
                            <span className="text-[#F07A52] mr-2">•</span> {feature}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] font-mono text-[#666] mb-3 border-b border-[rgba(255,255,255,0.05)] pb-2">AUTONOMOUS WORKFLOW</h4>
                      <div className="flex flex-col items-center space-y-2 py-4 bg-[#0B0B0B] border border-[rgba(255,255,255,0.05)]">
                        {((selectedProject as any).workflow || []).map((step: string, i: number, arr: string[]) => (
                          <div key={i} className="flex flex-col items-center w-full">
                            <span className="text-xs font-mono text-heading bg-[#151515] border border-[rgba(255,255,255,0.08)] px-4 py-2 text-center w-3/4 max-w-xs">{step}</span>
                            {i < arr.length - 1 && <span className="text-[#555] my-2 text-lg">↓</span>}
                          </div>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] font-mono text-[#666] mb-3 border-b border-[rgba(255,255,255,0.05)] pb-2">TECHNICAL HIGHLIGHTS</h4>
                      <ul className="list-none space-y-2">
                        {((selectedProject as any).highlights || []).map((highlight: string, i: number) => (
                          <li key={i} className="text-sm font-mono text-muted flex items-start">
                            <span className="text-[#F07A52] mr-2">•</span> {highlight}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] font-mono text-[#666] mb-3 border-b border-[rgba(255,255,255,0.05)] pb-2">TECH STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {((selectedProject as any).fullTechStack || selectedProject.tech).map((t: string) => (
                          <span key={t} className="px-2 py-1 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] text-[10px] font-mono font-bold text-[#F07A52] uppercase tracking-widest">
                            #{t.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </section>

                    <section>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] font-mono text-[#666] mb-3 border-b border-[rgba(255,255,255,0.05)] pb-2">MY ROLE</h4>
                      <p className="text-sm font-mono text-muted mb-3">{(selectedProject as any).roleDesc}</p>
                      <ul className="list-none space-y-2">
                        {((selectedProject as any).myRole || []).map((roleItem: string, i: number) => (
                          <li key={i} className="text-sm font-mono text-muted flex items-start">
                            <span className="text-[#F07A52] mr-2">•</span> {roleItem}
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section>
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] font-mono text-[#666] mb-3 border-b border-[rgba(255,255,255,0.05)] pb-2">PROJECT METRICS</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {((selectedProject as any).metrics || []).map((metric: string, i: number) => (
                          <div key={i} className="bg-[#151515] border border-[rgba(255,255,255,0.05)] p-3 text-center flex items-center justify-center">
                            <span className="text-xs font-mono font-bold text-[#F07A52] tracking-wide">{metric}</span>
                          </div>
                        ))}
                      </div>
                    </section>
                  </div>
                ) : (
                  <>
                    <p className="text-base font-mono text-muted leading-relaxed mb-8">{selectedProject.description}</p>
                    
                    <div className="mb-8">
                      <h4 className="text-[10px] uppercase font-bold tracking-[0.2em] font-mono text-[#666] mb-3">TECH STACK</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                          <span key={t} className="px-2 py-1 bg-[#1A1A1A] border border-[rgba(255,255,255,0.08)] text-[10px] font-mono font-bold text-[#F07A52] uppercase tracking-widest">
                            #{t.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t border-[rgba(255,255,255,0.05)] mt-8">
                  {selectedProject.githubHref ? (
                    <a href={selectedProject.githubHref} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#151515] border border-[rgba(255,255,255,0.08)] text-sm font-semibold text-heading hover:border-accent hover:text-accent transition-colors"><Github className="h-4 w-4" /> GITHUB REPOSITORY</a>
                  ) : (
                    <span className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#151515] border border-[rgba(255,255,255,0.05)] text-sm font-semibold text-[#555] cursor-not-allowed"><Github className="h-4 w-4 opacity-40" /> PRIVATE REPOSITORY</span>
                  )}

                  {selectedProject.demoHref ? (
                    <a href={selectedProject.demoHref} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-accent text-darkbg text-sm font-semibold hover:bg-orange-600 transition-colors"><ExternalLink className="h-4 w-4" /> LIVE DEMO</a>
                  ) : (
                    <span className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#151515] border border-[rgba(255,255,255,0.05)] text-sm font-semibold text-[#555] cursor-not-allowed"><ExternalLink className="h-4 w-4 opacity-40" /> DEMO UNAVAILABLE</span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
