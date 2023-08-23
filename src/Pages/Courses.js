import React from "react";
import mech from "../Images/mech.webp";
import civil from "../Images/civil.jpg";
import ps from "../Images/ps-card.jpg";
import electrical from "../Images/electrical-card.png";
import contact from "../Images/contact.png";
import corel from "../Images/corel.avif";
import tally from "../Images/tally-card.png";
import tallypro from "../Images/tally-pro-card.jpg";
import tallyace from "../Images/tallyacecard.jpg";
import basic from "../Images/basic.jpg";
import code from "../Images/code.jpg";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CourseDetails from "../Components/CourseDetails";
import MyBtn from "../Components/MyBtn";
import About from "./About";
import Index from "./Index";

export default function Courses() {
  return (
    <div className="container top-top">
      <h1 className="text-center mt-5"> Our Courses</h1>
      <p className="text-center">
        ECA is #1 skill development organization set up to develop freshers and
        professionals for digital economy, Skill training focuses on helping
        people acquire the skills they need to thrive in the digital economy. We
        provide rigorous offline and mentored online training in disciplines
        such as CAD/CAM/CAE, Information Technology, Cyber Security, Project
        Management, Digital Marketing, and Interior Design among others. We
        specialize in areas where technologies and best practices are changing
        rapidly and the demand for qualified candidates significantly exceeds
        supply.
      </p>

      <div class="container  mt-4">
        <h3>
          Courses for <b>Engineering</b> Students
        </h3>
        <div class="row d-sm-flex">
          <div class="col-md m-3">
            <div class="card">
              <img src={mech} className="d-block  card-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Mechanical Engineering</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/coursedetails/mech" title="mechanical">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md m-3">
            <div class="card">
              <img src={civil} className="d-block  card-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Civil Engineering</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/coursedetails/civil" title="civil">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md m-3">
            <div class="card">
              <img src={electrical} className="d-block  card-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Elecrical Engineering</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/coursedetails/electrical" title="electrical">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div class="row d-sm-flex">
          <div class="col-md m-3">
            <div class="card">
              <img src={code} className="d-block card-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Computer Science Engineering</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/coursedetails/computer-science" title="computer-science">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md m-3">
            <div class="card">
              <img src={civil} className="d-block card-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Architecture Engineering</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/coursedetails/civil" title="civil">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div class="col-md m-3">
            <div class="card">
              <img src={contact} className="d-block card-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Contact Us</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <Link to="/contact" title="mechanical">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container  mt-4">
        <h3>
          Courses for <b>Commerce</b> Students
        </h3>
        <div class="row ">
          <div class="col-md m-3 mb-5">
            <div class="card">
              <img src={tally} className="d-block w-100 card-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Tally</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Explore More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md m-3">
            <div class="card">
              <img
                src={tallypro}
                className="d-block w-100 card-img"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Tally Pro</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Explore More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md m-3">
            <div class="card">
              <img
                src={tallyace}
                className="d-block w-100 card-img"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title">Tally Ace</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container  mt-4">
        <h3>
          Courses for <b>All</b>
        </h3>
        <div class="row ">
          <div class="col-md m-3 mb-5">
            <div class="card">
              <img src={basic} className="d-block w-100 card-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Basic Computer</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Explore More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md m-3">
            <div class="card">
              <img src={ps} className="d-block w-100 card-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Photoshop</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Explore More
                </a>
              </div>
            </div>
          </div>
          <div class="col-md m-3">
            <div class="card">
              <img src={corel} className="d-block w-100 card-img" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Corel Draw</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
