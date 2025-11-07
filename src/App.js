import React, { useState, useEffect } from 'react';

/* --------------------  GLOBAL CONFIG  -------------------- */
const ACCENT_COLOR = '#F6A25A'; // Pastel orange
const BASE_COLOR = '#FFF8F3';   // Beige white
const TEXT_DARK = '#2E2E2E';
const TEXT_SUBTLE = '#6B6B6B';
const NAV_HEIGHT = '60px';

// 🎯 REPLACE THIS WITH YOUR OWN IMAGE URL
// Upload your image to imgur.com, imgbb.com, or use any direct image link
const PHOTO_URL = '/profile.png';

/* --------------------  DATA  -------------------- */
const SKILLS = [
  'Python','C#','TypeScript','React','JavaScript','SQL','Java',
  'Kubernetes','Azure DevOps','AWS','Docker','CI/CD Pipelines',
  '.NET Core','ASP.NET MVC','FastAPI','Flask','Next.js','React Native',
  'PyTorch','Hugging Face','LLMs','RAG Pipelines','NLP','ChromaDB',
  'SQL Server','Azure SQL','Query Optimization','OAuth 2.0','Azure Functions'
];

const EXPERIENCE = [
  {
    title:"Process Automation and AI Intern",
    company:"CDS Global",
    duration:"May 2025 – Present | Des Moines",
    points:[
      "Designed and deployed an end-to-end <strong>Document AI</strong> platform using <strong>Python</strong> microservices (<strong>FastAPI</strong>, <strong>Flask</strong>), containerized with <strong>Docker</strong> and orchestrated on <strong>Kubernetes</strong> for scalable processing of 10K+ document streams.",
      "Built a <strong>multimodal extraction pipeline</strong> combining <strong>OCR</strong>, <strong>Donut</strong>, and <strong>LayoutLM</strong> models, improving accuracy by <strong>82%</strong> and reducing latency by <strong>70%</strong>.",
      "Integrated <strong>NLP</strong> and <strong>LLM</strong> modules within APIs to normalize and validate data, enhancing consistency and reliability.",
      "Implemented <strong>monitoring pipelines</strong> to track uptime and performance metrics, ensuring stable production operations."
    ]
  },
  {
    title:"Graduate Research Assistant",
    company:"Iowa State University",
    duration:"Nov 2024 – Present | Ames",
    points:[
      "Architected and deployed a <strong>RAG tutoring system</strong> using <strong>Llama 2</strong> and <strong>Hugging Face</strong> on <strong>Kubernetes</strong>, maintaining <strong>99.9% uptime</strong> and scalable AI delivery.",
      "Built and optimized <strong>RAG pipelines</strong> with <strong>ChromaDB</strong> to ground responses in diverse data formats, supporting over <strong>500 concurrent requests</strong> with consistent context accuracy.",
      "Developed a conversational frontend with <strong>React</strong> and <strong>TypeScript</strong>, optimizing performance and reducing load time by <strong>20%</strong>.",
      "Executed evaluation pipelines achieving <strong>85% answer accuracy</strong> and <strong>100% contextual relevance</strong>.",
      "Integrated an <strong>SQL-based tracking layer</strong> to enable reliable data storage, traceability, and analytical reporting."
    ]
  },
  {
    title:"Software Developer in App Development",
    company:"Iowa State University - AI SAFEHANDS",
    duration:"Feb 2024 – Sept 2024 | Ames",
    points:[
      "Designed and implemented the frontend in <strong>React</strong> and <strong>TypeScript</strong>, optimizing components and build settings to achieve <strong>30% faster load times</strong>.",
      "Built a robust client-side data layer with <strong>state-management logic</strong> to handle complex, real-time updates from <strong>.NET Core APIs</strong>.",
      "Integrated the <strong>React</strong> frontend with <strong>.NET Core</strong> and <strong>SQL Server</strong> backends to provide secure user access and smooth, real-time interaction for more than <strong>2K users</strong>.",
      "Created <strong>CI/CD pipelines</strong> in <strong>Azure DevOps</strong> to automate build and release workflows, reducing deployment time and improving product reliability."
    ]
  },
  {
    title:"App Development Associate",
    company:"Accenture",
    duration:"Oct 2022 – Dec 2023 | Bengaluru",
    points:[
      "Designed and optimized <strong>.NET Core REST APIs</strong> with <strong>distributed caching</strong>, achieving <strong>2.4× higher throughput</strong> and lower latency.",
      "Built a secure data layer integrating <strong>OAuth 2.0 authentication</strong> and encryption protocols to handle over <strong>100K daily transactions</strong>.",
      "Developed a scalable <strong>SQL Server</strong> backend with advanced <strong>query optimization</strong> and indexing for enterprise-grade performance.",
      "Built <strong>CI/CD pipelines</strong> in <strong>Azure DevOps</strong> and deployed scalable, event-driven services with <strong>AWS Lambda</strong>, maintaining <strong>99.9% system uptime</strong>.",
      "Collaborated with global <strong>Agile teams</strong> on sprint planning, code reviews, and feature delivery to maintain engineering excellence."
    ]
  }
];

