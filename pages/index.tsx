import type { NextPage } from 'next';
import About from '../components/About ';
import Form from '../components/Form';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Projects from '../components/ProjectsSection';
import styles from '../styles/app.module.css';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Form />
    </div>
  );
};

export default Home;
