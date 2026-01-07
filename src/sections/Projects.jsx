import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import MealCartImage from "../assets/MealCart.png";
import RoadReportingSystemImage from "../assets/RoadReportingSystem.png"
import AiTeacherAssistantImage from "../assets/AiTeacherAssistant.png";
import parkingLotImage from "../assets/ParkingLot.png";
import EkartImage from "../assets/Ekart.png";

export default function Projects() {
  const projects = [
  {
    title: "MealCart – Food Delivery Platform",
    description:
      "A full-stack food delivery application featuring user authentication, cart management, Stripe payment integration, and an admin panel for order and product management.",
    image: MealCartImage, 
    liveLink: "https://meal-cart-pi.vercel.app/", 
    githubLink: "https://github.com/GaragaNaveenKumar/MealCart",
    tools: ["React", "Node.js", "MongoDB", "Stripe", "CSS"],
  },
  {
    title: "Road Reporting System",
    description:
      "A location-based issue reporting platform that allows users to report road problems with coordinates, images, and descriptions, enabling efficient tracking and resolution.",
    image: RoadReportingSystemImage,
    liveLink: "https://github.com/GaragaNaveenKumar/Road-Reporting-System",
    githubLink: "https://github.com/GaragaNaveenKumar/Road-Reporting-System",
    tools: ["MERN", "Tailwind CSS", "shadcn/ui"],
  },
  {
    title: "AI Teacher Assistant",
    description:
      "An AI-powered assistant designed to support students and teachers by providing intelligent responses, explanations, and educational assistance through a web interface.",
    image: AiTeacherAssistantImage,
    liveLink: "https://github.com/GaragaNaveenKumar/AI-Teacher-Assistant-Frontend",
    githubLink: "https://github.com/GaragaNaveenKumar/AI-Teacher-Assistant-Frontend",
    tools: ["MERN Stack", "AI Integration"],
  },
  {
    title: "EKart-- E-Commerce Platform",
    description:
      "A full-stack e-commerce web application with product listings, user authentication, cart functionality, and order management built using the MERN stack.",
    image: EkartImage,
    liveLink: "https://e-kart-tawny.vercel.app/",
    githubLink: "https://github.com/GaragaNaveenKumar/EKart",
    tools: ["MERN", "Tailwind CSS"],
  },
  {
    title: "Parking Lot System (LLD)",
    description:
      "An object-oriented low-level design implementation of a parking lot system, focusing on clean architecture, scalability, and real-world design principles.",
    image: parkingLotImage,
    liveLink: "https://github.com/GaragaNaveenKumar/Parking_lot_lld",
    githubLink: "https://github.com/GaragaNaveenKumar/Parking_lot_lld",
    tools: ["C++", "OOP", "LLD"],
  },
];


  return (
    <section
      id="projects"
      className="relative py-28 px-6 bg-[#0b0f1a]"
    >
      
      <div className="absolute bottom-20 right-20 w-72 h-72
                      bg-fuchsia-500/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">

        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center text-white"
        >
          Projects
        </motion.h2>

        <p className="mt-4 text-center text-slate-400 max-w-2xl mx-auto">
          A selection of projects where I applied my skills to build
          real-world, practical solutions.
        </p>

        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