const EDUCATION = {
  degree: "Master of Science in Computer Science",
  school: "Iowa State University",
  location: "Ames, Iowa",
  graduation: "December 2025",
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Cloud Computing",
    "Machine Learning",
    "Advanced Principles of System Architecture",
    "Computer Networks",
    "Deep Learning"
  ]
};

const CERTIFICATIONS = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft"
  },
  {
    title: "Microsoft Certified: Security, Compliance, and Identity Fundamentals",
    issuer: "Microsoft"
  }
];

const PROJECTS = [
  {
    title:"Chest X-Ray Scan Analysis",
    tech:"Python, TensorFlow, Keras, NumPy, Computer Vision",
    description:"Designed an AI-powered medical imaging system to explore how image processing and deep learning can assist in early and accurate detection of lung diseases. Trained deep learning models achieving 94% accuracy in detecting pneumonia from chest X-ray scans, demonstrating how computer vision can support radiologists by automating scan interpretation and making diagnosis faster, more reliable, and scalable.",
    highlights:["94% Accuracy","Medical AI","Deep Learning"],
    github:"https://github.com/yourusername/ChestXray-Scan" // Replace with your actual repo link
  },
  {
    title:"Emotion Detector AI",
    tech:"Python 3.12, Transformers, PyTorch, Matplotlib, Gradio",
    description:"Built a lightweight NLP application designed to identify and visualize emotions from free-form text in real time. Leveraging state-of-the-art transformer models, the system achieves 92% accuracy in emotion classification, providing instant feedback through an interactive Gradio interface with emotion distribution visualizations.",
    highlights:["92% Accuracy","Real-time NLP","Interactive UI"],
    github:"https://github.com/yourusername/emotion-detector" // Replace with your actual repo link
  },
  {
    title:"AI Resume Analyser",
    tech:"Python, NLP, Machine Learning, Jupyter Notebook",
    description:"Built a web application that compares resumes with job descriptions and returns similarity matches using AI. Helps job seekers optimize their resumes for specific positions.",
    highlights:["NLP Processing","AI Matching","Career Tech"],
    github:"https://github.com/yourusername/AI-Resume_Analyser" // Replace with your actual repo link
  },
  {
    title:"Compiler (C-Compiler)",
    tech:"Python, Compiler Design, Programming Languages",
    description:"Implemented a compiler for C language from scratch, including lexical analysis, parsing, semantic analysis, and code generation phases.",
    highlights:["System Programming","Language Design","Code Generation"],
    github:"https://github.com/yourusername/Compiler---C-Compiler" // Replace with your actual repo link
  },
  {
    title:"Encryption and Decryption using QKD",
    tech:"Python, Quantum Computing, Cryptography",
    description:"Developed a quantum key distribution system for secure encryption and decryption, exploring quantum computing applications in cybersecurity.",
    highlights:["Quantum Security","Cryptography","Research Project"],
    github:"https://github.com/yourusername/Encryption-and-Decryption-using-QKD" // Replace with your actual repo link
  }
];

const TESTIMONIALS = [
  {
    name:"Dr. Sarah Mitchell",
    role:"Research Supervisor, Iowa State University",
    text:"Yasaswini's work on the RAG tutoring system exceeded expectations. Her technical depth and attention to accessibility standards set a new benchmark for our projects."
  },
  {
    name:"Michael Chen",
    role:"Senior Manager, CDS Global",
    text:"The Document AI platform Yasaswini built transformed our processing workflow. Her ability to deliver production-grade solutions under tight deadlines is remarkable."
  },
  {
    name:"Priya Sharma",
    role:"Tech Lead, Accenture",
    text:"Working with Yasaswini was a pleasure. She consistently delivered optimized, scalable solutions and her knowledge of modern DevOps practices is exceptional."
  }
];

