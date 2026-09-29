import { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Shield,
  Server,
  Cloud,
  Lock,
  Cpu,
  Activity,
  FileCheck,
  Layers,
  Phone,
  Mail,
  ExternalLink,
  CheckCircle,
  MoveRight,
} from "lucide-react";

/* ─── design tokens ─────────────────────────────── */
const T = {
  teal: "#0f8f86",
  tealDark: "#0a6e67",
  tealLight: "#d0ece7",
  navy: "#0c2135",
  charcoal: "#1d2430",
  mid: "#4b5563",
  light: "#f4f7f7",
  border: "#e5e9ec",
  white: "#ffffff",
};

const assetPathPrefix = "/assets";
const imgGroup  = `${assetPathPrefix}/db296.svg`;
const imgGroup1 = `${assetPathPrefix}/9ea92.svg`;
const imgGroup2 = `${assetPathPrefix}/86bbb.svg`;
const imgGroup3 = `${assetPathPrefix}/91895.svg`;
const imgGroup4 = `${assetPathPrefix}/5dc05.svg`;
const imgGroup5 = `${assetPathPrefix}/87449.svg`;
const imgIcon1  = `${assetPathPrefix}/94501.svg`;
const imgGroup6 = `${assetPathPrefix}/2d9a8.svg`;
const imgGroup7 = `${assetPathPrefix}/0e265.svg`;
const imgArrowDown = `${assetPathPrefix}/81ce4.svg`;

