// Routing

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import ArticleList from "./components/ArticleList";
import ArticleDetail from "./components/ArticleDetail";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path="/article/:id" element={<ArticleDetail />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