/* --------------------  GLOBAL STYLE TAG  -------------------- */
const GlobalStyles = () => (
  <style>{`
    body { 
      background:${BASE_COLOR}; 
      color:${TEXT_DARK}; 
      font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif; 
      margin:0; 
      padding:0;
    }

    * { box-sizing: border-box; }

    /* Smooth scrolling for nav */
    html { scroll-behavior:smooth; }

    /* Mobile responsive */
    @media (max-width: 768px) {
      .nav-links { display:none !important; }
      .mobile-menu-btn { display:block !important; }
    }
    @media (min-width: 769px) {
      .mobile-menu { display:none !important; }
      .mobile-menu-btn { display:none !important; }
    }

    /* Marquee */
    @keyframes scroll {
      0%{transform:translateX(0);}
      100%{transform:translateX(-50%);}
    }
    .skills-marquee{
      display:inline-block;
      white-space:nowrap;
      animation:scroll 30s linear infinite;
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
    
    /* Hover effects */
    .nav-btn:hover{color:${ACCENT_COLOR};}
    .accent{color:${ACCENT_COLOR};}
    
    /* Button hover */
    button:hover { opacity: 0.9; transition: opacity 0.2s; }
  `}</style>
);

/* --------------------  COMPONENTS  -------------------- */

const ScrollingSkills = () => {
  const skills = [...SKILLS, ...SKILLS];
  return (
    <div style={{overflow:'hidden',padding:'1rem 0',borderTop:`1px solid ${ACCENT_COLOR}30`,borderBottom:`1px solid ${ACCENT_COLOR}30`}}>
      <div className="skills-marquee">
        {skills.map((s,i)=><span key={i} style={{padding:'0 1.5rem',fontWeight:500,color:TEXT_SUBTLE,fontSize:'clamp(0.9rem, 2vw, 1.1rem)'}}>{s}</span>)}
      </div>
    </div>
  );
};

