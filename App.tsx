
import React, { useState, useMemo, useEffect } from 'react';
import { 
  PEOPLESOFT_MODULES, 
  TECHSKYLINE_CONTACT, 
  ICONS,
  GLOBAL_LEARNING_SOURCES,
  ORACLE_GLOBAL_ENVIRONMENTS
} from './constants';
import { LearningModule, Difficulty } from './types';
import { 
  BookOpen, 
  Phone, 
  ChevronRight, 
  Search, 
  Mail, 
  MessageCircle, 
  ExternalLink,
  Award,
  Youtube,
  Library,
  Terminal,
  Database,
  CheckCircle2,
  Layers,
  Globe,
  Server,
  Github,
  Info,
  ArrowRight,
  Filter,
  Play,
  Cpu,
  Monitor,
  Target,
  // Added FileText to fix "Cannot find name 'FileText'" error
  FileText
} from 'lucide-react';

// --- Skeleton Components ---

const Skeleton = ({ className }: { className?: string }) => (
  <div className={`animate-pulse bg-sky-200/50 rounded-lg ${className}`} />
);

const ModuleSkeleton = () => (
  <div className="bg-white/40 p-6 rounded-3xl border border-sky-100 shadow-sm flex flex-col h-full">
    <Skeleton className="w-12 h-12 rounded-2xl mb-6" />
    <Skeleton className="h-6 w-3/4 mb-3" />
    <Skeleton className="h-4 w-full mb-2" />
    <Skeleton className="h-4 w-2/3 mb-6" />
    <div className="mt-auto">
      <Skeleton className="h-4 w-24" />
    </div>
  </div>
);

const HomeSkeleton = () => (
  <div className="space-y-16 py-12">
    <div className="max-w-4xl mx-auto space-y-6 text-center">
      <Skeleton className="h-6 w-40 mx-auto rounded-full" />
      <Skeleton className="h-12 w-3/4 mx-auto" />
      <Skeleton className="h-4 w-1/2 mx-auto" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <ModuleSkeleton key={i} />
      ))}
    </div>
  </div>
);

const DetailSkeleton = () => (
  <div className="max-w-6xl mx-auto py-12 space-y-12">
    <Skeleton className="w-32 h-10 rounded-xl" />
    <div className="flex flex-col md:flex-row gap-10">
      <Skeleton className="w-20 h-20 rounded-3xl shrink-0" />
      <div className="space-y-4 w-full">
        <Skeleton className="h-4 w-40" />
        <Skeleton className="h-12 w-3/4" />
        <Skeleton className="h-20 w-full" />
      </div>
    </div>
    <div className="grid lg:grid-cols-12 gap-10">
      <div className="lg:col-span-8 space-y-8">
        <Skeleton className="h-64 w-full rounded-[2rem]" />
        <Skeleton className="h-96 w-full rounded-[2.5rem]" />
      </div>
      <div className="lg:col-span-4 space-y-8">
        <Skeleton className="h-80 w-full rounded-[2.5rem]" />
        <Skeleton className="h-40 w-full rounded-[2.5rem]" />
      </div>
    </div>
  </div>
);

// --- Shared Components ---

const ContactCard = () => (
  <div className="bg-sky-600 text-white p-12 rounded-[3.5rem] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-12 border border-sky-400 relative overflow-hidden group">
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
    <div className="space-y-6 relative z-10 text-center lg:text-left">
      <h3 className="text-4xl font-black tracking-tighter leading-none">Enable Your Team Today</h3>
      <p className="text-sky-100 text-xl font-medium max-w-md">Our PeopleSoft specialists are ready to provide custom enablement roadmaps.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full lg:w-auto relative z-10">
      <div className="flex items-center gap-4 bg-sky-950/20 p-5 rounded-3xl border border-white/20 hover:bg-white/10 transition-all cursor-default group/item">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover/item:bg-white group-hover/item:text-sky-600 transition-all">
          <Phone size={20} />
        </div>
        <span className="text-sm font-black tracking-tight">{TECHSKYLINE_CONTACT.usaPhone}</span>
      </div>
      <div className="flex items-center gap-4 bg-sky-950/20 p-5 rounded-3xl border border-white/20 hover:bg-white/10 transition-all cursor-default group/item">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover/item:bg-white group-hover/item:text-sky-600 transition-all">
          <MessageCircle size={20} />
        </div>
        <span className="text-sm font-black tracking-tight">{TECHSKYLINE_CONTACT.whatsapp}</span>
      </div>
      <div className="flex items-center gap-4 bg-sky-950/20 p-5 rounded-3xl border border-white/20 col-span-full hover:bg-white/10 transition-all cursor-default group/item">
        <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center group-hover/item:bg-white group-hover/item:text-sky-600 transition-all shrink-0">
          <Mail size={20} />
        </div>
        <span className="text-sm font-black truncate">{TECHSKYLINE_CONTACT.email}</span>
      </div>
    </div>
  </div>
);

