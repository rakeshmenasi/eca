import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Carousel from "./Components/Carousel";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Index from "./Pages/Index";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import Courses from "./Pages/Courses";
import Footer from "./Components/Footer";
import CourseDetails from "./Components/CourseDetails";
import Mechanical from "./Components/Courses/Mechanical";
import Civil from "./Components/Courses/Civil";
import Electrical from "./Components/Courses/Electrical";
import Students from "./Pages/Students";
import Computer from "./Components/Courses/Computer";

let hashHistory = Router.hashHistory;

function App() {
  return (
    <Router  history={hashHistory}>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<Index />} />
          <Route exact path="/contact" element={<ContactPage />} />
          <Route exact path="/courses" element={<Courses />} />
          <Route exact path="/students" element={ <Students /> } />
          <Route exact path="/coursedetails/mech" element={<Mechanical />} />
          <Route exact path="/coursedetails/civil" element={ <Civil /> } />
          <Route exact path="/coursedetails/electrical" element={ <Electrical  /> } />
          <Route exact path="/coursedetails/computer-science" element={ <Computer />} />
          <Route exact path="/coursedetails/mech" element={<Mechanical />} />
          <Route exact path="/coursedetails/mech" element={<Mechanical />} />
          <Route exact path="/coursedetails/mech" element={<Mechanical />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