const navLinks = [
  { label: "Why TSE", href: "#why-tse" },
  {
    label: "What We Build",
    href: "#capabilities",
    sub: [
      "Technology Strategy & Advisory",
      "Infrastructure & Networking",
      "Cloud Engineering",
      "Cybersecurity",
      "DevOps & Automation",
      "Managed Technology Operations",
      "Information Security & Governance",
      "OS & Platform Hardening",
    ],
  },
  { label: "How We Work", href: "#how-we-work" },
  { label: "Security & Compliance", href: "#security" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const capabilities = [
  { icon: <Layers size={22} />, title: "Technology Strategy & Advisory", body: "Translate business vision into a practical technology roadmap." },
  { icon: <Server size={22} />, title: "Infrastructure & Networking", body: "Build reliable, resilient environments for people, systems and locations." },
  { icon: <Cloud size={22} />, title: "Cloud Engineering", body: "Design cloud architecture around scalability, security and operational needs." },
  { icon: <Shield size={22} />, title: "Cybersecurity", body: "Build security into the environment instead of applying it after implementation." },
  { icon: <Cpu size={22} />, title: "DevOps & Automation", body: "Improve repeatability, deployment efficiency and engineering consistency." },
  { icon: <Activity size={22} />, title: "Managed Technology Operations", body: "Operate, monitor and continuously improve business-critical environments." },
  { icon: <FileCheck size={22} />, title: "Information Security & Governance", body: "Align controls, governance and operational practices with business and compliance requirements." },
  { icon: <Lock size={22} />, title: "Platform & OS Hardening", body: "Engineer hardened environments for enterprise and specialised operational use cases." },
];

const lifecycle = ["Understand", "Strategise", "Architect", "Build", "Secure", "Operate", "Scale"];

const principles = [
  { word: "Quality", body: "Engineering choices should continue to make sense after the implementation is complete." },
  { word: "Ownership", body: "When TSE takes responsibility, we stay accountable for the technology outcome." },
  { word: "Ethics", body: "We recommend what the business needs, not what is easiest to sell." },
];

const caseStudies = [
  { headline: "Scaling from Day 1 to 400+ Employees", context: "Fast-growing business", body: "Built and evolved the technology foundation supporting a fast-growing business from its early stage to more than 400 employees." },
  { headline: "Requirement Re-Engineered: ₹18L to ₹2.5L", context: "Infrastructure redesign", body: "Challenged a traditional infrastructure approach and redesigned the solution around the actual business requirement." },
  { headline: "Eliminating Hidden Productivity Loss", context: "Enterprise wireless", body: "Re-engineered enterprise wireless infrastructure where poor performance was creating measurable productivity cost." },
  { headline: "Industrial Automation OS Hardening", context: "Specialised environment", body: "Designed a Windows 11 Enterprise LTSC hardening approach for an industrial automation engineering environment." },
];

const metrics = [
  { value: "20+", label: "Years of Engineering Experience" },
  { value: "35+", label: "Active Customers" },
  { value: "10+", label: "Year Long-Term Relationships" },
  { value: "0", label: "Reported Compliance Issues" },
];

const steps = [
  { n: "01", title: "Understand the Business", body: "Vision, model, customers, people, operations and dependencies." },
  { n: "02", title: "Understand the Future", body: "Where does the business need to be in the next 3–5 years?" },
  { n: "03", title: "Assess the Technology", body: "What exists today? What works? What creates cost, risk or friction?" },
  { n: "04", title: "Design the Architecture", body: "Create the technology foundation around business priorities and growth." },
  { n: "05", title: "Engineer & Implement", body: "Build with quality, operational discipline and future maintainability." },
  { n: "06", title: "Secure & Govern", body: "Integrate security, controls and accountability into the environment." },
  { n: "07", title: "Operate & Evolve", body: "Keep technology aligned as the business changes." },
];

const section = (bg = T.white): React.CSSProperties => ({
  backgroundColor: bg,
  padding: "clamp(64px, 9vw, 120px) clamp(24px, 9vw, 154px)",
});

const h2Style: React.CSSProperties = {
  fontSize: "clamp(28px, 3.5vw, 48px)",
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: "-1px",
  color: T.charcoal,
  margin: 0,
};

const bodyStyle: React.CSSProperties = {
  fontSize: "clamp(15px, 1.5vw, 18px)",
  lineHeight: 1.7,
  color: T.mid,
  margin: 0,
};

function Navbar({ transparent }: { transparent: boolean }) {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, transition: "background 0.3s, box-shadow 0.3s", background: transparent ? "rgba(0,0,0,0)" : "rgba(12,33,53,0.97)", backdropFilter: "blur(16px)", boxShadow: transparent ? "none" : "0 1px 0 rgba(255,255,255,0.07)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "16px clamp(16px, 5vw, 48px)", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 24 }}>
        <a href="#hero" style={{ textDecoration: "none", display: "inline-grid", lineHeight: 0, flexShrink: 0 }}>
          <div style={{ gridColumn: 1, gridRow: 1, width: 101.822, height: 45.225, overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", inset: "77.01% 0 2.62% 50.49%" }}><img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} src={imgGroup} /></div>
            <div style={{ position: "absolute", inset: "39.35% 7.3% 40.28% 49.64%" }}><img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} src={imgGroup1} /></div>
            <div style={{ position: "absolute", inset: "1.86% 15.78% 77.77% 49.87%" }}><img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} src={imgGroup2} /></div>
            <div style={{ position: "absolute", inset: "0 55.58% 0 0" }}><img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} src={imgGroup3} /></div>
          </div>
          <p style={{ gridColumn: 1, gridRow: 1, marginTop: 48.3, marginLeft: 0, position: "relative", whiteSpace: "nowrap", color: "white", letterSpacing: "1.9237px", fontFamily: "'Poppins:Regular'", fontWeight: 400, fontSize: 8.016, fontStyle: "normal", lineHeight: "normal" }}>Ignite Innovations</p>
        </a>
        <nav style={{ display: "flex", alignItems: "center", gap: 4, flexWrap: "nowrap" }} className="desktop-nav">
          {navLinks.map((l) => l.sub ? (
            <div key={l.label} style={{ position: "relative" }} onMouseEnter={() => setDropOpen(true)} onMouseLeave={() => setDropOpen(false)}>
              <button style={{ background: "none", border: "none", cursor: "pointer", color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 500, padding: "8px 12px", display: "flex", alignItems: "center", gap: 4, borderRadius: 6, whiteSpace: "nowrap" }}>
                {l.label} <ChevronDown size={14} />
              </button>
              {dropOpen && (
                <div style={{ position: "absolute", top: "100%", left: 0, backgroundColor: T.navy, border: "1px solid rgba(255,255,255,0.1)", borderRadius: 10, padding: "8px 0", minWidth: 260, boxShadow: "0 20px 48px rgba(0,0,0,0.4)", zIndex: 200 }}>
                  {l.sub.map((s) => <a key={s} href="#capabilities" style={{ display: "block", padding: "10px 20px", color: "rgba(255,255,255,0.8)", fontSize: 13, textDecoration: "none", whiteSpace: "nowrap" }}>{s}</a>)}
                </div>
              )}
            </div>
          ) : (
            <a key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.8)", fontSize: 13, fontWeight: 500, padding: "8px 12px", textDecoration: "none", borderRadius: 6, whiteSpace: "nowrap" }}>{l.label}</a>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
          <a href="#contact" style={{ backgroundColor: T.teal, color: "white", fontSize: 13, fontWeight: 600, padding: "10px 20px", borderRadius: 8, textDecoration: "none", whiteSpace: "nowrap" }}>Talk to TSE</a>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" style={{ background: "white", border: "none", cursor: "pointer", width: 40, height: 40, borderRadius: 99, display: "flex", alignItems: "center", justifyContent: "center" }} className="mobile-menu-btn">
            {open ? <X size={18} color={T.charcoal} /> : <Menu size={18} color={T.charcoal} />}
          </button>
        </div>
      </div>
      {open && (
        <div style={{ background: T.navy, borderTop: "1px solid rgba(255,255,255,0.08)", padding: "16px clamp(16px, 5vw, 48px) 24px" }}>
          {navLinks.map((l) => <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ display: "block", padding: "12px 0", color: "rgba(255,255,255,0.85)", fontSize: 16, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>{l.label}</a>)}
          <a href="#contact" onClick={() => setOpen(false)} style={{ display: "inline-block", marginTop: 20, backgroundColor: T.teal, color: "white", fontSize: 15, fontWeight: 600, padding: "12px 28px", borderRadius: 8, textDecoration: "none" }}>Talk to TSE</a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="hero" style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", backgroundColor: "#05101f" }}>
      <video style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }} autoPlay muted loop playsInline>
        <source src="/assets/0_Mountains_Lava_3840x2160.mov" type="video/mp4" />
        <source src="/assets/0_Mountains_Lava_3840x2160.mov" type="video/quicktime" />
      </video>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 140% 90% at 68% 85%, #c45200 0%, #7a2e00 18%, #2a0e00 38%, #060e1c 62%, #03080f 100%)", zIndex: 1, pointerEvents: "none" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0,0,0,0.42) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0) 100%)", zIndex: 2, pointerEvents: "none" }} />
      <div style={{ position: "absolute", left: "clamp(24px, 9vw, 154px)", top: "50%", transform: "translateY(calc(-50% - 40px))", width: "min(680px, calc(100vw - 48px))", display: "flex", flexDirection: "column", gap: 32, zIndex: 30 }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(15,143,134,0.2)", border: "1px solid rgba(15,143,134,0.4)", borderRadius: 99, padding: "6px 14px" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: T.teal, flexShrink: 0 }} />
          <span style={{ color: T.tealLight, fontSize: 12, letterSpacing: "0.08em", fontWeight: 500 }}>Engineering the Technology Backbone</span>
        </div>
        <div style={{ color: "white" }}>
          <h1 style={{ margin: 0, lineHeight: 1.0, fontSize: "clamp(36px, 5.5vw, 72px)", fontFamily: "'Syne:Bold'", fontWeight: 700, letterSpacing: "-2px" }}>Build Your Business</h1>
          <p style={{ margin: 0, lineHeight: 1.1, fontSize: "clamp(18px, 2.6vw, 36px)", fontFamily: "'Syne:Regular'", fontWeight: 400, letterSpacing: "-1px", color: "rgba(255,255,255,0.75)" }}>We'll take ownership of the technology.</p>
        </div>
        <p style={{ margin: 0, color: "rgba(255,255,255,0.72)", lineHeight: 1.65, fontSize: "clamp(15px, 1.5vw, 18px)", maxWidth: 560 }}>From your first technology decision to complex systems already in place, TSE helps you plan, build, secure, operate and scale around what your business actually needs.</p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <a href="#contact" style={{ backgroundColor: T.teal, color: "white", fontWeight: 600, fontSize: 15, padding: "14px 28px", borderRadius: 8, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>Talk to TSE <ArrowRight size={16} /></a>
          <a href="#how-we-work" style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white", fontWeight: 500, fontSize: 15, padding: "14px 28px", borderRadius: 8, textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}>See How We Work</a>
        </div>
      </div>
      <div style={{ position: "absolute", right: "clamp(24px, 9vw, 154px)", bottom: 120, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, zIndex: 30 }}>
        {[{ label: "Quality", icon: imgGroup4, fill: imgGroup5 }, { label: "Ownership", plain: imgIcon1 }, { label: "Ethics", icon: imgGroup6, fill: imgGroup7 }].map(({ label, icon, fill, plain }: any) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "white", fontSize: "clamp(18px, 2vw, 28px)", fontFamily: label === "Quality" ? "'Poppins:Medium'" : "'Roboto:Bold'", fontWeight: label === "Quality" ? 500 : 700, letterSpacing: "-0.6px" }}>{label}</span>
            {plain ? <div style={{ position: "relative", width: 26, height: 26, flexShrink: 0 }}><img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} src={plain} /></div>
              : <div style={{ position: "relative", width: 26, height: 26, flexShrink: 0, overflow: "hidden" }}><div style={{ position: "absolute", inset: 0, maskImage: `url("${icon}")`, WebkitMaskImage: `url("${icon}")`, maskSize: "26px 26px", maskRepeat: "no-repeat" }}><img alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", display: "block" }} src={fill} /></div></div>}
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", zIndex: 30 }}>
        <a href="#day-one" aria-label="Scroll down" style={{ backdropFilter: "blur(7px)", backgroundColor: "rgba(0,0,0,0.5)", display: "flex", alignItems: "center", justifyContent: "center", width: 48, height: 48, borderRadius: 99, border: "1px solid rgba(255,255,255,0.15)", textDecoration: "none" }}>
          <img alt="" style={{ width: 20, height: 20, display: "block" }} src={imgArrowDown} />
        </a>
      </div>
    </section>
  );
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <div style={{ fontFamily: "'Inter:Regular', Inter, sans-serif", color: T.charcoal }}>
      <Navbar transparent={!scrolled} />
      <Hero />
      {/* Additional sections rendered below */}
    </div>
  );
}
