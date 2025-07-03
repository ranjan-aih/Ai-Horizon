// import { useState } from "react";
// import "./App.css";
// import Home from "./pages/Home";
// import Footer from "./components/common/Footer";
// import Navbar from "./components/common/Navbar";
// import { Route, Routes } from "react-router";
// import About from "./pages/About";
// import AppLayout from "./components/layout/AppLayout";

// function App() {
//   const [count, setCount] = useState(0);

//   const googleMapsApiKey = "AIzaSyAWpGF4YuL4EUS37-tUy0xOeldVIKkVnVY";

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<AppLayout />}>
//           <Route path="about" element={<About />} />
//         </Route>

//       </Routes>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { Route, Routes } from "react-router";
import About from "./pages/About";
import AppLayout from "./components/layout/AppLayout";
import Partner from "./pages/Partner";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        {/* Home page route */}
        <Route index element={<Home />} />

        {/* About page route */}
        <Route path="about" element={<About />} />
        <Route path="partner" element={<Partner />} />
      </Route>
    </Routes>
  );
}


// thththth44444

export default App;
