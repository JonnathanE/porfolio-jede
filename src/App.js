import tw from 'twin.macro';
import Footer from './components/footer/Footer';
import Topbar from "./components/topbar/Topbar";
import About from "./containers/about/About";
import Certifications from './containers/certifications/Certifications';
import Contact from './containers/contact/Contact';
import Intro from "./containers/intro/Intro";
import Portfolio from './containers/portfolio/Portfolio';
import Skill from './containers/skill/Skill';
import useDarkMode from "./hook/useDarkMode";

const AppSections = tw.div`
bg-bookmark-white
dark:bg-bookmark-black
`;

function App() {
  useDarkMode();
  return (
    <div className='w-full h-full'>
      <Topbar />
      <AppSections>
        <Intro />
        <About />
        <Skill />
        <Portfolio />
        <Certifications />
        <Contact />
      </AppSections>
      <Footer />
    </div>
  );
}

export default App;
