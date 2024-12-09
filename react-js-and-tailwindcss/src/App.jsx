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
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />

          <Route
            path="./about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />

          <Route
            path="./blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />

          <Route
            path="./courses"
            element={
              <Layout>
                <Courses />
              </Layout>
            }
          />

          <Route
            path="./instructor"
            element={
              <Layout>
                <Instructor />
              </Layout>
            }
          />

          <Route
            path="./single-page"
            element={
              <Layout>
                <BlogSinglePage />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
