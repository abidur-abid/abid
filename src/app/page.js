
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SectionTitle from "@/components/SectionTitle";
import Skills from "@/components/Skills";



const HomePage = () => {
  return (
    <section >  
      <div id="home">
      <Hero/>
      </div>
      <div id="skills">
      <SectionTitle heading={'My Skills'}/>
      <Skills/>
      </div>
      <div id="projects">
      <SectionTitle heading={'My Latest Projects'}/>
      <Projects/>
      </div>
      <div id="contact">
      <SectionTitle heading={'Feel Free To Ask'}/>
      <Contact/>
      </div>
    </section>
  );
};

export default HomePage;
