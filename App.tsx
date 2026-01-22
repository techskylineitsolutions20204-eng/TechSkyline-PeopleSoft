
import React, { useState, useMemo } from 'react';
import { 
  PEOPLESOFT_MODULES, 
  TECHSKYLINE_CONTACT, 
  ICONS 
} from './constants';
import { LearningModule, ModuleCategory, PseudoLab } from './types';
import { 
  BookOpen, 
  Phone, 
  ChevronRight, 
  Search, 
  Mail, 
  MessageCircle, 
  ExternalLink,
  Award,
  FlaskConical,
  Target,
  Youtube,
  Library,
  Terminal,
  Database,
  CheckCircle2,
  Layers,
  Globe,
  Layout,
  Server,
  Github,
  Info
} from 'lucide-react';

// --- Shared Components ---

const ContactCard = () => (
  <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
    <div>
      <h3 className="text-2xl font-bold mb-2">Ready to Start Your Mastery Journey?</h3>
      <p className="text-blue-200">Contact our PeopleSoft Center of Excellence experts today.</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
      <div className="flex items-center gap-3 bg-blue-800/50 p-3 rounded-lg border border-blue-700">
        <Phone className="w-5 h-5 text-blue-300" />
        <span className="text-sm font-medium">{TECHSKYLINE_CONTACT.usaPhone}</span>
      </div>
      <div className="flex items-center gap-3 bg-blue-800/50 p-3 rounded-lg border border-blue-700">
        <MessageCircle className="w-5 h-5 text-green-400" />
        <span className="text-sm font-medium">{TECHSKYLINE_CONTACT.whatsapp}</span>
      </div>
      <div className="flex items-center gap-3 bg-blue-800/50 p-3 rounded-lg border border-blue-700 col-span-full">
        <Mail className="w-5 h-5 text-yellow-300" />
        <span className="text-sm font-medium truncate">{TECHSKYLINE_CONTACT.email}</span>
      </div>
    </div>
  </div>
);

const Navbar = ({ onHome }: { onHome: () => void }) => (
  <nav className="glass sticky top-0 z-50 border-b border-slate-200 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-3 cursor-pointer" onClick={onHome}>
        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-blue-200">
          <BookOpen className="text-white w-6 h-6" />
        </div>
        <div>
          <h1 className="font-bold text-xl tracking-tight">TechSkyline</h1>
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-blue-600 -mt-1 leading-none">PeopleSoft Mastery</p>
        </div>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
        <button onClick={onHome} className="hover:text-blue-600 transition-colors">Framework Explorer</button>
        <a href="#labs" className="hover:text-blue-600 transition-colors">Labs</a>
        <a href="#contact" className="px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-blue-600 transition-all shadow-sm">Get Certified</a>
      </div>
    </div>
  </nav>
);

// --- View Components ---

