import React, { useState, useEffect } from 'react';

/* --------------------  GLOBAL CONFIG  -------------------- */
const ACCENT_COLOR = '#F6A25A'; // Pastel orange
const BASE_COLOR = '#FFF8F3';   // Beige white
const TEXT_DARK = '#2E2E2E';
const TEXT_SUBTLE = '#6B6B6B';
const NAV_HEIGHT = '60px';
const PHOTO_URL = 'https://placehold.co/150x150/F6A25A/FFF?text=Y.T.';

/* --------------------  DATA  -------------------- */
const SKILLS = [
  'Python','C#','TypeScript','React','JavaScript','SQL','Java',
  'Kubernetes','Azure DevOps','AWS','Docker','CI/CD Pipelines',
  '.NET Core','FastAPI','Flask','Next.js','PyTorch','Hugging Face',
  'LLMs (RAG)','Query Optimization','Jest Testing','Prometheus'
];

const EXPERIENCE = [
  {
    title:"Process Automation and AI Intern",
    company:"CDS Global",
    duration:"May 2025 – Present | Des Moines",
    points:[
      "Designed and deployed an end-to-end Document AI platform using Python, Docker, and Kubernetes.",
      "Built a multimodal extraction pipeline improving accuracy by 82% and latency by 70%.",
      "Implemented monitoring pipelines for system health checks (Prometheus)."
    ]
  },
  {
    title:"Graduate Research Assistant",
    company:"Iowa State University",
    duration:"Nov 2024 – Present | Ames",
    points:[
      "Architected and deployed a RAG tutoring system using Llama 2 and Hugging Face on Kubernetes (99.9% uptime).",
      "Developed a WCAG 2.1 compliant frontend using React and TypeScript.",
      "Executed evaluation pipelines achieving 85% answer accuracy."
    ]
  },
  {
    title:"App Development Associate",
    company:"Accenture",
    duration:"Oct 2022 – Dec 2023 | Bengaluru",
    points:[
      "Optimized .NET Core REST APIs with distributed caching (2.4× throughput).",
      "Integrated OAuth 2.0 authentication for 100K daily transactions.",
      "Deployed event-driven AWS Lambda services via Azure DevOps CI/CD."
    ]
  }
];

/* --------------------  GLOBAL STYLE TAG  -------------------- */
const GlobalStyles = () => (
  <style>{`
    body { background:${BASE_COLOR}; color:${TEXT_DARK}; font-family:'Inter',sans-serif; }

    /* Smooth scrolling for nav */
    html { scroll-behavior:smooth; }

    /* Marquee */
    @keyframes scroll {
      0%{transform:translateX(0);}
      100%{transform:translateX(-50%);}
    }
    .skills-marquee{
      display:inline-block;white-space:nowrap;animation:scroll 30s linear infinite;
    }

    /* Laptop animation */
    @keyframes open-lid {
      0%{transform:rotateX(100deg);opacity:0;}
      100%{transform:rotateX(0deg);opacity:1;}
    }
    @keyframes glow {
      0%{opacity:0.05;}
      100%{opacity:0.2;}
    }
    @keyframes blink {
      50%{fill-opacity:0;}
    }
    .nav-btn:hover{color:${ACCENT_COLOR};}
    .accent{color:${ACCENT_COLOR};}
  `}</style>
);

/* --------------------  COMPONENTS  -------------------- */

const ScrollingSkills = () => {
  const skills = [...SKILLS, ...SKILLS];
  return (
    <div style={{overflow:'hidden',padding:'1rem 0',borderTop:`1px solid ${ACCENT_COLOR}30`,borderBottom:`1px solid ${ACCENT_COLOR}30`}}>
      <div className="skills-marquee">
        {skills.map((s,i)=><span key={i} style={{padding:'0 1.5rem',fontWeight:500,color:TEXT_SUBTLE,fontSize:'1.1rem'}}>{s}</span>)}
      </div>
    </div>
  );
};

