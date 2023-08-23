import React from "react";
import Branches from "../Components/Branches";
import Faculty from "../Components/Faculty";

export default function About() {
  return (
    <div className="container top-top">
      <h3>About Us</h3>
      <br></br>
      <p>
        Engineers Computer Academy is the only institute which has 4 branches in Belgaum and many across Karnataka.<br></br>
        <br></br>
        We provide rigorous offline and mentored online training in disciplines
        such as CAD/CAM/CAE, Information Technology, Cyber Security, Project
        Management, Digital Marketing, and Interior Design among others. We
        specialize in areas where technologies and best practices are changing
        rapidly and the demand for qualified candidates significantly exceeds
        supply.<br></br>
        <br></br>
        Based out of Bangalore, India, we have helped over 3.5 lac professionals
        and companies get trained, acquire certifications and upskill their
        employees.
      </p>
      <br></br>

      <h3>Our Branches</h3>
      <p>Below are they branch details with contact details</p>
      <Branches />
      <hr></hr>
      <Faculty />
    </div>
  );
}
