
import React from 'react';
import { 
  Users, 
  Wallet, 
  GraduationCap, 
  BarChart3, 
  Code2, 
  Layout, 
  PieChart, 
  Settings, 
  Database, 
  Globe, 
  ShieldCheck,
  Zap
} from 'lucide-react';
import { LearningModule, ModuleCategory, ContactInfo } from './types';

export const TECHSKYLINE_CONTACT: ContactInfo = {
  name: "Abhinav Joseph",
  company: "Tech Skyline IT Solutions",
  usaPhone: "+1 (408) 614-0468",
  whatsapp: "+91 81062 43684",
  email: "techskylineitsolutions20204@gmail.com"
};

const ORACLE_GLOBAL_ENVIRONMENTS = [
  { label: 'Oracle LiveLabs Home', url: 'https://livelabs.oracle.com/ords/r/dbpm/livelabs/home', description: 'Interactive workshop platform for PeopleSoft and OCI.' },
  { label: 'Access Lab Environment', url: 'https://learn.oracle.com/ols/course/request-and-access-your-lab-environment/61268/69492', description: 'Official portal to request hands-on PeopleSoft sandboxes.' },
  { label: 'Oracle LiveLabs GitHub', url: 'https://github.com/oracle-livelabs/oci', description: 'Automation scripts and resources for OCI-based labs.' },
  { label: 'PeopleSoft Info Portal', url: 'https://docs.oracle.com/cd/E52319_01/infoportal/index.html', description: 'The comprehensive knowledge base for all PeopleSoft versions.' }
];

