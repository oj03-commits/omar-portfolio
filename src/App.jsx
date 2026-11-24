import { useEffect, useRef, useState } from "react";
import bg from "./assets/background.jpg"; // images live in src/assets/
import imgProgramming from "./assets/programming.png";
import imgTechnology from "./assets/technology.png";
import imgTroubleshooting from "./assets/troubleshooting.png";
import imgFish from "./assets/fishkeeping.png";
import imgGaming from "./assets/gaming.png";
import imgLearning from "./assets/learning.png";

/* ====== EDIT YOUR DETAILS HERE ====== */
const profile = {
  name: "Omar John U. Flores",
  title: "BSIT Student | Aspiring Software Developer",
  intro:
    "I am a first-year Bachelor of Science in Information Technology student at Adamson University. I am passionate about technology, programming, and learning new skills that will help me grow as a future software developer.",
  welcome:
    "Welcome to my personal portfolio! Explore my background, skills, interests, and journey as an aspiring IT professional.",
  avatar: "", // e.g. import me from "./assets/me.jpg" then avatar: me. Empty = initials
  email: "omarjohnflores@gmail.com",
  github: "https://github.com/oj03-commits",
  linkedin: "", // add your LinkedIn URL
  facebook: "", // optional
};

const education = [
  {
    school: "Adamson University",
    degree: "Bachelor of Science in Information Technology (BSIT)",
    years: "2026 – Present",
  },
  {
    school: "Nasugbu East Senior High School",
    degree: "Academic Strand – STEM (Science, Technology, Engineering and Mathematics)",
    years: "2024 – 2026",
  },
];

const achievements = [
  "3rd Place – Most Innovative Product: Freshstep, an Automatic Shoe Germ Removal Technology System.",
  "Developed an Arduino-based automatic fish feeder project.",
  "Completed work immersion at the Municipality of Nasugbu – CITO.",
  "Gained experience in computer maintenance, laptop troubleshooting, and basic IT support.",
];

const about = [
  "I am Omar John U. Flores, an aspiring software developer and a Bachelor of Science in Information Technology student at Adamson University. I enjoy exploring technology, solving problems, and learning new things, especially in programming and computer-related activities.",
  "I believe that learning is a continuous process, and every experience is an opportunity to improve myself. My goal is to develop my technical skills, build useful projects, improve my confidence, and become a successful IT professional in the future.",
];

const interests = [
  [imgProgramming, "Programming and coding"],
  [imgTechnology, "Exploring new technologies"],
  [imgTroubleshooting, "Computer troubleshooting"],
  [imgFish, "Fish keeping and aquarium maintenance"],
  [imgGaming, "Online gaming"],
  [imgLearning, "Learning new IT skills"],
];

const skills = {
  "Programming Languages": ["C#", "HTML", "CSS", "JavaScript (Basic)"],
  "Tools and Software": ["Visual Studio", "Visual Studio Code", "Git and GitHub", "Microsoft Excel", "Arduino IDE"],
  "Technical Skills": ["Basic Programming", "Web Development (Basic)", "Computer Troubleshooting", "Hardware Familiarization", "Problem Solving", "Basic Database Concepts"],
};

const sections = ["home", "education", "about", "skills", "contact"];
const roles = ["BSIT Student", "Aspiring Software Developer", "Problem Solver", "Tech Explorer"];

