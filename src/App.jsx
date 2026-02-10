import { HashRouter as Router, Routes, Route } from "react-router-dom"; // Changed to HashRouter
import { Home, About, Projects, Contact, NotFound } from "./pages";
import NavBar from "./components/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="bg-slate-300/20 h-full">
      <ErrorBoundary>
        {/* HashRouter doesn't need basename on GH Pages */}
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      </ErrorBoundary>
    </main>
  );
}

export default App;