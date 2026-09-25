export const projectFilters = [
  { id: "all", name: "All" },
  { id: "ai", name: "AI & ML" },
  { id: "fullstack", name: "Full Stack" },
  { id: "backend", name: "Backend" },
  { id: "devops", name: "DevOps" },
] as const;

export type ProjectFilterId = (typeof projectFilters)[number]["id"];
export type ProjectFilter = Exclude<ProjectFilterId, "all">;

export type Project = {
  slug: string;
  title: string;
  category: string;
  filter: ProjectFilter;
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
    filter: "ai",
    description:
      "Production RAG assistant I shipped at Tines so 10,000 monthly users can query enterprise knowledge with GPT-4 and Pinecone.",
    longDescription:
      "Enterprise teams at Tines needed answers from large collections of internal content without hunting through documents. As AI Full Stack Software Engineer (2025–Present) I designed and deployed a retrieval-augmented generation assistant using OpenAI GPT-4, OpenAI embeddings, LangChain, and Pinecone, with FastAPI on the backend and a Next.js and TypeScript interface. The assistant retrieves relevant context, grounds replies in that context, and streams the response. It is part of the production AI applications that serve 10,000 monthly users.",
    image: "/images/ai-knowledge-assistant.png",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI GPT-4",
      "LangChain",
      "Pinecone",
      "Next.js",
    ],
    features: [
      "Enterprise RAG over internal knowledge",
      "OpenAI embeddings with Pinecone retrieval",
      "Answers grounded in retrieved context",
      "Streaming responses in a Next.js UI",
      "Shipped for 10,000 monthly users at Tines",
    ],
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation",
    category: "AI Agents",
    filter: "ai",
    description:
      "Multi-agent LangGraph workflows I built at Tines so agents can decide next steps and call APIs instead of repeating manual work.",
    longDescription:
      "Repetitive, multi-step business processes at Tines still needed a person to choose the next action and hit the right API. I built multi-agent workflows with LangGraph, LangChain, OpenAI GPT-4, and function calling so agents can coordinate, decide, and execute those steps. FastAPI hosts the agent runtime; the interactive tools sit in React and Next.js. I owned the workflows from design through deployment with product and engineering.",
    image: "/images/ai-workflow-automation.png",
    technologies: [
      "Python",
      "FastAPI",
      "LangGraph",
      "LangChain",
      "OpenAI GPT-4",
      "Function Calling",
    ],
    features: [
      "Multi-agent orchestration with LangGraph",
      "Function calling into existing APIs",
      "LLM-led next-step decisions",
      "Interactive workflow tools in React and Next.js",
      "Owned from design through production at Tines",
    ],
  },
  {
    slug: "ai-customer-support-agent",
    title: "AI Customer Support Agent",
    category: "AI / Agents",
    filter: "ai",
    description:
      "Customer-facing GPT-4 agent at Tines that answers from retrieved knowledge and cut manual workflows by 60%.",
    longDescription:
      "Customer-facing teams needed faster, contextual answers and fewer hand-built support steps. At Tines I integrated OpenAI GPT-4 into those applications with RAG, LangGraph, and Pinecone so the agent can understand a request, retrieve the right knowledge, and run the follow-up workflow. I owned the feature from user need through delivery with product and design. That LLM integration reduced manual workflows by 60%.",
    image: "/images/ai-customer-support-agent.png",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI GPT-4",
      "LangGraph",
      "Pinecone",
      "Next.js",
    ],
    features: [
      "GPT-4 in customer-facing Tines applications",
      "RAG over support and product knowledge",
      "LangGraph agents that can take follow-up actions",
      "Streaming, contextual replies in the product UI",
      "60% fewer manual workflows after launch",
    ],
  },
  {
    slug: "multi-model-ai-assistant",
    title: "Multi-Model AI Assistant",
    category: "AI / LLM",
    filter: "ai",
    description:
      "Unified assistant across OpenAI, Claude, and Gemini, with Tines production traffic running on GPT-4.",
    longDescription:
      "Different product features needed different model strengths, but Tines could not grow a separate integration for every provider. I built a shared assistant path that talks to the OpenAI, Claude, and Gemini APIs, with prompt engineering, model selection, and contextual conversations in Python and TypeScript. Production applications I deployed at Tines run on OpenAI GPT-4. The same Next.js interface streams replies so users stay in one conversation surface.",
    image: "/images/multi-model-ai-assistant.png",
    technologies: [
      "Python",
      "TypeScript",
      "OpenAI GPT-4",
      "Claude API",
      "Gemini API",
      "Next.js",
    ],
    features: [
      "One interface for OpenAI, Claude, and Gemini",
      "Production Tines traffic on OpenAI GPT-4",
      "Prompt engineering and model selection",
      "Contextual, multi-turn conversations",
      "Streaming replies in Next.js",
    ],
  },
  {
    slug: "ai-document-intelligence",
    title: "AI Document Intelligence Platform",
    category: "AI / Document Intelligence",
    filter: "ai",
    description:
      "Tines document RAG that turns unstructured business files into searchable context for GPT-4.",
    longDescription:
      "Unstructured business documents were hard to search and even harder to trust as an answer source. At Tines I applied the same enterprise RAG stack I shipped in production—OpenAI embeddings, LangChain, Pinecone, and GPT-4—so users can retrieve and understand information from large document collections. FastAPI serves chunking and retrieval; the Next.js UI asks questions against that index instead of opening files one by one.",
    image: "/images/ai-document-intelligence.png",
    technologies: [
      "Python",
      "FastAPI",
      "LangChain",
      "OpenAI embeddings",
      "Pinecone",
      "GPT-4",
    ],
    features: [
      "Indexing unstructured business documents",
      "OpenAI embeddings stored in Pinecone",
      "LangChain retrieval before generation",
      "GPT-4 answers grounded in document context",
      "Question-and-answer UI on the Tines RAG stack",
    ],
  },
  {
    slug: "ai-powered-saas-platform",
    title: "AI-Powered SaaS Platform",
    category: "AI/SaaS",
    filter: "ai",
    description:
      "Full-stack Tines AI SaaS I designed and deployed for 10,000 monthly users and thousands of API requests a day.",
    longDescription:
      "Tines needed customer-facing AI inside a durable SaaS, not a standalone model demo. I designed and deployed the production applications with React, Next.js, TypeScript, FastAPI, Node.js, and PostgreSQL, and I implemented authentication, payment processing, monitoring, and AWS deployment pipelines. The backends support thousands of API requests daily. These AI applications serve 10,000 monthly users.",
    image: "/images/ai-powered-saas.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
    ],
    features: [
      "Customer-facing AI in a production SaaS",
      "FastAPI, Node.js, and PostgreSQL backends",
      "Auth, payments, monitoring, and AWS pipelines",
      "Thousands of API requests daily",
      "10,000 monthly users at Tines",
    ],
  },
  {
    slug: "real-time-analytics-platform",
    title: "Real-Time Analytics Platform",
    category: "Web Apps",
    filter: "fullstack",
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
    filter: "backend",
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
    filter: "backend",
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
    filter: "backend",
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
    filter: "backend",
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
    filter: "devops",
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
    filter: "ai",
    description:
      "Inference work at Tines that cut GPT-4 response times by 40% and operational cost by 35%.",
    longDescription:
      "Unoptimized GPT-4 calls were too slow and expensive for Tines production traffic. I improved inference with response caching, prompt engineering, and streaming so users see tokens sooner and we spend less per request. Those changes improved response times by 40% and reduced operational costs by 35%. The same streaming path powers the React and Next.js AI interfaces I built.",
    image: "/images/llm-optimization.png",
    technologies: [
      "Python",
      "OpenAI GPT-4",
      "Prompt Engineering",
      "Caching",
      "Streaming",
      "Next.js",
    ],
    features: [
      "Response caching on repeated AI calls",
      "Prompt engineering for cheaper, tighter completions",
      "Token streaming into the product UI",
      "40% faster responses in production",
      "35% lower operational AI cost",
    ],
  },
  {
    slug: "semantic-search-engine",
    title: "Semantic Search Engine",
    category: "AI / Search",
    filter: "ai",
    description:
      "Pinecone semantic search I built under Tines RAG so queries match meaning, not just keywords.",
    longDescription:
      "Keyword search missed meaning across Tines enterprise content, so retrieval for GPT-4 was thin. I built the semantic search layer with OpenAI embeddings and Pinecone: queries are embedded, similar chunks are ranked, and that context is passed into the RAG assistant. Python and FastAPI serve the retrieval API that the knowledge and document products share.",
    image: "/images/semantic-search.png",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI embeddings",
      "Pinecone",
      "Semantic Search",
      "RAG",
    ],
    features: [
      "Query and document embeddings via OpenAI",
      "Similarity search in Pinecone",
      "Ranked context for the Tines RAG assistant",
      "Shared retrieval API on FastAPI",
      "Meaning match instead of keyword-only search",
    ],
  },
  {
    slug: "ai-integration-platform",
    title: "AI Integration Platform",
    category: "AI / Integration",
    filter: "ai",
    description:
      "Wiring OpenAI, Claude, Gemini, and function-calling agents into Tines APIs and product workflows.",
    longDescription:
      "Tines features needed models and agents attached to existing APIs, not a chat box on the side. I integrated OpenAI, Claude, and Gemini, plus agent function calling, into FastAPI and Node.js services and Next.js UIs so the product can take actions, not only generate text. I owned those AI-driven features from user need through delivery with product, design, and engineering.",
    image: "/images/ai-integration.png",
    technologies: [
      "OpenAI GPT-4",
      "Claude API",
      "Gemini API",
      "Function Calling",
      "FastAPI",
      "Node.js",
    ],
    features: [
      "Provider integrations for OpenAI, Claude, and Gemini",
      "Function calling from agents into product APIs",
      "FastAPI and Node.js service wiring",
      "AI actions inside Next.js application workflows",
      "End-to-end ownership with product and design",
    ],
  },
  {
    slug: "modern-web-application",
    title: "Modern Web Application",
    category: "Full Stack",
    filter: "fullstack",
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
    filter: "fullstack",
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
    filter: "fullstack",
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
    filter: "fullstack",
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
    filter: "fullstack",
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
    filter: "fullstack",
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
    filter: "fullstack",
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
    filter: "backend",
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
    filter: "devops",
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
    filter: "devops",
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
    filter: "backend",
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
    filter: "devops",
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
    filter: "devops",
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
    filter: "fullstack",
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
    filter: "devops",
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