/* ====== STYLES ====== */
const css = `
:root{--accent:#4cc9ff;--accent2:#7c8cff;--text:#eaf2ff;--muted:#a9bbd9;--glass:rgba(10,20,45,.62);--line:rgba(120,180,255,.25)}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;font-family:"Segoe UI",system-ui,-apple-system,sans-serif;color:var(--text);line-height:1.65;
 background:linear-gradient(180deg,rgba(4,10,28,.55),rgba(4,10,28,.82)),url(${bg}) center/cover fixed no-repeat #050b1c}
.nav{position:sticky;top:0;z-index:20;display:flex;justify-content:space-between;align-items:center;padding:.85rem 1.5rem;
 background:rgba(5,12,30,.7);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.logo{font-weight:800;letter-spacing:.5px;background:linear-gradient(90deg,var(--accent),var(--accent2));-webkit-background-clip:text;background-clip:text;color:transparent}
.links{display:flex;gap:1.4rem;list-style:none;margin:0;padding:0}
.links a{color:var(--text);text-decoration:none;font-size:.95rem;text-transform:capitalize;padding:.3rem 0;border-bottom:2px solid transparent;transition:.2s}
.links a:hover,.links a.active{color:var(--accent);border-color:var(--accent)}
.burger{display:none;background:none;border:1px solid var(--line);color:var(--text);border-radius:8px;padding:.3rem .65rem;font-size:1.2rem;cursor:pointer}
@media(max-width:700px){
 .burger{display:block}
 .links{display:none;position:absolute;top:100%;left:0;right:0;flex-direction:column;gap:.8rem;padding:1rem 1.5rem;background:rgba(5,12,30,.95);border-bottom:1px solid var(--line)}
 .links.open{display:flex}
}
section{max-width:1000px;margin:0 auto;padding:5rem 1.25rem}
h2{font-size:2rem;margin:0 0 2rem}
h2 span{color:var(--accent)}
h2::after{content:"";display:block;width:60px;height:4px;margin-top:.5rem;border-radius:2px;background:linear-gradient(90deg,var(--accent),var(--accent2))}
.glass{background:var(--glass);backdrop-filter:blur(10px);border:1px solid var(--line);border-radius:16px;padding:1.5rem;box-shadow:0 8px 30px rgba(0,0,0,.35);transition:transform .25s,border-color .25s}
.glass:hover{transform:translateY(-4px);border-color:var(--accent)}
.hero{display:flex;align-items:center;gap:3rem;min-height:85vh}
.avatar-wrap{padding:5px;border-radius:50%;background:conic-gradient(var(--accent),var(--accent2),var(--accent));flex-shrink:0;animation:spin 8s linear infinite}
.avatar{display:flex;align-items:center;justify-content:center;width:200px;height:200px;border-radius:50%;background:#0a1530;font-size:3.8rem;font-weight:800;color:var(--accent);object-fit:cover;animation:spin 8s linear infinite reverse}
@keyframes spin{to{transform:rotate(360deg)}}
.hello{color:var(--accent);font-weight:600;letter-spacing:2px;text-transform:uppercase;font-size:.85rem}
.hero h1{font-size:clamp(2rem,5vw,3.2rem);margin:.2rem 0;line-height:1.15}
.title{font-size:1.15rem;font-weight:600;color:var(--accent2);margin-bottom:1rem}
.hero p{color:var(--muted);max-width:60ch;margin:.4rem 0}
.welcome{border-left:3px solid var(--accent);padding-left:1rem;color:var(--text)!important}
.btns{display:flex;gap:.8rem;flex-wrap:wrap;margin-top:1.4rem}
.btn{display:inline-block;padding:.75rem 1.5rem;border-radius:10px;text-decoration:none;font-weight:600;transition:.2s}
.btn.primary{background:linear-gradient(90deg,var(--accent),var(--accent2));color:#04122b}
.btn.ghost{border:1px solid var(--accent);color:var(--accent)}
.btn:hover{transform:translateY(-2px);box-shadow:0 6px 20px rgba(76,201,255,.35)}
@media(max-width:700px){.hero{flex-direction:column;text-align:center;min-height:auto;gap:1.5rem}.welcome{border-left:0;padding-left:0}.btns{justify-content:center}.avatar{width:160px;height:160px}}
.timeline{position:relative;padding-left:1.8rem;border-left:2px solid var(--line);display:grid;gap:1.2rem}
.tl-item{position:relative}
.tl-item::before{content:"";position:absolute;left:-2.3rem;top:1.7rem;width:14px;height:14px;border-radius:50%;background:var(--accent);box-shadow:0 0 12px var(--accent)}
.years{color:var(--accent);font-weight:600;font-size:.9rem}
.tl-item h3{margin:.2rem 0}
.tl-item p{margin:0;color:var(--muted)}
h3.sub{margin:2.2rem 0 1rem;color:var(--accent2)}
.ach{list-style:none;padding:0;margin:0;display:grid;gap:.8rem}
.ach li{display:flex;gap:.8rem;align-items:flex-start}
.ach li::before{content:"🏆";flex-shrink:0}
.about-text p{color:var(--muted);margin:0 0 1rem}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}
.interest-card{padding:0;overflow:hidden}
.thumb{position:relative;height:180px;overflow:hidden;background:#0a1530}
.thumb img{width:100%;height:100%;object-fit:cover;display:block;animation:kb1 11s ease-in-out infinite alternate}
.interest-card:nth-child(even) .thumb img{animation-name:kb2;animation-duration:13s}
.thumb::after{content:"";position:absolute;inset:0;background:linear-gradient(115deg,transparent 40%,rgba(255,255,255,.28) 50%,transparent 60%);transform:translateX(-130%);animation:sweep 6s ease-in-out infinite}
.interest-card:nth-child(3n) .thumb::after{animation-delay:2s}
.interest-card:nth-child(3n+1) .thumb::after{animation-delay:4s}
.cap{padding:.9rem 1.1rem;font-weight:600;border-top:1px solid var(--line);background:linear-gradient(90deg,rgba(76,201,255,.12),transparent)}
@keyframes kb1{from{transform:scale(1.04) translate(0,0)}to{transform:scale(1.22) translate(-4%,-3%)}}
@keyframes kb2{from{transform:scale(1.22) translate(3%,3%)}to{transform:scale(1.04) translate(0,0)}}
@keyframes sweep{0%,55%{transform:translateX(-130%)}100%{transform:translateX(130%)}}
.tags{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.9rem}
.tag{padding:.35rem .9rem;border-radius:999px;font-size:.88rem;border:1px solid var(--line);background:rgba(76,201,255,.1)}
.skill-card h3{margin:0;color:var(--accent)}
.contact-list{display:grid;gap:.9rem;grid-template-columns:repeat(auto-fit,minmax(240px,1fr))}
.contact-item{display:flex;flex-direction:column;gap:.2rem;text-decoration:none;color:var(--text)}
.contact-item small{color:var(--muted);text-transform:uppercase;letter-spacing:1px}
.contact-item strong{color:var(--accent);word-break:break-all}
footer{text-align:center;color:var(--muted);padding:2rem 1rem;border-top:1px solid var(--line);background:rgba(5,12,30,.7);font-size:.9rem}
.reveal{opacity:0;transform:translateY(30px);transition:opacity .7s,transform .7s}
.reveal.show{opacity:1;transform:none}
.particles{position:fixed;inset:0;z-index:0;pointer-events:none}
.content{position:relative;z-index:1}
.progress{position:fixed;top:0;left:0;height:3px;z-index:50;background:linear-gradient(90deg,var(--accent),var(--accent2),#ff2e63);box-shadow:0 0 10px var(--accent)}
.title{font-family:"Courier New",monospace;font-size:1.2rem;min-height:1.8em;color:var(--accent)}
.caret{margin-left:2px;animation:blink 1s steps(1) infinite}
@keyframes blink{50%{opacity:0}}
.shine{background:linear-gradient(90deg,#fff,var(--accent),var(--accent2),#fff);background-size:250% 100%;-webkit-background-clip:text;background-clip:text;color:transparent;animation:shine 5s linear infinite}
@keyframes shine{to{background-position:250% 0}}
.avatar.glitch{position:relative;font-family:"Courier New",monospace;letter-spacing:6px;text-indent:6px;color:#fff;text-shadow:0 0 12px var(--accent),0 0 34px var(--accent);box-shadow:0 0 40px rgba(76,201,255,.45),inset 0 0 30px rgba(76,201,255,.25);overflow:hidden}
.glitch::before,.glitch::after{content:attr(data-text);position:absolute;inset:0;display:flex;align-items:center;justify-content:center;background:#0a1530;border-radius:50%;letter-spacing:6px;text-indent:6px}
.glitch::before{color:#ff2e63;transform:translateX(4px);animation:g1 2.4s infinite linear alternate-reverse}
.glitch::after{color:#4cc9ff;transform:translateX(-4px);animation:g2 3s infinite linear alternate-reverse}
@keyframes g1{0%{clip-path:inset(15% 0 70% 0)}20%{clip-path:inset(65% 0 10% 0)}40%{clip-path:inset(40% 0 45% 0)}60%{clip-path:inset(85% 0 3% 0)}80%{clip-path:inset(8% 0 80% 0)}100%{clip-path:inset(50% 0 35% 0)}}
@keyframes g2{0%{clip-path:inset(70% 0 12% 0)}25%{clip-path:inset(20% 0 62% 0)}50%{clip-path:inset(55% 0 30% 0)}75%{clip-path:inset(5% 0 85% 0)}100%{clip-path:inset(35% 0 50% 0)}}
.tag{transition:.2s}
.tag:hover{background:rgba(76,201,255,.3);box-shadow:0 0 14px rgba(76,201,255,.6);transform:translateY(-2px)}
h2{text-shadow:0 0 18px rgba(76,201,255,.35)}
.splash{position:fixed;inset:0;z-index:100;display:flex;align-items:center;justify-content:center;padding:1.25rem;background:rgba(4,10,28,.9);backdrop-filter:blur(8px)}
.splash-box{max-width:540px;text-align:center}
.splash-box h1{font-size:clamp(1.8rem,6vw,2.6rem);margin:.3rem 0;line-height:1.15}
.splash-box p{color:var(--muted);margin:.5rem 0 1.4rem}
.splash .btns{justify-content:center}
.splash button.btn{border:0;cursor:pointer;font-size:1rem;font-family:inherit}
.splash button.btn.ghost{background:none;border:1px solid var(--accent)}
.dock{position:fixed;right:1rem;bottom:calc(1rem + env(safe-area-inset-bottom,0px));z-index:60;display:flex;gap:.5rem;flex-wrap:wrap;justify-content:flex-end}
.dock button{cursor:pointer;font-family:inherit;font-size:.9rem;color:var(--text);background:rgba(5,12,30,.85);backdrop-filter:blur(10px);border:1px solid var(--accent);border-radius:999px;padding:.55rem 1rem;box-shadow:0 0 16px rgba(76,201,255,.3);transition:.2s}
.dock button:hover,.dock button.on{background:var(--accent);color:#04122b}
section.speaking .glass{border-color:var(--accent);box-shadow:0 0 26px rgba(76,201,255,.4)}
section.speaking.hero .avatar-wrap{filter:drop-shadow(0 0 22px var(--accent))}
@media(prefers-reduced-motion:reduce){.glitch::before,.glitch::after,.shine,.caret,.thumb img,.thumb::after{animation:none}.particles{display:none}.reveal{opacity:1;transform:none;transition:none}.avatar-wrap,.avatar{animation:none}html{scroll-behavior:auto}}
`;

