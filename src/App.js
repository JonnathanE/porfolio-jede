import tw from 'twin.macro';
import styled from 'styled-components';
import Topbar from "./components/topbar/Topbar";
import About from "./containers/about/About";
import Intro from "./containers/intro/Intro";
import useDarkMode from "./hook/useDarkMode";

const AppContainer = styled.div`
height: 100vh;
`;

const AppSections = tw.div`

`;

function App() {
  useDarkMode();
  return (
    <div>
      <Topbar />
      <AppSections>
        <Intro />
        <About />
      </AppSections>
    </div>
  );
}

export default App;
