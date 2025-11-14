import React, { useState, useEffect } from 'react';

/* --------------------  GLOBAL CONFIG  -------------------- */
const ACCENT_COLOR = '#F6A25A';
const BASE_COLOR = '#FFF8F3';
const TEXT_DARK = '#2E2E2E';
const TEXT_SUBTLE = '#6B6B6B';
const NAV_HEIGHT = '60px';
const GRADIENT_ACCENT = 'linear-gradient(135deg, #F6A25A 0%, #FF8C42 100%)';

const PHOTO_URL = '/profile.png';

const COMPANY_LOGOS = {
  'CDS Global': '/cds-global-logo.png',
  'Iowa State University': '/iowa-state-logo.png',
  'Accenture': '/accenture-logo.png'
};

/* TECH STACK ICONS - MAPPING WITH BRAND LOGOS FROM CDN */
const TECH_ICONS = {
  'Python': { color: '#3776ab', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  'React': { color: '#61dafb', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  'TypeScript': { color: '#3178c6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  'C#': { color: '#239120', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
  'JavaScript': { color: '#f7df1e', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  'HTML': { color: '#e34c26', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  'CSS': { color: '#1572b6', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  'SQL': { color: '#336791', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  'Java': { color: '#007396', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  'Kubernetes': { color: '#326ce5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg' },
  'AWS': { color: '#FF9900', logo: 'https://www.svgrepo.com/show/161104/amazon-logo.svg' },
  'Docker': { color: '#2496ed', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  '.NET Core': { color: '#512bd4', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg' },
  'FastAPI': { color: '#009688', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg' },
  'Flask': { color: '#000000', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg' },
  'Next.js': { color: '#000000', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg' },
  'Azure': { color: '#0078d4', logo: 'https://www.svgrepo.com/show/349360/azure.svg' },
  'PyTorch': { color: '#ee4c2c', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytorch/pytorch-original.svg' },
  'LLMs': { color: '#F6A25A', logo: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/huggingface.svg'},
  'NLP': { color: '#8e7cc3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg' },
  'ChromaDB': { color: '#ff5722', logo: 'https://avatars.githubusercontent.com/u/112729736?s=200&v=4' },
  'ASP.NET': { color: '#512BD4', logo: '/icons/aspnet-svgrepo-com.svg' },
  'Azure DevOps': { color: '#0078D7', logo: 'https://www.svgrepo.com/show/448271/azure-devops.svg' },
  'CI/CD Pipelines': { color: '#F6A25A', logo: '/icons/ci-cd.svg' },
  'Azure Functions': { color: '#0078D7', logo: '/icons/azure.svg' },
  'SQL Server': { color: '#CC2927', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
  'Hugging Face': { color: '#FF9900', logo: '/icons/hugging-face-svgrepo-com.svg' },
  'Angular': { color: '#dd0031', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg' },
  'OAuth 2.0': { color: '#4285F4', logo: '/icons/oauth-svgrepo-com.svg' },
  'React Native': { color: '#61dafb', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' }



};

/* UTILITY ICONS FOR EDUCATION - Inline SVG used instead of variables */
const SKILLS = [
  'Python','C#','TypeScript','React','JavaScript','SQL','Java',
  'Kubernetes','Azure DevOps','AWS','Docker','CI/CD Pipelines',
  '.NET Core','ASP.NET MVC','FastAPI','Flask','Next.js','React Native','Angular',
  'PyTorch','Hugging Face','LLMs','RAG Pipelines','NLP','ChromaDB',
  'SQL Server','Azure SQL','Query Optimization','OAuth 2.0','Azure Functions'
];

const EXPERIENCE = [
  {
    title:"Process Automation and AI Intern",
    company:"CDS Global",
    companyLogo: COMPANY_LOGOS['CDS Global'],
    duration:"May 2025 – Present | Des Moines",
    techStack: ["Python", "FastAPI", "Flask", "Docker", "Kubernetes", "LLMs", "NLP"],
    points:[
      "Designed and deployed an end-to-end Document AI platform using Python microservices (FastAPI, Flask), containerized with Docker and orchestrated on Kubernetes for scalable processing of 10K+ document streams.",
      "Built a multimodal extraction pipeline combining OCR, Donut, and LayoutLM models, improving accuracy by 82% and reducing latency by 70% with performance optimized through Prometheus-based system health checks.",
      "Integrated NLP and LLM modules within APIs to normalize and validate data, enhancing consistency and reliability.",
      "Implemented monitoring pipelines to track uptime and performance metrics, ensuring stable production operations."
    ]
  },
  {
    title:"Graduate Research Assistant",
    company:"Iowa State University",
    companyLogo: COMPANY_LOGOS['Iowa State University'],
    duration:"Nov 2024 – Present | Ames",
    techStack: ["Python", "LLMs", "Hugging Face", "ChromaDB", "React", "TypeScript", "SQL", "Git"],
    points:[
      "Architected and deployed a Retrieval Augmented Generation (RAG) tutoring system using Llama 2 and Hugging Face on Kubernetes, maintaining 99.9% uptime and scalable AI delivery.",
      "Built and optimized RAG pipelines with ChromaDB to ground responses in diverse data formats, supporting over 500 concurrent requests with consistent context accuracy.",
      "Developed an accessible front end using React and TypeScript with WCAG 2.1 compliant components, enhancing accessibility and improving load time by 20%.",
      "Executed evaluation pipelines achieving 85% answer accuracy and 100% contextual relevance.",
      "Integrated an SQL-based tracking layer to enable reliable data storage, traceability, and analytical reporting."
    ]
  },
  {
    title:"Software Developer in App Development",
    company:"Iowa State University",
    companyLogo: COMPANY_LOGOS['Iowa State University'],
    duration:"Feb 2024 – Sept 2025 | Ames",
    techStack: ["React", "TypeScript", ".NET Core", "SQL Server", "Azure DevOps", "CI/CD Pipelines"],
    points:[
      "Designed and implemented the frontend in React and TypeScript, optimizing components and build settings to achieve 30% faster load times.",
      "Built a robust client-side data layer with state-management logic to handle complex, real-time updates from .NET Core APIs.",
      "Integrated the React frontend with .NET Core and SQL Server backends to provide secure user access and smooth, real-time interaction for more than 2K users.",
      "Created CI/CD pipelines in Azure DevOps to automate build and release workflows, reducing deployment time and improving product reliability.",
      "Implemented automated frontend testing with Jest and React Testing Library to ensure stable, high-quality feature delivery."
    ]
  },
  {
    title:"App Development Associate",
    company:"Accenture",
    companyLogo: COMPANY_LOGOS['Accenture'],
    duration:"Oct 2022 – Dec 2023 | Bengaluru",
    techStack: ["C#", ".NET Core", "SQL Server", "AWS", "Azure DevOps", "OAuth 2.0"],
    points:[
      "Designed and optimized .NET Core REST APIs with distributed caching, achieving 2.4× higher throughput and lower latency.",
      "Built a secure data layer integrating OAuth 2.0 authentication and encryption protocols to handle over 100K daily transactions.",
      "Developed a scalable SQL Server backend with advanced query optimization and indexing for enterprise-grade performance.",
      "Built CI/CD pipelines in Azure DevOps and deployed event-driven AWS Lambda services with 99.9% uptime.",
      "Collaborated with global Agile teams on sprint planning, code reviews, and feature delivery to maintain engineering excellence."
    ]
  }
];

const EDUCATION = {
  masters: {
    degree: "Master of Science in Computer Science",
    school: "Iowa State University",
    location: "Ames, Iowa",
    graduation: "December 2025",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Iowa_State_University_logo.png/220px-Iowa_State_University_logo.png"
  },
  bachelors: {
    degree: "Bachelor of Technology in Electrical and Electronics Engineering",
    school: "GMR Institute of Technology",
    location: "Andhra Pradesh, India",
    graduation: "May 2022",
    logo: "https://media.licdn.com/dms/image/C560BAQFh3XrF3eFbDg/company-logo_200_200/0/1631556849732/gmr_institute_of_technology_logo?e=1735689600&v=beta&t=knowledge"
  },
  coursework: [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Cloud Computing",
    "Machine Learning",
    "Advanced Principles of System Architecture",
    "Computer Networks",
    "Deep Learning",
    "Digital Signal Processing",
    "Power Systems"
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
    techs: ["Python", "PyTorch", "Computer Vision"],
    description:"Deep learning system for pneumonia detection from chest X-rays. Trained CNN model achieving 94% accuracy on medical imaging dataset. Implemented data preprocessing, model optimization, and evaluation pipelines for healthcare diagnostic support.",
    highlights:["94% Accuracy","Medical AI","Deep Learning"],
    image: "/chestxrayscan.png",
    github:"https://github.com/SreeTatikonda/ChestXray-Scan"
  },
  {
    title: "Multi-Modal RAG System",
    tech: "Python, Hugging Face, Vision Transformers, Sentence Embeddings, Vector Databases",
    techs: ["Python", "LLMs", "Computer Vision", "RAG", "Embeddings"],
    description: "Developed a Multi-Modal Retrieval-Augmented Generation system capable of understanding and integrating information from both images and text documents. Implemented unified embedding pipelines, vector search, multimodal retrieval, and grounded LLM reasoning for accurate, context-aware responses.",
    highlights: ["Multi-Modal Retrieval", "LLM Reasoning", "Unified Embeddings"],
    image: "/multimodalrag.png",
    github: "https://github.com/SreeTatikonda/RAG_projects"
  }
  {
    title:"Emotion Detection from Text",
    tech:"Python 3.12, Transformers, PyTorch, Matplotlib, Gradio",
    techs: ["Python", "NLP", "PyTorch"],
    description:"NLP-based emotion classifier using transformer models (distilBERT). Achieves 92% accuracy on emotion classification with real-time inference. Features interactive UI with confidence scores and emotion distribution visualization for text analysis.",
    highlights:["92% Accuracy","Real-time NLP","Interactive UI"],
    image: "/emotionai.png",
    github:"https://github.com/SreeTatikonda/Emotion-Detection-from-Text"
  },
  {
    title:"AI Resume Analyser",
    tech:"Python, NLP, Machine Learning, Jupyter Notebook",
    techs: ["Python", "NLP", "React"],
    description:"AI-powered tool that compares resumes against job descriptions using NLP similarity matching. Provides actionable recommendations for resume optimization. Helps job seekers identify skill gaps and improve match scores with target positions.",
    highlights:["NLP Processing","AI Matching","Career Tech"],
    image: "/airesumeanalyser.png",
    github:"https://github.com/SreeTatikonda/AI-Resume_Analyser"
  },
  {
    title:"C Compiler",
    tech:"Python, Compiler Design, Programming Languages",
    techs: ["Python", "C#", "Java"],
    description:"Complete C compiler implementation from scratch with lexical analysis, parsing, semantic analysis, and code generation. Handles complex language constructs with proper error handling and optimization for executable code generation.",
    highlights:["System Programming","Language Design","Code Generation"],
    image: "compiler.png",
    github:"https://github.com/SreeTatikonda/Compiler---C-Compiler"
  },
  {
    title:"Quantum Key Distribution",
    tech:"Python, Quantum Computing, Cryptography",
    techs: ["Python", "Security", "Quantum"],
    description:"Quantum key distribution (QKD) system for secure encryption and decryption. Explores quantum computing applications in cybersecurity. Implements cryptographic protocols leveraging quantum mechanics for theoretically unbreakable encryption.",
    highlights:["Quantum Security","Cryptography","Research"],
    image: "/qkdencryption.png",
    github:"https://github.com/SreeTatikonda/Encryption-and-Decryption-using-QKD"
  }
];

const TESTIMONIALS = [
  {
    name:"Tammy Griggs",
    role:"IT Developer and Manager, CDS Global",
    text:"It's been a real pleasure having Yasaswini on our development team. From day one, she brought a rare combination of curiosity, technical depth, and genuine enthusiasm. She's playing a key role in integrating AI into our systems, turning complex ideas into practical solutions.",
    photo:"/tammy.png"
  },
  {
    name:"Dr. Sarah Mitchell",
    role:"Research Supervisor, Iowa State University",
    text:"Yasaswini's work on the RAG tutoring system exceeded expectations. Her technical depth and attention to accessibility standards set a new benchmark for our projects.",
    photo:"https://placehold.co/60x60/F6A25A/FFF?text=SM"
  },
  {
    name:"Priya Sharma",
    role:"Tech Lead, Accenture",
    text:"Working with Yasaswini was a pleasure. She consistently delivered optimized, scalable solutions and her knowledge of modern DevOps practices is exceptional.",
    photo:"https://placehold.co/60x60/F6A25A/FFF?text=PS"
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
    html { scroll-behavior:smooth; }

    @media (max-width: 768px) {
      .nav-links { display:none !important; }
      .mobile-menu-btn { display:block !important; }
    }
    @media (min-width: 769px) {
      .mobile-menu { display:none !important; }
      .mobile-menu-btn { display:none !important; }
    }

    .company-logo {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      object-fit: contain;
      background: white;
      padding: 6px;
      border: 1px solid ${ACCENT_COLOR}30;
      box-shadow: 0 2px 8px ${ACCENT_COLOR}20;
      flex-shrink: 0;
    }

    .experience-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    }

    .company-info {
      display: flex;
      flex-direction: column;
    }

    .job-title {
      font-weight: 700;
      font-size: clamp(0.95rem, 2.2vw, 1.1rem);
      color: ${TEXT_DARK};
      margin: 0;
    }

    .company-name {
      font-size: clamp(0.85rem, 1.8vw, 0.95rem);
      color: ${ACCENT_COLOR};
      font-weight: 600;
      margin: 0;
    }

    @keyframes scroll {
      0%{transform:translateX(0);}
      100%{transform:translateX(-50%);}
    }
    .skills-marquee{
      display:inline-block;
      white-space:nowrap;
      animation:scroll 30s linear infinite;
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    @keyframes pulse-glow {
      0%, 100% { box-shadow: 0 0 20px ${ACCENT_COLOR}40, 0 0 40px ${ACCENT_COLOR}20; }
      50% { box-shadow: 0 0 30px ${ACCENT_COLOR}60, 0 0 60px ${ACCENT_COLOR}30; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-10px); }
    }

    @keyframes floatBubble {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-15px) scale(1.05); }
    }

    @keyframes shimmer {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }

    .project-image {
      width: 100%;
      height: 220px;
      object-fit: cover;
      border-radius: 12px 12px 0 0;
      transition: transform 0.3s ease, filter 0.3s ease;
    }

    .project-card:hover .project-image {
      transform: scale(1.05);
      filter: brightness(1.1);
    }

    .tech-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      border-radius: 20px;
      font-size: clamp(0.7rem, 1.5vw, 0.8rem);
      font-weight: 600;
      margin-right: 6px;
      margin-bottom: 6px;
      transition: all 0.3s ease;
    }

    .tech-badge:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
    }

    .nav-btn:hover{color:${ACCENT_COLOR};transform:translateY(-2px);}
    .accent{color:${ACCENT_COLOR};}
    button:hover { opacity: 0.9; transition: opacity 0.2s; }

    .glow-box {
      position: relative;
      overflow: hidden;
    }

    .glow-box::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, ${ACCENT_COLOR}15 0%, transparent 70%);
      animation: pulse-glow 3s ease-in-out infinite;
    }

    .profile-shadow {
      position: relative;
      animation: float 3s ease-in-out infinite;
    }

    @keyframes slideIn {
      from { opacity: 0; transform: translateX(30px); }
      to { opacity: 1; transform: translateX(0); }
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        maxHeight: 0;
        transform: translateY(-10px);
      }
      to {
        opacity: 1;
        maxHeight: 800px;
        transform: translateY(0);
      }
    }

    .testimonial-content {
      animation: slideIn 0.5s ease-out;
    }
  `}</style>
);

/* --------------------  COMPONENTS  -------------------- */

const TechIconBadge = ({ tech }) => {
  const techData = TECH_ICONS[tech];
  if (!techData) return null;
  
  return (
    <div 
      className="tech-badge"
      style={{
        background: `${techData.color}15`,
        color: techData.color,
        border: `1.5px solid ${techData.color}40`
      }}
      title={tech}
    >
      <img 
        src={techData.logo}
        alt={tech}
        width="16" 
        height="16" 
        style={{ flexShrink: 0, filter: `drop-shadow(0 0 0px ${techData.color})` }}
      />
      <span>{tech}</span>
    </div>
  );
};
/* -------------------- INLINE SVG ICONS -------------------- */



const ScrollingSkills = () => {
  const skills = [...SKILLS, ...SKILLS];
  return (
    <div style={{overflow:'hidden',padding:'2rem 0',borderTop:`2px solid ${ACCENT_COLOR}30`,borderBottom:`2px solid ${ACCENT_COLOR}30`,background:'rgba(246, 162, 90, 0.03)'}}>
      <h4 style={{textAlign:'center',fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)',color:TEXT_SUBTLE,fontWeight:700,marginBottom:'1rem',letterSpacing:'2px',textTransform:'uppercase'}}>
        Technical Proficiencies
      </h4>
      <div className="skills-marquee">
        {skills.map((s,i)=>{
          const techData = TECH_ICONS[s];
          return (
            <span key={i} style={{
              padding:'0 1.5rem',fontWeight:600,color:TEXT_DARK,
              fontSize:'clamp(0.85rem, 2vw, 0.95rem)',
              display:'inline-flex',alignItems:'center',gap:'0.6rem',
              borderRight: i < skills.length - 1 ? `1px solid ${ACCENT_COLOR}30` : 'none'
            }}>
              {techData && (
                <img 
                  src={techData.logo}
                  alt={s}
                  width="18" 
                  height="18" 
                  style={{ flexShrink: 0 }}
                />
              )}
              {s}
            </span>
          );
        })}
      </div>
    </div>
  );
};

const AnimatedLaptopSeparator = () => {
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  
  const phrases = React.useMemo(() => [
    '> Building intelligent systems that scale',
    '> AI meets full-stack engineering',
    '> From concept to production',
    '> Solving complex problems, elegantly'
  ], []);
  
  const [phraseIndex, setPhraseIndex] = useState(0);
  
  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[phraseIndex];
    
    if (!isDeleting && displayText === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), 2500);
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      const speed = isDeleting ? 25 : 60;
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
    <section style={{padding:'4rem 1rem',background:`linear-gradient(135deg, ${BASE_COLOR} 0%, rgba(246, 162, 90, 0.08) 100%)`}}>
      <div style={{maxWidth:'700px',margin:'0 auto',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{
          width:'100%',
          background:'linear-gradient(135deg, #0f172a 0%, #1a1f3a 100%)',
          borderRadius:'16px',
          padding:'2rem',
          boxShadow:`0 20px 60px ${ACCENT_COLOR}30, inset 0 1px 0 rgba(255,255,255,0.1)`,
          border:`2px solid ${ACCENT_COLOR}50`,
          position:'relative',
          overflow:'hidden'
        }}>
          {/* Animated gradient border */}
          <div style={{
            position:'absolute',
            top:0,left:0,right:0,bottom:0,
            background:`linear-gradient(90deg, transparent, ${ACCENT_COLOR}40, transparent)`,
            animation:'shimmer 3s infinite'
          }}/>

          {/* Terminal Header */}
          <div style={{
            display:'flex',
            alignItems:'center',
            gap:'0.5rem',
            marginBottom:'1.5rem',
            paddingBottom:'1rem',
            borderBottom:`1px solid ${ACCENT_COLOR}40`,
            position:'relative',
            zIndex:1
          }}>
            <div style={{width:'12px',height:'12px',borderRadius:'50%',background:'#ef4444'}}/>
            <div style={{width:'12px',height:'12px',borderRadius:'50%',background:'#f59e0b'}}/>
            <div style={{width:'12px',height:'12px',borderRadius:'50%',background:'#10b981'}}/>
            <span style={{
              marginLeft:'1rem',
              color:'#64748b',
              fontSize:'clamp(0.7rem, 1.4vw, 0.85rem)',
              fontFamily:'monospace',
              fontWeight:500
            }}>
              yasaswini@portfolio:~$
            </span>
          </div>
          
          {/* Terminal Content */}
          <div style={{
            fontFamily:'monospace',
            fontSize:'clamp(0.95rem, 2.2vw, 1.2rem)',
            color:'#10b981',
            minHeight:'60px',
            display:'flex',
            alignItems:'center',
            position:'relative',
            zIndex:1
          }}>
            <span style={{color:ACCENT_COLOR,marginRight:'0.5rem',fontSize:'1.3em'}}>→</span>
            {displayText}
            <span style={{
              display:'inline-block',
              width:'12px',
              height:'1.2em',
              background:'#10b981',
              marginLeft:'6px',
              animation:'blink 1s steps(2) infinite'
            }}/>
          </div>
        </div>
        
        <p style={{
          marginTop:'2rem',
          color:TEXT_DARK,
          fontWeight:700,
          letterSpacing:'1px',
          textAlign:'center',
          fontSize:'clamp(0.9rem, 2vw, 1.1rem)',
          fontStyle:'italic',
          maxWidth:'600px',
          lineHeight:1.8
        }}>
          "I keep things simple, consistent, and dependable. That's how I build software that lasts."
        </p>
      </div>
    </section>
  );
};

const TestimonialCarousel = () => {
  const [current, setCurrent] = useState(0);
  
  const next = () => setCurrent((current + 1) % TESTIMONIALS.length);
  const prev = () => setCurrent((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <div style={{
      maxWidth:'800px',
      margin:'0 auto',
      position:'relative'
    }}>
      <div style={{
        background:'#fff',
        padding:'2rem',
        borderLeft:`5px solid ${ACCENT_COLOR}`,
        borderRadius:'12px',
        boxShadow:`0 8px 30px ${ACCENT_COLOR}20`,
        minHeight:'280px',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between'
      }}>
        <div className="testimonial-content">
          <p style={{
            color:TEXT_DARK,
            fontStyle:'italic',
            lineHeight:1.7,
            marginBottom:'1.5rem',
            fontSize:'clamp(0.9rem, 1.8vw, 1rem)',
            fontWeight:500
          }}>
            "{TESTIMONIALS[current].text}"
          </p>
          
          <div style={{
            display:'flex',
            alignItems:'center',
            gap:'1rem',
            paddingTop:'1.2rem',
            borderTop:`2px solid ${ACCENT_COLOR}20`
          }}>
            <img 
              src={TESTIMONIALS[current].photo} 
              alt={TESTIMONIALS[current].name} 
              style={{
                width:'60px',
                height:'60px',
                borderRadius:'50%',
                objectFit:'cover',
                border:`3px solid ${ACCENT_COLOR}`,
                flexShrink:0
              }}
            />
            <div>
              <p style={{
                fontWeight:700,
                color:TEXT_DARK,
                fontSize:'clamp(0.9rem, 1.8vw, 1rem)',
                marginBottom:'0.2rem'
              }}>
                {TESTIMONIALS[current].name}
              </p>
              <p style={{
                fontSize:'clamp(0.8rem, 1.6vw, 0.9rem)',
                color:TEXT_SUBTLE,
                lineHeight:1.4
              }}>
                {TESTIMONIALS[current].role}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div style={{
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:'1.5rem',
        gap:'1rem'
      }}>
        <button
          onClick={prev}
          style={{
            background:ACCENT_COLOR,
            color:'#fff',
            border:'none',
            borderRadius:'50%',
            width:'48px',
            height:'48px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            cursor:'pointer',
            transition:'all 0.3s ease',
            boxShadow:`0 4px 15px ${ACCENT_COLOR}40`,
            fontSize:'20px'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>

        {/* Dots Indicator */}
        <div style={{display:'flex',gap:'0.5rem'}}>
          {TESTIMONIALS.map((_, i) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? '32px' : '8px',
                height:'8px',
                borderRadius:'4px',
                background: i === current ? ACCENT_COLOR : `${ACCENT_COLOR}40`,
                cursor:'pointer',
                transition:'all 0.3s ease'
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            background:ACCENT_COLOR,
            color:'#fff',
            border:'none',
            borderRadius:'50%',
            width:'48px',
            height:'48px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            cursor:'pointer',
            transition:'all 0.3s ease',
            boxShadow:`0 4px 15px ${ACCENT_COLOR}40`,
            fontSize:'20px'
          }}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>

      {/* Text indicator */}
      <p style={{
        textAlign:'center',
        marginTop:'1rem',
        color:TEXT_SUBTLE,
        fontSize:'clamp(0.75rem, 1.6vw, 0.85rem)',
        fontWeight:600
      }}>
        {current + 1} / {TESTIMONIALS.length}
      </p>
    </div>
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
        style={{
          padding:'0.9rem',
          border:`2px solid ${ACCENT_COLOR}40`,
          borderRadius:'8px',
          fontSize:'clamp(0.9rem, 2vw, 1rem)',
          transition:'all 0.3s ease',
          outline:'none'
        }}
        onFocus={(e) => e.target.style.borderColor = ACCENT_COLOR}
        onBlur={(e) => e.target.style.borderColor = `${ACCENT_COLOR}40`}
      />
      <input 
        value={formData.email}
        onChange={(e) => setFormData({...formData, email: e.target.value})}
        type="email" 
        placeholder="Your Email" 
        required 
        style={{
          padding:'0.9rem',
          border:`2px solid ${ACCENT_COLOR}40`,
          borderRadius:'8px',
          fontSize:'clamp(0.9rem, 2vw, 1rem)',
          transition:'all 0.3s ease',
          outline:'none'
        }}
        onFocus={(e) => e.target.style.borderColor = ACCENT_COLOR}
        onBlur={(e) => e.target.style.borderColor = `${ACCENT_COLOR}40`}
      />
      <textarea 
        value={formData.message}
        onChange={(e) => setFormData({...formData, message: e.target.value})}
        rows="4" 
        placeholder="Your Message" 
        required 
        style={{
          padding:'0.9rem',
          border:`2px solid ${ACCENT_COLOR}40`,
          borderRadius:'8px',
          fontSize:'clamp(0.9rem, 2vw, 1rem)',
          fontFamily:'inherit',
          transition:'all 0.3s ease',
          outline:'none',
          resize:'vertical'
        }}
        onFocus={(e) => e.target.style.borderColor = ACCENT_COLOR}
        onBlur={(e) => e.target.style.borderColor = `${ACCENT_COLOR}40`}
      />
      <button 
        onClick={handleSubmit}
        style={{
          padding:'1rem',
          fontWeight:700,
          border:'none',
          borderRadius:'8px',
          background:GRADIENT_ACCENT,
          color:'#fff',
          cursor:'pointer',
          fontSize:'clamp(0.9rem, 2vw, 1rem)',
          transition:'all 0.3s ease',
          boxShadow:`0 4px 15px ${ACCENT_COLOR}40`
        }}
        onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
      >
        Send Message
      </button>
      {status && <p style={{textAlign:'center',color:ACCENT_COLOR,fontWeight:700}}>{status}</p>}
    </div>
  );
};

/* --------------------  MAIN APP  -------------------- */

const App = () => {
  const [scrolled,setScrolled]=useState(false);
  const [mobileMenuOpen,setMobileMenuOpen]=useState(false);
  const [expandedExperience,setExpandedExperience]=useState(null);
  
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
        background:scrolled?'rgba(255, 248, 243, 0.95)':'transparent',
        backdropFilter:'blur(8px)',
        borderBottom:`2px solid ${ACCENT_COLOR}30`,
        transition:'all 0.3s ease'
      }}>
        <nav style={{
          maxWidth:'1200px',margin:'0 auto',height:'100%',
          display:'flex',alignItems:'center',justifyContent:'space-between',
          padding:'0 1rem'
        }}>
          <h1 style={{
            fontWeight:900,
            fontSize:'clamp(1.2rem, 3vw, 1.5rem)',
            background:GRADIENT_ACCENT,
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text',
            margin:0,
            cursor:'pointer'
          }}
          onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
            YT.
          </h1>
          
          {/* Desktop Nav */}
          <div className="nav-links" style={{display:'flex',gap:'1.5rem',fontWeight:600}}>
            {['About','Experience','Skills','Projects','Testimonials','Contact'].map(item=>(
              <button key={item} onClick={()=>scrollTo(item.toLowerCase())}
                      className="nav-btn" style={{
                        background:'none',border:'none',cursor:'pointer',
                        color:TEXT_SUBTLE,fontSize:'0.95rem',
                        transition:'all 0.3s ease',padding:'0.5rem 0'
                      }}>
                {item}
              </button>
            ))}
          </div>

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
            {['About','Experience','Skills','Projects','Testimonials','Contact'].map(item=>(
              <button key={item} onClick={()=>scrollTo(item.toLowerCase())}
                      style={{background:'none',border:'none',cursor:'pointer',color:TEXT_SUBTLE,
                              padding:'0.8rem',textAlign:'left',fontWeight:600,fontSize:'1rem'}}>
                {item}
              </button>
            ))}
          </div>
        )}
      </header>

      <main style={{maxWidth:'1200px',margin:'0 auto',paddingBottom:'3rem'}}>

        {/* HERO */}
        <section id="hero" style={{padding:'4rem 1rem 3rem'}}>
          <div style={{
            maxWidth:'1000px',margin:'0 auto',
            display:'flex',alignItems:'center',gap:'3rem',
            flexWrap:'wrap',justifyContent:'center'
          }}>
            {/* Text Content - Left */}
            <div style={{flex:'1 1 400px',textAlign:'left'}}>
              <h2 style={{
                fontSize:'clamp(1.8rem, 5vw, 3rem)',
                fontWeight:900,
                marginBottom:'1rem',
                lineHeight:1.2
              }}>
                Hi, I'm <span style={{background:GRADIENT_ACCENT,WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Yasaswini</span>
              </h2>
              <p style={{
                fontSize:'clamp(1rem, 2.3vw, 1.2rem)',
                color:TEXT_SUBTLE,
                marginBottom:'1.5rem',
                lineHeight:1.7,
                fontWeight:500
              }}>
                Software Engineer with <span style={{color:ACCENT_COLOR,fontWeight:800}}>3+ years</span> of experience building <span style={{color:ACCENT_COLOR,fontWeight:700}}>intelligent AI systems</span> and scalable enterprise solutions.
              </p>
              <div style={{display:'flex',gap:'1rem',flexWrap:'wrap'}}>
                <button onClick={()=>scrollTo('projects')}
                        style={{
                          padding:'1rem 2rem',fontWeight:700,
                          border:`2px solid ${ACCENT_COLOR}`,borderRadius:'8px',
                          background:ACCENT_COLOR,color:'#fff',cursor:'pointer',
                          fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)',
                          transition:'all 0.3s ease',
                          boxShadow:`0 4px 15px ${ACCENT_COLOR}40`
                        }}
                        onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px)'}
                        onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  View My Work
                </button>
                <button onClick={()=>scrollTo('contact')}
                        style={{
                          padding:'1rem 2rem',fontWeight:700,
                          border:`2px solid ${ACCENT_COLOR}`,borderRadius:'8px',
                          background:'transparent',color:ACCENT_COLOR,cursor:'pointer',
                          fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)',
                          transition:'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = ACCENT_COLOR;
                          e.target.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = 'transparent';
                          e.target.style.color = ACCENT_COLOR;
                        }}
                >
                  Let's Talk
                </button>
              </div>
            </div>
            

{/* STEP 1: Main Photo/Icon Wrapper (Must be flexDirection: 'column') */}
<div style={{
    flex:'0 0 auto',
    position:'relative',
    display:'flex',
    flexDirection: 'column',     // <<-- KEY CHANGE: Stack items vertically
    alignItems: 'center',        // <<-- KEY CHANGE: Centers items horizontally
    gap:'1.5rem',                // Space between photo and icons
    minWidth:'140px'             // Retains space for the column
}}>

    {/* A. PHOTO BLOCK (MUST BE FIRST) */}
    <div style={{position:'relative'}}>
        {/* The profile-shadow div */}
        <div className="profile-shadow" style={{
          position:'absolute',
          width:'160px',
          height:'160px',
          background:`radial-gradient(circle, ${ACCENT_COLOR}30 0%, ${ACCENT_COLOR}0 70%)`,
          borderRadius:'50%',
          top:'50%',
          left:'50%',
          transform:'translate(-50%, -50%)',
          filter:'blur(20px)',
          zIndex:-1
        }}/>
        {/* The img tag for the photo */}
        <img 
          src={PHOTO_URL} 
          alt="Yasaswini Tatikonda" 
          style={{
            width:'140px',
            height:'140px',
            borderRadius:'50%',
            border:`4px solid ${ACCENT_COLOR}`,
            boxShadow:`0 8px 30px ${ACCENT_COLOR}50, 0 0 40px ${ACCENT_COLOR}30`,
            objectFit:'cover',
            position:'relative',
            zIndex:1
          }}
        />
    </div>

    {/* B. SOCIAL ICONS BLOCK (MUST BE SECOND) */}
    <div style={{
        display:'flex',
        flexDirection:'row', // <<-- Horizontal row
        gap:'0.8rem',        // <<-- Positive gap for spacing
        alignItems:'center'
    }}>
        {/* The entire block of <a> tags for Email, LinkedIn, GitHub goes here */}
        {/* Email Icon */}
        <a href="mailto:yasaswinitatikonda1@gmail.com"
           style={{
             display:'flex',
             alignItems:'center',
             justifyContent:'center',
             width:'38px',
             height:'38px',
             borderRadius:'50%',
             background:ACCENT_COLOR,
             color:'white',
             textDecoration:'none',
             transition:'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
             boxShadow:`0 4px 15px ${ACCENT_COLOR}40`
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.transform = 'scale(1.25)';
             e.currentTarget.style.boxShadow = `0 8px 25px ${ACCENT_COLOR}60`;
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.transform = 'scale(1)';
             e.currentTarget.style.boxShadow = `0 4px 15px ${ACCENT_COLOR}40`;
           }}
           title="Send Email">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        </a>

        {/* LinkedIn Icon */}
        <a href="https://www.linkedin.com/in/tatikondayasaswini" target="_blank" rel="noopener noreferrer"
           style={{
             display:'flex',
             alignItems:'center',
             justifyContent:'center',
             width:'38px',
             height:'38px',
             borderRadius:'50%',
             background:ACCENT_COLOR,
             color:'white',
             textDecoration:'none',
             transition:'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
             boxShadow:`0 4px 15px ${ACCENT_COLOR}40`
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.transform = 'scale(1.25)';
             e.currentTarget.style.boxShadow = `0 8px 25px ${ACCENT_COLOR}60`;
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.transform = 'scale(1)';
             e.currentTarget.style.boxShadow = `0 4px 15px ${ACCENT_COLOR}40`;
           }}
           title="LinkedIn Profile">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"/>
          </svg>
        </a>

        {/* GitHub Icon */}
        <a href="https://github.com/SreeTatikonda" target="_blank" rel="noopener noreferrer"
           style={{
             display:'flex',
             alignItems:'center',
             justifyContent:'center',
             width:'38px',
             height:'38px',
             borderRadius:'50%',
             background:ACCENT_COLOR,
             color:'white',
             textDecoration:'none',
             transition:'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
             boxShadow:`0 4px 15px ${ACCENT_COLOR}40`
           }}
           onMouseEnter={(e) => {
             e.currentTarget.style.transform = 'scale(1.25)';
             e.currentTarget.style.boxShadow = `0 8px 25px ${ACCENT_COLOR}60`;
           }}
           onMouseLeave={(e) => {
             e.currentTarget.style.transform = 'scale(1)';
             e.currentTarget.style.boxShadow = `0 4px 15px ${ACCENT_COLOR}40`;
           }}
           title="GitHub Profile">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
    </div>

</div>

              
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" style={{
          background:'linear-gradient(135deg, #FFFFFF 0%, rgba(246, 162, 90, 0.05) 100%)',
          borderTop:`4px solid ${ACCENT_COLOR}`,
          borderRadius:'16px',padding:'3rem 2rem',margin:'0 1rem 4rem',
          boxShadow:`0 0 30px ${ACCENT_COLOR}15`
        }}>
          <h3 style={{
            textAlign:'center',fontSize:'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight:900,marginBottom:'1.5rem',
            background:GRADIENT_ACCENT,
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text'
          }}>
            About Me
          </h3>
          <div style={{maxWidth:'900px',margin:'0 auto'}}>
            <p style={{
              color:TEXT_SUBTLE,fontSize:'clamp(0.95rem, 1.8vw, 1.05rem)',
              marginBottom:'1.2rem',lineHeight:1.8,fontWeight:500
            }}>
              I'm a Computer Science professional specializing in building <strong>intelligent systems</strong> that solve real-world problems. I believe technology should empower and simplify human lives through thoughtful engineering.
            </p>
            <p style={{
              color:TEXT_SUBTLE,fontSize:'clamp(0.95rem, 1.8vw, 1.05rem)',
              marginBottom:'1.2rem',lineHeight:1.8,fontWeight:500
            }}>
              With 3+ years of experience in <strong>AI, full-stack development, and cloud architecture</strong>, I turn complex ideas into scalable, production-ready solutions. I approach every challenge systematically, remain committed to quality, and deliver until solutions are live.
            </p>
            <p style={{
              color:TEXT_SUBTLE,fontSize:'clamp(0.95rem, 1.8vw, 1.05rem)',
              marginBottom:'0',lineHeight:1.8,fontWeight:500
            }}>
              I thrive on building <strong>human-centered, valuable solutions</strong> at the intersection of AI and engineering. Always excited to collaborate on meaningful projects.
            </p>

            <h4 style={{
              textAlign:'center',
              fontSize:'clamp(1.2rem, 2.8vw, 1.4rem)',
              fontWeight:800,
              marginTop:'2rem',
              marginBottom:'1.2rem',
              color:ACCENT_COLOR
            }}>
              Core Technologies
            </h4>
            <div style={{
              display:'flex',
              flexWrap:'wrap',
              justifyContent:'center',
              gap:'0.8rem'
            }}>
              {['Python', 'React', 'TypeScript', 'C#', 'JavaScript', 'HTML', 'CSS', 'SQL', '.NET Core', 'FastAPI', 'Kubernetes', 'AWS', 'PyTorch', 'LLMs', 'NLP'].map(tech => (
                <TechIconBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>
        </section>

        {/* LAPTOP SEPARATOR */}
        <AnimatedLaptopSeparator/>

        {/* EXPERIENCE */}
        <section id="experience" style={{padding:'3rem 1rem'}}>
          <h3 style={{
            textAlign:'center',fontSize:'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight:900,marginBottom:'2rem',
            background:GRADIENT_ACCENT,
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text'
          }}>
            Professional Experience
          </h3>
          <div style={{maxWidth:'900px',margin:'0 auto'}}>
            {EXPERIENCE.map((job,i)=>(
              <div key={i} style={{
                background:'#fff',
                padding:'1.5rem',
                borderLeft:`5px solid ${ACCENT_COLOR}`,
                borderRadius:'12px',
                boxShadow:`0 4px 20px ${ACCENT_COLOR}15`,
                marginBottom:'1.5rem',
                transition:'all 0.3s ease',
                cursor:'pointer',
                overflow:'hidden'
              }}
              onMouseEnter={(e) => {
                if(expandedExperience !== i) {
                  e.currentTarget.style.boxShadow = `0 8px 30px ${ACCENT_COLOR}25`;
                  e.currentTarget.style.transform = 'translateX(5px)';
                }
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `0 4px 20px ${ACCENT_COLOR}15`;
                e.currentTarget.style.transform = 'translateX(0)';
              }}
              >
                {/* Collapsed Header - Always Visible */}
                <div 
                  onClick={()=>setExpandedExperience(expandedExperience === i ? null : i)}
                  style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'space-between',
                    cursor:'pointer',
                    padding:'0.5rem 0'
                  }}>
                  <div style={{flex:1}}>
                    {/* Title and Company Row */}
                    <div style={{
                      display:'flex',
                      alignItems:'center',
                      gap:'0.8rem',
                      marginBottom:'0.5rem'
                    }}>
                      <h4 style={{
                        fontWeight:800,
                        fontSize:'clamp(1rem, 2vw, 1.2rem)',
                        color:TEXT_DARK,
                        margin:0
                      }}>
                        {job.title}
                      </h4>
                    </div>

                    {/* Company, Duration, Location in one line */}
                    <div style={{
                      display:'flex',
                      alignItems:'center',
                      gap:'0.6rem',
                      flexWrap:'wrap',
                      fontSize:'clamp(0.85rem, 1.6vw, 0.95rem)',
                      color:TEXT_SUBTLE,
                      fontWeight:600
                    }}>
                      <span style={{color:ACCENT_COLOR,fontWeight:700}}>{job.company}</span>
                      <span>•</span>
                      <span>{job.duration.split('|')[0].trim()}</span>
                      <span>•</span>
                      <span style={{display:'flex',alignItems:'center',gap:'0.3rem'}}>

                        
                      <span style={{display:'inline-flex',alignItems:'center',gap:'6px',color:ACCENT_COLOR}}><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{verticalAlign:'middle'}}><path d="M21 10c0 6-9 12-9 12S3 16 3 10a9 9 0 1 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>{job.duration.split('|')[1]?.trim() || 'Remote'}</span>

                      </span>
                      {job.duration.includes('Present') && (
                        <span style={{
                          background:ACCENT_COLOR,
                          color:'white',
                          padding:'0.2rem 0.6rem',
                          borderRadius:'20px',
                          fontSize:'0.75rem',
                          fontWeight:700
                        }}>
                          Current
                          
                        </span>
                        
                      )}
                    </div>
                  </div>

                  {/* Expand/Collapse Arrow */}
                  <div style={{
                    display:'flex',
                    alignItems:'center',
                    justifyContent:'center',
                    width:'32px',
                    height:'32px',
                    borderRadius:'50%',
                    background:`${ACCENT_COLOR}10`,
                    transition:'all 0.3s ease',
                    transform:expandedExperience === i ? 'rotate(180deg)' : 'rotate(0deg)',
                    marginLeft:'1rem',
                    flexShrink:0
                  }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={ACCENT_COLOR} strokeWidth="2.5">
                      <polyline points="6 9 12 15 18 9"/>
                    </svg>
                  </div>
                </div>

                {/* Expanded Content - Bullet Points */}
                {expandedExperience === i && (
                  <div style={{
                    marginTop:'1rem',
                    paddingTop:'1rem',
                    borderTop:`2px solid ${ACCENT_COLOR}20`,
                    animation:'slideDown 0.3s ease',
                    maxHeight:'800px',
                    overflow:'hidden'
                  }}>
                    <ul style={{
                      marginLeft:'1rem',
                      color:TEXT_SUBTLE,
                      lineHeight:1.8,
                      fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)',
                      marginTop:'0.8rem',
                      margin:0
                    }}>
                      {job.points.map((p,j)=>(
                        <li key={j} style={{marginBottom:'0.7rem'}} dangerouslySetInnerHTML={{__html: p}}/>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS MARQUEE */}
        <section id="skills" style={{margin:'2rem 0'}}>
          <ScrollingSkills/>
        </section>

        {/* PROJECTS */}
        <section id="projects" style={{padding:'3rem 1rem'}}>
          <h3 style={{
            textAlign:'center',fontSize:'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight:900,marginBottom:'2rem',
            background:GRADIENT_ACCENT,
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text'
          }}>
            My Projects 
          </h3>
          <div style={{
            maxWidth:'1100px',margin:'0 auto',
            display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))',
            gap:'2rem'
          }}>
            {PROJECTS.map((proj,i)=>(
              <div key={i} className="project-card" style={{
                background:'#fff',
                borderRadius:'12px',
                overflow:'hidden',
                boxShadow:`0 4px 20px ${ACCENT_COLOR}12`,
                transition:'all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                display:'flex',flexDirection:'column',
                cursor:'pointer',
                position:'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 15px 40px ${ACCENT_COLOR}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 4px 20px ${ACCENT_COLOR}12`;
              }}
              >
                {/* Project Image */}
                <div style={{position:'relative',overflow:'hidden',height:'220px'}}>
                  <img 
                    src={proj.image} 
                    alt={proj.title}
                    className="project-image"
                  />
                  <div style={{
                    position:'absolute',
                    top:'10px',
                    right:'10px',
                    background:ACCENT_COLOR,
                    color:'#fff',
                    padding:'0.5rem 1rem',
                    borderRadius:'20px',
                    fontSize:'0.8rem',
                    fontWeight:700,
                    opacity:0.9
                  }}>
                    Featured
                  </div>
                </div>

                {/* Project Content */}
                <div style={{padding:'1.5rem',display:'flex',flexDirection:'column',flexGrow:1}}>
                  <h4 style={{
                    fontWeight:800,
                    fontSize:'clamp(1.05rem, 2.3vw, 1.3rem)',
                    marginBottom:'0.5rem',
                    color:TEXT_DARK
                  }}>
                    {proj.title}
                  </h4>
                  <p style={{
                    fontSize:'clamp(0.8rem, 1.8vw, 0.9rem)',
                    color:ACCENT_COLOR,
                    fontWeight:700,
                    marginBottom:'0.8rem'
                  }}>
                    {proj.tech}
                  </p>
                  <p style={{
                    color:TEXT_SUBTLE,
                    lineHeight:1.6,
                    marginBottom:'1rem',
                    flexGrow:1,
                    fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)'
                  }}>
                    {proj.description}
                  </p>

                  {/* Tech Badges */}
                  <div style={{marginBottom:'1rem',display:'flex',flexWrap:'wrap',gap:'0.5rem'}}>
                    {proj.highlights.map((h,j)=>(
                      <span key={j} style={{
                        background:`${ACCENT_COLOR}20`,
                        color:ACCENT_COLOR,
                        padding:'0.3rem 0.8rem',
                        borderRadius:'20px',
                        fontSize:'clamp(0.7rem, 1.5vw, 0.8rem)',
                        fontWeight:700,
                        border:`1px solid ${ACCENT_COLOR}40`
                      }}>
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <a href={proj.github} target="_blank" rel="noopener noreferrer"
                     style={{
                       display:'inline-flex',alignItems:'center',gap:'0.6rem',
                       color:ACCENT_COLOR,textDecoration:'none',fontWeight:700,
                       fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)',
                       transition:'all 0.3s ease',
                       marginTop:'auto'
                     }}
                     onMouseEnter={(e) => e.target.style.transform = 'translateX(5px)'}
                     onMouseLeave={(e) => e.target.style.transform = 'translateX(0)'}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" style={{marginRight:'0.3rem'}}>
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        

        {/* EDUCATION */}
        <section id="education" style={{padding:'3rem 1rem'}}>
          <h3 style={{
            textAlign:'center',fontSize:'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight:900,marginBottom:'2rem',
            background:GRADIENT_ACCENT,
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text'
          }}>
            Education
          </h3>
          <div style={{maxWidth:'1200px',margin:'0 auto'}}>
            <div style={{display:'flex',gap:'2.5rem',alignItems:'flex-start',flexWrap:'wrap'}}>
              {/* Education Cards - Left */}
              <div style={{flex:'1 1 450px',minWidth:'280px'}}>
                {/* Masters Degree */}
                <div style={{
                  background:'#fff',
                  padding:'2rem',
                  borderLeft:`5px solid ${ACCENT_COLOR}`,
                  borderRadius:'12px',
                  boxShadow:`0 4px 20px ${ACCENT_COLOR}15`,
                  marginBottom:'1.5rem',
                  transition:'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{display:'flex',alignItems:'flex-start',gap:'1rem',marginBottom:'0.8rem'}}>
                    <div style={{
                      color:ACCENT_COLOR,
                      marginTop:'0.2rem',
                      flexShrink:0,
                      width:'40px',
                      height:'40px',
                      borderRadius:'8px',
                      background:`${ACCENT_COLOR}12`,
                      padding:'0.4rem',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                      overflow:'hidden'
                    }}>
                      {EDUCATION.masters.logo ? (
                        <img src = "/iowa-state-logo.png" alt="Iowa State University" style={{width:'100%',height:'100%',objectFit:'contain'}} />
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 10v6m0 0l-8.5 4.75a2 2 0 01-1.999 0L2 16m20-6l-10-5.5a2 2 0 00-2 0l-10 5.5m20 0v-6a2 2 0 00-1-1.73l-9-5.19a2 2 0 00-2 0l-9 5.19a2 2 0 00-1 1.73v6"/>
                        </svg>
                      )}
                    </div>
                    <div style={{flex:1}}>
                      <h4 style={{
                        fontWeight:800,
                        fontSize:'clamp(1rem, 2.1vw, 1.15rem)',
                        color:TEXT_DARK,
                        margin:'0 0 0.3rem 0'
                      }}>
                        {EDUCATION.masters.degree}
                      </h4>
                      <p style={{
                        fontSize:'clamp(0.88rem, 1.8vw, 0.98rem)',
                        color:ACCENT_COLOR,
                        fontWeight:700,
                        margin:'0'
                      }}>
                        {EDUCATION.masters.school}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{display:'flex',alignItems:'center',gap:'0.5rem',marginBottom:'0.4rem',marginLeft:'2.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT_COLOR} strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span style={{fontSize:'clamp(0.8rem, 1.6vw, 0.88rem)',color:TEXT_SUBTLE,fontWeight:600}}>
                      {EDUCATION.masters.location}
                    </span>
                  </div>
                  
                  <div style={{marginLeft:'2.5rem'}}>
                    <p style={{
                      fontSize:'clamp(0.85rem, 1.8vw, 0.93rem)',
                      color:TEXT_SUBTLE,
                      margin:'0',
                      fontWeight:600
                    }}>
                      Expected Graduation: <span style={{color:ACCENT_COLOR,fontWeight:700}}>{EDUCATION.masters.graduation}</span>
                    </p>
                  </div>
                </div>

                {/* Bachelors Degree */}
                <div style={{
                  background:'#fff',
                  padding:'2rem',
                  borderLeft:`5px solid ${ACCENT_COLOR}`,
                  borderRadius:'12px',
                  boxShadow:`0 4px 20px ${ACCENT_COLOR}15`,
                  transition:'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{display:'flex',alignItems:'flex-start',gap:'1rem',marginBottom:'0.8rem'}}>
                    <div style={{
                      color:ACCENT_COLOR,
                      marginTop:'0.2rem',
                      flexShrink:0,
                      width:'40px',
                      height:'40px',
                      borderRadius:'8px',
                      background:`${ACCENT_COLOR}12`,
                      padding:'0.4rem',
                      display:'flex',
                      alignItems:'center',
                      justifyContent:'center',
                      overflow:'hidden'
                    }}>
                      {EDUCATION.bachelors.logo ? (
                        <img src="/gmr_logo.png" alt="GMR Institute of Technology" style={{width:'100%',height:'100%',objectFit:'contain'}} />
                      ) : (
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M22 10v6m0 0l-8.5 4.75a2 2 0 01-1.999 0L2 16m20-6l-10-5.5a2 2 0 00-2 0l-10 5.5m20 0v-6a2 2 0 00-1-1.73l-9-5.19a2 2 0 00-2 0l-9 5.19a2 2 0 00-1 1.73v6"/>
                        </svg>
                      )}
                    </div>
                    <div style={{flex:1}}>
                      <h4 style={{
                        fontWeight:800,
                        fontSize:'clamp(1rem, 2.1vw, 1.15rem)',
                        color:TEXT_DARK,
                        margin:'0 0 0.3rem 0'
                      }}>
                        {EDUCATION.bachelors.degree}
                      </h4>
                      <p style={{
                        fontSize:'clamp(0.88rem, 1.8vw, 0.98rem)',
                        color:ACCENT_COLOR,
                        fontWeight:700,
                        margin:'0'
                      }}>
                        {EDUCATION.bachelors.school}
                      </p>
                    </div>
                  </div>
                  
                  <div style={{display:'flex',alignItems:'center',gap:'0.5rem',marginBottom:'0.4rem',marginLeft:'2.5rem'}}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={ACCENT_COLOR} strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span style={{fontSize:'clamp(0.8rem, 1.6vw, 0.88rem)',color:TEXT_SUBTLE,fontWeight:600}}>
                      {EDUCATION.bachelors.location}
                    </span>
                  </div>
                  
                  <div style={{marginLeft:'2.5rem'}}>
                    <p style={{
                      fontSize:'clamp(0.85rem, 1.8vw, 0.93rem)',
                      color:TEXT_SUBTLE,
                      margin:'0',
                      fontWeight:600
                    }}>
                      Graduated: <span style={{color:ACCENT_COLOR,fontWeight:700}}>{EDUCATION.bachelors.graduation}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Coursework Bubbles - Right Side */}
              <div style={{
                flex:'1 1 350px',
                minWidth:'280px',
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-start',
                background:`linear-gradient(135deg, ${BASE_COLOR} 0%, rgba(246, 162, 90, 0.08) 100%)`,
                padding:'2rem',
                borderRadius:'12px',
                border:`2px solid ${ACCENT_COLOR}20`
              }}>
                <p style={{
                  fontWeight:800,
                  color:TEXT_DARK,
                  marginBottom:'1.5rem',
                  marginTop:'0',
                  fontSize:'clamp(1rem, 2vw, 1.15rem)',
                  textAlign:'center',
                  background:GRADIENT_ACCENT,
                  WebkitBackgroundClip:'text',
                  WebkitTextFillColor:'transparent',
                  backgroundClip:'text'
                }}>
                  Core Coursework
                </p>
                <div style={{
                  display:'flex',
                  flexWrap:'wrap',
                  gap:'0.75rem',
                  justifyContent:'center',
                  alignItems:'center'
                }}>
                  {EDUCATION.coursework.map((course, i) => (
                    <div
                      key={i}
                      style={{
                        background: `${ACCENT_COLOR}18`,
                        color: ACCENT_COLOR,
                        padding: '0.7rem 0.95rem',
                        borderRadius: '50px',
                        fontSize: 'clamp(0.68rem, 1.3vw, 0.78rem)',
                        fontWeight: 700,
                        border: `1.5px solid ${ACCENT_COLOR}35`,
                        textAlign: 'center',
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        animation: `floatBubble ${3 + i * 0.15}s ease-in-out infinite`,
                        cursor: 'default',
                        minWidth: 'fit-content',
                        whiteSpace: 'nowrap',
                        boxShadow: `0 2px 8px ${ACCENT_COLOR}12`
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.12) translateY(-3px)';
                        e.currentTarget.style.background = ACCENT_COLOR;
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.boxShadow = `0 8px 20px ${ACCENT_COLOR}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0px) scale(1)';
                        e.currentTarget.style.background = `${ACCENT_COLOR}18`;
                        e.currentTarget.style.color = ACCENT_COLOR;
                        e.currentTarget.style.boxShadow = `0 2px 8px ${ACCENT_COLOR}12`;
                      }}
                    >
                      {course}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="certifications" style={{padding:'3rem 1rem',background:'#fff'}}>
          <h3 style={{
            textAlign:'center',fontSize:'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight:900,marginBottom:'2rem',
            background:GRADIENT_ACCENT,
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text'
          }}>
            Certifications
          </h3>
          <div style={{
            maxWidth:'1200px',margin:'0 auto',
            display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))',
            gap:'1rem'
          }}>
            {CERTIFICATIONS.map((cert,i)=>(
              <div key={i} style={{
                background:'#fff',
                padding:'1.5rem',
                borderTop:`4px solid ${ACCENT_COLOR}`,
                borderRadius:'8px',
                boxShadow:`0 2px 12px ${ACCENT_COLOR}12`,
                textAlign:'center',
                transition:'all 0.3s ease',
                cursor:'pointer',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                gap:'0.8rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = `0 8px 20px ${ACCENT_COLOR}25`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = `0 2px 12px ${ACCENT_COLOR}12`;
              }}
              >
                {/* Microsoft Logo */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                  <rect x="1" y="1" width="8" height="8" fill="#F25022"/>
                  <rect x="13" y="1" width="8" height="8" fill="#7FBA00"/>
                  <rect x="1" y="13" width="8" height="8" fill="#00A4EF"/>
                  <rect x="13" y="13" width="8" height="8" fill="#FFB900"/>
                </svg>
                
                <div>
                  <h4 style={{
                    fontWeight:800,
                    fontSize:'clamp(0.95rem, 2vw, 1.1rem)',
                    marginBottom:'0.3rem',
                    color:TEXT_DARK,
                    lineHeight:1.3
                  }}>
                    {cert.title}
                  </h4>
                  <p style={{
                    fontSize:'clamp(0.8rem, 1.6vw, 0.9rem)',
                    color:ACCENT_COLOR,
                    fontWeight:700
                  }}>
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section id="testimonials" style={{padding:'3rem 1rem',background:`linear-gradient(135deg, ${BASE_COLOR} 0%, rgba(246, 162, 90, 0.08) 100%)`}}>
          <h3 style={{
            textAlign:'center',fontSize:'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight:900,marginBottom:'2.5rem',
            background:GRADIENT_ACCENT,
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text'
          }}>
            What People Say
          </h3>
          <TestimonialCarousel />
        </section>

        {/* CONTACT */}
        <section id="contact" style={{
          background:'linear-gradient(135deg, #fff 0%, rgba(246, 162, 90, 0.08) 100%)',
          padding:'3rem 1.5rem',
          borderTop:`5px solid ${ACCENT_COLOR}`,
          borderRadius:'16px',
          maxWidth:'700px',
          margin:'4rem auto',
          boxShadow:`0 0 40px ${ACCENT_COLOR}20`
        }}>
          <h3 style={{
            textAlign:'center',fontSize:'clamp(1.5rem, 3.5vw, 2rem)',
            fontWeight:900,marginBottom:'1rem',
            background:GRADIENT_ACCENT,
            WebkitBackgroundClip:'text',
            WebkitTextFillColor:'transparent',
            backgroundClip:'text'
          }}>
            Let's Connect
          </h3>
          <p style={{
            textAlign:'center',color:TEXT_SUBTLE,marginBottom:'1.5rem',
            fontSize:'clamp(0.95rem, 1.8vw, 1.05rem)',lineHeight:1.7,fontWeight:500
          }}>
            Looking for an engineer who can take your AI/ML projects from concept to production? I build systems that scale, ship on time, and solve real problems. Let's talk.
          </p>
          
          {/* Contact Info - Interactive Buttons */}
          <div style={{marginBottom:'2rem',display:'flex',flexDirection:'column',gap:'1rem'}}>
            {/* Icon Buttons in a Row */}
            <div style={{
              display:'flex',
              gap:'1rem',
              justifyContent:'center',
              alignItems:'center',
              flexWrap:'wrap'
            }}>
              {/* Email Button */}
              <a href="mailto:yasaswinitatikonda1@gmail.com" 
                 style={{
                   display:'flex',
                   alignItems:'center',
                   justifyContent:'center',
                   gap:'0.6rem',
                   color:'white',
                   textDecoration:'none',
                   fontSize:'clamp(0.85rem, 1.6vw, 0.95rem)',
                   padding:'0.9rem 1.6rem',
                   borderRadius:'50px',
                   fontWeight:700,
                   background:ACCENT_COLOR,
                   transition:'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                   boxShadow:`0 6px 20px ${ACCENT_COLOR}35`,
                   border:'none',
                   cursor:'pointer',
                   minWidth:'fit-content'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                   e.currentTarget.style.boxShadow = `0 12px 32px ${ACCENT_COLOR}50`;
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'translateY(0) scale(1)';
                   e.currentTarget.style.boxShadow = `0 6px 20px ${ACCENT_COLOR}35`;
                 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>Email</span>
              </a>

              {/* LinkedIn Button */}
              <a href="https://www.linkedin.com/in/tatikondayasaswini" target="_blank" rel="noopener noreferrer"
                 style={{
                   display:'flex',
                   alignItems:'center',
                   justifyContent:'center',
                   gap:'0.6rem',
                   color:'white',
                   textDecoration:'none',
                   fontSize:'clamp(0.85rem, 1.6vw, 0.95rem)',
                   padding:'0.9rem 1.6rem',
                   borderRadius:'50px',
                   fontWeight:700,
                   background:ACCENT_COLOR,
                   transition:'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                   boxShadow:`0 6px 20px ${ACCENT_COLOR}35`,
                   border:'none',
                   cursor:'pointer',
                   minWidth:'fit-content'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                   e.currentTarget.style.boxShadow = `0 12px 32px ${ACCENT_COLOR}50`;
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'translateY(0) scale(1)';
                   e.currentTarget.style.boxShadow = `0 6px 20px ${ACCENT_COLOR}35`;
                 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z"/>
                </svg>
                <span>LinkedIn</span>
              </a>

              {/* GitHub Button */}
              <a href="https://github.com/SreeTatikonda" target="_blank" rel="noopener noreferrer"
                 style={{
                   display:'flex',
                   alignItems:'center',
                   justifyContent:'center',
                   gap:'0.6rem',
                   color:'white',
                   textDecoration:'none',
                   fontSize:'clamp(0.85rem, 1.6vw, 0.95rem)',
                   padding:'0.9rem 1.6rem',
                   borderRadius:'50px',
                   fontWeight:700,
                   background:ACCENT_COLOR,
                   transition:'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                   boxShadow:`0 6px 20px ${ACCENT_COLOR}35`,
                   border:'none',
                   cursor:'pointer',
                   minWidth:'fit-content'
                 }}
                 onMouseEnter={(e) => {
                   e.currentTarget.style.transform = 'translateY(-4px) scale(1.05)';
                   e.currentTarget.style.boxShadow = `0 12px 32px ${ACCENT_COLOR}50`;
                 }}
                 onMouseLeave={(e) => {
                   e.currentTarget.style.transform = 'translateY(0) scale(1)';
                   e.currentTarget.style.boxShadow = `0 6px 20px ${ACCENT_COLOR}35`;
                 }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Resume Buttons */}
          <div style={{display:'flex',gap:'0.8rem',marginTop:'2rem',flexWrap:'wrap'}}>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" style={{
              display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem',
              color:ACCENT_COLOR,background:'transparent',textDecoration:'none',
              fontSize:'clamp(0.85rem, 1.6vw, 0.95rem)',padding:'0.7rem 1.2rem',
              borderRadius:'8px',fontWeight:700,flex:'1',minWidth:'150px',
              border:`2px solid ${ACCENT_COLOR}`,transition:'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = ACCENT_COLOR;
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = ACCENT_COLOR;
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 4v6h6M23 20v-6h-6"/>
              </svg>
              View Resume
            </a>

            <a href="/resume.pdf" download="Yasaswini_Tatikonda_Resume.pdf" style={{
              display:'flex',alignItems:'center',justifyContent:'center',gap:'0.5rem',
              color:'#fff',background:ACCENT_COLOR,textDecoration:'none',
              fontSize:'clamp(0.85rem, 1.6vw, 0.95rem)',padding:'0.7rem 1.2rem',
              borderRadius:'8px',fontWeight:700,flex:'1',minWidth:'150px',
              border:`2px solid ${ACCENT_COLOR}`,transition:'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = ACCENT_COLOR;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = ACCENT_COLOR;
              e.currentTarget.style.color = '#fff';
            }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
              Download Resume
            </a>
          </div>

          <div style={{borderTop:`2px solid ${ACCENT_COLOR}30`,paddingTop:'1.5rem'}}>
            <p style={{
              textAlign:'center',color:TEXT_SUBTLE,marginBottom:'1rem',
              fontSize:'clamp(0.85rem, 1.8vw, 0.95rem)',fontWeight:600
            }}>
              Or send me a direct message:
            </p>
            <ContactForm />
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer style={{
        textAlign:'center',
        padding:'2rem 1rem',
        color:TEXT_SUBTLE,
        fontSize:'clamp(0.8rem, 2vw, 0.9rem)',
        borderTop:`2px solid ${ACCENT_COLOR}20`,
        marginTop:'2rem'
      }}>
        <p style={{marginBottom:'0.5rem',fontWeight:600}}>
          © {new Date().getFullYear()} Yasaswini Tatikonda • Full-Stack Engineer
        </p>
        <p style={{margin:0,fontSize:'clamp(0.75rem, 1.8vw, 0.85rem)'}}>
          Building intelligent systems at the intersection of AI & engineering
        </p>
      </footer>
    </div>
  );
};

export default App;