/* Fade-in on scroll */
function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => e.isIntersecting && (setShow(true), io.disconnect()), { threshold: 0.12 });
    ref.current && io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${show ? "show" : ""} ${className}`}>{children}</div>;
}

/* Animated particle-network background (transparent, sits over the image) */
function Particles() {
  const ref = useRef(null);
  useEffect(() => {
    const c = ref.current, ctx = c.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0, h = 0, raf, pts = [];
    const mouse = { x: -999, y: -999 };
    const resize = () => {
      w = c.width = window.innerWidth; h = c.height = window.innerHeight;
      const n = Math.min(90, Math.floor((w * h) / 16000));
      pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5 }));
    };
    const move = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (const p of pts) {
        if (!reduce) { p.x += p.vx; p.y += p.vy; }
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath(); ctx.arc(p.x, p.y, 1.8, 0, 6.283);
        ctx.fillStyle = "rgba(76,201,255,.85)"; ctx.fill();
      }
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y);
          if (d < 130) {
            ctx.strokeStyle = "rgba(76,201,255," + (0.35 * (1 - d / 130)) + ")";
            ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(pts[j].x, pts[j].y); ctx.stroke();
          }
        }
        const dm = Math.hypot(pts[i].x - mouse.x, pts[i].y - mouse.y);
        if (dm < 170) {
          ctx.strokeStyle = "rgba(124,140,255," + (0.6 * (1 - dm / 170)) + ")";
          ctx.beginPath(); ctx.moveTo(pts[i].x, pts[i].y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };
    resize(); draw();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", move);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", move); };
  }, []);
  return <canvas ref={ref} className="particles" aria-hidden="true" />;
}

/* Typing / deleting effect */
function Typewriter({ words }) {
  const [i, setI] = useState(0);
  const [txt, setTxt] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    let delay = del ? 35 : 75;
    if (!del && txt === w) delay = 1500;
    const t = setTimeout(() => {
      if (!del && txt === w) setDel(true);
      else if (del && txt === "") { setDel(false); setI((i + 1) % words.length); }
      else setTxt(del ? w.slice(0, txt.length - 1) : w.slice(0, txt.length + 1));
    }, delay);
    return () => clearTimeout(t);
  }, [txt, del, i, words]);
  return <><span>{txt}</span><span className="caret">▌</span></>;
}

/* Soft ambient music made in the browser (no mp3 file needed) */
function createMusic() {
  const AC = window.AudioContext || window.webkitAudioContext;
  const ctx = new AC();
  const master = ctx.createGain();
  master.gain.value = 0;
  const lp = ctx.createBiquadFilter();
  lp.type = "lowpass";
  lp.frequency.value = 1400;
  lp.connect(master);
  master.connect(ctx.destination);
  const chords = [[220, 261.63, 329.63], [174.61, 220, 261.63], [261.63, 329.63, 392], [196, 246.94, 293.66]];
  let step = 0, n = 0, pad = null, arp = null;
  const tone = (freq, type, vol, attack, hold, release) => {
    const t = ctx.currentTime, o = ctx.createOscillator(), g = ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + attack);
    g.gain.setValueAtTime(vol, t + attack + hold);
    g.gain.linearRampToValueAtTime(0, t + attack + hold + release);
    o.connect(g); g.connect(lp);
    o.start(t); o.stop(t + attack + hold + release + 0.1);
  };
  const chord = () => { chords[step % 4].forEach((f) => tone(f, "triangle", 0.12, 1.5, 3, 2)); step++; };
  const pluck = () => { const c = chords[(step + 3) % 4]; tone(c[n % 3] * 2, "sine", 0.09, 0.02, 0.1, 0.9); n++; };
  const fade = (to, secs) => {
    const g = master.gain, t = ctx.currentTime;
    g.cancelScheduledValues(t); g.setValueAtTime(g.value, t); g.linearRampToValueAtTime(to, t + secs);
  };
  return {
    start() {
      ctx.resume(); fade(0.5, 1.5);
      if (!pad) { chord(); pad = setInterval(chord, 6000); arp = setInterval(pluck, 750); }
    },
    stop() { fade(0, 0.8); clearInterval(pad); clearInterval(arp); pad = arp = null; },
  };
}

/* Welcome screen + music button + AI voice that reads the portfolio */
function Narrator({ script, onSpeak }) {
  const [entered, setEntered] = useState(false);
  const [music, setMusic] = useState(false);
  const [reading, setReading] = useState(false);
  const musicRef = useRef(null);
  const runId = useRef(0);
  const canSpeak = typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => () => {
    runId.current++;
    if (canSpeak) window.speechSynthesis.cancel();
    musicRef.current && musicRef.current.stop();
  }, []);

  const pickVoice = () => {
    const en = window.speechSynthesis.getVoices().filter((v) => v.lang && v.lang.startsWith("en"));
    return en.find((v) => /natural|google us|aria|jenny|samantha|zira/i.test(v.name)) || en[0];
  };

  const speak = (text) => new Promise((resolve) => {
    const u = new SpeechSynthesisUtterance(text.replace(/C#/g, "C sharp"));
    const v = pickVoice();
    if (v) u.voice = v;
    u.lang = "en-US"; u.rate = 0.98; u.pitch = 1;
    u.onend = resolve; u.onerror = resolve;
    window.speechSynthesis.speak(u);
  });

  const stopReading = () => {
    runId.current++;
    if (canSpeak) window.speechSynthesis.cancel();
    setReading(false); onSpeak(null);
  };

  const startReading = async () => {
    if (!canSpeak) return;
    const id = ++runId.current;
    window.speechSynthesis.cancel();
    setReading(true);
    for (const part of script) {
      if (runId.current !== id) return;
      onSpeak(part.id);
      const el = document.getElementById(part.id);
      el && el.scrollIntoView({ behavior: "smooth", block: "start" });
      await new Promise((r) => setTimeout(r, 800));
      const sentences = part.text.match(/[^.!?]+[.!?]*/g) || [part.text];
      for (const sentence of sentences) {
        if (runId.current !== id) return;
        if (sentence.trim()) await speak(sentence.trim());
      }
    }
    if (runId.current === id) { setReading(false); onSpeak(null); }
  };

  const toggleMusic = () => {
    if (!musicRef.current) musicRef.current = createMusic();
    if (music) musicRef.current.stop(); else musicRef.current.start();
    setMusic(!music);
  };

  const enter = (withSound) => {
    setEntered(true);
    if (withSound) {
      if (!musicRef.current) musicRef.current = createMusic();
      musicRef.current.start(); setMusic(true);
      startReading();
    }
  };

  return (
    <>
      {!entered && (
        <div className="splash">
          <div className="splash-box glass">
            <div className="hello">Welcome to the portfolio of</div>
            <h1 className="shine">Omar John U. Flores</h1>
            <p>For the best experience, enter with sound: soft background music and an AI voice that introduces my portfolio.</p>
            <div className="btns">
              <button className="btn primary" onClick={() => enter(true)}>🔊 Enter with sound</button>
              <button className="btn ghost" onClick={() => enter(false)}>Enter silently</button>
            </div>
          </div>
        </div>
      )}
      {entered && (
        <div className="dock">
          <button className={music ? "on" : ""} onClick={toggleMusic}>{music ? "🎵 Music: On" : "🔇 Music: Off"}</button>
          {canSpeak && (
            <button className={reading ? "on" : ""} onClick={reading ? stopReading : startReading}>
              {reading ? "⏹ Stop voice" : "🔊 Read aloud"}
            </button>
          )}
        </div>
      )}
    </>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const initials = "OF";
  const [speaking, setSpeaking] = useState(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => { const el = document.getElementById(s); el && io.observe(el); });
    return () => io.disconnect();
  }, []);

  const spokenEmail = profile.email.replace("@", " at ").replace(/\./g, " dot ");
  const script = [
    { id: "home", text: `Hello, I'm ${profile.name}. ${profile.title.replace("|", ",")}. ${profile.intro} ${profile.welcome}` },
    { id: "education", text: `Educational background. ${education.map((e) => `${e.school}. ${e.degree}. ${e.years}.`).join(" ")} Achievements and experiences. ${achievements.join(" ")}` },
    { id: "about", text: `About me. ${about.join(" ")} My interests and hobbies are: ${interests.map((i) => i[1]).join(", ")}.` },
    { id: "skills", text: `My skills. ${Object.entries(skills).map(([g, items]) => `${g}: ${items.join(", ")}.`).join(" ")}` },
    { id: "contact", text: `Get in touch. ${profile.email ? `You can email me at ${spokenEmail}.` : ""} You can also find my projects on GitHub. Thank you for visiting my portfolio!` },
  ];

  const contacts = [
    ["Email", profile.email, profile.email && "mailto:" + profile.email],
    ["GitHub", profile.github && profile.github.replace("https://", ""), profile.github],
    ["LinkedIn", profile.linkedin && profile.linkedin.replace("https://", ""), profile.linkedin],
    ["Facebook", profile.facebook && profile.facebook.replace("https://", ""), profile.facebook],
  ].filter(([, v]) => v);

  return (
    <>
      <style>{css}</style>
      <Particles />
      <div className="progress" style={{ width: progress + "%" }} />
      <Narrator script={script} onSpeak={setSpeaking} />
      <div className="content">

      <nav className="nav">
        <span className="logo">&lt;OJ /&gt;</span>
        <button className="burger" aria-label="Toggle menu" onClick={() => setOpen(!open)}>☰</button>
        <ul className={"links" + (open ? " open" : "")}>
          {sections.map((s) => (
            <li key={s}>
              <a href={"#" + s} className={active === s ? "active" : ""} onClick={() => setOpen(false)}>{s}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* HOME */}
      <section id="home" className={"hero" + (speaking === "home" ? " speaking" : "")}>
        <div className="avatar-wrap">
          {profile.avatar ? (
            <img className="avatar" src={profile.avatar} alt={profile.name} />
          ) : (
            <div className="avatar glitch" data-text={initials} aria-label="Avatar">{initials}</div>
          )}
        </div>
        <div>
          <div className="hello">Hello, I'm</div>
          <h1 className="shine">{profile.name}</h1>
          <div className="title">{"> "}<Typewriter words={roles} /></div>
          <p>{profile.intro}</p>
          <p className="welcome">{profile.welcome}</p>
          <div className="btns">
            <a className="btn primary" href="#contact">Contact Me</a>
            <a className="btn ghost" href="#skills">View Skills</a>
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className={speaking === "education" ? "speaking" : ""}>
        <Reveal>
          <h2>Educational <span>Background</span></h2>
          <div className="timeline">
            {education.map((e) => (
              <div className="tl-item glass" key={e.school}>
                <span className="years">{e.years}</span>
                <h3>{e.school}</h3>
                <p>{e.degree}</p>
              </div>
            ))}
          </div>
          <h3 className="sub">Achievements and Experiences</h3>
          <div className="glass">
            <ul className="ach">{achievements.map((a) => <li key={a}>{a}</li>)}</ul>
          </div>
        </Reveal>
      </section>

      {/* ABOUT */}
      <section id="about" className={speaking === "about" ? "speaking" : ""}>
        <Reveal>
          <h2>About <span>Me</span></h2>
          <div className="about-text">{about.map((p, i) => <p key={i}>{p}</p>)}</div>
          <h3 className="sub">Interests and Hobbies</h3>
          <div className="grid">
            {interests.map(([img, text]) => (
              <div className="glass interest-card" key={text}>
                <div className="thumb"><img src={img} alt={text} loading="lazy" /></div>
                <div className="cap">{text}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* SKILLS */}
      <section id="skills" className={speaking === "skills" ? "speaking" : ""}>
        <Reveal>
          <h2>My <span>Skills</span></h2>
          <div className="grid">
            {Object.entries(skills).map(([group, items]) => (
              <div className="glass skill-card" key={group}>
                <h3>{group}</h3>
                <div className="tags">{items.map((s) => <span className="tag" key={s}>{s}</span>)}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className={speaking === "contact" ? "speaking" : ""}>
        <Reveal>
          <h2>Get in <span>Touch</span></h2>
          <div className="contact-list">
            {contacts.map(([label, value, href]) => (
              <a className="glass contact-item" key={label} href={href} target="_blank" rel="noreferrer">
                <small>{label}</small>
                <strong>{value}</strong>
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <footer>© {new Date().getFullYear()} {profile.name}. Built with React.</footer>
      </div>
    </>
  );
}