export const PEOPLESOFT_MODULES: LearningModule[] = [
  {
    id: 'hcm',
    category: ModuleCategory.FUNCTIONAL,
    title: 'Human Capital Management (HCM)',
    icon: 'Users',
    summary: 'The industry gold standard for managing the end-to-end employee lifecycle.',
    fullDescription: 'PeopleSoft HCM provides a comprehensive suite of human resources applications that help organizations manage their global workforce effectively while ensuring regulatory compliance across multiple jurisdictions.',
    targetRoles: ['HR Business Partners', 'Payroll Managers', 'HCM Functional Consultants'],
    prerequisites: ['Basic HR business process knowledge', 'Enterprise software navigation basics'],
    learningOutcomes: [
      'Master Workforce Administration and Core HR structures',
      'Execute complex Global Payroll cycles and country extensions',
      'Design comprehensive Talent Management & Recruitment workflows',
      'Implement global mobility and compliance frameworks'
    ],
    useCase: 'A multinational corporation standardizing HR processes across 15 countries while integrating local payroll vendors and ensuring GDPR compliance.',
    oracleDocs: 'https://docs.oracle.com/cd/E92519_01/hcm92pbr2/',
    officialLabs: ORACLE_GLOBAL_ENVIRONMENTS,
    externalLinks: [
      { label: 'HCM End-to-End (Beginner → Advanced)', url: 'https://www.youtube.com/watch?v=Q5XGq4mQjRk' },
      { label: 'Core HR & Workforce Admin', url: 'https://www.youtube.com/watch?v=YyqV9ZPpM0Y' },
      { label: 'Global Payroll Concepts', url: 'https://www.youtube.com/watch?v=JzAq8d4m3qU' },
      { label: 'Time & Labor + Absence Management', url: 'https://www.youtube.com/watch?v=3Kq1r2vXbW8' }
    ],
    pseudoLabs: [
      {
        id: 'hcm-lab-1',
        title: 'Core HR (Hire → Job → Data)',
        description: 'Simulate employee lifecycle exactly like PeopleSoft Core HR.',
        objective: 'Master Hire-to-Retire data management and effective dating.',
        tables: ['PS_PERSONAL_DATA', 'PS_JOB', 'PS_EMPLOYMENT', 'PS_DEPT_TBL', 'PS_LOCATION_TBL'],
        tasks: [
          { name: 'Hire Process', description: 'Insert new employee into personal and job tables.' },
          { name: 'Effective Dated Rows', description: 'Add Job Data row with logic for future dates.' },
          { name: 'Organizational Transfer', description: 'Perform a Department transfer action.' }
        ],
        outcomes: ['Effective dating logic mastery', 'Data integrity rule application']
      }
    ],
    subModules: [
      {
        title: 'Core Workforce Operations',
        description: 'Establish the foundation for all HCM activities.',
        topics: ['Workforce Administration', 'Position Management', 'Departmental Security', 'Global Mobility']
      }
    ]
  },
  {
    id: 'fscm',
    category: ModuleCategory.FUNCTIONAL,
    title: 'Financials & Supply Chain (FSCM)',
    icon: 'Wallet',
    summary: 'Integrated financial controls and optimized supply chain operations.',
    fullDescription: 'FSCM manages complex accounting structures, procurement cycles, and inventory logistics.',
    targetRoles: ['Financial Analysts', 'Procurement Specialists', 'Supply Chain Consultants'],
    prerequisites: ['Accounting principles knowledge', 'Supply chain fundamentals'],
    learningOutcomes: [
      'Configure Procure-to-Pay (P2P) and Order-to-Cash (O2C) cycles',
      'Manage complex General Ledger business units and ledgers'
    ],
    useCase: 'A global logistics firm automating their global spend analysis.',
    oracleDocs: 'https://docs.oracle.com/cd/E92519_01/fscm92pbr2/',
    officialLabs: ORACLE_GLOBAL_ENVIRONMENTS,
    externalLinks: [
      { label: 'FSCM Full Overview', url: 'https://www.youtube.com/watch?v=2o5j5m5Z1nY' },
      { label: 'GL, AP, AR Explained', url: 'https://www.youtube.com/watch?v=6eF7YzN2mDg' },
      { label: 'Procurement & Inventory Flow', url: 'https://www.youtube.com/watch?v=R9kF4u3QyC0' }
    ],
    pseudoLabs: [
      {
        id: 'fscm-lab-1',
        title: 'Procure-to-Pay (P2P)',
        description: 'End-to-end flow from Requisition to Payment.',
        objective: 'Master the most demanded FSCM enterprise business cycle.',
        tables: ['PS_REQ_HDR', 'PS_PO_HDR', 'PS_RECV_HDR', 'PS_VOUCHER', 'PS_PAYMENT'],
        tasks: [
          { name: 'Req-to-PO', description: 'Build requisition and approve into Purchase Order.' },
          { name: 'Receipt Matching', description: 'Simulate 3-way matching with Voucher.' }
        ],
        outcomes: ['Supply Chain cycle mastery', 'Voucher matching logic expertise']
      }
    ],
    subModules: [
      {
        title: 'Financial Management',
        description: 'Core financial controls and reporting.',
        topics: ['General Ledger', 'Accounts Payable & Receivable']
      }
    ]
  },
  {
    id: 'tech-core',
    category: ModuleCategory.TECHNICAL,
    title: 'PeopleTools Core Development',
    icon: 'Code2',
    summary: 'The development engine behind every PeopleSoft application.',
    fullDescription: 'Deep dive into the proprietary PeopleTools stack.',
    targetRoles: ['PeopleSoft Technical Developers', 'System Architects'],
    prerequisites: ['Basic programming logic', 'SQL knowledge'],
    learningOutcomes: [
      'Master Application Designer',
      'Write expert PeopleCode',
      'Design batch processing'
    ],
    useCase: 'Developing custom bolt-on applications that integrate with Core HR records.',
    oracleDocs: 'https://docs.oracle.com/cd/E92519_01/pt92pbr2/',
    officialLabs: ORACLE_GLOBAL_ENVIRONMENTS,
    externalLinks: [
      { label: 'PeopleTools Complete Course', url: 'https://www.youtube.com/watch?v=1fWZ7RZz9aY' },
      { label: 'PeopleCode (OOP + Events + Debugging)', url: 'https://www.youtube.com/watch?v=4u0zKZ8s9rA' },
      { label: 'Application Engine & CI', url: 'https://www.youtube.com/watch?v=ZxF4yN1A2pE' }
    ],
    pseudoLabs: [
      {
        id: 'tech-lab-1',
        title: 'Integration & API Simulation',
        description: 'Simulate IB and CI using Postman and JSON.',
        objective: 'Learn Integration logic without a full PS server.',
        tables: ['PS_CI_LOG', 'PS_IB_MSG_DATA'],
        tasks: [
          { name: 'REST Inbound', description: 'Simulate Employee Hire inbound via JSON.' }
        ],
        outcomes: ['Integration architecture understanding']
      }
    ],
    subModules: [
      {
        title: 'Metadata Development',
        description: 'Foundation of PS object model.',
        topics: ['Application Designer', 'Fields, Records, Pages']
      }
    ]
  },
  {
    id: 'reporting',
    category: ModuleCategory.REPORTING,
    title: 'Reporting & Analytics Framework',
    icon: 'PieChart',
    summary: 'Turning enterprise data into actionable insights.',
    fullDescription: 'Comprehensive coverage of PeopleSoft reporting tools.',
    targetRoles: ['Data Analysts', 'Business Intelligence Leads'],
    prerequisites: ['SQL knowledge'],
    learningOutcomes: [
      'Build reports with PS Query',
      'Design layouts with nVision',
      'Implement BI Publisher'
    ],
    useCase: 'Building real-time executive dashboards for budget tracking.',
    officialLabs: ORACLE_GLOBAL_ENVIRONMENTS,
    externalLinks: [
      { label: 'PeopleSoft Query Complete Course', url: 'https://www.youtube.com/watch?v=9F0JQWZ5c4U' },
      { label: 'BI Publisher (XML Publisher)', url: 'https://www.youtube.com/watch?v=F1uYQ7YpH2Y' },
      { label: 'Pivot Grids & Kibana Analytics', url: 'https://www.youtube.com/watch?v=bYxA9mZQ6nQ' }
    ],
    subModules: [
      {
        title: 'Operational Reporting',
        description: 'Day-to-day data retrieval.',
        topics: ['PeopleSoft Query', 'Query Manager']
      }
    ]
  }
];

export const ICONS: Record<string, React.ReactNode> = {
  Users: <Users className="w-6 h-6" />,
  Wallet: <Wallet className="w-6 h-6" />,
  GraduationCap: <GraduationCap className="w-6 h-6" />,
  BarChart3: <BarChart3 className="w-6 h-6" />,
  Code2: <Code2 className="w-6 h-6" />,
  Layout: <Layout className="w-6 h-6" />,
  PieChart: <PieChart className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  Database: <Database className="w-6 h-6" />,
  Globe: <Globe className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />
};
