import HomeSection from "./component/Section/HomeSection/HomeSection"
import ProjectsSection from "./component/Section/ProjectSection/ProjectsSection"
import AboutSection from "./component/Section/AboutSection/AboutSection"
import SkillSection from "./component/Section/SkillSection/SkillSection"
import Contact from "./component/Section/ContactSection/Contact"
import Education from "./component/Section/EducationSection/Education"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <div >
      <ToastContainer />
      <HomeSection />
      <AboutSection />
      <Education />
      <ProjectsSection />
      <SkillSection />
      <Contact />
    </div>
  )
}

export default App
