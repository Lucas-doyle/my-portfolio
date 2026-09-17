export type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-knowledge-assistant",
    title: "AI Knowledge Assistant",
    category: "AI / RAG",
    description:
      "Enterprise AI assistant using LLMs, semantic search, and RAG for intelligent knowledge retrieval.",
    longDescription:
      "An AI-powered knowledge platform designed to help users retrieve useful information from large collections of enterprise content. The system combines LLMs, embeddings, vector search, and a modern full-stack interface to produce contextual and relevant answers.",
    image: "/images/ai-knowledge-assistant.png",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI",
      "RAG",
      "LangChain",
      "Pinecone",
    ],
    features: [
      "Retrieval-Augmented Generation",
      "Semantic search",
      "Vector embeddings",
      "Context-aware answers",
      "Streaming AI responses",
    ],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    category: "AI Agents",
    description:
      "Multi-agent AI platform that automates repetitive business workflows using intelligent agents.",
    longDescription:
      "A multi-agent AI workflow platform designed to automate repetitive business processes. The system uses LLMs, LangGraph, LangChain, and function calling to coordinate intelligent agents and execute workflow actions.",
    image: "/images/ai-workflow-automation.png",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "OpenAI",
      "AI Agents",
      "Function Calling"
    ],
    features: [
      "Multi-agent orchestration",
      "AI agent orchestration",
      "Function calling",
      "Workflow automation",
      "LLM-powered decision making",
    ],
  },
  {
    slug: "ai-customer-support-agent",
    title: "AI Customer Support Agent",
    category: "AI / Agents",
    description:
      "Intelligent customer support agent that understands user requests and automates support workflows using LLMs.",
    longDescription:
      "An AI-powered customer support platform designed to handle customer questions, retrieve relevant information, and automate common support workflows. The system combines large language models, retrieval-augmented generation, semantic search, and agentic workflows to provide contextual responses and execute actions when required.",
    image: "/images/ai-customer-support-agent.png",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI",
      "RAG",
      "LangGraph",
      "Vector Databases",
    ],
    features: [
      "AI-powered customer support",
      "Context-aware responses",
      "Retrieval-Augmented Generation",
      "Agentic workflow execution",
      "Semantic knowledge retrieval",
    ],
  },
  {
    slug: "multi-model-ai-assistant",
    title: "Multi-Model AI Assistant",
    category: "AI / LLM",
    description:
      "Multi-provider AI assistant supporting multiple language models for flexible and intelligent AI experiences.",
    longDescription:
      "A production-oriented AI assistant designed to work with multiple large language model providers. The platform provides a unified interface for interacting with different AI models while supporting prompt optimization, model selection, contextual conversations, and application-level AI workflows.",
    image: "/images/multi-model-ai-assistant.png",
    technologies: [
      "Python",
      "OpenAI",
      "Claude",
      "Gemini",
      "LLMs",
      "Prompt Engineering",
    ],
    features: [
      "Multi-model AI support",
      "Unified LLM interface",
      "Model selection",
      "Prompt optimization",
      "Context-aware conversations",
    ],
  },
  {
    slug: "ai-document-intelligence",
    title: "AI Document Intelligence Platform",
    category: "AI / Document Intelligence",
    description:
      "AI-powered document intelligence platform for extracting, searching, and understanding large collections of business documents.",
    longDescription:
      "An AI document intelligence platform designed to transform unstructured business documents into searchable and actionable knowledge. The system combines document processing, embeddings, vector databases, semantic search, and large language models to help users retrieve and understand relevant information.",
    image: "/images/ai-document-intelligence.png",
    technologies: [
      "Python",
      "LlamaIndex",
      "OpenAI",
      "Embeddings",
      "Vector Databases",
      "RAG",
    ],
    features: [
      "Document intelligence",
      "Semantic document search",
      "Vector embeddings",
      "Contextual information retrieval",
      "AI-powered document understanding",
    ],
  },
  {
    slug: "ai-powered-saas-platform",
    title: "AI-Powered SaaS Platform",
    category: "AI/SaaS",
    description:
      "Production AI SaaS platform combining intelligent assistance with scalable application workflows.",
    longDescription:
      "A production-grade SaaS platform that integrates AI capabilities directly into customer-facing applications. The platform combines modern frontend technologies, scalable backend services, and LLM-powered features to deliver intelligent user experiences.",
    image: "/images/ai-powered-saas.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "FastAPI",  
      "Node.js",
      "PostgreSQL"
    ],
    features: [
      "AI-powered user experiences",
      "Scalable backend services",
      "Customer-facing AI features",
      "Real-time AI interactions",
      "Full-stack architecture",
    ],
  },
  {
    slug: "real-time-analytics-platform",
    title: "Real-Time Analytics Platform",
    category: "Web Apps",
    description:
      "Real-time dashboards and analytics systems for monitoring large-scale operational data.",
    longDescription:
      "A real-time analytics platform designed to transform large-scale operational data into interactive dashboards and useful insights. The system combines modern web technologies with scalable backend services and database infrastructure.",
    image: "/images/real-time-analytics.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
    ],
    features: [
      "Real-time dashboards",
      "Operational analytics",
      "Large-scale data processing",
      "Interactive visualizations",
      "Performance optimization",
    ],
  },
  {
    slug: "developer-api-platform",
    title: "Developer API Platform",
    category: "Backend",
    description:
      "Scalable backend platform providing high-performance REST and GraphQL APIs.",
    longDescription:
      "A scalable backend platform providing APIs and services for modern web applications. The architecture combines Python and Node.js services with REST and GraphQL APIs to support high-traffic production environments.",
    image: "/images/developer-api-platform.png",
    technologies: [
      "Python",
      "FastAPI",
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL"
    ],
    features: [
      "REST APIs",
      "GraphQL APIs",
      "Scalable backend services",
      "Microservice architecture",
      "High-traffic API support",
    ],
  },
  {
    slug: "microservices-backend-platform",
    title: "Microservices Backend Platform",
    category: "Backend / Microservices",
    description:
      "Scalable microservices backend designed to support distributed applications and high-volume production workloads.",
    longDescription:
      "A distributed backend platform built around independently scalable services for modern production applications. The architecture combines Python and Node.js services with REST APIs, PostgreSQL, and microservice patterns to provide reliable and scalable backend infrastructure.",
    image: "/images/microservices-backend-platform.png",
    technologies: [
      "Python",
      "FastAPI",
      "Node.js",
      "Microservices",
      "PostgreSQL",
      "REST APIs",
    ],
    features: [
      "Microservice architecture",
      "Independent service scaling",
      "RESTful APIs",
      "Distributed backend services",
      "Production-ready architecture",
    ],
  },
  {
    slug: "real-time-api-gateway",
    title: "Real-Time API Gateway",
    category: "Backend / APIs",
    description:
      "High-performance API gateway supporting real-time communication and scalable backend service integration.",
    longDescription:
      "A backend API gateway designed to provide a reliable communication layer between client applications and distributed backend services. The platform supports REST APIs, GraphQL, WebSockets, and scalable service communication for high-traffic applications.",
    image: "/images/real-time-api-gateway.png",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "WebSockets",
      "Microservices",
    ],
    features: [
      "API gateway architecture",
      "REST and GraphQL APIs",
      "Real-time communication",
      "Service routing",
      "High-traffic API support",
    ],
  },
  {
    slug: "data-processing-integration-platform",
    title: "Data Processing & Integration Platform",
    category: "Backend / Data",
    description:
      "Backend platform for integrating external APIs and processing operational data across distributed applications.",
    longDescription:
      "A backend data integration platform designed to connect external services, process application data, and provide reliable APIs for web and mobile applications. The system combines Python services, Django, Flask, Node.js, SQL, and REST APIs.",
    image: "/images/data-processing-integration-platform.png",
    technologies: [
      "Python",
      "Django",
      "Flask",
      "Node.js",
      "REST APIs",
      "SQL",
    ],
    features: [
      "External API integration",
      "Data processing",
      "Backend service orchestration",
      "REST API services",
      "Web and mobile integration",
    ],
  },
  {
    slug: "cloud-native-platform",
    title: "Cloud-Native Platform",
    category: "Cloud / DevOps",
    description:
      "Scalable cloud infrastructure with containerization and automated deployment pipelines.",
    longDescription:
      "A cloud-native application platform designed for reliable deployment and scalable production workloads. The infrastructure combines AWS, containerization, Kubernetes, and automated delivery pipelines.",
    image: "/images/cloud-native-platform.png",
    technologies: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Linux",
    ],
    features: [
      "AWS cloud deployment",
      "Docker containerization",
      "Kubernetes orchestration",
      "CI/CD pipelines",
      "Production infrastructure",
    ],
  },
  {
    slug: "llm-optimization-engine",
    title: "LLM Optimization Engine",
    category: "AI / Optimization",
    description:
      "Optimized AI inference workflows to improve response speed and reduce operational costs.",
    longDescription:
      "An AI inference optimization approach focused on improving the speed, efficiency, and cost of LLM-powered applications. The system uses caching, prompt engineering, and response streaming to optimize AI interactions.",
    image: "/images/llm-optimization.png",
    technologies: [
      "Python",
      "OpenAI",
      "LLMs",
      "Prompt Engineering",
      "Caching",
      "Streaming",
    ],
    features: [
      "AI inference optimization",
      "Prompt engineering",
      "Response caching",
      "Streaming responses",
      "Cost optimization",
    ],
  },
  {
    slug: "semantic-search-engine",
    title: "Semantic Search Engine",
    category: "AI / Search",
    description:
      "Intelligent search system combining embeddings, vector databases, and semantic retrieval.",
    longDescription:
      "A modern AI productivity experience combining a responsive frontend, backend APIs and Generative AI services. The platform focuses on making complex workflows easier to complete through intelligent assistance.",
    image: "/images/semantic-search.png",
    technologies: [
      "Python",
      "OpenAI",
      "Embeddings",
      "RAG",
      "Pinecone",
      "Semantic Search",
    ],
    features: [
      "Semantic search",
      "Vector embeddings",
      "Similarity search",
      "Contextual retrieval",
      "Vector database integration",
    ],
  },
  {
    slug: "ai-integration-platform",
    title: "AI Integration Platform",
    category: "AI / Integration",
    description:
      "AI integration platform connecting LLMs, intelligent agents, APIs, and application workflows.",
    longDescription:
      "An AI integration platform designed to connect modern language models and intelligent agents with production applications and business workflows. The platform supports multiple AI providers and integrates AI capabilities into full-stack systems.",
    image: "/images/ai-integration.png",
    technologies: [
      "OpenAI",
      "Claude",
      "Gemini",
      "LLMs",
      "AI Agents",
      "API",
    ],
    features: [
      "Multi-model AI integration",
      "LLM API integration",
      "AI agent integration",
      "Function calling",
      "Application workflows",
    ],
  },
  {
    slug: "modern-web-application",
    title: "Modern Web Application",
    category: "Full Stack",
    description:
      "High-performance web applications combining responsive interfaces with scalable backend services.",
    longDescription:
      "A modern full-stack web application combining responsive frontend interfaces with scalable backend services and database infrastructure. The architecture is designed for performance, usability, and reliable production delivery.",
    image: "/images/modern-web-application.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python",
      "PostgreSQL",
    ],
    features: [
      "Responsive user interfaces",
      "Full-stack development",
      "Scalable backend services",
      "API-driven architecture",
      "Performance optimization",
    ],
  },
  {
    slug: "enterprise-collaboration-platform",
    title: "Enterprise Collaboration Platform",
    category: "Full Stack",
    description:
      "Scalable collaboration platform combining real-time communication, interactive interfaces, and reliable backend services.",
    longDescription:
      "An enterprise collaboration platform designed to support teams working with shared information and workflows. The application combines React and Next.js interfaces with TypeScript, Node.js services, PostgreSQL, and real-time communication to deliver a responsive and scalable user experience.",
    image: "/images/enterprise-collaboration-platform.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "WebSockets",
    ],
    features: [
      "Real-time collaboration",
      "Interactive user interfaces",
      "Real-time communication",
      "Scalable backend services",
      "Persistent data management",
    ],
  },
  {
    slug: "real-time-workflow-application",
    title: "Real-Time Workflow Application",
    category: "Full Stack",
    description:
      "Interactive workflow application for managing business processes with real-time updates and responsive interfaces.",
    longDescription:
      "A full-stack workflow application designed to help users create, manage, and monitor business processes. The platform combines modern React interfaces with Next.js, TypeScript, Node.js services, and WebSockets to provide real-time workflow updates and interactive application experiences.",
    image: "/images/real-time-workflow-application.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "WebSockets",
      "PostgreSQL",
    ],
    features: [
      "Interactive workflow management",
      "Real-time updates",
      "Responsive interfaces",
      "API-driven architecture",
      "Workflow monitoring",
    ],
  },
  {
    slug: "saas-management-dashboard",
    title: "SaaS Management Dashboard",
    category: "Full Stack / SaaS",
    description:
      "Production-ready SaaS management dashboard for monitoring users, operations, and application activity.",
    longDescription:
      "A scalable SaaS management dashboard designed to provide users with centralized visibility into application activity and operational data. The platform combines React, Next.js, TypeScript, Node.js, and PostgreSQL to deliver a responsive and maintainable full-stack application.",
    image: "/images/saas-management-dashboard.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
    ],
    features: [
      "SaaS administration",
      "Operational dashboards",
      "User management",
      "Data-driven interfaces",
      "Scalable API architecture",
    ],
  },
  {
    slug: "ai-powered-customer-portal",
    title: "AI-Powered Customer Portal",
    category: "Full Stack / AI",
    description:
      "Customer-facing web platform combining modern full-stack development with intelligent AI-powered experiences.",
    longDescription:
      "A customer-facing application that integrates AI capabilities into a modern full-stack web experience. The platform combines React, Next.js, TypeScript, Python backend services, and LLM-powered functionality to provide intelligent assistance within everyday customer workflows.",
    image: "/images/ai-powered-customer-portal.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "OpenAI",
    ],
    features: [
      "AI-powered customer experience",
      "Responsive web interface",
      "LLM integration",
      "Full-stack architecture",
      "Intelligent workflow assistance",
    ],
  },
  {
    slug: "full-stack-analytics-application",
    title: "Full-Stack Analytics Application",
    category: "Full Stack / Analytics",
    description:
      "Full-stack analytics application transforming operational data into interactive dashboards and actionable insights.",
    longDescription:
      "A full-stack analytics application designed to process operational data and present useful insights through interactive web interfaces. The system combines React, Next.js, TypeScript, Node.js, and PostgreSQL to provide scalable data-driven experiences.",
    image: "/images/full-stack-analytics-application.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "GraphQL",
    ],
    features: [
      "Interactive analytics",
      "Operational dashboards",
      "Data visualization",
      "GraphQL integration",
      "Scalable data architecture",
    ],
  },
  {
    slug: "enterprise-operations-platform",
    title: "Enterprise Operations Platform",
    category: "Full Stack",
    description:
      "Enterprise web platform for managing operational workflows through scalable frontend and backend services.",
    longDescription:
      "An enterprise-grade full-stack platform designed to support operational workflows and business processes. The application combines responsive React and Next.js interfaces with TypeScript, Node.js services, PostgreSQL, and API-driven architecture for reliable production use.",
    image: "/images/enterprise-operations-platform.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
    ],
    features: [
      "Enterprise workflows",
      "Responsive application interfaces",
      "API-driven architecture",
      "Operational management",
      "Scalable application services",
    ],
  },
  {
    slug: "enterprise-api-services",
    title: "Enterprise API Services",
    category: "Backend / APIs",
    description:
      "Production API services designed for scalable applications and high-traffic environments.",
    longDescription:
      "A production API architecture designed to support enterprise applications and high-traffic workloads. The system combines REST and GraphQL services with scalable backend technologies and database infrastructure.",
    image: "/images/enterprise-api-services.png",
    technologies: [
      "REST APIs",
      "GraphQL APIs",
      "High-traffic services",
      "Backend architecture",
      "Database integration",
    ],
    features: [
      "Modern web application",
      "Responsive design",
      "Scalable architecture",
      "Cloud deployment",
      "Scalable architecture",
    ],
  },
  {
    slug: "distributed-saas-architecture",
    title: "Distributed SaaS Architecture",
    category: "Architecture",
    description:
      "Scalable software architecture built for reliable, high-performance distributed systems.",
    longDescription:
      "A scalable software architecture approach for building reliable SaaS platforms and distributed applications. The architecture focuses on system design, scalability, performance, and resilient communication between application services.",
    image: "/images/distributed-saas-architecture.png",
    technologies: [
      "System Design",
      "Distributed Systems",
      "Microservices",
      "Scalability",
      "Performance",
      "AWS",
    ],
    features: [
      "Distributed systems",
      "System design",
      "Microservices",
      "Scalable architecture",
      "Performance optimization",
    ],
  },
  {
    slug: "authentication-payments",
    title: "Authentication & Payments",
    category: "Security / SaaS",
    description:
      "Secure application services supporting authentication and payment processing for production SaaS platforms.",
    longDescription:
      "Production SaaS application services supporting essential account and business operations. The platform integrates authentication and payment capabilities with scalable backend services and cloud infrastructure.",
    image: "/images/authentication-payments.png",
    technologies: [
      "Node.js",
      "FastAPI",
      "PostgreSQL",
      "AWS",
      "REST APIs",
      "TypeScript",
    ],
    features: [
       "User authentication",
       "Payment processing",
       "Backend integration",
       "Production services",
       "Cloud deployment",
    ],
  },
  {
    slug: "api-integration-services",
    title: "API Integration Services",
    category: "Backend / Integration",
    description:
      "Backend services connecting APIs, applications, and data-processing workflows across web and mobile platforms.",
    longDescription:
      "Backend integration services designed to connect applications with external APIs and process data across web and mobile environments. The architecture combines Python and Node.js services with reliable API communication.",
    image: "/images/api-integration-services.png",
    technologies: [
      "Python",
      "Django",
      "Flask",
      "Node.js",
      "REST APIs",
      "SQL",
    ],
    features: [
      "API integrations",
      "Backend services",
      "Data processing",
      "Web application support",
      "Mobile application support",
    ],
  },
  {
    slug: "production-monitoring",
    title: "Production Monitoring",
    category: "Monitoring / Operations",
    description:
      "Monitoring and debugging solutions designed to improve system stability and reduce production incidents.",
    longDescription:
      "A production operations approach focused on improving application stability and reducing incidents through monitoring, debugging, and continuous system analysis.",
    image: "/images/production-monitoring.png",
    technologies: [
      "AWS",
      "Linux",
      "Docker",
      "Monitoring",
      "Debugging",
      "Performance",
    ],
    features: [
      "Application monitoring",
      "Production debugging",
      "System stability",
      "Incident reduction",
      "Performance analysis",
    ],
  },
  {
    slug: "automated-delivery-pipeline",
    title: "Automated Delivery Pipeline",
    category: "Testing / DevOps",
    description:
      "Automated testing and CI/CD workflows designed to improve deployment reliability and development efficiency.",
    longDescription:
      "An automated software delivery workflow designed to improve development efficiency and deployment reliability. The approach combines automated testing with CI/CD pipelines and continuous delivery practices.",
    image: "/images/automated-delivery-pipeline.png",
    technologies: [
      "CI/CD",
      "GitHub Actions",
      "Testing",
      "Docker",
      "AWS",
      "Linux",
    ],
    features: [
      "Automated testing",
      "CI/CD pipelines",
      "Continuous delivery",
      "Deployment automation",
      "Release reliability",
    ],
  },
  {
    slug: "accessible-web-experience",
    title: "Accessible Web Experience",
    category: "Frontend / UX",
    description:
      "Responsive web interfaces optimized for performance, usability, and accessibility across large-scale applications.",
    longDescription:
      "A responsive frontend development approach focused on creating high-performance and accessible web applications. The implementation combines modern React technologies with optimized user interfaces.",
    image: "/images/accessible-web-experience.png",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
    ],
    features: [
      "Responsive interfaces",
      "Frontend performance",
      "Web accessibility",
      "Modern React development",
      "User experience optimization",
    ],
  },
  {
    slug: "technical-architecture",
    title: "Technical Architecture",
    category: "Engineering / Leadership",
    description:
      "Engineering leadership focused on architecture reviews, system design, technical planning, and scalable software development.",
    longDescription:
      "A technical leadership and architecture practice focused on designing scalable systems, reviewing application architecture, and guiding engineering teams toward reliable software solutions.",
    image: "/images/technical-architecture.png",
    technologies: [
      "System Design",
      "Architecture",
      "Distributed Systems",
      "Scalability",
      "Code Reviews",
      "Technical",
    ],
    features: [
      "Architecture reviews",
      "System design",
      "Technical planning",
      "Code reviews",
      "Engineering leadership",
    ],
  }
];