const Navbar = ({ onHome }: { onHome: () => void }) => (
  <nav className="glass sticky top-0 z-50 border-b border-white/40 px-6 py-5">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-4 cursor-pointer group" onClick={onHome}>
        <div className="w-12 h-12 bg-sky-600 rounded-2xl flex items-center justify-center shadow-xl shadow-sky-200 group-hover:scale-110 group-hover:rotate-6 transition-all">
          <BookOpen className="text-white w-7 h-7" />
        </div>
        <div>
          <h1 className="font-black text-2xl tracking-tighter text-sky-950">TechSkyline</h1>
          <p className="text-[10px] uppercase tracking-[0.3em] font-black text-sky-600 -mt-1 leading-none">Enablement Hub</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-12 text-sm font-black text-sky-800 uppercase tracking-widest">
        <button onClick={onHome} className="hover:text-sky-500 transition-colors text-[11px]">Explorer</button>
        <a href="#resources" className="hover:text-sky-500 transition-colors text-[11px]">Library</a>
        <a href="#labs" className="hover:text-sky-500 transition-colors text-[11px]">Live Labs</a>
        <a href="#contact" className="px-8 py-3 bg-sky-950 text-white rounded-full hover:bg-sky-600 transition-all shadow-xl shadow-sky-200 font-black text-[10px] tracking-widest pulse-sky">Enroll Now</a>
      </div>
    </div>
  </nav>
);

// --- View Components ---

