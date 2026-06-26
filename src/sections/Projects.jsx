import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
import MealCartImage from "../assets/MealCart.png";
import RoadReportingSystemImage from "../assets/RoadReportingSystem.png";
import AiTeacherAssistantImage from "../assets/AiTeacherAssistant.png";
import parkingLotImage from "../assets/ParkingLot.png";

export default function Projects() {
  const projects = [
    {
      title: "MealCart – Full-Stack Food Delivery Platform",
      description:
        "Production-style food delivery app with JWT authentication, cart management, order tracking, and an admin dashboard. Stripe payments with webhook-based verification, and 30% faster queries via MongoDB indexing and aggregation.",
      image: MealCartImage,
      liveLink: "https://meal-cart-pi.vercel.app/",
      githubLink: "https://github.com/GaragaNaveenKumar/MealCart",
      tools: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    },
    {
      title: "Road Issue Reporting System",
      description:
        "Civic-tech platform where citizens flag road issues with geotagged photos. Google Maps/Leaflet integration renders live heatmaps and location-based filtering, with a backend built to handle concurrent submissions and real-time status updates.",
      image: RoadReportingSystemImage,
      liveLink: "https://github.com/GaragaNaveenKumar/Road-Reporting-System",
      githubLink: "https://github.com/GaragaNaveenKumar/Road-Reporting-System",
      tools: ["MERN", "Tailwind CSS", "Geolocation APIs"],
    },
    {
      title: "AI Chatbot with LangGraph & Tools",
      description:
        "A LangGraph + LangChain agent powered by Groq for fast responses, with the Tavily Search tool wired in for live, up-to-date web answers. Gives the agent memory and step-by-step reasoning to handle multi-part questions.",
      icon: <FaRobot />,
      liveLink: "https://github.com/GaragaNaveenKumar",
      githubLink: "https://github.com/GaragaNaveenKumar",
      tools: ["LangChain", "LangGraph", "Groq", "Tavily", "Streamlit"],
    },
    {
      title: "AI Teacher Assistant",
      description:
        "Built for Google Solution Challenge 2024 — a Gemini API-powered assistant offering real-time doubt resolution, topic summarization, and adaptive learning guidance, aimed at improving education accessibility.",
      image: AiTeacherAssistantImage,
      liveLink: "https://github.com/GaragaNaveenKumar/AI-Teacher-Assistant-Frontend",
      githubLink: "https://github.com/GaragaNaveenKumar/AI-Teacher-Assistant-Frontend",
      tools: ["MERN", "Gemini API"],
    },
    {
      title: "Parking Lot System (Low-Level Design)",
      description:
        "A multi-level parking management system designed with SOLID principles and the Factory pattern, supporting ticket-based entry/exit and fee calculation across multiple vehicle categories.",
      image: parkingLotImage,
      liveLink: "https://github.com/GaragaNaveenKumar/Parking_lot_lld",
      githubLink: "https://github.com/GaragaNaveenKumar/Parking_lot_lld",
      tools: ["C++", "OOP", "SOLID", "LLD"],
    },
  ];

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="absolute bottom-20 right-20 w-72 h-72
                      bg-blue-600/15 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <p className="eyebrow text-center">Selected Work</p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-2 section-heading"
        >
          Projects
        </motion.h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          A selection of projects where I applied full-stack and AI-agent
          skills to build real-world, practical solutions.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3 perspective-grid"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
