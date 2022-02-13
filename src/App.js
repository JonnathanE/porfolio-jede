import tw from 'twin.macro';
import Topbar from "./components/topbar/Topbar";
import About from "./containers/about/About";
import Intro from "./containers/intro/Intro";
import Skill from './containers/skill/Skill';
import useDarkMode from "./hook/useDarkMode";

const AppSections = tw.div`
`;

function App() {
  useDarkMode();
  return (
    <div className='h-full'>
      <Topbar />
      <AppSections>
        <Intro />
        <About />
        <Skill />
      </AppSections>
    </div>
  );
}

export default App;