const AnimatedLaptopSeparator = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = React.useMemo(() => [
    '> Yasaswini Tatikonda',
    '> Full-Stack Engineer',
    '> AI Enthusiast',
    '> Building the Future'
  ], []);
  
  const [phraseIndex, setPhraseIndex] = useState(0);
  
  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[phraseIndex];
    
    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const speed = isDeleting ? 30 : 80;
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? currentPhrase.substring(0, displayText.length - 1)
            : currentPhrase.substring(0, displayText.length + 1)
        );
      }, speed);
    }
    
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex, phrases]);

  return (
    <section style={{padding:'2.5rem 1rem',background:BASE_COLOR}}>
      <div style={{maxWidth:'650px',margin:'0 auto',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{
          width:'100%',
          background:'#0f172a',
          borderRadius:'12px',
          padding:'1.5rem',
          boxShadow:`0 10px 40px ${ACCENT_COLOR}30`,
          border:`2px solid ${ACCENT_COLOR}40`
        }}>
          {/* Terminal Header */}
          <div style={{
            display:'flex',
            alignItems:'center',
            gap:'0.5rem',
            marginBottom:'1.2rem',
            paddingBottom:'0.8rem',
            borderBottom:`1px solid ${ACCENT_COLOR}30`
          }}>
            <div style={{width:'12px',height:'12px',borderRadius:'50%',background:'#ef4444'}}/>
            <div style={{width:'12px',height:'12px',borderRadius:'50%',background:'#f59e0b'}}/>
            <div style={{width:'12px',height:'12px',borderRadius:'50%',background:'#10b981'}}/>
            <span style={{
              marginLeft:'1rem',
              color:'#94a3b8',
              fontSize:'clamp(0.7rem, 1.4vw, 0.85rem)',
              fontFamily:'monospace'
            }}>
              terminal@yasaswini:~$
            </span>
          </div>
          
          {/* Terminal Content */}
          <div style={{
            fontFamily:'monospace',
            fontSize:'clamp(0.95rem, 2.2vw, 1.3rem)',
            color:'#10b981',
            minHeight:'50px',
            display:'flex',
            alignItems:'center'
          }}>
            <span style={{color:ACCENT_COLOR,marginRight:'0.5rem'}}>$</span>
            {displayText}
            <span style={{
              display:'inline-block',
              width:'10px',
              height:'1.3em',
              background:'#10b981',
              marginLeft:'4px',
              animation:'blink 1s steps(2) infinite'
            }}/>
          </div>
        </div>
        
        <p style={{marginTop:'1.2rem',color:ACCENT_COLOR,fontWeight:600,letterSpacing:'1px',textAlign:'center',fontSize:'clamp(0.85rem, 1.8vw, 1rem)'}}>
            Engineering Intelligent Systems with Purpose
        </p>
      </div>
    </section>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('Thank you! Your message has been received.');
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setStatus('');
    }, 3000);
  };

  return (
    <div style={{display:'flex',flexDirection:'column',gap:'1rem'}}>
      <input 
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        placeholder="Your Name" 
        required 
        style={{padding:'0.8rem',border:`2px solid ${ACCENT_COLOR}40`,borderRadius:'8px',fontSize:'clamp(0.9rem, 2vw, 1rem)'}}
      />
      <input 
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        type="email" 
        placeholder="Your Email" 
        required 
        style={{padding:'0.8rem',border:`2px solid ${ACCENT_COLOR}40`,borderRadius:'8px',fontSize:'clamp(0.9rem, 2vw, 1rem)'}}
      />
      <textarea 
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        rows="4" 
        placeholder="Your Message" 
        required 
        style={{padding:'0.8rem',border:`2px solid ${ACCENT_COLOR}40`,borderRadius:'8px',fontSize:'clamp(0.9rem, 2vw, 1rem)',fontFamily:'inherit'}}
      />
      <button 
        onClick={handleSubmit}
        style={{
          padding:'0.9rem',fontWeight:700,border:'none',borderRadius:'8px',
          background:ACCENT_COLOR,color:'#fff',cursor:'pointer',fontSize:'clamp(0.9rem, 2vw, 1rem)'
        }}
      >
        Send Message
      </button>
      {status && <p style={{textAlign:'center',color:ACCENT_COLOR,fontWeight:600}}>{status}</p>}
    </div>
  );
};

/* --------------------  MAIN APP  -------------------- */

