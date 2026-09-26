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
  problem: string;
  role: string;
  outcome: string;
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
    problem:
      "Enterprise teams at Tines needed answers from large collections of internal content without hunting through documents.",
    role: "As AI Full Stack Software Engineer (2025–Present) I designed and deployed a retrieval-augmented generation assistant using OpenAI GPT-4, OpenAI embeddings, LangChain, and Pinecone, with FastAPI on the backend and a Next.js and TypeScript interface.",
    outcome:
      "The assistant retrieves relevant context, grounds replies in that context, and streams the response. It is part of the production AI applications that serve 10,000 monthly users.",
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
    problem:
      "Repetitive, multi-step business processes at Tines still needed a person to choose the next action and hit the right API.",
    role: "I built multi-agent workflows with LangGraph, LangChain, OpenAI GPT-4, and function calling so agents can coordinate, decide, and execute those steps. FastAPI hosts the agent runtime; the interactive tools sit in React and Next.js.",
    outcome:
      "I owned the workflows from design through deployment with product and engineering, so common processes run as agent steps instead of manual API work.",
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
    problem:
      "Customer-facing teams needed faster, contextual answers and fewer hand-built support steps.",
    role: "At Tines I integrated OpenAI GPT-4 into those applications with RAG, LangGraph, and Pinecone so the agent can understand a request, retrieve the right knowledge, and run the follow-up workflow. I owned the feature from user need through delivery with product and design.",
    outcome:
      "That LLM integration reduced manual workflows by 60%.",
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
    problem:
      "Different product features needed different model strengths, but Tines could not grow a separate integration for every provider.",
    role: "I built a shared assistant path that talks to the OpenAI, Claude, and Gemini APIs, with prompt engineering, model selection, and contextual conversations in Python and TypeScript.",
    outcome:
      "Production applications I deployed at Tines run on OpenAI GPT-4. The same Next.js interface streams replies so users stay in one conversation surface.",
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
    problem:
      "Unstructured business documents were hard to search and even harder to trust as an answer source.",
    role: "At Tines I applied the same enterprise RAG stack I shipped in production—OpenAI embeddings, LangChain, Pinecone, and GPT-4—so users can retrieve and understand information from large document collections. FastAPI serves chunking and retrieval; the Next.js UI asks questions against that index.",
    outcome:
      "Users can question document collections through the RAG assistant instead of opening files one by one.",
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
    problem:
      "Tines needed customer-facing AI inside a durable SaaS, not a standalone model demo.",
    role: "I designed and deployed the production applications with React, Next.js, TypeScript, FastAPI, Node.js, and PostgreSQL, and I implemented authentication, payment processing, monitoring, and AWS deployment pipelines.",
    outcome:
      "The backends support thousands of API requests daily. These AI applications serve 10,000 monthly users.",
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
      "Real-time operational dashboards I built at Ding over large-scale production data.",
    problem:
      "Operations teams at Ding needed live visibility into large-scale operational data, not static reports.",
    role: "As Senior Full Stack Software Engineer (2022–2025) I built real-time dashboards and analytics systems with React, Next.js, TypeScript, Node.js, and PostgreSQL.",
    outcome:
      "Large-scale operational data is available as interactive dashboards in production, not after-the-fact exports.",
    image: "/images/real-time-analytics.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Express.js",
    ],
    features: [
      "Real-time operational dashboards",
      "Analytics over large-scale production data",
      "React and Next.js visualization surfaces",
      "Node.js and PostgreSQL behind the charts",
      "Built for high-traffic Ding environments",
    ],
  },
  {
    slug: "developer-api-platform",
    title: "Developer API Platform",
    category: "Backend",
    filter: "backend",
    description:
      "REST and GraphQL APIs I designed at Ding for high-traffic production clients.",
    problem:
      "Product surfaces needed one reliable API layer for high traffic, not a new backend for every screen.",
    role: "At Ding I designed and implemented RESTful and GraphQL APIs with Node.js, Express.js, and PostgreSQL.",
    outcome:
      "Client applications share a production API layer built for high-traffic environments.",
    image: "/images/developer-api-platform.png",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "TypeScript",
    ],
    features: [
      "REST APIs for product clients",
      "GraphQL for flexible reads",
      "Node.js and Express services",
      "PostgreSQL as the system of record",
      "Designed for high-traffic Ding production",
    ],
  },
  {
    slug: "microservices-backend-platform",
    title: "Microservices Backend Platform",
    category: "Backend / Microservices",
    filter: "backend",
    description:
      "Independently scalable FastAPI, Node.js, and PostgreSQL services I shipped for Tines production traffic.",
    problem:
      "A single backend could not scale every workload as API volume grew.",
    role: "At Tines I created scalable backend services with FastAPI, Node.js, and PostgreSQL, using pragmatic architecture so services can grow independently.",
    outcome:
      "Those services support thousands of API requests daily in production.",
    image: "/images/microservices-backend-platform.png",
    technologies: [
      "Python",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "REST APIs",
      "TypeScript",
    ],
    features: [
      "Independently scalable backend services",
      "FastAPI and Node.js side by side",
      "PostgreSQL for durable application data",
      "REST APIs between services and clients",
      "Thousands of production requests a day at Tines",
    ],
  },
  {
    slug: "real-time-api-gateway",
    title: "Real-Time API Gateway",
    category: "Backend / APIs",
    filter: "backend",
    description:
      "Ding API layer that fronts REST, GraphQL, and live updates for high-traffic web apps.",
    problem:
      "Clients needed one entry point for REST, GraphQL, and live operational updates.",
    role: "At Ding I designed the production API surface—REST and GraphQL on Node.js and Express—used by enterprise web applications I also led.",
    outcome:
      "High-traffic clients talk to one API layer instead of reaching past it into every service.",
    image: "/images/real-time-api-gateway.png",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "TypeScript",
    ],
    features: [
      "Single API entry for product clients",
      "REST and GraphQL on the same platform",
      "Node.js and Express routing",
      "Backed by PostgreSQL",
      "Used under high-traffic Ding applications",
    ],
  },
  {
    slug: "data-processing-integration-platform",
    title: "Data Processing & Integration Platform",
    category: "Backend / Data",
    filter: "backend",
    description:
      "Flipdish backend work that integrated APIs and processed data for web and mobile products.",
    problem:
      "Web and mobile products needed shared integrations and processing, not one-off scripts per feature.",
    role: "As Software Engineer at Flipdish (2018–2022) I built API integrations, backend services, and data-processing systems with Python, Django, Flask, Node.js, and SQL.",
    outcome:
      "Web and mobile applications share the same integration and processing path instead of duplicated glue code.",
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
      "External API integrations",
      "Data-processing backends",
      "Django and Flask services",
      "Node.js alongside Python",
      "Shared path for web and mobile at Flipdish",
    ],
  },
  {
    slug: "cloud-native-platform",
    title: "Cloud-Native Platform",
    category: "Cloud / DevOps",
    filter: "devops",
    description:
      "AWS deployment pipelines I implemented at Tines for production AI and SaaS workloads.",
    problem:
      "AI features had to ship on durable cloud infrastructure, not only run on a laptop.",
    role: "At Tines I implemented monitoring and cloud deployment pipelines on AWS for the FastAPI, Node.js, and Next.js applications I also built.",
    outcome:
      "Production AI applications deploy through AWS pipelines and serve 10,000 monthly users.",
    image: "/images/cloud-native-platform.png",
    technologies: [
      "AWS",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "Linux",
      "Node.js",
    ],
    features: [
      "AWS cloud deployment pipelines",
      "Containerized application delivery",
      "CI/CD into production",
      "Monitoring alongside deploy",
      "Hosts Tines apps used by 10,000 monthly users",
    ],
  },
  {
    slug: "llm-optimization-engine",
    title: "LLM Optimization Engine",
    category: "AI / Optimization",
    filter: "ai",
    description:
      "Inference work at Tines that cut GPT-4 response times by 40% and operational cost by 35%.",
    problem:
      "Unoptimized GPT-4 calls were too slow and expensive for Tines production traffic.",
    role: "I improved inference with response caching, prompt engineering, and streaming so users see tokens sooner and we spend less per request.",
    outcome:
      "Response times improved by 40% and operational costs fell by 35%. The same streaming path powers the React and Next.js AI interfaces I built.",
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
    problem:
      "Keyword search missed meaning across Tines enterprise content, so retrieval for GPT-4 was thin.",
    role: "I built the semantic search layer with OpenAI embeddings and Pinecone: queries are embedded, similar chunks are ranked, and that context is passed into the RAG assistant. Python and FastAPI serve the retrieval API.",
    outcome:
      "The knowledge and document products share one meaning-based retrieval path instead of keyword-only search.",
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
    problem:
      "Tines features needed models and agents attached to existing APIs, not a chat box on the side.",
    role: "I integrated OpenAI, Claude, and Gemini, plus agent function calling, into FastAPI and Node.js services and Next.js UIs so the product can take actions, not only generate text.",
    outcome:
      "I owned those AI-driven features from user need through delivery with product, design, and engineering.",
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
      "Enterprise React and Next.js apps I led at Ding, with a 30% performance gain from data and service work.",
    problem:
      "Enterprise web applications at Ding were hard to evolve and too slow under production load.",
    role: "I led development of enterprise-scale web applications using React, Next.js, Node.js, Express, and PostgreSQL, and I improved performance through database optimization, indexing, and service refactoring.",
    outcome:
      "Application performance improved by 30%.",
    image: "/images/modern-web-application.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    features: [
      "Led enterprise-scale Ding web applications",
      "React and Next.js interfaces",
      "Node.js, Express, and PostgreSQL backends",
      "Indexing and service refactoring",
      "30% faster application performance",
    ],
  },
  {
    slug: "enterprise-collaboration-platform",
    title: "Enterprise Collaboration Platform",
    category: "Full Stack",
    filter: "fullstack",
    description:
      "Cross-functional Ding web platform for teams sharing operational work across industries.",
    problem:
      "Stakeholders across industries needed to work from the same live application, not separate exports.",
    role: "At Ding I led enterprise-scale React and Next.js applications and collaborated with cross-functional stakeholders to deliver scalable software across multiple industries.",
    outcome:
      "Teams share one production web platform instead of disconnected tools per industry.",
    image: "/images/enterprise-collaboration-platform.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "PostgreSQL",
      "Express.js",
    ],
    features: [
      "Shared operational workspace in the product",
      "React and Next.js collaboration UI",
      "Node.js and PostgreSQL persistence",
      "Delivered with product and engineering stakeholders",
      "Used across multiple Ding industries",
    ],
  },
  {
    slug: "real-time-workflow-application",
    title: "Real-Time Workflow Application",
    category: "Full Stack",
    filter: "fullstack",
    description:
      "Interactive Tines workflow UI I built so people can watch and steer AI automation as it runs.",
    problem:
      "Agent workflows were hard to watch and steer while they ran.",
    role: "At Tines I developed responsive AI-powered interfaces in React, Next.js, and TypeScript, including interactive workflow automation tools next to the LangGraph agents I also built.",
    outcome:
      "Users can follow and guide automation in the product UI instead of waiting on a finished batch.",
    image: "/images/real-time-workflow-application.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "FastAPI",
      "PostgreSQL",
    ],
    features: [
      "Interactive workflow automation tools",
      "React and Next.js operator UI",
      "Tied to Tines multi-agent backends",
      "Streaming, real-time product experience",
      "Owned with product and engineering",
    ],
  },
  {
    slug: "saas-management-dashboard",
    title: "SaaS Management Dashboard",
    category: "Full Stack / SaaS",
    filter: "fullstack",
    description:
      "Ding operational dashboard for monitoring application activity and large-scale production data.",
    problem:
      "Operators lacked a single product view of application activity and operational data.",
    role: "At Ding I built real-time dashboards and analytics systems with React, Next.js, Node.js, and PostgreSQL, and exposed the data through REST and GraphQL APIs I also designed.",
    outcome:
      "Operations data is visible in an interactive dashboard instead of only in the database.",
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
      "Operational activity dashboard",
      "React and Next.js admin UI",
      "REST APIs into PostgreSQL data",
      "Built on Ding analytics work",
      "Meant for high-traffic production",
    ],
  },
  {
    slug: "ai-powered-customer-portal",
    title: "AI-Powered Customer Portal",
    category: "Full Stack / AI",
    filter: "fullstack",
    description:
      "Customer-facing Tines UI I built with Next.js and GPT-4 so AI sits inside everyday product workflows.",
    problem:
      "Customers needed AI inside the product they already use, not a separate chat tool.",
    role: "At Tines I developed responsive AI-powered user interfaces with React, Next.js, and TypeScript, including streaming responses, on FastAPI and Node backends I also shipped.",
    outcome:
      "Customer-facing AI lives in the production UI used by 10,000 monthly users.",
    image: "/images/ai-powered-customer-portal.png",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "FastAPI",
      "OpenAI GPT-4",
    ],
    features: [
      "AI inside customer-facing Tines screens",
      "Streaming GPT-4 responses",
      "React and Next.js portal UI",
      "FastAPI and Node backends",
      "Part of the 10,000 monthly-user product",
    ],
  },
  {
    slug: "full-stack-analytics-application",
    title: "Full-Stack Analytics Application",
    category: "Full Stack / Analytics",
    filter: "fullstack",
    description:
      "Full Ding analytics app: GraphQL and REST into PostgreSQL, React charts on top.",
    problem:
      "Large-scale operational data was available in services but not as a product people could explore.",
    role: "At Ding I built the full analytics path—PostgreSQL, Node.js, REST and GraphQL APIs, and React/Next.js dashboards—for operational data.",
    outcome:
      "Stakeholders read large-scale operational data from an interactive application, not a raw query.",
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
      "End-to-end analytics application",
      "GraphQL and REST data access",
      "PostgreSQL operational store",
      "Interactive React dashboards",
      "Built for Ding production traffic",
    ],
  },
  {
    slug: "enterprise-operations-platform",
    title: "Enterprise Operations Platform",
    category: "Full Stack",
    filter: "fullstack",
    description:
      "Enterprise-scale Ding web platform I led for operational work across multiple industries.",
    problem:
      "Operational work sat in disconnected tools that did not scale with traffic or new industries.",
    role: "I led development of enterprise-scale web applications at Ding using React, Next.js, Node.js, Express, and PostgreSQL, working with cross-functional stakeholders.",
    outcome:
      "Operational workflows run in a shared production platform delivered across multiple industries.",
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
      "Enterprise operational workflows in one app",
      "React and Next.js interfaces",
      "API-driven Node.js and PostgreSQL services",
      "Led with cross-functional stakeholders",
      "Shipped across multiple Ding industries",
    ],
  },
  {
    slug: "enterprise-api-services",
    title: "Enterprise API Services",
    category: "Backend / APIs",
    filter: "backend",
    description:
      "Production REST and GraphQL services I implemented at Ding behind high-traffic enterprise apps.",
    problem:
      "Enterprise applications needed production API services that could take high traffic, not prototypes.",
    role: "At Ding I implemented RESTful and GraphQL APIs with Node.js, Express, and PostgreSQL in support of the enterprise web applications I led.",
    outcome:
      "High-traffic production environments share a stable API service layer.",
    image: "/images/enterprise-api-services.png",
    technologies: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "TypeScript",
    ],
    features: [
      "Production REST services",
      "GraphQL for product reads",
      "Node.js and Express implementation",
      "PostgreSQL-backed resources",
      "Supports high-traffic Ding applications",
    ],
  },
  {
    slug: "distributed-saas-architecture",
    title: "Distributed SaaS Architecture",
    category: "Architecture",
    filter: "devops",
    description:
      "System design and architecture reviews I ran at Ding, plus pragmatic service design at Tines.",
    problem:
      "Growing SaaS workloads needed clearer service boundaries and performance work, not a larger monolith.",
    role: "At Ding I conducted architecture reviews and technical planning. At Tines I made pragmatic architecture decisions for FastAPI, Node.js, and PostgreSQL services on AWS.",
    outcome:
      "Services can scale independently and still support thousands of API requests a day in production.",
    image: "/images/distributed-saas-architecture.png",
    technologies: [
      "System Design",
      "Distributed Systems",
      "PostgreSQL",
      "Node.js",
      "FastAPI",
      "AWS",
    ],
    features: [
      "Architecture reviews and technical planning",
      "Service boundaries for SaaS workloads",
      "Pragmatic FastAPI and Node.js design",
      "AWS-hosted production services",
      "Thousands of daily API requests at Tines",
    ],
  },
  {
    slug: "authentication-payments",
    title: "Authentication & Payments",
    category: "Security / SaaS",
    filter: "devops",
    description:
      "Auth, payments, and AWS pipelines I implemented for Tines production SaaS.",
    problem:
      "The AI product needed account and billing services, not only model features.",
    role: "At Tines I implemented authentication, payment processing, monitoring, and cloud deployment pipelines on AWS, on FastAPI, Node.js, PostgreSQL, and TypeScript services.",
    outcome:
      "Production users can sign in and pay on the same platform that serves 10,000 monthly users.",
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
      "User authentication in production",
      "Payment processing on the SaaS",
      "Monitoring next to those services",
      "AWS deployment pipelines",
      "Part of the Tines 10,000-user platform",
    ],
  },
  {
    slug: "api-integration-services",
    title: "API Integration Services",
    category: "Backend / Integration",
    filter: "backend",
    description:
      "Flipdish integrations that connected external APIs to web and mobile backends.",
    problem:
      "Web and mobile products depended on third-party APIs that were wired inconsistently.",
    role: "At Flipdish I built API integrations and backend services with Python, Django, Flask, Node.js, and REST APIs.",
    outcome:
      "Web and mobile applications share a consistent integration layer instead of one-off connectors.",
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
      "External API connectors",
      "Shared backend integration services",
      "Django and Flask implementations",
      "Node.js services where needed",
      "Used by Flipdish web and mobile",
    ],
  },
  {
    slug: "production-monitoring",
    title: "Production Monitoring",
    category: "Monitoring / Operations",
    filter: "devops",
    description:
      "Flipdish monitoring and testing work that improved stability and reduced production incidents.",
    problem:
      "Production issues were found late and tended to repeat.",
    role: "At Flipdish I improved system stability through monitoring, debugging, and automated testing, and I took part in continuous delivery so fixes reached production faster.",
    outcome:
      "The applications were more stable and production incidents went down.",
    image: "/images/production-monitoring.png",
    technologies: [
      "Linux",
      "Docker",
      "Testing",
      "CI/CD",
      "Python",
      "Node.js",
    ],
    features: [
      "Application monitoring in production",
      "Debugging repeating incidents",
      "Automated testing around releases",
      "Continuous delivery of fixes",
      "Improved Flipdish system stability",
    ],
  },
  {
    slug: "automated-delivery-pipeline",
    title: "Automated Delivery Pipeline",
    category: "Testing / DevOps",
    filter: "devops",
    description:
      "Automated testing and CI/CD I introduced at Ding to make deployments more reliable.",
    problem:
      "Releases depended on manual steps and failed too often.",
    role: "At Ding I introduced automated testing, CI/CD pipelines, and engineering best practices. At Flipdish I already worked in continuous delivery, sprint planning, and code reviews.",
    outcome:
      "Deployment reliability improved once tests and pipelines ran on every release.",
    image: "/images/automated-delivery-pipeline.png",
    technologies: [
      "CI/CD",
      "GitHub Actions",
      "Testing",
      "Docker",
      "Linux",
      "AWS",
    ],
    features: [
      "Automated test suites on change",
      "CI/CD pipelines for Ding releases",
      "Continuous delivery practice",
      "Fewer manual release steps",
      "Improved deployment reliability",
    ],
  },
  {
    slug: "accessible-web-experience",
    title: "Accessible Web Experience",
    category: "Frontend / UX",
    filter: "fullstack",
    description:
      "Frontend performance and accessibility work I did on large Flipdish applications.",
    problem:
      "Large-scale Flipdish applications were uneven to use and slower than they needed to be.",
    role: "I enhanced frontend performance and accessibility across multiple large-scale applications, working with designers and product managers, using React and related web stack.",
    outcome:
      "Those applications are faster and more accessible.",
    image: "/images/accessible-web-experience.png",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "TypeScript",
    ],
    features: [
      "Accessibility work on large Flipdish apps",
      "Frontend performance improvements",
      "React interfaces with designers and PMs",
      "HTML and CSS fundamentals kept honest",
      "Shipped through Agile delivery",
    ],
  },
  {
    slug: "technical-architecture",
    title: "Technical Architecture",
    category: "Engineering / Leadership",
    filter: "devops",
    description:
      "Architecture reviews, technical planning, and mentoring I did as a senior engineer at Ding.",
    problem:
      "The team needed shared design standards and review, not one-off decisions per feature.",
    role: "At Ding I mentored junior developers and conducted architecture reviews and technical planning sessions, on top of leading enterprise-scale web application development.",
    outcome:
      "Delivery follows reviewed architecture and shared planning instead of isolated feature design.",
    image: "/images/technical-architecture.png",
    technologies: [
      "System Design",
      "Architecture",
      "Code Reviews",
      "React",
      "Node.js",
      "PostgreSQL",
    ],
    features: [
      "Architecture reviews with the team",
      "Technical planning sessions",
      "Mentoring junior developers",
      "Standards on Ding enterprise apps",
      "Tied to React, Node.js, and PostgreSQL systems",
    ],
  },
];
