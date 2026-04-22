import ContactSection from "../components/Contact/contact";
import Experience from "../components/Experience/experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <Technologies />
      <Experience/>
      <Projects />
      <ContactSection/>
    </Layout>
  );
};

export default Home;
