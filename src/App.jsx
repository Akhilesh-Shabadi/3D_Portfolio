import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact, NotFound } from "./pages";
import NavBar from "./components/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-slate-300/20 h-full">
      <ErrorBoundary>
        {/* The basename handles the /3D_Portfolio/ prefix for all child routes */}
        <Router basename="/3D_Portfolio">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            {/* This catches everything else and shows your custom 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </ErrorBoundary>
    </main>
  );
}

export default App;