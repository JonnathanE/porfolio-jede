import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Intro from "./containers/intro/Intro";
import useDarkMode from "./hook/useDarkMode";

function App() {
  useDarkMode();
  return (
    <div className="dark:bg-bookmark-black transition duration-500">
      <BrowserRouter>
        <Topbar />

        <Routes>
          <Route path="/" element={<Intro />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
