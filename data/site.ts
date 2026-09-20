export const site = {
  role: "AI Full Stack Software Engineer",
  email: "bruno.silva.94410@gmail.com",
  phone: "+353 86 274 5183",
  location: "Dublin, Ireland",
  githubUrl: "https://github.com/Lucas-doyle",
  availability: "Open for new opportunities",
} as const;

export const siteLinks = {
  email: `mailto:${site.email}`,
  phone: `tel:${site.phone.replace(/[^\d+]/g, "")}`,
  github: site.githubUrl,
} as const;