const HomeView = ({ onSelectModule }: { onSelectModule: (m: LearningModule) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeDifficulty, setActiveDifficulty] = useState<Difficulty | 'All'>('All');
  
  const filteredModules = useMemo(() => {
    return PEOPLESOFT_MODULES.filter(m => 
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      m.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const filteredResources = useMemo(() => {
    return GLOBAL_LEARNING_SOURCES.filter(r => 
      activeDifficulty === 'All' || r.difficulty === activeDifficulty
    );
  }, [activeDifficulty]);

  const categories = Array.from(new Set(PEOPLESOFT_MODULES.map(m => m.category)));

  const pseudoTools = [
    { name: 'PostgreSQL', url: 'https://db-fiddle.com/', desc: 'Simulate PS system records' },
    { name: 'SQLite', url: 'https://sqliteonline.com/', desc: 'Quick schema prototyping' },
    { name: 'Sheets', url: 'https://sheets.new', desc: 'Mock metadata prompt tables' },
    { name: 'Postman', url: 'https://web.postman.co/', desc: 'Test IB APIs' },
    { name: 'Draw.io', url: 'https://app.diagrams.net/', desc: 'Component structures' },
    { name: 'Figma', url: 'https://www.figma.com/', desc: 'Fluid UI prototypes' },
  ];

  return (
    <div className="space-y-28 pb-32 animate-in fade-in slide-in-from-bottom-6 duration-1000">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden text-center">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_#e0f2fe_0%,_transparent_70%)] opacity-60" />
        <div className="max-w-5xl mx-auto space-y-10 relative">
          <div className="inline-block px-8 py-3 bg-white/60 border border-sky-200 text-sky-600 text-[11px] font-black rounded-full uppercase tracking-[0.4em] shadow-sm backdrop-blur-sm">
            Future-Proof Your PeopleSoft Expertise
          </div>
          <h1 className="text-7xl md:text-9xl font-black text-sky-950 leading-[0.95] tracking-tighter">
            Total <span className="gradient-text">Mastery.</span>
          </h1>
          <p className="text-2xl md:text-3xl text-sky-800/70 max-w-3xl mx-auto font-bold leading-snug tracking-tight">
            The architect's framework for functional and technical excellence in the PeopleSoft ecosystem.
          </p>
          
          <div className="pt-12 flex justify-center">
            <div className="relative w-full max-w-xl group">
              <div className="absolute -inset-2 bg-sky-400/20 rounded-[2.5rem] blur-xl group-focus-within:bg-sky-500/30 transition-all" />
              <Search className="absolute left-7 top-1/2 -translate-y-1/2 text-sky-400 group-focus-within:text-sky-600 transition-colors w-7 h-7" />
              <input 
                type="text" 
                placeholder="Search functional suites or technical labs..."
                className="w-full relative pl-18 pr-8 py-6 bg-white border border-sky-100 rounded-[2.2rem] focus:ring-0 focus:border-sky-500 outline-none transition-all shadow-2xl shadow-sky-200/40 text-xl font-bold text-sky-950 placeholder-sky-300"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Live Labs Ecosystem Section */}
      <section id="labs" className="space-y-16">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-sky-600 font-black uppercase tracking-[0.3em] text-xs">Environment Access</span>
          <h2 className="text-5xl font-black text-sky-950 tracking-tighter">Live Enablement Portals</h2>
          <p className="text-sky-800/60 font-bold text-lg">Instant infrastructure for training, testing, and prototyping.</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Pseudo-Sandbox */}
          <div className="radiant-card rounded-[4.5rem] p-14 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-14 opacity-5 text-sky-600 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">
              <Terminal size={200} />
            </div>
            <div className="relative space-y-10">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center">
                  <Terminal size={32} />
                </div>
                <h3 className="text-4xl font-black text-sky-950 tracking-tighter">Pseudo-Sandbox</h3>
                <p className="text-sky-800/70 text-lg font-bold leading-relaxed max-w-md">Simulate PS metadata layers and SQL logic using high-performance browser tools.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {pseudoTools.map(tool => (
                  <a 
                    key={tool.name} 
                    href={tool.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-6 bg-sky-50/40 border border-sky-100 rounded-3xl hover:bg-sky-600 hover:text-white hover:shadow-2xl hover:-translate-y-2 transition-all group/tool flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-black text-sm tracking-tight">{tool.name}</span>
                      <Play size={16} className="opacity-0 group-hover/tool:opacity-100 group-hover/tool:translate-x-1 transition-all" />
                    </div>
                    <span className="text-[11px] font-bold opacity-50 group-hover/tool:opacity-90">{tool.desc}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Official Labs */}
          <div className="bg-sky-950 border border-sky-800 rounded-[4.5rem] p-14 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-14 opacity-10 text-sky-400 group-hover:scale-125 transition-all duration-700">
              <Server size={200} />
            </div>
            <div className="relative space-y-10">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-white/10 text-sky-400 rounded-2xl flex items-center justify-center">
                  <Server size={32} />
                </div>
                <h3 className="text-4xl font-black text-white tracking-tighter">Official Labs</h3>
                <p className="text-sky-300/60 text-lg font-bold leading-relaxed max-w-md">Direct access to real Oracle hardware and OCI-driven enterprise sandboxes.</p>
              </div>

              <div className="space-y-4">
                {ORACLE_GLOBAL_ENVIRONMENTS.map((env, i) => (
                  <a 
                    key={i} 
                    href={env.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 p-7 bg-white/5 border border-white/10 rounded-3xl hover:bg-white/10 hover:border-white/30 transition-all group/env"
                  >
                    <div className="w-14 h-14 bg-sky-600/20 text-sky-400 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-sky-500 group-hover:text-white transition-all">
                      {env.label.includes('GitHub') ? <Github size={28} /> : env.label.includes('LiveLabs') ? <Monitor size={28} /> : <Cpu size={28} />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-white text-xl group-hover:text-sky-400 transition-colors tracking-tighter leading-none">{env.label}</h4>
                      <p className="text-xs text-sky-300/40 font-bold mt-2 line-clamp-1">{env.description}</p>
                    </div>
                    <ExternalLink size={24} className="text-white/20 group-hover:text-sky-400 transition-colors" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      {categories.map(cat => (
        <section key={cat} className="space-y-12">
          <div className="flex items-center gap-8">
            <h2 className="text-4xl font-black text-sky-950 tracking-tighter leading-none">{cat}</h2>
            <div className="h-0.5 bg-sky-200/60 flex-1 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredModules.filter(m => m.category === cat).map(module => (
              <div 
                key={module.id} 
                className="group radiant-card p-10 rounded-[4rem] cursor-pointer flex flex-col h-full border-2 border-transparent hover:border-sky-400"
                onClick={() => onSelectModule(module)}
              >
                <div className="w-20 h-20 bg-sky-50 text-sky-600 rounded-[2rem] flex items-center justify-center mb-10 group-hover:bg-sky-500 group-hover:text-white group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-sky-100">
                  {ICONS[module.icon]}
                </div>
                <h3 className="text-3xl font-black text-sky-950 mb-4 group-hover:text-sky-600 transition-colors tracking-tighter leading-tight">{module.title}</h3>
                <p className="text-sky-800/60 text-base leading-relaxed flex-1 mb-10 font-bold">{module.summary}</p>
                <div className="flex items-center text-sky-600 font-black text-xs uppercase tracking-widest gap-3 mt-auto">
                  Master Path <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-3" />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Enablement Library */}
      <section id="resources" className="space-y-16 pt-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-sky-600 font-black uppercase tracking-[0.3em] text-xs">Knowledge Hub</span>
            <h2 className="text-5xl font-black text-sky-950 tracking-tighter">Enablement Library</h2>
            <p className="text-sky-800/70 font-bold text-xl max-w-2xl">A curated selection of the finest official and technical learning materials.</p>
          </div>
          <div className="flex bg-white/40 backdrop-blur-xl p-2 rounded-3xl border border-sky-100 shadow-xl shadow-sky-100/50 overflow-x-auto whitespace-nowrap scrollbar-hide">
            {['All', Difficulty.BEGINNER, Difficulty.INTERMEDIATE, Difficulty.ADVANCED].map((d) => (
              <button
                key={d}
                onClick={() => setActiveDifficulty(d as Difficulty | 'All')}
                className={`px-8 py-4 text-[11px] font-black uppercase tracking-widest rounded-2xl transition-all ${
                  activeDifficulty === d ? 'bg-sky-600 text-white shadow-2xl shadow-sky-200' : 'text-sky-600 hover:text-sky-900'
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredResources.map((res, idx) => (
            <a 
              key={idx} 
              href={res.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="radiant-card p-10 rounded-[3.5rem] group flex flex-col border-2 border-transparent hover:border-sky-500"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="px-5 py-2.5 rounded-2xl text-[10px] font-black uppercase tracking-widest bg-sky-100 text-sky-700 border border-sky-200 shadow-sm">
                  {res.difficulty}
                </span>
                <div className="text-sky-300 group-hover:text-sky-600 transition-all duration-500 transform group-hover:rotate-12 group-hover:scale-110">
                  {res.category === 'Official' ? <Library size={32} /> : 
                   res.category === 'Video' ? <Youtube size={32} /> : 
                   res.category === 'Technical' ? <FileText size={32} /> : <Globe size={32} />}
                </div>
              </div>
              <h3 className="text-2xl font-black text-sky-950 mb-4 group-hover:text-sky-600 transition-colors tracking-tighter leading-snug">{res.title}</h3>
              <p className="text-base text-sky-800/60 mb-10 flex-1 font-bold leading-relaxed">{res.description}</p>
              <div className="flex flex-wrap gap-2.5 mt-auto">
                {res.topics?.map(t => (
                  <span key={t} className="text-[10px] bg-white text-sky-600 px-4 py-1.5 font-black rounded-xl border border-sky-100 shadow-sm uppercase tracking-tighter">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <ContactCard />
      </section>
    </div>
  );
};

const ModuleDetailView = ({ module, onBack, onSelectModule }: { 
  module: LearningModule, 
  onBack: () => void,
  onSelectModule: (m: LearningModule) => void 
}) => {
  const [labSearchQuery, setLabSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [module.id]);

  const relatedModules = useMemo(() => {
    return PEOPLESOFT_MODULES.filter(m => {
      if (m.id === module.id) return false;
      const sameCategory = m.category === module.category;
      const sharedRoles = m.targetRoles.some(role => module.targetRoles.includes(role));
      return sameCategory || sharedRoles;
    }).slice(0, 3);
  }, [module.id, module.category, module.targetRoles]);

  const filteredOfficialLabs = useMemo(() => {
    if (!module.officialLabs) return [];
    if (!labSearchQuery.trim()) return module.officialLabs;
    const query = labSearchQuery.toLowerCase();
    return module.officialLabs.filter(l => 
      l.label.toLowerCase().includes(query) || 
      l.description.toLowerCase().includes(query)
    );
  }, [module.officialLabs, labSearchQuery]);

  const filteredPseudoLabs = useMemo(() => {
    if (!module.pseudoLabs) return [];
    if (!labSearchQuery.trim()) return module.pseudoLabs;
    const query = labSearchQuery.toLowerCase();
    return module.pseudoLabs.filter(l => 
      l.title.toLowerCase().includes(query) || 
      l.description.toLowerCase().includes(query) ||
      l.objective.toLowerCase().includes(query) ||
      l.tasks.some(t => t.name.toLowerCase().includes(query) || t.description.toLowerCase().includes(query))
    );
  }, [module.pseudoLabs, labSearchQuery]);

  const handleTopicClick = (topic: string) => {
    const topicLower = topic.toLowerCase();
    let targetId = '';

    if (topicLower.includes('lab') || topicLower.includes('simul')) {
      targetId = 'pseudo-labs';
    } else if (topicLower.includes('oracle') || topicLower.includes('docs') || topicLower.includes('info')) {
      targetId = 'official-labs';
    } else if (topicLower.includes('video') || topicLower.includes('youtube') || topicLower.includes('course')) {
      targetId = 'video-courses';
    } else if (topicLower.includes('cert') || topicLower.includes('track') || topicLower.includes('outcomes')) {
      targetId = 'certification-path';
    }

    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.classList.remove('section-highlight');
        void element.offsetWidth;
        element.classList.add('section-highlight');
      }
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-20 space-y-24 animate-in fade-in zoom-in-95 duration-700">
      <button 
        onClick={onBack}
        className="flex items-center gap-4 text-sky-600 font-black uppercase text-[11px] tracking-[0.3em] hover:bg-white/60 px-8 py-4 rounded-3xl transition-all shadow-xl shadow-sky-100 border border-sky-100 backdrop-blur-md"
      >
        <ChevronRight className="w-6 h-6 rotate-180" />
        Back to Explorer
      </button>

      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="w-32 h-32 bg-sky-600 text-white rounded-[3rem] flex items-center justify-center shadow-2xl shadow-sky-200 shrink-0 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
          {ICONS[module.icon]}
        </div>
        <div className="space-y-8 flex-1">
          <div className="flex items-center gap-6">
             <span className="text-[12px] font-black text-sky-600 uppercase tracking-[0.3em] bg-white px-5 py-2 rounded-2xl border border-sky-100 shadow-sm">{module.category}</span>
             <span className="text-sky-200">/</span>
             <span className="text-sm font-black text-sky-400 uppercase tracking-widest">Global Path</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-sky-950 tracking-tighter leading-[0.9]">{module.title}</h1>
          <p className="text-2xl text-sky-800/70 leading-relaxed max-w-4xl font-bold tracking-tight">{module.fullDescription}</p>
          
          <div className="flex flex-wrap gap-6 pt-6">
            {module.oracleDocs && (
              <a 
                href={module.oracleDocs} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 bg-sky-950 text-white px-10 py-5 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.2em] hover:bg-sky-600 transition-all shadow-2xl shadow-sky-950/20"
              >
                <Library className="w-6 h-6" />
                Knowledge Base
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-md text-sky-700 px-10 py-5 rounded-[2rem] font-black text-[12px] uppercase tracking-[0.2em] border border-sky-100 shadow-sm">
              <CheckCircle2 className="w-6 h-6 text-sky-500" />
              Enablement Ready
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-16">
        {/* Left Content Area */}
        <div className="lg:col-span-8 space-y-24">
          
          {/* Sub-Modules Section */}
          <section className="space-y-12">
            <h2 className="text-4xl font-black border-l-[10px] border-sky-500 pl-8 flex items-center gap-5 text-sky-950 tracking-tighter">
               <Layers className="text-sky-500 w-10 h-10" />
               Curriculum Breakdown
            </h2>
            <div className="grid gap-10">
              {module.subModules.map((sm, idx) => (
                <div key={idx} className="radiant-card p-12 rounded-[4rem] border-2 border-transparent hover:border-sky-300">
                  <h3 className="text-3xl font-black text-sky-950 mb-6 tracking-tighter leading-none">{sm.title}</h3>
                  <p className="text-sky-800/60 mb-10 text-lg leading-relaxed font-bold">{sm.description}</p>
                  <div className="flex flex-wrap gap-4">
                    {sm.topics.map((t, tidx) => (
                      <button 
                        key={tidx} 
                        onClick={() => handleTopicClick(t)}
                        className="px-6 py-3 bg-white text-sky-700 text-[11px] font-black rounded-2xl uppercase tracking-widest hover:bg-sky-600 hover:text-white transition-all transform active:scale-95 shadow-sm border border-sky-100"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Labs Search Bar */}
          {(module.officialLabs || (module.pseudoLabs && module.pseudoLabs.length > 0)) && (
            <div className="sticky top-28 z-30 py-4">
              <div className="relative group">
                <div className="absolute -inset-2 bg-sky-400/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <Filter className="absolute left-7 top-1/2 -translate-y-1/2 text-sky-400 group-hover:text-sky-600 transition-colors w-7 h-7" />
                <input 
                  type="text" 
                  placeholder="Filter by keyword, table, or task..."
                  className="w-full relative pl-18 pr-8 py-6 bg-white/90 backdrop-blur-2xl border border-sky-100 rounded-[2.2rem] focus:ring-0 focus:border-sky-500 outline-none transition-all shadow-2xl shadow-sky-200/40 text-xl font-bold text-sky-950 placeholder-sky-200"
                  value={labSearchQuery}
                  onChange={(e) => setLabSearchQuery(e.target.value)}
                />
              </div>
            </div>
          )}

          {/* Official Environments Section */}
          {module.officialLabs && (
            <section id="official-labs" className="space-y-12">
              <h2 className="text-4xl font-black border-l-[10px] border-sky-500 pl-8 flex items-center gap-5 text-sky-950 tracking-tighter">
                 <Server className="text-sky-500 w-10 h-10" />
                 Official Lab Portals
              </h2>
              {filteredOfficialLabs.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-8">
                  {filteredOfficialLabs.map((lab, i) => (
                    <a 
                      key={i} 
                      href={lab.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-10 radiant-card rounded-[3.5rem] group relative overflow-hidden flex flex-col h-full"
                    >
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-[1.5rem] flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-sky-100/50">
                          {lab.label.includes('GitHub') ? <Github size={32} /> : lab.label.includes('Info') ? <Info size={32} /> : <Globe size={32} />}
                        </div>
                        <span className="font-black text-sky-950 text-2xl tracking-tighter leading-none">{lab.label}</span>
                      </div>
                      <p className="text-base text-sky-800/60 leading-relaxed font-bold mb-10 flex-1">{lab.description}</p>
                      <div className="mt-auto pt-8 border-t border-sky-50 flex items-center gap-3 text-[11px] font-black text-sky-600 uppercase tracking-[0.2em] group-hover:translate-x-4 transition-transform">
                        Launch Project <ChevronRight size={18} />
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                <div className="p-20 text-center bg-white/60 backdrop-blur-xl border border-sky-100 rounded-[4.5rem] text-sky-400 text-2xl font-black tracking-tighter">
                  Nothing matches your filter.
                </div>
              )}
            </section>
          )}

          {/* Pseudo-Sandbox Labs Section */}
          {module.pseudoLabs && module.pseudoLabs.length > 0 && (
            <section id="pseudo-labs" className="space-y-16">
              <div className="space-y-6">
                <span className="text-sky-500 font-black uppercase tracking-[0.4em] text-[12px] bg-sky-50 w-fit px-5 py-2 rounded-xl border border-sky-100 shadow-sm">Simulated Infrastructure</span>
                <h2 className="text-5xl font-black text-sky-950 flex items-center gap-6 tracking-tighter">
                  <Terminal className="text-sky-600 w-12 h-12" />
                  Live Pseudo-Labs
                </h2>
                <p className="text-sky-800/70 text-2xl font-bold tracking-tight max-w-3xl leading-snug">Experience PeopleSoft metadata architecture with high-fidelity technical simulations.</p>
              </div>

              {filteredPseudoLabs.length > 0 ? (
                <div className="grid gap-16">
                  {filteredPseudoLabs.map((lab) => (
                    <div key={lab.id} className="bg-sky-950 text-white rounded-[5rem] overflow-hidden shadow-2xl relative border border-sky-800">
                      <div className="absolute top-0 right-0 p-16 opacity-5 text-white pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
                        <Database size={240} />
                      </div>
                      <div className="p-16 space-y-14 relative z-10">
                        <div className="space-y-4">
                          <h3 className="text-4xl font-black text-sky-400 tracking-tighter leading-none">{lab.title}</h3>
                          <p className="text-sky-200/50 italic text-xl font-bold">{lab.description}</p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-16">
                          <div className="space-y-12">
                            <div className="space-y-6">
                              <h4 className="text-[12px] font-black text-sky-300 uppercase tracking-[0.3em] flex items-center gap-4">
                                <Database size={20} /> Targeted Records
                              </h4>
                              <div className="flex flex-wrap gap-3">
                                {lab.tables.map(table => (
                                  <code key={table} className="bg-white/10 border border-white/10 px-6 py-3 rounded-2xl text-sky-300 text-[12px] font-mono font-black tracking-tight">
                                    {table}
                                  </code>
                                ))}
                              </div>
                            </div>
                            
                            <div className="space-y-8">
                              <h4 className="text-[12px] font-black text-sky-300 uppercase tracking-[0.3em] flex items-center gap-4">
                                <Target size={20} /> Enablement Tasks
                              </h4>
                              <ul className="space-y-6">
                                {lab.tasks.map((task, i) => (
                                  <li key={i} className="flex gap-6 group/task">
                                    <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-[12px] font-black group-hover/task:bg-sky-500 transition-all shrink-0 shadow-lg">
                                      {i+1}
                                    </div>
                                    <span className="text-sky-100/70 text-lg font-bold leading-relaxed">{task.name}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="bg-white/5 p-12 rounded-[4rem] border border-white/10 space-y-10 flex flex-col justify-between">
                            <div className="space-y-6">
                              <h4 className="text-[12px] font-black text-sky-400 uppercase tracking-[0.3em] mb-4">Competency Outcomes</h4>
                              <ul className="space-y-6">
                                {lab.outcomes.map((o, i) => (
                                  <li key={i} className="flex gap-6 text-base font-bold text-sky-100/70 leading-relaxed">
                                    <CheckCircle2 size={24} className="text-sky-400 shrink-0 mt-1" />
                                    {o}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="pt-8">
                              <button className="w-full py-6 bg-sky-500 text-white rounded-3xl font-black text-[12px] uppercase tracking-[0.3em] hover:bg-sky-400 transition-all shadow-2xl shadow-sky-500/30 active:scale-95">
                                Begin Simulation
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-24 text-center bg-sky-950 text-sky-400 rounded-[5rem] text-2xl font-black tracking-tighter border-2 border-sky-800">
                  No simulations found.
                </div>
              )}
            </section>
          )}

          {/* YouTube Video Section */}
          {module.externalLinks && module.externalLinks.length > 0 && (
            <section id="video-courses" className="space-y-12">
              <h2 className="text-4xl font-black border-l-[10px] border-sky-500 pl-8 flex items-center gap-6 text-sky-950 tracking-tighter">
                <Youtube className="text-sky-500 w-12 h-12" />
                Masterclass Series
              </h2>
              <div className="grid sm:grid-cols-2 gap-10">
                {module.externalLinks.map((link, lidx) => (
                  <a 
                    key={lidx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-10 radiant-card rounded-[4rem] group border-2 border-transparent hover:border-sky-500 transition-all"
                  >
                    <div className="flex items-center gap-6 mb-8">
                      <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-[1.5rem] flex items-center justify-center group-hover:bg-sky-500 group-hover:text-white transition-all duration-500 shadow-xl shadow-sky-100">
                        <Youtube size={32} />
                      </div>
                      <span className="font-black text-sky-950 text-2xl tracking-tighter group-hover:text-sky-600 transition-colors leading-none">{link.label}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-black text-sky-600 uppercase tracking-[0.3em] pt-8 border-t border-sky-100 group-hover:px-4 transition-all">
                      Watch Tutorial <ChevronRight size={18} className="group-hover:translate-x-4 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Sticky Sidebar */}
        <div className="lg:col-span-4 space-y-16">
          <div className="sticky top-32 space-y-16">
            <div id="certification-path" className="bg-sky-600 p-12 rounded-[5rem] text-white shadow-2xl relative overflow-hidden group border-2 border-sky-500">
              <div className="absolute top-0 right-0 p-10 opacity-10 text-white pointer-events-none group-hover:scale-150 group-hover:rotate-12 transition-transform duration-1000">
                <Award size={150} />
              </div>
              <h3 className="text-3xl font-black mb-10 tracking-tighter relative z-10">Certification Path</h3>
              <div className="space-y-12 relative z-10">
                <div>
                  <p className="text-sky-100/70 text-[12px] font-black uppercase tracking-[0.4em] mb-6">Prerequisites</p>
                  <ul className="space-y-6">
                    {module.prerequisites.map((p, idx) => (
                      <li key={idx} className="flex gap-5 text-base font-bold leading-relaxed">
                        <div className="w-7 h-7 bg-white/20 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0 shadow-sm">✓</div>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-sky-100/70 text-[12px] font-black uppercase tracking-[0.4em] mb-6">Learning Metrics</p>
                  <ul className="space-y-6">
                    {module.learningOutcomes.slice(0, 3).map((o, idx) => (
                      <li key={idx} className="flex gap-5 text-base font-bold italic leading-relaxed">
                        <Award className="w-7 h-7 text-sky-200 shrink-0 mt-0.5" /> {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8">
                  <button className="w-full py-6 bg-white text-sky-700 rounded-3xl font-black text-[12px] uppercase tracking-[0.4em] hover:bg-sky-50 hover:shadow-2xl transition-all shadow-xl shadow-sky-900/20 active:scale-95">
                    Enroll in Track
                  </button>
                </div>
              </div>
            </div>

            <div className="radiant-card p-12 rounded-[5rem] space-y-10 border-2 border-sky-100">
               <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-sky-50 rounded-2xl flex items-center justify-center text-sky-500 shadow-sm">
                    <Award size={32} />
                  </div>
                  <h3 className="font-black text-sky-950 text-2xl tracking-tighter">Expert's Voice</h3>
               </div>
               <p className="text-sky-800/70 text-lg italic font-bold leading-relaxed tracking-tight">"The difference between a user and a master is the depth of their understanding of the underlying system architecture."</p>
               <div className="pt-10 border-t border-sky-100 flex items-center gap-6">
                  <div className="w-16 h-16 bg-sky-500 text-white rounded-[1.75rem] flex items-center justify-center font-black text-xl shadow-xl shadow-sky-200">AJ</div>
                  <div>
                    <div className="font-black text-sky-950 uppercase tracking-tighter text-base">Abhinav Joseph</div>
                    <div className="text-sky-400 font-black text-[10px] uppercase tracking-[0.3em]">Architect & Lead</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Modules Section */}
      {relatedModules.length > 0 && (
        <section className="space-y-12 pt-24 border-t-2 border-sky-100">
          <div className="space-y-4">
            <span className="text-sky-600 font-black uppercase tracking-[0.4em] text-xs">Horizontal Expansion</span>
            <h2 className="text-5xl font-black text-sky-950 tracking-tighter">Complementary Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {relatedModules.map((m) => (
              <div 
                key={m.id}
                onClick={() => onSelectModule(m)}
                className="group radiant-card p-10 rounded-[4rem] cursor-pointer hover:border-sky-500 border-2 border-transparent"
              >
                <div className="w-16 h-16 bg-sky-50 text-sky-600 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-sky-600 group-hover:text-white transition-all duration-500 shadow-xl shadow-sky-100/50">
                  {ICONS[m.icon]}
                </div>
                <h3 className="font-black text-sky-950 text-2xl mb-4 group-hover:text-sky-600 transition-colors tracking-tighter leading-none">{m.title}</h3>
                <p className="text-base text-sky-800/60 line-clamp-2 mb-10 font-bold leading-relaxed">{m.summary}</p>
                <div className="flex items-center gap-4 text-sky-600 text-[11px] font-black uppercase tracking-[0.3em]">
                  Explore Detail <ArrowRight size={20} className="group-hover:translate-x-4 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="pt-32">
        <ContactCard />
      </section>
    </div>
  );
};

// --- Main App Entry ---

export default function App() {
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  const handleHome = () => {
    setLoading(true);
    setSelectedModule(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setLoading(false), 800);
  };

  const handleSelectModule = (m: LearningModule) => {
    setLoading(true);
    setSelectedModule(m);
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="min-h-screen selection:bg-sky-200 selection:text-sky-900 overflow-x-hidden">
      <Navbar onHome={handleHome} />
      
      <main className="max-w-7xl mx-auto px-6">
        {loading ? (
          selectedModule ? <DetailSkeleton /> : <HomeSkeleton />
        ) : (
          selectedModule ? (
            <ModuleDetailView 
              module={selectedModule} 
              onBack={handleHome} 
              onSelectModule={handleSelectModule}
            />
          ) : (
            <HomeView onSelectModule={handleSelectModule} />
          )
        )}
      </main>

      <footer className="bg-white/40 backdrop-blur-3xl border-t-2 border-sky-100 py-32 mt-32">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 gap-20">
          <div className="lg:col-span-2 space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-sky-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-sky-200">
                <BookOpen className="text-white w-8 h-8" />
              </div>
              <div className="font-black text-4xl tracking-tighter text-sky-950">TechSkyline</div>
            </div>
            <p className="text-sky-800/60 text-xl leading-relaxed max-w-lg font-bold">
              Unlocking enterprise mastery through elite PeopleSoft curricula and interactive project-based enablement.
            </p>
          </div>
          
          <div>
            <h4 className="font-black text-sky-950 mb-10 uppercase tracking-[0.4em] text-[12px] leading-none">Curriculum</h4>
            <ul className="space-y-8 text-lg font-black text-sky-600/70 uppercase tracking-tighter">
              <li><button onClick={handleHome} className="hover:text-sky-500 transition-colors">Enablement Hub</button></li>
              <li><a href="#labs" className="hover:text-sky-500 transition-colors">Live Labs</a></li>
              <li><a href="#resources" className="hover:text-sky-500 transition-colors">Global Library</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-sky-950 mb-10 uppercase tracking-[0.4em] text-[12px] leading-none">Enterprise Stack</h4>
            <ul className="space-y-8 text-lg font-black text-sky-700/50 uppercase tracking-tighter">
              <li>HCM Workforce 9.2</li>
              <li>FSCM Core 9.2</li>
              <li>Oracle OCI Infrastructure</li>
              <li>PeopleTools 8.6x Architecture</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-sky-100 flex flex-col lg:flex-row justify-between items-center gap-12">
          <div className="text-[12px] font-black text-sky-400 uppercase tracking-widest text-center lg:text-left">
            © {new Date().getFullYear()} TechSkyline IT Solutions. PeopleSoft is a registered trademark of Oracle Corp.
          </div>
          <div className="flex gap-12 text-[12px] font-black text-sky-300 uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-sky-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Compliance</a>
            <a href="#" className="hover:text-sky-600 transition-colors">Security</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
