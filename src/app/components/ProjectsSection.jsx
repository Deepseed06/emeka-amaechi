"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Meet.AI",
    description: 
    `
    Video calling agent with AI using NextJS, TypeScript, BetterAuth, Stream Video SDK, Polar and OpenAI
    `,
    image: "/images/meetai.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/meetai",
    previewUrl: "https://meetai-blue-mu.vercel.app",
  },
  {
    id: 2,
    title: "Prescripto Appointment Booking App",
    description: 
    `
    Prescripto Appointment Booking App (Medtech) designed with React, TailwindCSS, MongoDB, NodeJS 
    `,
    image: "/images/prescripto-frontend.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/prescripto",
    previewUrl: "https://prescripto-frontend-sand.vercel.app/",
  },
  {
    id: 3,
    title: "Prescripto Appointment Booking App",
    description: 
    `
    Prescripto Appointment Booking App Admin Panel (Medtech) using React, TailwindCss, MongoDB, NodeJS and hosted on AWS
    `,
    image: "/images/prescripto.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/prescripto",
    previewUrl: "https://prescripto-admin-panel-red.vercel.app/",
  },
  {
    id: 4,
    title: "Jara",
    description: 
   `
    Charity Project using React, TailwindCss, MongoDB, NodeJS and hosted on AWS 
    `,
    image: "/images/jara-frontend.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/jara",
    previewUrl: "https://myjara.co",
  },
  {
    id: 5,
    title: "Jara Admin Panel",
    description: 
    `
    Jara Admin built using MERN stack and deployed on AWS
    `,
    image: "/images/jara-admin.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/jara",
    previewUrl: "https://admin.myjara.co",
  },
  {
    id: 6,
    title: "SnapGram",
    description: 
    `
    Social Media app with Vite/React,TypeScript, React Query, ShadCn, TailwindCSS and Appwrite
    `,
    image: "/images/snapgram.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/snapgram",
    previewUrl: "https://snapgram-gold-three.vercel.app",
  },
  {
    id: 7,
    title: "AI Resume Builder App",
    description: 
    `
    Full Stack Project Built with Mern Stack with React, Strapi CMS, Clerk, Shadcnand  Gemini AI
    `,
    image: "/images/resume.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/ai-resume-builder",
    previewUrl: "https://ai-resume-builder-blond-alpha.vercel.app/",
  },
 

  {
    id: 7,
    title: "Video Calling App ",
    description: "Video calling App built with NextJS and Stream.io SDK",
    image: "/images/room.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/myRoom",
    previewUrl: "https://my-room-inky.vercel.app/",
  },

  {
    id: 8,
    title: "Clothing Store",
    description:"Shop and Pay for clothes and accessories online",
    image: "/images/clothing.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/react-clothing-store",
    previewUrl: "https://react-clothing-store-jade.vercel.app/",
  },
  {
    id: 9,
    title: "Netflix Clone",
    description: "Netflix Clone built with React, TailwindCSS, Stripe and Firebase",
    image: "/images/netflix-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/netflix-clone",
    previewUrl: "https://netflix-clone-kappa-hazel.vercel.app/",
  },
  {
    id: 10,
    title: "University Website",
    description: "Responsive demo school website built with HTML, CSS and JavaScript",
    image: "/images/schoolwebsite-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/school-website-portfolio.git",
    previewUrl: "https://school-website-portfolio.vercel.app/",
  },
  {
    id: 11,
    title: "Blog Website",
    description: "A simple multi-purpose blog built with HTML, CSS and JavaScript",
    image: "/images/blog-img.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Deepseed06/Blog-Website.git",
    previewUrl: "https://blog-website-gamma-livid.vercel.app/",
  },
  
  {
    id:12,
    title: "Aora",
    description: 
    `
    Video Sharing App built with React Native, Expo, Firebase
    `,
    image: "/images/aora.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/Deepseed06/aora",
    previewUrl: "https://expo.dev/artifacts/eas/8atq5mL5s9QkiZH9GMGfBK.apk",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
