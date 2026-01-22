
export enum ModuleCategory {
  FUNCTIONAL = 'Functional Application Suites',
  TECHNICAL = 'Technical Stack (PeopleTools)',
  ADMIN = 'Administration & Infrastructure',
  REPORTING = 'Reporting & Analytics'
}

export enum Difficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced'
}

export interface ExternalLink {
  label: string;
  url: string;
}

export interface LabTask {
  name: string;
  description: string;
}

export interface PseudoLab {
  id: string;
  title: string;
  description: string;
  objective: string;
  tables: string[];
  tasks: LabTask[];
  outcomes: string[];
}

export interface OfficialLab {
  label: string;
  url: string;
  description: string;
}

export interface LearningSource {
  title: string;
  description: string;
  url: string;
  difficulty: Difficulty;
  category: 'Official' | 'Community' | 'Technical' | 'Video';
  topics?: string[];
}

export interface CloudLabStep {
  title: string;
  description: string;
}

export interface SubModule {
  title: string;
  description: string;
  topics: string[];
}

export interface LearningModule {
  id: string;
  category: ModuleCategory;
  title: string;
  icon: string;
  summary: string;
  fullDescription: string;
  targetRoles: string[];
  prerequisites: string[];
  learningOutcomes: string[];
  useCase: string;
  subModules: SubModule[];
  oracleDocs?: string;
  externalLinks?: ExternalLink[];
  pseudoLabs?: PseudoLab[];
  officialLabs?: OfficialLab[];
}

export interface ContactInfo {
  name: string;
  company: string;
  usaPhone: string;
  whatsapp: string;
  email: string;
}
