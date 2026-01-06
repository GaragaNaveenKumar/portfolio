import Layout from "./layout/Layout";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Codings from "./sections/Codings";
import Contact from "./sections/Contact";

export default function App() {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Codings />
      <Contact />
    </Layout>
  );
}
