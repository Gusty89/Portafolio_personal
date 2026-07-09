import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import Certifications from "../components/Certifications.jsx";
import Contact from "../components/Contact.jsx";


function Home({ theme, onToggleTheme }) {

  return (

    <>

      <Hero
        theme={theme}
        onToggleTheme={onToggleTheme}
      />

      <About />

      <Projects />

      <Certifications />

      <Contact />

    </>

  );

}


export default Home;