import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, About, Projects, Contact, NotFound } from "./pages";
import NavBar from "./components/NavBar";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <main className="bg-slate-300/20 h-screen">
      <ErrorBoundary>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </ErrorBoundary>
    </main>
  )
}

export default App


// import { ScrollControls, Scroll, useScroll } from "@react-three/drei";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { useRef } from "react";

// function PortfolioScene() {
//   const scroll = useScroll();
//   const boxRef = useRef();

//   useFrame(() => {
//     // This moves an object based on the scroll position (0 to 1)
//     const offset = scroll.offset;
//     boxRef.current.position.z = offset * 10; // Moves "forward" as you scroll
//     boxRef.current.rotation.y = offset * Math.PI;
//   });

//   return (
//     <mesh ref={boxRef}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color="royalblue" />
//     </mesh>
//   );
// }

// export default function App() {
//   return (
//     <Canvas camera={{ position: [0, 0, 5] }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} />
//       <ScrollControls pages={3} damping={0.1}>
//         <PortfolioScene />
//         <Scroll html>
//           <h1 style={{ position: 'absolute', top: '20vh' }}>Welcome</h1>
//           <h1 style={{ position: 'absolute', top: '120vh' }}>My Projects</h1>
//           <h1 style={{ position: 'absolute', top: '220vh' }}>Contact</h1>
//         </Scroll>
//       </ScrollControls>
//     </Canvas>
//   );
// }