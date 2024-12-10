import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/common/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Courses from "./pages/Courses";
import Instructor from "./pages/Instructor";
import BlogSinglePage from "./components/common/BlogSinglePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="./about" element={<About />} />
            <Route path="./blog" element={<Blog />} />
            <Route path="./courses" element={<Courses />} />
            <Route path="./instructor" element={<Instructor />} />
            <Route path="./single-page" element={<BlogSinglePage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  );
}

export default App;