const HomeView = ({ onSelectModule }: { onSelectModule: (m: LearningModule) => void }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredModules = useMemo(() => {
    return PEOPLESOFT_MODULES.filter(m => 
      m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      m.summary.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  const categories = Array.from(new Set(PEOPLESOFT_MODULES.map(m => m.category)));

  return (
    <div className="space-y-16 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 -z-10"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-slate-200 rounded-full blur-3xl opacity-30 -z-10"></div>
        
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="px-4 py-1.5 bg-blue-50 text-blue-700 text-sm font-bold rounded-full border border-blue-100 uppercase tracking-wider">
            Enterprise Enabling Technologies
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">
            Comprehensive <span className="gradient-text">Learning & Enablement</span> Framework
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Master PeopleSoft with <strong>Official Oracle Labs</strong> and our innovative <strong>Pseudo-Sandbox</strong> methodology. The ultimate path to enterprise success.
          </p>
          
          <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative w-full sm:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search modules..."
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 outline-none transition-all shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lab Ecosystem Section */}
      <section id="labs" className="grid md:grid-cols-2 gap-10">
        {/* Pseudo Labs */}
        <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Terminal size={100} />
          </div>
          <span className="text-blue-600 font-bold uppercase tracking-widest text-[10px] mb-2 block">Innovation</span>
          <h2 className="text-2xl font-black text-slate-900 mb-4">Pseudo-Sandbox Tools</h2>
          <p className="text-slate-500 text-sm mb-8">Simulate PeopleSoft logic using free, legal, browser-based tools. Perfect for database and query mastery.</p>
          <div className="grid grid-cols-3 gap-3">
            {['PostgreSQL', 'SQLite', 'Sheets', 'Postman', 'Draw.io', 'Figma'].map(t => (
              <div key={t} className="px-3 py-2 bg-slate-50 border border-slate-100 rounded-xl text-xs font-bold text-slate-600 text-center">
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Official Labs */}
        <div className="bg-slate-900 border border-slate-800 rounded-[2.5rem] p-10 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Server size={100} className="text-blue-400" />
          </div>
          <span className="text-blue-400 font-bold uppercase tracking-widest text-[10px] mb-2 block">Official Ecosystem</span>
          <h2 className="text-2xl font-black text-white mb-4">Oracle Lab Environments</h2>
          <p className="text-slate-400 text-sm mb-8">Access real Oracle hardware, OCI-based workshops, and the comprehensive Info Portal ecosystem.</p>
          <div className="flex flex-wrap gap-2">
            <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-blue-300 uppercase">LiveLabs</div>
            <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-blue-300 uppercase">OLS Access</div>
            <div className="px-3 py-2 bg-white/5 border border-white/10 rounded-xl text-[10px] font-bold text-blue-300 uppercase">OCI GitHub</div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      {categories.map(cat => (
        <section key={cat} className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-slate-800">{cat}</h2>
            <div className="h-px bg-slate-200 flex-1"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.filter(m => m.category === cat).map(module => (
              <div 
                key={module.id} 
                className="group bg-white p-6 rounded-3xl border border-slate-200 hover:border-blue-500 hover:shadow-2xl transition-all cursor-pointer flex flex-col"
                onClick={() => onSelectModule(module)}
              >
                <div className="w-12 h-12 bg-slate-50 text-slate-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {ICONS[module.icon]}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{module.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-6 line-clamp-2">{module.summary}</p>
                <div className="flex items-center text-blue-600 font-bold text-sm uppercase tracking-wider gap-2 mt-auto">
                  Module Blueprint <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Contact Section */}
      <section id="contact">
        <ContactCard />
      </section>
    </div>
  );
};

const ModuleDetailView = ({ module, onBack }: { module: LearningModule, onBack: () => void }) => {
  return (
    <div className="max-w-6xl mx-auto py-12 space-y-12 animate-in fade-in zoom-in-95 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-blue-600 font-bold hover:bg-blue-50 px-4 py-2 rounded-xl transition-all"
      >
        <ChevronRight className="w-5 h-5 rotate-180" />
        Back to Explorer
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center shadow-xl shadow-blue-200 shrink-0">
          {ICONS[module.icon]}
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-3">
             <span className="text-sm font-bold text-blue-600 uppercase tracking-widest">{module.category}</span>
             <span className="text-slate-300">•</span>
             <span className="text-sm font-semibold text-slate-500">Global Curriculum</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight">{module.title}</h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">{module.fullDescription}</p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            {module.oracleDocs && (
              <a 
                href={module.oracleDocs} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all shadow-lg"
              >
                <Library className="w-4 h-4" />
                Docs Portal
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            )}
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-5 py-2.5 rounded-xl font-bold text-sm border border-emerald-100">
              <CheckCircle2 className="w-4 h-4" />
              Environment Ready
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-10">
        {/* Left Content Area */}
        <div className="lg:col-span-8 space-y-12">
          
          {/* Official Environments Section */}
          {module.officialLabs && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold border-l-4 border-blue-600 pl-4 flex items-center gap-2">
                 <Server className="text-blue-600 w-6 h-6" />
                 Official Lab Environments
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {module.officialLabs.map((lab, i) => (
                  <a 
                    key={i} 
                    href={lab.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-5 bg-white border border-slate-200 rounded-3xl hover:border-blue-500 hover:shadow-xl transition-all group relative overflow-hidden"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                        {lab.label.includes('GitHub') ? <Github size={20} /> : lab.label.includes('Info') ? <Info size={20} /> : <Globe size={20} />}
                      </div>
                      <span className="font-black text-slate-900">{lab.label}</span>
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">{lab.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-[10px] font-black text-blue-600 uppercase tracking-tighter">
                      Access Resource <ChevronRight size={10} />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}

          {/* Pseudo-Sandbox Labs Section */}
          {module.pseudoLabs && module.pseudoLabs.length > 0 && (
            <section className="space-y-6">
              <div className="flex flex-col gap-2">
                <span className="text-emerald-600 font-black uppercase tracking-widest text-[10px]">Technical Simulation</span>
                <h2 className="text-3xl font-black text-slate-900 flex items-center gap-3">
                  <Terminal className="text-slate-900 w-8 h-8" />
                  Live Pseudo-Sandbox Labs
                </h2>
                <p className="text-slate-600 text-sm">Experience PeopleSoft metadata and data architecture using our high-fidelity toolstack simulation.</p>
              </div>

              <div className="grid gap-6">
                {module.pseudoLabs.map((lab) => (
                  <div key={lab.id} className="bg-slate-900 text-white rounded-[2.5rem] overflow-hidden shadow-2xl">
                    <div className="p-8 space-y-6">
                      <div className="flex justify-between items-start">
                        <div className="space-y-1">
                          <h3 className="text-2xl font-bold text-blue-400">{lab.title}</h3>
                          <p className="text-slate-400 italic text-sm">{lab.description}</p>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2">
                            <Database size={12} /> System Tables
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {lab.tables.map(table => (
                              <code key={table} className="bg-white/5 border border-white/10 px-3 py-1 rounded-md text-emerald-400 text-[10px] font-mono">
                                {table}
                              </code>
                            ))}
                          </div>
                          
                          <div className="pt-2 space-y-4">
                            <h4 className="text-[10px] font-black text-blue-400 uppercase tracking-widest flex items-center gap-2">
                              <Target size={12} /> Key Tasks
                            </h4>
                            <ul className="space-y-2">
                              {lab.tasks.map((task, i) => (
                                <li key={i} className="flex gap-3 text-sm">
                                  <div className="w-5 h-5 bg-white/10 rounded-full flex items-center justify-center text-[10px] font-bold">
                                    {i+1}
                                  </div>
                                  <span className="text-slate-300">{task.name}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                          <h4 className="text-[10px] font-black text-emerald-400 uppercase tracking-widest mb-4">Competency Outcome</h4>
                          <ul className="space-y-3">
                            {lab.outcomes.map((o, i) => (
                              <li key={i} className="flex gap-2 text-xs text-slate-300">
                                <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                {o}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* YouTube Learning Section */}
          {module.externalLinks && module.externalLinks.length > 0 && (
            <section className="space-y-6">
              <h2 className="text-2xl font-bold border-l-4 border-red-500 pl-4 flex items-center gap-3">
                <Youtube className="text-red-600 w-6 h-6" />
                Video Enablement Courses
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {module.externalLinks.map((link, lidx) => (
                  <a 
                    key={lidx} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-5 bg-white border border-slate-200 rounded-3xl hover:border-red-500 hover:shadow-lg transition-all group"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 bg-red-50 text-red-600 rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:text-white transition-all">
                        <Youtube size={16} />
                      </div>
                      <span className="font-bold text-slate-800 text-sm">{link.label}</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-black text-red-600 uppercase pt-2 border-t border-slate-50">
                      Watch Full Series <ChevronRight size={12} />
                    </div>
                  </a>
                ))}
              </div>
            </section>
          )}
        </div>

        {/* Right Sticky Sidebar */}
        <div className="lg:col-span-4 space-y-8">
          <div className="sticky top-28 space-y-8">
            <div className="bg-blue-600 p-8 rounded-[2.5rem] text-white shadow-xl">
              <h3 className="text-xl font-bold mb-6 tracking-tight">Certification Path</h3>
              <div className="space-y-6">
                <div>
                  <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mb-3">Prerequisites</p>
                  <ul className="space-y-2">
                    {module.prerequisites.map((p, idx) => (
                      <li key={idx} className="flex gap-2 text-xs font-medium">
                        <ChevronRight className="w-4 h-4 text-blue-300 mt-0.5 shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-blue-200 text-[10px] font-black uppercase tracking-widest mb-3">Learning Outcomes</p>
                  <ul className="space-y-2">
                    {module.learningOutcomes.slice(0, 3).map((o, idx) => (
                      <li key={idx} className="flex gap-2 text-xs font-medium italic">
                        <Award className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" /> {o}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <button className="w-full py-4 bg-white text-blue-700 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg">
                    Start Learning
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
               <div className="flex items-center gap-3 mb-4">
                  <Award className="text-yellow-500" />
                  <h3 className="font-bold text-slate-900">Expert Insights</h3>
               </div>
               <p className="text-slate-600 text-sm italic leading-relaxed mb-6">"Official environments provide the platform, but our Pseudo-Sandbox provides the intuition needed for implementation."</p>
               <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-blue-600">AJ</div>
                  <div className="text-xs">
                    <div className="font-bold text-slate-900 uppercase tracking-tighter">Abhinav Joseph</div>
                    <div className="text-slate-500">Solutions Architect</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>

      <section className="pt-20">
        <ContactCard />
      </section>
    </div>
  );
};

// --- Main App Entry ---

export default function App() {
  const [selectedModule, setSelectedModule] = useState<LearningModule | null>(null);

  const handleHome = () => {
    setSelectedModule(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-blue-100 selection:text-blue-900">
      <Navbar onHome={handleHome} />
      
      <main className="max-w-7xl mx-auto px-6">
        {selectedModule ? (
          <ModuleDetailView 
            module={selectedModule} 
            onBack={handleHome} 
          />
        ) : (
          <HomeView onSelectModule={setSelectedModule} />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="text-white w-6 h-6" />
              </div>
              <div className="font-black text-2xl tracking-tighter text-slate-900">TechSkyline</div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Empowering global teams with PeopleSoft expertise through official Oracle ecosystems and proprietary simulation methods.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Portal</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><button onClick={handleHome} className="hover:text-blue-600 transition-colors">Learning Hub</button></li>
              <li><a href="#labs" className="hover:text-blue-600 transition-colors">Environments</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-[10px]">Platforms</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li>PeopleSoft HCM 9.2</li>
              <li>FSCM Financials</li>
              <li>OCI Cloud Infrastructure</li>
              <li>PeopleTools 8.6x</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[10px] text-slate-400">
            © {new Date().getFullYear()} TechSkyline IT Solutions. Oracle and PeopleSoft are registered trademarks of Oracle Corp.
          </div>
          <div className="flex gap-8 text-[10px] font-black text-slate-400 uppercase">
            <a href="#" className="hover:text-blue-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Security</a>
            <a href="#" className="hover:text-blue-600 transition-colors">Legal</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
