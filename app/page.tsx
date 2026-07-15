"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Eye,
  Plane,
  Satellite,
  Brain,
  Activity,
  Building2,
  ChevronDown,
  ChevronRight,
  ArrowUp,
  Mail,
  Phone,
  Globe,
  X,
  Menu,
  CheckCircle2,
  Users,
  GraduationCap,
  Building,
  Lightbulb,
  Award,
  Handshake,
  ArrowRight,
} from "lucide-react";

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Navigation Component
function Navigation() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -100px 0px" }
    );

    const sections = ["overview", "tracks", "research", "why-partner", "get-involved", "contact"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navLinks = [
    { id: "overview", label: "Overview" },
    { id: "tracks", label: "Tracks" },
    { id: "research", label: "Research Problems" },
    { id: "why-partner", label: "Why Partner" },
    { id: "leaders", label: "Leaders" },
    { id: "get-involved", label: "Get Involved" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-[#011627]/80 border-b border-[#FB8500]/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <Image src="/logo.png" alt="REEP Logo" width={280} height={80} className="object-contain h-16 w-auto" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-sm transition-colors hover:text-[#FB8500] ${
                  activeSection === link.id ? "text-[#FB8500]" : "text-[#9AA7B5]"
                }`}
              >
                {link.label}
              </button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("contact")}
              className="ml-4 px-5 py-2 bg-[#FB8500] text-white rounded-full text-sm font-semibold hover:bg-[#e67600] transition-colors"
            >
              Request an Exploratory Meeting
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden pb-4"
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left py-2 ${
                    activeSection === link.id ? "text-[#FB8500]" : "text-[#9AA7B5]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection("contact")}
                className="mt-3 w-full px-5 py-2 bg-[#FB8500] text-white rounded-full text-sm font-semibold"
              >
                Request an Exploratory Meeting
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}

// Hero Section
function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const scale = useTransform(scrollY, [0, 500], [1, 1.1]);

  const scrollToTracks = () => {
    document.getElementById("tracks")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Ken Burns */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Infrastructure tunnel"
          fill
          className="object-cover animate-kenburns"
          priority
        />
      </motion.div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#011627]/90 via-[#023047]/80 to-[#011627] z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="eyebrow-label text-[#FB8500] mb-6 flex items-center justify-center gap-2"
        >
          <span className="text-[#FB8500]">|</span>
          <span>REEP</span>
          <span className="text-[#FB8500]">|</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Space_Grotesk'] leading-tight mb-6"
        >
          <span className="text-white">Your Next Breakthrough Shouldn&apos;t</span>
          <br />
          <span className="text-[#FB8500]">Live Only in a Lab.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-[#9AA7B5] max-w-4xl mx-auto mb-10 leading-relaxed"
        >
          REEP puts your faculty and research scholars on live national infrastructure — real tunnels,
          real corridors, real 13,000-km asset platforms — with the data, funding and co-authorship to
          turn that access into published, patented, policy-grade research.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="px-8 py-4 bg-[#FB8500] text-white rounded-full text-lg font-semibold hover:bg-[#e67600] transition-all shadow-lg hover:shadow-[#FB8500]/25"
          >
            Become a Founding Partner
          </motion.button>
          <motion.button
            whileHover={{ x: 5 }}
            onClick={scrollToTracks}
            className="flex items-center gap-2 text-[#9AA7B5] hover:text-[#FB8500] transition-colors"
          >
            See the Four Tracks <ChevronDown className="w-5 h-5 animate-bounce" />
          </motion.button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-[#FB8500]/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-2 bg-[#FB8500] rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}

// Animated Counter
function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <div ref={ref} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-['Space_Grotesk']">
      {count.toLocaleString()}
      {suffix}
    </div>
  );
}

// Stat Bar
function StatBar() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: 25, suffix: "+", label: "Years of live infrastructure delivery" },
    { value: 13000, suffix: " km", label: "Road-asset platform, generating data now" },
    { value: 2000, suffix: "+", label: "Engineers as potential co-PIs" },
    { value: 170, suffix: "+", label: "Marquee projects to draw research problems from" },
  ];

  return (
    <section ref={ref} className="relative z-10 -mt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto glass-card rounded-2xl p-6 sm:p-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-sm text-[#9AA7B5] mt-2 uppercase tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

// Overview Section
function Overview() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const differentiators = [
    {
      title: "Joint, not transactional",
      description:
        "Your faculty co-design the problems and co-own the outcomes — equal voice in problem selection, IP and governance.",
    },
    {
      title: "Live data, not synthetic",
      description:
        "Every dataset comes from an operating corridor, tunnel, bridge or road-asset platform under a structured data-sharing agreement.",
    },
    {
      title: "Multi-year, not project-by-project",
      description:
        "REEP is built for sustained relationships — anchor Centres of Excellence run 3–5 years, not one semester.",
    },
  ];

  return (
    <section id="overview" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#011627]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="eyebrow-label text-[#FB8500] mb-4 flex items-center justify-center gap-2">
            <span className="text-[#FB8500]">|</span>
            <span>Overview</span>
            <span className="text-[#FB8500]">|</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            A Research Substrate Most Labs Can&apos;t Get On Their Own
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#9AA7B5] max-w-4xl mx-auto leading-relaxed">
            Most infrastructure research in India runs on simulated data, small local samples, or datasets that go stale
            before the paper is published. REEP exists to fix that.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.p variants={fadeInUp} className="text-lg text-[#9AA7B5] leading-relaxed">
            The RODIC Engineering Excellence Program pairs your faculty Principal Investigators with RODIC engineers —
            from Consultants, Advisory & Technology, or Rodic AI — on real research problems drawn from operating
            infrastructure: live tunnels, bridges, road networks, and agri-rural systems, instrumented with drones,
            satellite feeds, computer vision and IoT sensors at national scale.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg text-[#9AA7B5] leading-relaxed mt-4">
            The output isn&apos;t a one-off case study. It&apos;s a sustained pipeline: peer-reviewed papers,
            contributions to IS codes, joint patents, and a talent pipeline that walks straight from your classroom
            onto a live project site.
          </motion.p>
        </motion.div>

        {/* What Makes This Different Cards */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {differentiators.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(251, 133, 0, 0.1)" }}
              className="glass-card rounded-xl p-6 transition-all cursor-default"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#FB8500] flex items-center justify-center mb-4">
                {index === 0 && <Handshake className="w-6 h-6 text-[#FB8500]" />}
                {index === 1 && <Activity className="w-6 h-6 text-[#FB8500]" />}
                {index === 2 && <Award className="w-6 h-6 text-[#FB8500]" />}
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-3">{item.title}</h3>
              <p className="text-[#9AA7B5] leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Data Layer Section
function DataLayer() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const capabilities = [
    {
      icon: Eye,
      title: "Vision Intelligence",
      description:
        "Computer-vision models trained on dashcam, drone and CCTV imagery — asset condition, distress, encroachment, progress.",
    },
    {
      icon: Plane,
      title: "Drones & Aerial Survey",
      description:
        "Photogrammetry, LiDAR, volumetric and alignment-deviation monitoring on live corridors and active sites.",
    },
    {
      icon: Satellite,
      title: "Satellite & Geospatial",
      description:
        "Change detection, encroachment, landslide and slope-risk, climate-resilience mapping at corridor scale.",
    },
    {
      icon: Brain,
      title: "AI & Agentic Systems",
      description:
        "ML, predictive analytics and agentic workflows running inside real PMC, audit and governance operations.",
    },
    {
      icon: Activity,
      title: "IoT & Instrumentation",
      description:
        "Structural health monitoring, settlement and tunnel-convergence sensors, real-time field telemetry.",
    },
    {
      icon: Building2,
      title: "Digital Twins & 4D BIM",
      description:
        "Asset-level digital twins and schedule-risk analytics across active projects.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#011627] to-[#023047]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="eyebrow-label text-[#FB8500] mb-4 flex items-center justify-center gap-2">
            <span className="text-[#FB8500]">|</span>
            <span>Data Layer</span>
            <span className="text-[#FB8500]">|</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            The Data Layer Behind the Research
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#9AA7B5] max-w-4xl mx-auto leading-relaxed">
            This is the substrate your students would actually work with — not a mocked-up dataset, but the live
            instrumentation RODIC runs across its own project portfolio, shared with academic partners in anonymised
            form under NDA.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{
                y: -8,
                boxShadow: "0 0 40px rgba(251, 133, 0, 0.2)",
                borderColor: "rgba(251, 133, 0, 0.5)",
              }}
              className="glass-card rounded-xl p-6 transition-all cursor-default hover-glow"
            >
              <div className="w-12 h-12 rounded-full border-2 border-[#FB8500] flex items-center justify-center mb-4 bg-[rgba(251,133,0,0.1)]">
                <cap.icon className="w-6 h-6 text-[#FB8500]" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-3">{cap.title}</h3>
              <p className="text-[#9AA7B5] leading-relaxed text-sm">{cap.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Four Tracks Section
function FourTracks() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tracks = [
    {
      id: 1,
      title: "Joint Problem Cell & Sponsored Research",
      badge: "Flagship",
      icon: Lightbulb,
      content: {
        intro:
          "Set up a Joint Problem Cell led by your Faculty PI and a RODIC Co-PI. Take on 4–6 live research problems a year, worked through by faculty and PG/research-scholar teams over 6–9 months. Every problem ends in joint IP, co-authored publications, and benchmarks that feed directly into IS codes and sector bodies.",
        details: [
          { label: "Funding", value: "5-10 lakh per problem" },
          { label: "Team", value: "Faculty PI + RODIC Co-PI + MTech/PhD scholars" },
          { label: "Output", value: "Joint IP and co-authored publications" },
        ],
      },
    },
    {
      id: 2,
      title: "RODIC Centre of Excellence",
      badge: "Anchor",
      icon: Building,
      content: {
        intro:
          "A named, jointly governed Centre of Excellence at one anchor institution — AI for Infrastructure, Tunnels & Geotechnics, Highway Asset Management, or Geospatial Intelligence for Agri & Rural Systems. Comes with a named faculty chair, joint PhD scholars, and sabbatical exchanges with Rodic AI in Boston (CIC, MIT).",
        details: [
          { label: "Commitment", value: "2-4 crore over 3–5 years" },
          { label: "Governance", value: "Joint steering committee, faculty and RODIC leadership" },
          { label: "Output", value: "A long-term R&D pipeline, joint patents, and a chair that carries your institution's name" },
        ],
      },
    },
    {
      id: 3,
      title: "Live-Project & Live-Data Internships",
      badge: "Talent",
      icon: GraduationCap,
      content: {
        intro:
          "25–30 interns a year, embedded for 4–6 months — civil engineering students on active NHAI, metro and tunnel sites; CS, AI and data-science students on real datasets inside Rodic Advisory & Technology and Rodic AI. Every intern gets dual mentorship: one foot in your faculty, one foot in a live RODIC team.",
        details: [
          { label: "Streams", value: "Civil/Transport - Data Science/AI - Geospatial" },
          { label: "Mentorship", value: "Faculty mentor + RODIC mentor, on the same pairing through to the capstone" },
        ],
      },
    },
    {
      id: 4,
      title: "RODIC Academy & Infrastructure Challenge",
      badge: "Outreach",
      icon: Users,
      content: {
        intro:
          "A co-delivered certificate platform — your faculty and RODIC's senior engineers teaching AI for infrastructure, drone and geospatial workflows, BIM & 4D scheduling, NATM tunnelling, and modern bridge inspection — anchored by an annual national Infrastructure Challenge hackathon hosted with founding institutions.",
        details: [],
      },
    },
  ];

  return (
    <section id="tracks" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#023047]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="eyebrow-label text-[#FB8500] mb-4 flex items-center justify-center gap-2">
            <span className="text-[#FB8500]">|</span>
            <span>Four Ways to Get Involved</span>
            <span className="text-[#FB8500]">|</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Pick One Track, or Several
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#9AA7B5] max-w-4xl mx-auto leading-relaxed">
            Each is designed to plug into your institution&apos;s existing research strengths rather than compete with them.
          </motion.p>
        </motion.div>

        {/* Tab Buttons */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8"
        >
          {tracks.map((track, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`px-4 sm:px-6 py-3 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === index
                  ? "bg-[#FB8500] text-white"
                  : "bg-[#011627] text-[#9AA7B5] hover:text-white border border-[#FB8500]/30"
              }`}
            >
              <track.icon className="w-4 h-4" />
              <span className="hidden sm:inline">Track {String(track.id).padStart(2, "0")} - </span>
              <span>{track.badge}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Tab Content */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-[#FB8500]/20 text-[#FB8500] rounded-full text-sm font-medium">
                  {tracks[activeTab].badge}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-['Space_Grotesk'] text-white mb-4">
                Track {String(tracks[activeTab].id).padStart(2, "0")} - {tracks[activeTab].title}
              </h3>
              <p className="text-[#9AA7B5] leading-relaxed mb-6">{tracks[activeTab].content.intro}</p>

              {tracks[activeTab].content.details.length > 0 && (
                <div className="space-y-3">
                  {tracks[activeTab].content.details.map((detail, dIndex) => (
                    <div key={dIndex} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#FB8500] mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="text-white font-medium">{detail.label}:</span>{" "}
                        <span className="text-[#9AA7B5]">{detail.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// Research Problems Section
function ResearchProblems() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    "AI & Vision",
    "Drones, Satellite & Geospatial",
    "Agri-Tech & Rural",
    "Tunnels, Bridges & Metro",
    "Agentic Systems & Governance",
  ];

  const [activeFilter, setActiveFilter] = useState("AI & Vision");

  const problems = [
    {
      category: "AI & Vision",
      title: "CV-based pavement distress detection",
      description: "Pavement Condition Index at national scale",
    },
    {
      category: "AI & Vision",
      title: "Contractor performance analytics",
      description: "Defect Liability Period analytics on the Bihar 13,000-km platform",
    },
    {
      category: "AI & Vision",
      title: "Performance-based pavement design",
      description: "Calibrated for Indian conditions — direct input into IRC:37",
    },
    {
      category: "Drones, Satellite & Geospatial",
      title: "Satellite-based landslide & slope-risk mapping",
      description: "For Himalayan corridors",
    },
    {
      category: "Drones, Satellite & Geospatial",
      title: "Drone photogrammetry for construction audits",
      description: "Automated construction-progress audits",
    },
    {
      category: "Drones, Satellite & Geospatial",
      title: "Geospatial encroachment & ROW monitoring",
      description: "For rail and highway corridors",
    },
    {
      category: "Agri-Tech & Rural",
      title: "Satellite-based crop health & yield estimation",
      description: "At state scale",
    },
    {
      category: "Agri-Tech & Rural",
      title: "Rural road & PMGSY asset analytics",
      description: "At gram-panchayat resolution",
    },
    {
      category: "Agri-Tech & Rural",
      title: "Drone & AI for irrigation canal monitoring",
      description: "Intelligent water infrastructure management",
    },
    {
      category: "Tunnels, Bridges & Metro",
      title: "CV distress detection on inspections",
      description: "Bridge & tunnel inspection automation",
    },
    {
      category: "Tunnels, Bridges & Metro",
      title: "Predictive tunnel-face stability modelling",
      description: "For Himalayan rock conditions",
    },
    {
      category: "Tunnels, Bridges & Metro",
      title: "Digital twin + structural health monitoring",
      description: "For long-span cable bridges",
    },
    {
      category: "Agentic Systems & Governance",
      title: "Agentic workflows for project management",
      description: "Quality-audit triage automation",
    },
    {
      category: "Agentic Systems & Governance",
      title: "India's first embodied-carbon benchmark",
      description: "Dataset for infrastructure",
    },
    {
      category: "Agentic Systems & Governance",
      title: "Climate-resilient drainage design",
      description: "Cross-drainage for a shifting climate baseline",
    },
  ];

  const filteredProblems = problems.filter((p) => p.category === activeFilter);

  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#011627] dot-pattern">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="eyebrow-label text-[#FB8500] mb-4 flex items-center justify-center gap-2">
            <span className="text-[#FB8500]">|</span>
            <span>Research Problems</span>
            <span className="text-[#FB8500]">|</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6">
            Research Problems Waiting for the Right Lab
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#9AA7B5] max-w-4xl mx-auto leading-relaxed mb-8">
            Fifteen live problems, pulled straight from RODIC&apos;s project portfolio — each shaped to produce a real
            academic and industry output. Final scope is always co-decided with your Faculty PI.
          </motion.p>
        </motion.div>

        {/* Filter Chips */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === category
                  ? "bg-[#FB8500] text-white"
                  : "bg-[#023047] text-[#9AA7B5] hover:text-white border border-[#FB8500]/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="wait">
            {filteredProblems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2, delay: index * 0.03 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 10px 30px rgba(251, 133, 0, 0.15)",
                }}
                className="glass-card rounded-xl p-5 transition-all cursor-default"
              >
                <div className="px-2 py-1 bg-[#FB8500]/10 text-[#FB8500] rounded text-xs font-medium mb-3 inline-block">
                  {problem.category}
                </div>
                <h4 className="text-lg font-bold font-['Space_Grotesk'] text-white mb-2">{problem.title}</h4>
                <p className="text-[#9AA7B5] text-sm">{problem.description}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-[#9AA7B5] text-sm mt-8 max-w-3xl mx-auto"
        >
          Every problem is a feeder into real institutions — IRC, IABSE, ITA-AITES, ICAR, ISRO, MoRTH, MoRD, BRO, CWC
          and MoEFCC are named recipients across this portfolio.
        </motion.p>
      </div>
    </section>
  );
}

// Benefits Section
function Benefits() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const benefits = {
    institution: [
      "Peer-reviewed credibility in IRC, IABSE, ASCE, ITA-AITES, ICAR and ISRO journals — a citation footprint anchored in live national infrastructure, not a synthetic dataset.",
      "Direct visibility with MoRTH, MoRD, BRO, CWC and MoEFCC and ICAR through joint research outputs.",
      "A named Centre of Excellence carrying your institution's brand on a marquee multi-year program.",
      "An international footprint through sabbaticals and exchanges with Rodic AI in Boston (CIC, MIT).",
      "Recurring sponsored research funding on a predictable 3–5 year horizon.",
      "Standing, ongoing access to 13,000 km of live road-asset data, drone surveys and structural-health telemetry — not a one-time dataset.",
    ],
    faculty: [
      "Access to live infrastructure data under NDA — a research substrate that's otherwise nearly impossible to acquire.",
      "Joint authorship with industry co-authors on peer-reviewed publications.",
      "Funded sponsored research at 5-10 lakh per Joint Problem Cell project.",
      "Sabbatical and exchange opportunities with Rodic AI in Boston.",
      "Joint patents and shared IP ownership.",
    ],
    students: [
      "Thesis and capstone problems grounded in live, large-scale infrastructure datasets — not toy data.",
      "Dual mentorship from a faculty PI and a RODIC Co-PI on active project teams.",
      "Direct exposure to MoRTH, NHAI, BRO and ICAR project ecosystems.",
      "A real conversion pathway into full-time research and engineering roles at RODIC.",
    ],
  };

  return (
    <section id="why-partner" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#011627] to-[#023047]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="eyebrow-label text-[#FB8500] mb-4 flex items-center justify-center gap-2">
            <span className="text-[#FB8500]">|</span>
            <span>Why Partner</span>
            <span className="text-[#FB8500]">|</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk']">
            What Your Institution Actually Gets
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* For the Institution */}
          <motion.div variants={fadeInUp} className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FB8500]/20 flex items-center justify-center">
                <Building className="w-5 h-5 text-[#FB8500]" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">For the Institution</h3>
            </div>
            <ul className="space-y-3">
              {benefits.institution.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-[#9AA7B5]">
                  <CheckCircle2 className="w-4 h-4 text-[#FB8500] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* For Faculty */}
          <motion.div variants={fadeInUp} className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FB8500]/20 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-[#FB8500]" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">For Faculty PIs</h3>
            </div>
            <ul className="space-y-3">
              {benefits.faculty.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-[#9AA7B5]">
                  <CheckCircle2 className="w-4 h-4 text-[#FB8500] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* For Students */}
          <motion.div variants={fadeInUp} className="glass-card rounded-xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#FB8500]/20 flex items-center justify-center">
                <Users className="w-5 h-5 text-[#FB8500]" />
              </div>
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white">For Students</h3>
            </div>
            <ul className="space-y-3">
              {benefits.students.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-[#9AA7B5]">
                  <CheckCircle2 className="w-4 h-4 text-[#FB8500] mt-1 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Leaders Section
const leaders = [
  { name: "Mr. Raj Kumar", designation: "Chairman & Managing Director", image: "/media/raj-kumar.png" },
  { name: "Mr. Anshuman Krishanu", designation: "Chief Operating Officer", image: "/media/anshuman-new.png" },
  { name: "Mr. Sapan Gupta", designation: "Chief Financial Officer", image: "/media/sapan-new.png" },
];

function LeadersSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="leaders" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#023047]">
      <div ref={ref} className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[35%_65%] gap-12 lg:gap-8 items-start">
          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="flex flex-col"
          >
            <motion.div variants={fadeInUp} className="eyebrow-label text-[#FB8500] mb-4 flex items-center gap-2">
              <span className="text-[#FB8500]">|</span>
              <span>LEADERSHIP</span>
              <span className="text-[#FB8500]">|</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-['Space_Grotesk'] mb-6">
              <span className="font-light block text-white">RODIC Group</span>
              <span className="font-bold text-[#FB8500] block mt-2 tracking-wider">LEADERSHIP</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="text-lg text-[#9AA7B5] mb-8 leading-relaxed">
              Meet the dedicated leaders driving RODIC forward with unparalleled experience and a commitment to infrastructure innovation.
            </motion.p>
            
            <motion.div variants={fadeInUp}>
              <a href="https://rodicconsultants.com/about-us" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-4 group cursor-pointer">
                <div className="w-12 h-12 rounded-full bg-[#FB8500] flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-[#FB8500]/25">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <span className="text-white font-bold tracking-wider">EXPLORE</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {leaders.map((leader, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp} 
                className="group relative rounded-xl overflow-hidden bg-[#011627] hover:-translate-y-1 hover:shadow-xl hover:shadow-[#011627]/50 transition-all duration-300 border border-[#FB8500]/10"
              >
                <div className="aspect-[3/4] relative">
                  {leader.image ? (
                    <img 
                      src={leader.image} 
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-[#011627] flex items-center justify-center">
                      <span className="text-4xl text-[#9AA7B5]">?</span>
                    </div>
                  )}
                </div>
                <div className="p-5 border-t border-[#FB8500]/10">
                  <h3 className="text-white font-semibold text-lg font-['Space_Grotesk'] mb-1">{leader.name}</h3>
                  <p className="text-[#FB8500] text-sm font-medium">{leader.designation}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Joint Accordion Section
function JointAccordion() {
  const [openIndex, setOpenIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    {
      title: "Every problem is co-scoped",
      content:
        "Nothing starts until the Faculty PI and RODIC Co-PI agree on what's being studied and how. This ensures alignment from day one and prevents wasted effort on divergent objectives.",
    },
    {
      title: "Data is shared under NDA",
      content:
        "In anonymised and aggregated form, with a standard framework and project-specific addenda where needed. This protects both the client interests and enables genuine research collaboration.",
    },
    {
      title: "IP is co-owned",
      content:
        "Between the institution and RODIC, with commercialisation revenue shared as agreed — joint patent filings are actively encouraged, not an afterthought. We want you to own what you create.",
    },
    {
      title: "Publication rights are protected",
      content:
        "Faculty and scholars publish on normal academic timelines; RODIC's review is limited to confidentiality and client obligations, never editorial control. Your academic freedom is preserved.",
    },
    {
      title: "Centres of Excellence get joint steering committees",
      content:
        "With senior representation from both sides meeting every quarter to ensure governance is truly collaborative and strategic decisions are made together.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#023047]">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="eyebrow-label text-[#FB8500] mb-4 flex items-center justify-center gap-2">
            <span className="text-[#FB8500]">|</span>
            <span>Governance</span>
            <span className="text-[#FB8500]">|</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-4">
            Built to Be Genuinely Joint
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#9AA7B5]">
            This section exists because Deans and PIs ask about it before anything else — so here&apos;s the honest answer, upfront.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="space-y-3"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#011627]/50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 rounded-full bg-[#FB8500]/20 flex items-center justify-center text-[#FB8500] font-bold text-sm">
                    {index + 1}
                  </span>
                  <span className="text-lg font-medium text-white font-['Space_Grotesk']">
                    {item.title}
                  </span>
                </div>
                <ChevronRight
                  className={`w-5 h-5 text-[#FB8500] transition-transform ${
                    openIndex === index ? "rotate-90" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 pl-[72px]">
                      <p className="text-[#9AA7B5]">{item.content}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Founding Partner Banner
function FoundingPartnerBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#011627] relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div ref={ref} className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="glass-card rounded-2xl p-8 sm:p-12 border-2 border-[#FB8500]/30 text-center"
        >
          <motion.div variants={fadeInUp} className="eyebrow-label text-[#FB8500] mb-6">
            Founding Partners
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-6"
          >
            <span className="text-white">We&apos;re Not Looking for Vendors.</span>
            <br />
            <span className="text-[#FB8500]">We&apos;re Looking for Co-Architects.</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#9AA7B5] max-w-3xl mx-auto leading-relaxed mb-6">
            RODIC is inviting three to five founding institutional partners to build REEP from the ground up — with
            equal say in problem selection, IP terms, and how Centres of Excellence are governed.
          </motion.p>
          <motion.p variants={fadeInUp} className="text-lg text-[#9AA7B5] max-w-3xl mx-auto leading-relaxed">
            We&apos;re in conversation with IISc, select IITs with civil, AI and agri-tech depth, NITs co-located with
            our project geographies, and premier private universities with applied research strength. Founding partners
            don&apos;t just join the program — they shape its research agenda, its MoU framework, and its governance
            model for everyone who joins after.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

// How This Starts Stepper
function HowThisStarts() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      week: "Weeks 1-2",
      title: "Exploratory meeting with your Dean R&D and identified Faculty PIs to align on shared research interest.",
    },
    {
      week: "Weeks 3-6",
      title: "Joint scoping of 4-6 candidate problems, mapped against your institution's existing research strengths.",
    },
    {
      week: "Weeks 6-12",
      title: "MoU finalised — data-sharing NDA, IP terms, and publication framework all agreed in writing.",
    },
    {
      week: "Quarter Two",
      title: "First Joint Problem Cell sprint begins; internship cohort deployed; joint announcement with your institution.",
    },
  ];

  return (
    <section id="get-involved" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#011627] to-[#023047]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="eyebrow-label text-[#FB8500] mb-4 flex items-center justify-center gap-2">
            <span className="text-[#FB8500]">|</span>
            <span>Process</span>
            <span className="text-[#FB8500]">|</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk']">
            How This Starts
          </motion.h2>
        </motion.div>

        {/* Desktop Stepper */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="hidden md:block"
        >
          <div className="relative">
            {/* Progress Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-[#023047]" />
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100%" } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="absolute top-12 left-0 h-0.5 bg-[#FB8500]"
            />

            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <motion.div key={index} variants={fadeInUp} className="relative pt-24 text-center">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="w-24 h-24 rounded-full glass-card flex items-center justify-center border-2 border-[#FB8500]"
                    >
                      <span className="text-3xl font-bold text-[#FB8500] font-['Space_Grotesk']">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </motion.div>
                  </div>
                  <div className="px-2">
                    <div className="text-[#FB8500] font-medium mb-2">{step.week}</div>
                    <p className="text-[#9AA7B5] text-sm leading-relaxed">{step.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Mobile Stepper */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="md:hidden space-y-6"
        >
          {steps.map((step, index) => (
            <motion.div key={index} variants={fadeInUp} className="glass-card rounded-xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#FB8500]/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-[#FB8500]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div>
                  <div className="text-[#FB8500] font-medium mb-1">{step.week}</div>
                  <p className="text-[#9AA7B5] text-sm leading-relaxed">{step.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="text-center text-[#9AA7B5] text-sm mt-10 max-w-3xl mx-auto"
        >
          Anchor Centre of Excellence engagements run on a parallel, longer track — the steering committee is
          constituted right after the MoU is signed.
        </motion.p>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    institution: "",
    role: "",
    email: "",
    phone: "",
    areaOfInterest: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#011627]">
      <div ref={ref} className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-12"
        >
          <motion.div variants={fadeInUp} className="eyebrow-label text-[#FB8500] mb-4 flex items-center justify-center gap-2">
            <span className="text-[#FB8500]">|</span>
            <span>Contact</span>
            <span className="text-[#FB8500]">|</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Space_Grotesk'] mb-4">
            Start the Conversation
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-lg text-[#9AA7B5]">
            Request an exploratory meeting with our partnerships team.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid lg:grid-cols-2 gap-8 items-start"
        >
          {/* Contact Form */}
          <motion.div variants={fadeInUp} className="glass-card rounded-2xl p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#023047] border border-[#FB8500]/30 rounded-lg text-white placeholder-[#9AA7B5] focus:border-[#FB8500] focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Institution *</label>
                  <input
                    type="text"
                    required
                    value={formData.institution}
                    onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                    className="w-full px-4 py-3 bg-[#023047] border border-[#FB8500]/30 rounded-lg text-white placeholder-[#9AA7B5] focus:border-[#FB8500] focus:outline-none transition-colors"
                    placeholder="Your institution"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Role/Designation *</label>
                  <input
                    type="text"
                    required
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-3 bg-[#023047] border border-[#FB8500]/30 rounded-lg text-white placeholder-[#9AA7B5] focus:border-[#FB8500] focus:outline-none transition-colors"
                    placeholder="e.g., Dean R&D, Professor"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#023047] border border-[#FB8500]/30 rounded-lg text-white placeholder-[#9AA7B5] focus:border-[#FB8500] focus:outline-none transition-colors"
                    placeholder="your.email@institution.edu"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Phone (optional)</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-[#023047] border border-[#FB8500]/30 rounded-lg text-white placeholder-[#9AA7B5] focus:border-[#FB8500] focus:outline-none transition-colors"
                    placeholder="+91 ..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">Area of Interest *</label>
                  <select
                    required
                    value={formData.areaOfInterest}
                    onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                    className="w-full px-4 py-3 bg-[#023047] border border-[#FB8500]/30 rounded-lg text-white focus:border-[#FB8500] focus:outline-none transition-colors"
                  >
                    <option value="">Select an option</option>
                    <option value="Joint Problem Cell">Joint Problem Cell</option>
                    <option value="Centre of Excellence">Centre of Excellence</option>
                    <option value="Internships">Internships</option>
                    <option value="Academy/Hackathon">Academy/Hackathon</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-white mb-2">Message</label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#023047] border border-[#FB8500]/30 rounded-lg text-white placeholder-[#9AA7B5] focus:border-[#FB8500] focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your research interests..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-4 bg-[#FB8500] text-white rounded-lg font-semibold text-lg hover:bg-[#e67600] transition-colors flex items-center justify-center gap-2"
              >
                Request an Exploratory Meeting <ArrowRight className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Card */}
          <motion.div variants={fadeInUp} className="space-y-6">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold font-['Space_Grotesk'] text-white mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FB8500]/20 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-[#FB8500]" />
                  </div>
                  <div>
                    <div className="text-white font-medium">T.S. Praveen Kumar</div>
                    <div className="text-[#9AA7B5] text-sm">Partnerships Lead, REEP - RODIC Group</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FB8500]/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-[#FB8500]" />
                  </div>
                  <a href="mailto:reep.partnerships@rodicconsultants.com" className="text-[#9AA7B5] hover:text-[#FB8500] transition-colors">
                    reep.partnerships@rodicconsultants.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FB8500]/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-[#FB8500]" />
                  </div>
                  <a href="tel:+919123541097" className="text-[#9AA7B5] hover:text-[#FB8500] transition-colors">
                    +91 9123541097
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FB8500]/20 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5 text-[#FB8500]" />
                  </div>
                  <a
                    href="https://rodicconsultants.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#9AA7B5] hover:text-[#FB8500] transition-colors"
                  >
                    rodicconsultants.com
                  </a>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="glass-card rounded-2xl overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/DSC06058.jpg"
                  alt="Partnership discussion"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#011627] via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <p className="text-[#9AA7B5] text-sm italic">
                  &ldquo;We believe the best research happens when academia and industry work as true
                  partners, not as client and vendor.&rdquo;
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#011627] border-t border-[#FB8500]/20 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <Image src="/logo.png" alt="REEP Logo" width={280} height={80} className="object-contain h-16 w-auto" />
            </div>
            <p className="text-[#9AA7B5] text-sm">
              The RODIC Engineering Excellence Program. Turning live national infrastructure into published, patented,
              policy-grade academic research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-medium mb-4 font-['Space_Grotesk']">Quick Links</h4>
            <ul className="space-y-2">
              {["Overview", "Tracks", "Research Problems", "Why Partner", "Leaders", "Get Involved"].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase().replace(" ", "-"))?.scrollIntoView({ behavior: "smooth" })}
                    className="text-[#9AA7B5] hover:text-[#FB8500] transition-colors text-sm"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-medium mb-4 font-['Space_Grotesk']">Contact</h4>
            <ul className="space-y-2 text-sm text-[#9AA7B5]">
              <li>reep.partnerships@rodicconsultants.com</li>
              <li>+91 9123541097</li>
              <li>
                <a href="https://rodicconsultants.com" target="_blank" rel="noopener noreferrer" className="hover:text-[#FB8500] transition-colors">
                  rodicconsultants.com
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4 font-['Space_Grotesk']">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#9AA7B5] hover:text-[#FB8500] transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-[#9AA7B5] hover:text-[#FB8500] transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FB8500]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#9AA7B5] text-xs text-center sm:text-left">
            A Division of Rodic Consultants Private Limited. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://rodicconsultants.com" target="_blank" rel="noopener noreferrer" className="text-[#9AA7B5] hover:text-[#FB8500] transition-colors">
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-[#FB8500] text-white flex items-center justify-center shadow-lg hover:bg-[#e67600] transition-colors z-50"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </footer>
  );
}

// Main Page
export default function Page() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <StatBar />
      <Overview />
      <DataLayer />
      <FourTracks />
      <ResearchProblems />
      <Benefits />
      <LeadersSection />
      <JointAccordion />
      <FoundingPartnerBanner />
      <HowThisStarts />
      <ContactSection />
      <Footer />
    </main>
  );
}
