export const skills = [
  "React",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "Responsive UI",
  "REST APIs",
];

export const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern and fast portfolio site built with React, Vite, and Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
  },
  {
    title: "Task Dashboard",
    description: "A productivity app with filtering, drag-and-drop organization, and status tracking.",
    tech: ["React", "Context API", "CSS Grid"],
  },
  {
    title: "E-Commerce UI",
    description: "A clean storefront interface with product cards, search, and cart interactions.",
    tech: ["React", "Hooks", "API Integration"],
  },
];

export const experience = [
  {
    role: "Frontend Developer",
    company: "Freelance",
    period: "2024 - Present",
    summary: "Building responsive React websites and dashboards for personal brands and small businesses.",
  },
  {
    role: "UI Developer",
    company: "Student Projects",
    period: "2023 - 2024",
    summary: "Created project interfaces focused on accessibility, performance, and reusable component design.",
  },
];

export const profile = {
  name: "Emmanuel Ishaya",
  role: "Frontend Developer",
  email: "ishayaemmanuel613@gmail.com",
  github: "https://github.com/Emma1234-web/portfolio",
  linkedin: "https://www.linkedin.com/in/emmanuel-ishaya-815993243",
  location: "Nigeria",
  image: "/emma-profile.jpg",
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};