const AnimatedLaptopSeparator = () => (
  <section style={{display:'flex',flexDirection:'column',alignItems:'center',padding:'4rem 0',background:BASE_COLOR}}>
    <svg viewBox="0 0 200 150" width="180" height="140">
      <rect x="25" y="110" width="150" height="20" rx="6" fill="#EADFD5"/>
      <rect id="screen" x="35" y="40" width="130" height="70" rx="6"
            fill={BASE_COLOR} stroke={ACCENT_COLOR} strokeWidth="2"
            style={{transformOrigin:'bottom center',animation:'open-lid 2s ease forwards'}}/>
      <rect x="35" y="40" width="130" height="70" rx="6" fill={ACCENT_COLOR} opacity="0.05"
            style={{animation:'glow 3s ease-in-out infinite alternate'}}/>
      <text x="45" y="70" fill={ACCENT_COLOR} fontFamily="monospace" fontSize="8" style={{animation:'blink 2s steps(2) infinite'}}>
        {'<code>Hello World</code>'}
      </text>
    </svg>
    <p style={{marginTop:'1.5rem',color:ACCENT_COLOR,fontWeight:600,letterSpacing:'1px'}}>
      Where Creativity Meets Engineering
    </p>
  </section>
);

/* --------------------  MAIN APP  -------------------- */

