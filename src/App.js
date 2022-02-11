import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Intro from "./containers/intro/Intro";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Intro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
