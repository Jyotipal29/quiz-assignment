import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Score from "./pages/Score";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/quize" element={<Quiz />} />
          <Route exact path="/score" element={<Score />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