const App = () => {
  const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const handle=()=>setScrolled(window.scrollY>50);
    window.addEventListener('scroll',handle);
    return()=>window.removeEventListener('scroll',handle);
  },[]);

  const scrollTo=(id)=>document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});

  return (
    <div style={{background:BASE_COLOR,minHeight:'100vh'}}>
      <GlobalStyles/>

      {/* NAV */}
      <header style={{
        position:'sticky',top:0,zIndex:50,height:NAV_HEIGHT,
        background:scrolled?'#FFF':'transparent',backdropFilter:'blur(6px)',
        borderBottom:`1px solid ${ACCENT_COLOR}30`,transition:'0.3s'
      }}>
        <nav style={{maxWidth:'1200px',margin:'0 auto',height:'100%',display:'flex',
                     alignItems:'center',justifyContent:'space-between',padding:'0 1rem'}}>
          <h1 style={{fontWeight:800,fontSize:'1.5rem',color:ACCENT_COLOR}}>Yasaswini T.</h1>
          <div style={{display:'flex',gap:'1.5rem',fontWeight:500}}>
            {['About','Skills','Experience','Projects','Testimonials','Contact'].map(item=>(
              <button key={item} onClick={()=>scrollTo(item.toLowerCase())}
                      className="nav-btn" style={{background:'none',border:'none',cursor:'pointer',color:TEXT_SUBTLE}}>
                {item}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main style={{maxWidth:'1200px',margin:'0 auto',paddingBottom:'6rem'}}>

        {/* HERO */}
        <section id="hero" style={{textAlign:'center',padding:'6rem 1rem'}}>
          <img src={PHOTO_URL} alt="Yasaswini" style={{
            width:'140px',height:'140px',borderRadius:'50%',border:`4px solid ${ACCENT_COLOR}`,
            boxShadow:`0 4px 20px ${ACCENT_COLOR}50`,objectFit:'cover'
          }}/>
          <h2 style={{fontSize:'3rem',fontWeight:900,marginTop:'1.5rem'}}>
            Hello, I am <span style={{color:ACCENT_COLOR}}>Yasaswini Tatikonda</span>
          </h2>
          <p style={{maxWidth:'700px',margin:'1rem auto',fontSize:'1.2rem',color:TEXT_SUBTLE}}>
            Software professional skilled in full-stack engineering and passionate about AI & MLOps.
          </p>
          <button onClick={()=>scrollTo('projects')}
                  style={{marginTop:'2rem',padding:'0.9rem 2.5rem',fontWeight:700,
                          border:`2px solid ${ACCENT_COLOR}`,borderRadius:'30px',
                          background:ACCENT_COLOR,color:'#fff',cursor:'pointer'}}>
            Explore Featured Projects
          </button>
        </section>

        {/* ABOUT (Unified) */}
        <section id="about" style={{
          background:'#FFFFFF',borderTop:`4px solid ${ACCENT_COLOR}`,
          borderRadius:'12px',padding:'3rem 2rem',margin:'0 1rem 5rem',
          boxShadow:`0 0 20px ${ACCENT_COLOR}20`
        }}>
          <h3 style={{textAlign:'center',fontSize:'2rem',fontWeight:800,marginBottom:'1.5rem'}}>
            About Me
          </h3>
          <p style={{color:TEXT_SUBTLE,fontSize:'1.05rem',maxWidth:'900px',margin:'0 auto 2rem',lineHeight:1.6}}>
            I’m a curious and disciplined software engineer who believes great systems are born
            from empathy and precision. I value clarity, collaboration, and the craftsmanship
            behind scalable technology. My goal is to translate complex data and AI concepts into
            meaningful, reliable products that improve everyday workflows.
          </p>

          <h4 style={{textAlign:'center',fontSize:'1.4rem',fontWeight:700,marginBottom:'1rem',color:ACCENT_COLOR}}>
            Tech Stacks I’m Proficient With
          </h4>
          <p style={{textAlign:'center',color:TEXT_SUBTLE,maxWidth:'900px',margin:'0 auto',lineHeight:1.7}}>
            TypeScript / React | Python (FastAPI, Flask) | Kubernetes | Azure DevOps | SQL Server | 
            AWS | Docker | CI/CD | MLOps | LLMs (RAG)
          </p>
        </section>

        {/* LAPTOP SEPARATOR */}
        <AnimatedLaptopSeparator/>

        {/* EXPERIENCE */}
        <section id="experience" style={{padding:'4rem 1rem'}}>
          <h3 style={{textAlign:'center',fontSize:'2rem',fontWeight:800,marginBottom:'2rem'}}>Professional Experience</h3>
          <div style={{maxWidth:'800px',margin:'0 auto'}}>
            {EXPERIENCE.map((job,i)=>(
              <div key={i} style={{
                background:'#fff',padding:'1.5rem',borderLeft:`4px solid ${ACCENT_COLOR}`,
                borderRadius:'8px',boxShadow:`0 4px 15px ${ACCENT_COLOR}10`,marginBottom:'1.5rem'
              }}>
                <h4 style={{fontWeight:700,fontSize:'1.2rem'}}>{job.title} | <span style={{color:ACCENT_COLOR}}>{job.company}</span></h4>
                <p style={{fontSize:'0.9rem',color:TEXT_SUBTLE,marginBottom:'0.5rem'}}>{job.duration}</p>
                <ul style={{marginLeft:'1rem',color:TEXT_SUBTLE,lineHeight:1.6}}>
                  {job.points.map((p,j)=><li key={j}>{p}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS MARQUEE */}
        <section id="skills" style={{margin:'4rem 0'}}>
          <h3 style={{textAlign:'center',fontSize:'2rem',fontWeight:800,marginBottom:'1rem'}}>Technical Expertise</h3>
          <ScrollingSkills/>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{
          background:'#fff',padding:'3rem 2rem',borderTop:`4px solid ${ACCENT_COLOR}`,
          borderRadius:'12px',maxWidth:'500px',margin:'4rem auto',
          boxShadow:`0 0 20px ${ACCENT_COLOR}20`
        }}>
          <h3 style={{textAlign:'center',fontSize:'2rem',fontWeight:800,marginBottom:'1rem'}}>Let’s Connect</h3>
          <p style={{textAlign:'center',color:TEXT_SUBTLE,marginBottom:'1.5rem'}}>
            Ready to collaborate or discuss opportunities? Drop a message below.
          </p>
          <form name="contact" method="POST" data-netlify="true" style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
            <input type="hidden" name="form-name" value="contact"/>
            <input name="name" placeholder="Your Name" required style={{padding:'0.8rem',border:`2px solid ${ACCENT_COLOR}40`,borderRadius:'8px'}}/>
            <input name="email" type="email" placeholder="Your Email" required style={{padding:'0.8rem',border:`2px solid ${ACCENT_COLOR}40`,borderRadius:'8px'}}/>
            <textarea name="message" rows="4" placeholder="Your Message" required style={{padding:'0.8rem',border:`2px solid ${ACCENT_COLOR}40`,borderRadius:'8px'}}/>
            <button type="submit" style={{
              padding:'0.9rem',fontWeight:700,border:'none',borderRadius:'8px',
              background:ACCENT_COLOR,color:'#fff',cursor:'pointer'
            }}>Send Message</button>
          </form>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{textAlign:'center',padding:'2rem 0',color:TEXT_SUBTLE,fontSize:'0.9rem'}}>
        © {new Date().getFullYear()} Yasaswini Tatikonda | AI Engineer
      </footer>
    </div>
  );
};

export default App;