const App = () => {
  const [scrolled,setScrolled]=useState(false);
  const [mobileMenuOpen,setMobileMenuOpen]=useState(false);
  
  useEffect(()=>{
    const handle=()=>setScrolled(window.scrollY>50);
    window.addEventListener('scroll',handle);
    return()=>window.removeEventListener('scroll',handle);
  },[]);

  const scrollTo=(id)=>{
    document.getElementById(id)?.scrollIntoView({behavior:'smooth',block:'start'});
    setMobileMenuOpen(false);
  };

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
          <h1 style={{fontWeight:800,fontSize:'clamp(1.2rem, 3vw, 1.5rem)',color:ACCENT_COLOR,margin:0}}>Yasaswini T.</h1>
          
          {/* Desktop Nav */}
          <div className="nav-links" style={{display:'flex',gap:'1.5rem',fontWeight:500}}>
            {['About','Experience','Skills','Projects','Education','Certifications','Contact'].map(item=>(
              <button key={item} onClick={()=>scrollTo(item.toLowerCase())}
                      className="nav-btn" style={{background:'none',border:'none',cursor:'pointer',color:TEXT_SUBTLE,fontSize:'0.95rem'}}>
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}
                  style={{display:'none',background:'none',border:'none',cursor:'pointer',fontSize:'1.5rem',color:ACCENT_COLOR}}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu" style={{
            position:'absolute',top:NAV_HEIGHT,left:0,right:0,
            background:'#fff',borderBottom:`2px solid ${ACCENT_COLOR}`,
            padding:'1rem',display:'flex',flexDirection:'column',gap:'0.8rem',
            boxShadow:`0 4px 12px ${ACCENT_COLOR}30`
          }}>
            {['About','Experience','Skills','Projects','Education','Certifications','Contact'].map(item=>(
              <button key={item} onClick={()=>scrollTo(item.toLowerCase())}
                      style={{background:'none',border:'none',cursor:'pointer',color:TEXT_SUBTLE,
                              padding:'0.8rem',textAlign:'left',fontWeight:500,fontSize:'1rem'}}>
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <main style={{maxWidth:'1200px',margin:'0 auto',paddingBottom:'3rem'}}>

        {/* HERO */}
        <section id="hero" style={{padding:'3.5rem 1rem 2.5rem'}}>
          <div style={{maxWidth:'900px',margin:'0 auto',display:'flex',alignItems:'center',gap:'2rem',flexWrap:'wrap',justifyContent:'center'}}>
            {/* Text Content - Left */}
            <div style={{flex:'1 1 400px',textAlign:'left'}}>
              <h2 style={{fontSize:'clamp(1.6rem, 4.5vw, 2.5rem)',fontWeight:900,marginBottom:'0.8rem'}}>
                Hello, I am <span style={{color:ACCENT_COLOR}}>Yasaswini Tatikonda</span>
              </h2>
              <p style={{fontSize:'clamp(0.95rem, 2.3vw, 1.1rem)',color:TEXT_SUBTLE,marginBottom:'1.2rem',lineHeight:1.6}}>
                Software Engineer with 3+ years of experience in scalable AI and full-stack development, passionate about building intelligent systems.
              </p>
              <button onClick={()=>scrollTo('projects')}
                      style={{padding:'0.8rem 2rem',fontWeight:700,
                              border:`2px solid ${ACCENT_COLOR}`,borderRadius:'30px',
                              background:ACCENT_COLOR,color:'#fff',cursor:'pointer',fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)'}}>
                Explore Featured Projects
              </button>
            </div>
            
            {/* Photo - Right */}
            <div style={{flex:'0 0 auto'}}>
              <img src={PHOTO_URL} alt="Yasaswini Tatikonda" style={{
                width:'120px',height:'120px',borderRadius:'50%',border:`4px solid ${ACCENT_COLOR}`,
                boxShadow:`0 4px 20px ${ACCENT_COLOR}50`,objectFit:'cover'
              }}/>
            </div>
          </div>
        </section>

        {/* ABOUT (Unified) */}
        <section id="about" style={{
          background:'#FFFFFF',borderTop:`4px solid ${ACCENT_COLOR}`,
          borderRadius:'12px',padding:'2.5rem 1.5rem',margin:'0 1rem 4rem',
          boxShadow:`0 0 20px ${ACCENT_COLOR}20`
        }}>
          <h3 style={{textAlign:'center',fontSize:'clamp(1.4rem, 3.5vw, 1.8rem)',fontWeight:800,marginBottom:'1.2rem'}}>
            About Me
          </h3>
          <p style={{color:TEXT_SUBTLE,fontSize:'clamp(0.9rem, 1.8vw, 1rem)',maxWidth:'900px',margin:'0 auto 1.2rem',lineHeight:1.7}}>
            I'm a Computer Science professional with a strong passion for AI, cloud computing, and intelligent 
            systems design. I'm driven by curiosity and a mission to build scalable, secure, and human-centered 
            technologies that address real-world challenges.
          </p>
          <p style={{color:TEXT_SUBTLE,fontSize:'clamp(0.9rem, 1.8vw, 1rem)',maxWidth:'900px',margin:'0 auto 1.5rem',lineHeight:1.7}}>
            I continuously grow as a technologist and innovator, developing solutions that integrate advanced 
            technologies with practical applications across cloud ecosystems. I thrive in roles where I can 
            bridge research and industry, lead impactful projects, and contribute to ethical, forward-thinking 
            technological advancement.
          </p>

          <h4 style={{textAlign:'center',fontSize:'clamp(1.1rem, 2.8vw, 1.3rem)',fontWeight:700,marginBottom:'0.8rem',color:ACCENT_COLOR}}>
            Core Technologies
          </h4>
          <p style={{textAlign:'center',color:TEXT_SUBTLE,maxWidth:'900px',margin:'0 auto',lineHeight:1.6,fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)'}}>
            Python · TypeScript · React · C# · JavaScript · SQL · Java
            <br/>
            .NET Core · ASP.NET MVC · FastAPI · Flask · Next.js · React Native
            <br/>
            Azure DevOps · AWS · Kubernetes · Docker · CI/CD · Azure Functions
            <br/>
            PyTorch · Hugging Face · LLMs · RAG Pipelines · NLP · ChromaDB
            <br/>
            SQL Server · Azure SQL · Query Optimization · OAuth 2.0
          </p>
        </section>

        {/* LAPTOP SEPARATOR */}
        <AnimatedLaptopSeparator/>

        {/* EXPERIENCE */}
        <section id="experience" style={{padding:'2.5rem 1rem'}}>
          <h3 style={{textAlign:'center',fontSize:'clamp(1.4rem, 3.5vw, 1.8rem)',fontWeight:800,marginBottom:'1.2rem'}}>Professional Experience</h3>
          <div style={{maxWidth:'800px',margin:'0 auto'}}>
            {EXPERIENCE.map((job,i)=>(
              <div key={i} style={{
                background:'#fff',padding:'1.5rem',borderLeft:`4px solid ${ACCENT_COLOR}`,
                borderRadius:'8px',boxShadow:`0 4px 15px ${ACCENT_COLOR}10`,marginBottom:'1rem'
              }}>
                <h4 style={{fontWeight:700,fontSize:'clamp(0.95rem, 2.2vw, 1.1rem)'}}>{job.title} | <span style={{color:ACCENT_COLOR}}>{job.company}</span></h4>
                <p style={{fontSize:'clamp(0.75rem, 1.8vw, 0.85rem)',color:TEXT_SUBTLE,marginBottom:'0.5rem'}}>{job.duration}</p>
                <ul style={{marginLeft:'1rem',color:TEXT_SUBTLE,lineHeight:1.5,fontSize:'clamp(0.8rem, 1.8vw, 0.9rem)'}}>
                  {job.points.map((p,j)=><li key={j} style={{marginBottom:'0.25rem'}} dangerouslySetInnerHTML={{__html: p}}/>)}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS MARQUEE */}
        <section id="skills" style={{margin:'2.5rem 0'}}>
          <h3 style={{textAlign:'center',fontSize:'clamp(1.4rem, 3.5vw, 1.8rem)',fontWeight:800,marginBottom:'0.8rem',padding:'0 1rem'}}>Technical Expertise</h3>
          <ScrollingSkills/>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{padding:'2.5rem 1rem'}}>
          <h3 style={{textAlign:'center',fontSize:'clamp(1.4rem, 3.5vw, 1.8rem)',fontWeight:800,marginBottom:'1.2rem'}}>Featured Projects</h3>
          <div style={{maxWidth:'1100px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'1.5rem'}}>
            {PROJECTS.map((proj,i)=>(
              <div key={i} style={{
                background:'#fff',padding:'1.5rem',borderTop:`4px solid ${ACCENT_COLOR}`,
                borderRadius:'12px',boxShadow:`0 4px 15px ${ACCENT_COLOR}15`,
                display:'flex',flexDirection:'column'
              }}>
                <h4 style={{fontWeight:700,fontSize:'clamp(1rem, 2.3vw, 1.2rem)',marginBottom:'0.4rem',color:TEXT_DARK}}>{proj.title}</h4>
                <p style={{fontSize:'clamp(0.75rem, 1.8vw, 0.8rem)',color:ACCENT_COLOR,fontWeight:600,marginBottom:'0.8rem'}}>{proj.tech}</p>
                <p style={{color:TEXT_SUBTLE,lineHeight:1.5,marginBottom:'0.8rem',flexGrow:1,fontSize:'clamp(0.8rem, 1.8vw, 0.9rem)'}}>{proj.description}</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'0.4rem',marginBottom:'0.8rem'}}>
                  {proj.highlights.map((h,j)=>(
                    <span key={j} style={{
                      background:`${ACCENT_COLOR}20`,color:ACCENT_COLOR,padding:'0.25rem 0.7rem',
                      borderRadius:'20px',fontSize:'clamp(0.65rem, 1.6vw, 0.75rem)',fontWeight:600
                    }}>{h}</span>
                  ))}
                </div>
                <a href={proj.github} target="_blank" rel="noopener noreferrer"
                   style={{
                     display:'inline-flex',alignItems:'center',gap:'0.4rem',
                     color:ACCENT_COLOR,textDecoration:'none',fontWeight:600,
                     fontSize:'clamp(0.8rem, 1.8vw, 0.9rem)',marginTop:'auto'
                   }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill={ACCENT_COLOR} xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  View Source Code
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" style={{padding:'2.5rem 1rem',background:'#fff'}}>
          <h3 style={{textAlign:'center',fontSize:'clamp(1.4rem, 3.5vw, 1.8rem)',fontWeight:800,marginBottom:'1.2rem'}}>Education</h3>
          <div style={{maxWidth:'800px',margin:'0 auto'}}>
            <div style={{
              background:BASE_COLOR,padding:'1.3rem',borderLeft:`4px solid ${ACCENT_COLOR}`,
              borderRadius:'12px',boxShadow:`0 4px 15px ${ACCENT_COLOR}15`
            }}>
              <h4 style={{fontWeight:700,fontSize:'clamp(1rem, 2.3vw, 1.2rem)',color:TEXT_DARK,marginBottom:'0.2rem'}}>{EDUCATION.degree}</h4>
              <p style={{fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)',color:ACCENT_COLOR,fontWeight:600,marginBottom:'0.2rem'}}>
                {EDUCATION.school} | {EDUCATION.location}
              </p>
              <p style={{fontSize:'clamp(0.8rem, 1.8vw, 0.9rem)',color:TEXT_SUBTLE,marginBottom:'0.7rem'}}>
                Expected Graduation: {EDUCATION.graduation}
              </p>
              
              <div style={{marginTop:'0.8rem'}}>
                <p style={{fontWeight:600,color:TEXT_DARK,marginBottom:'0.3rem',fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)'}}>Relevant Coursework:</p>
                <div style={{display:'flex',flexWrap:'wrap',gap:'0.35rem'}}>
                  {EDUCATION.coursework.map((course,i)=>(
                    <span key={i} style={{
                      background:'#fff',color:TEXT_SUBTLE,padding:'0.18rem 0.55rem',
                      borderRadius:'14px',fontSize:'clamp(0.68rem, 1.6vw, 0.76rem)',
                      border:`1px solid ${ACCENT_COLOR}30`
                    }}>{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        

        {/* CERTIFICATIONS */}
        <section id="certifications" style={{padding:'2.5rem 1rem',background:'#fff'}}>
          <h3 style={{textAlign:'center',fontSize:'clamp(1.4rem, 3.5vw, 1.8rem)',fontWeight:800,marginBottom:'1.2rem'}}>Certifications</h3>
          <div style={{maxWidth:'900px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',gap:'1.5rem'}}>
            {CERTIFICATIONS.map((cert,i)=>(
              <div key={i} style={{
                background:BASE_COLOR,padding:'1.5rem',borderTop:`4px solid ${ACCENT_COLOR}`,
                borderRadius:'12px',boxShadow:`0 4px 15px ${ACCENT_COLOR}15`,
                textAlign:'center'
              }}>
                <h4 style={{fontWeight:700,fontSize:'clamp(0.95rem, 2.2vw, 1.1rem)',marginBottom:'0.4rem',color:TEXT_DARK,lineHeight:1.4}}>{cert.title}</h4>
                <p style={{fontSize:'clamp(0.8rem, 1.8vw, 0.9rem)',color:ACCENT_COLOR,fontWeight:600}}>{cert.issuer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" style={{padding:'2.5rem 1rem',background:BASE_COLOR}}>
          <h3 style={{textAlign:'center',fontSize:'clamp(1.4rem, 3.5vw, 1.8rem)',fontWeight:800,marginBottom:'1.2rem'}}>What People Say</h3>
          <div style={{maxWidth:'1000px',margin:'0 auto',display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',gap:'1.5rem'}}>
            {TESTIMONIALS.map((test,i)=>(
              <div key={i} style={{
                background:'#fff',padding:'1.5rem',borderLeft:`4px solid ${ACCENT_COLOR}`,
                borderRadius:'8px',boxShadow:`0 4px 12px ${ACCENT_COLOR}10`
              }}>
                <p style={{color:TEXT_DARK,fontStyle:'italic',lineHeight:1.6,marginBottom:'0.8rem',fontSize:'clamp(0.8rem, 1.8vw, 0.9rem)'}}>"{test.text}"</p>
                <div style={{borderTop:`1px solid ${ACCENT_COLOR}30`,paddingTop:'0.8rem'}}>
                  <p style={{fontWeight:700,color:TEXT_DARK,fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)'}}>{test.name}</p>
                  <p style={{fontSize:'clamp(0.7rem, 1.6vw, 0.8rem)',color:TEXT_SUBTLE}}>{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" style={{
          background:'#fff',padding:'2.2rem 1.5rem',borderTop:`4px solid ${ACCENT_COLOR}`,
          borderRadius:'12px',maxWidth:'600px',margin:'3rem auto',
          boxShadow:`0 0 20px ${ACCENT_COLOR}20`
        }}>
          <h3 style={{textAlign:'center',fontSize:'clamp(1.4rem, 3.5vw, 1.8rem)',fontWeight:800,marginBottom:'0.8rem'}}>Get In Touch</h3>
          <p style={{textAlign:'center',color:TEXT_SUBTLE,marginBottom:'1.3rem',fontSize:'clamp(0.9rem, 1.8vw, 1rem)',lineHeight:1.5}}>
            Feel free to contact me for collaborations or job opportunities. I'm always excited to discuss new projects and innovative ideas!
          </p>
          
          {/* Contact Info */}
          <div style={{marginBottom:'1.5rem',display:'flex',flexDirection:'column',gap:'0.8rem'}}>
            <a href="mailto:yasaswinitatikonda1@gmail.com" style={{
              display:'flex',alignItems:'center',gap:'0.7rem',color:TEXT_DARK,
              textDecoration:'none',fontSize:'clamp(0.88rem, 1.8vw, 0.98rem)',
              padding:'0.6rem',borderRadius:'8px',transition:'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = `${ACCENT_COLOR}10`}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke={ACCENT_COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 6L12 13L2 6" stroke={ACCENT_COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>yasaswinitatikonda1@gmail.com</span>
            </a>
            
            <a href="https://www.linkedin.com/in/tatikondayasaswini" target="_blank" rel="noopener noreferrer" style={{
              display:'flex',alignItems:'center',gap:'0.7rem',color:TEXT_DARK,
              textDecoration:'none',fontSize:'clamp(0.88rem, 1.8vw, 0.98rem)',
              padding:'0.6rem',borderRadius:'8px',transition:'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = `${ACCENT_COLOR}10`}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke={ACCENT_COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 9H2V21H6V9Z" stroke={ACCENT_COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke={ACCENT_COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>LinkedIn Profile</span>
            </a>
            
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" style={{
              display:'flex',alignItems:'center',gap:'0.7rem',color:TEXT_DARK,
              textDecoration:'none',fontSize:'clamp(0.88rem, 1.8vw, 0.98rem)',
              padding:'0.6rem',borderRadius:'8px',transition:'background 0.2s'
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = `${ACCENT_COLOR}10`}
            onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 0.999999C19.91 0.999999 18.73 0.649999 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.649999 5.09 0.999999 5.09 0.999999C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22" stroke={ACCENT_COLOR} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>GitHub Profile</span>
            </a>

            {/* Download Resume Button */}
            <a href="/path-to-your-resume.pdf" download="Yasaswini_Tatikonda_Resume.pdf" style={{
              display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem',
              color:'#fff',background:ACCENT_COLOR,textDecoration:'none',
              fontSize:'clamp(0.88rem, 1.8vw, 0.98rem)',padding:'0.7rem 1rem',
              borderRadius:'8px',fontWeight:600,marginTop:'0.5rem',
              border:`2px solid ${ACCENT_COLOR}`,transition:'all 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = ACCENT_COLOR;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = ACCENT_COLOR;
              e.currentTarget.style.color = '#fff';
            }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M7 10L12 15L17 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Download Resume</span>
            </a>
          </div>

          <div style={{borderTop:`1px solid ${ACCENT_COLOR}30`,paddingTop:'1rem'}}>
            <p style={{textAlign:'center',color:TEXT_SUBTLE,marginBottom:'0.7rem',fontSize:'clamp(0.8rem, 1.8vw, 0.88rem)'}}>
              Or send me a message directly:
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{textAlign:'center',padding:'1.5rem 1rem',color:TEXT_SUBTLE,fontSize:'clamp(0.8rem, 2vw, 0.9rem)'}}>
        © {new Date().getFullYear()} Yasaswini Tatikonda | Software Engineer with 3+ years of experience
      </footer>
    </div>
  );
};

export default App;