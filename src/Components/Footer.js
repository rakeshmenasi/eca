import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="footer">
      <footer class="bg-black text-white">
        <div class="container p-4">
          <div class="row">
            <div class="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 class="text-uppercase">ECA Belagavi</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
              <p>9900440013</p>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase">Pages</h5>
              <ul class="list-unstyled mb-0">
              <li >
                <Link className="text-white" to="/eca">Home</Link>
              </li>
              <li>
                <Link className="text-white" to="/eca/courses">Courses</Link>
              </li>
              <li>
                <Link className="text-white" to="/eca/about">About Us</Link>
              </li>
              <li>
                <Link className="text-white" to="/eca/students">Student Corner</Link>
              </li>
              <li>
                <Link className="text-white" to="/eca/contact">Contact Us</Link>
              </li>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Links</h5>

              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-white">
                  Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                  Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                  Refund Policy
                  </a>
                </li>
                <li>
                  <a href="#!" class="text-white">
                  Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="text-center p-3"
        >
          © 2023 Copyright: 
          <a class="text-white" href="https://engineerscomputeracademy.com/">
          engineerscomputeracademy.com
          </a>
        </div>
      </footer>
    </div>
  );
}
