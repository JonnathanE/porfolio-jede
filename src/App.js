import tw from 'twin.macro';
import Footer from './components/footer/Footer';
import Topbar from "./components/topbar/Topbar";
import About from "./containers/about/About";
import Intro from "./containers/intro/Intro";
import Skill from './containers/skill/Skill';
import useDarkMode from "./hook/useDarkMode";

const AppSections = tw.div`
dark:bg-bookmark-black
`;

function App() {
  useDarkMode();
  return (
    <div className='h-full dark:bg-bookmark-black'>
      <Topbar />
      <AppSections>
        <Intro />
        <About />
        <Skill />
        <Footer />
      </AppSections>
    </div>
  );
}

export default App;
