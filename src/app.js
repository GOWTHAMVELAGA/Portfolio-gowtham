import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, MapPin, ExternalLink, ChevronRight, Code, Database, Layout, TestTube, Sparkles, Zap, Brain } from 'lucide-react';

const App = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-animate]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const skills = {
    'AI & Intelligence': [
      'Machine Learning Concepts',
      'Ethical AI',
      'Rule-Based Systems',
      'Heuristic Analysis',
      'Bias & Explainability'
    ],
    'Engineering': [
      'Python',
      'JavaScript',
      'SQL',
      'REST APIs',
      'ETL Pipelines',
      'System Design'
    ],
    'Frontend & UI': [
      'React',
      'Dashboard Design',
      'Data Visualization',
      'Accessibility-Aware UI'
    ],
    'Dev & Testing': [
      'Node.js',
      'Express',
      'Jest',
      'Postman',
      'Git',
      'CI/CD'
    ]
  };

  const projects = [
    {
      title: 'Threat Guard',
      subtitle: 'AI-Inspired Email Threat Detection Dashboard',
      problem: 'Users lack transparent, privacy-friendly tools to evaluate email threats in real time.',
      solution: 'Designed a client-side heuristic analysis system that evaluates 15+ threat indicators without server-side data exposure.',
      contributions: [
        'Designed rule-based risk scoring engine',
        'Built real-time interactive dashboard',
        'Implemented privacy-by-design architecture',
        'Enabled alerting & risk tuning'
      ],
      tech: ['JavaScript', 'React', 'Rule Engine', 'UI Dashboards'],
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Full-Stack Data Dashboard Platform',
      subtitle: 'End-to-End BI Workflow Modeling',
      problem: 'Organizations need scalable, maintainable dashboard solutions for real-time data insights.',
      solution: 'Built comprehensive data dashboards modeling enterprise BI workflows with full testing coverage.',
      contributions: [
        'Designed RESTful Node.js APIs',
        'Implemented search, filters, pagination',
        'Built React dashboards with live updates',
        'Added unit & integration testing'
      ],
      tech: ['React', 'Node.js', 'Express', 'SQL', 'Jest'],
      icon: Database,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const FloatingParticles = () => (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-blue-500 rounded-full opacity-20 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 10}s`
          }}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 relative">
      <FloatingParticles />
      
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-40px) translateX(-10px); }
          75% { transform: translateY(-20px) translateX(10px); }
        }
        
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.8); }
        }
        
        .animate-float {
          animation: float ease-in-out infinite;
        }
        
        .slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
        
        .slide-in-left {
          animation: slideInLeft 0.6s ease-out forwards;
        }
        
        .pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>

      {/* Header */}
      <header className={`sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 transition-all duration-500 ${scrolled ? 'shadow-2xl' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-white font-bold text-lg flex items-center gap-2">
            <Sparkles size={20} className="text-blue-400" />
            <span>GKV</span>
          </div>
          <nav className="hidden md:flex gap-8 text-sm">
            {['About', 'Projects', 'Skills', 'Contact'].map((item, i) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 relative group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero Section with Gradient Animation */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <div className="slide-in-up">
              <h1 className="text-6xl font-bold mb-4 tracking-tight">
                Gowtham Krishna <span className="gradient-text">Velaga</span>
              </h1>
            </div>
            
            <div className="slide-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl text-blue-400 mb-6 font-medium flex items-center gap-3">
                <Zap size={28} className="animate-pulse" />
                AI-Focused Full-Stack Engineer
              </h2>
            </div>
            
            <div className="slide-in-up" style={{ animationDelay: '0.4s' }}>
              <p className="text-xl text-slate-300 leading-relaxed">
                I design intelligent, privacy-aware systems that transform raw data into actionable insights through clean architecture and intuitive interfaces.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-6 mt-10 slide-in-up" style={{ animationDelay: '0.6s' }}>
              {[
                { icon: Mail, text: 'gowtham.velaga@yahoo.com', href: 'mailto:gowtham.velaga@yahoo.com' },
                { icon: Phone, text: '+1 (646) 651-6350', href: 'tel:+16466516350' },
                { icon: Github, text: 'GitHub', href: 'https://github.com/GOWTHAMVELAGA' },
                { icon: MapPin, text: 'USA', href: null }
              ].map((contact, i) => {
                const Icon = contact.icon;
                return contact.href ? (
                  <a
                    key={i}
                    href={contact.href}
                    target={contact.icon === Github ? '_blank' : undefined}
                    rel={contact.icon === Github ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-2 text-slate-300 hover:text-white transition-all duration-300 hover:scale-110 group"
                  >
                    <Icon size={18} className="group-hover:rotate-12 transition-transform" />
                    <span className="text-sm">{contact.text}</span>
                  </a>
                ) : (
                  <div key={i} className="flex items-center gap-2 text-slate-300">
                    <Icon size={18} />
                    <span className="text-sm">{contact.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* Skills Section */}
            <div id="skills" data-animate className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200 hover-lift ${isVisible.skills ? 'slide-in-left' : 'opacity-0'}`}>
              <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
                <Code size={20} className="text-blue-600" />
                Technical Skills
              </h3>
              
              {Object.entries(skills).map(([category, items], catIdx) => (
                <div key={category} className="mb-6 last:mb-0" style={{ animationDelay: `${catIdx * 0.1}s` }}>
                  <h4 className="text-sm font-medium text-slate-600 mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, idx) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 text-xs rounded-full border border-slate-200 hover:border-blue-500 hover:from-blue-50 hover:to-blue-100 hover:shadow-md transition-all duration-300 cursor-pointer transform hover:scale-110"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        style={{ animationDelay: `${idx * 0.05}s` }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <div data-animate className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200 hover-lift ${isVisible.education ? 'slide-in-left' : 'opacity-0'}`} id="education">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Education</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-transparent rounded-lg border-l-4 border-blue-500">
                  <div className="font-medium text-slate-900">Master of Science</div>
                  <div className="text-sm text-slate-600">Information Systems</div>
                  <div className="text-sm text-slate-500">Saint Louis University, USA</div>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-purple-50 to-transparent rounded-lg border-l-4 border-purple-500">
                  <div className="font-medium text-slate-900">Bachelor of Technology</div>
                  <div className="text-sm text-slate-600">Mechanical Engineering</div>
                  <div className="text-sm text-slate-500">Sri Vasavi Engineering College, India</div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div data-animate className={`bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-slate-200 hover-lift ${isVisible.certs ? 'slide-in-left' : 'opacity-0'}`} id="certs">
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Certifications</h3>
              
              <div className="space-y-3">
                {['Introduction to Artificial Intelligence', 'Artificial Intelligence & Business Strategy'].map((cert, i) => (
                  <div key={i} className="flex items-start gap-2 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                    <ChevronRight size={16} className="text-blue-500 mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <span className="text-sm text-slate-700">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Featured Projects */}
            <div id="projects">
              <h2 className="text-4xl font-bold text-slate-900 mb-8 flex items-center gap-3">
                <Sparkles className="text-blue-600" />
                Featured Projects
              </h2>
              
              <div className="space-y-8">
                {projects.map((project, idx) => {
                  const Icon = project.icon;
                  return (
                    <div
                      key={idx}
                      data-animate
                      id={`project-${idx}`}
                      className={`bg-white/80 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-slate-200 hover:border-blue-400 hover:shadow-2xl transition-all duration-500 cursor-pointer hover-lift ${isVisible[`project-${idx}`] ? 'slide-in-up' : 'opacity-0'}`}
                      onClick={() => setActiveProject(idx)}
                      style={{ animationDelay: `${idx * 0.2}s` }}
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-4 bg-gradient-to-br ${project.color} rounded-xl shadow-lg`}>
                          <Icon size={28} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-semibold text-slate-900 mb-2">{project.title}</h3>
                          <p className="text-sm text-slate-600">{project.subtitle}</p>
                        </div>
                      </div>

                      <div className="space-y-5">
                        <div className="p-4 bg-gradient-to-r from-red-50 to-transparent rounded-lg border-l-4 border-red-400">
                          <div className="text-xs font-semibold text-red-600 uppercase mb-2">Problem</div>
                          <p className="text-sm text-slate-700">{project.problem}</p>
                        </div>

                        <div className="p-4 bg-gradient-to-r from-green-50 to-transparent rounded-lg border-l-4 border-green-400">
                          <div className="text-xs font-semibold text-green-600 uppercase mb-2">Solution</div>
                          <p className="text-sm text-slate-700">{project.solution}</p>
                        </div>

                        <div>
                          <div className="text-xs font-semibold text-slate-500 uppercase mb-3">Key Contributions</div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.contributions.map((contrib, i) => (
                              <div key={i} className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg hover:bg-blue-50 transition-colors group">
                                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0 group-hover:scale-150 transition-transform"></div>
                                <span className="text-sm text-slate-700">{contrib}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs font-semibold text-slate-500 uppercase mb-3">Tech Stack</div>
                          <div className="flex flex-wrap gap-2">
                            {project.tech.map((tech) => {
                              const isHighlighted = hoveredSkill && (
                                tech.toLowerCase().includes(hoveredSkill.toLowerCase()) ||
                                hoveredSkill.toLowerCase().includes(tech.toLowerCase())
                              );
                              
                              return (
                                <span
                                  key={tech}
                                  className={`px-4 py-2 text-xs rounded-lg font-mono transition-all duration-300 ${
                                    isHighlighted 
                                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl scale-110 ring-4 ring-blue-400 pulse-glow' 
                                      : 'bg-slate-900 text-white hover:bg-slate-700 hover:scale-105'
                                  }`}
                                >
                                  {tech}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Professional Summary */}
            <div id="about" data-animate className={`bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 rounded-xl p-10 text-white shadow-2xl hover-lift relative overflow-hidden ${isVisible.about ? 'slide-in-up' : 'opacity-0'}`}>
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                  <Brain className="text-blue-400" />
                  Engineering Philosophy
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4 text-lg">
                  I believe great systems are built on three principles: clarity over complexity, privacy by design, and interfaces that serve users rather than impress them.
                </p>
                <p className="text-slate-300 leading-relaxed text-lg">
                  My work focuses on creating transparent, maintainable systems where every decision can be traced, every metric can be understood, and every user feels in control of their data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer id="contact" className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-16 mt-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-3xl font-semibold mb-4">Let's Build Something Together</h3>
          <p className="text-slate-400 mb-8 text-lg">Open to opportunities in AI-focused engineering and dashboard systems</p>
          
          <a
            href="mailto:gowtham.velaga@yahoo.com"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </footer>
    </div>
  );
};

export default App;