import React from "react";
import mech from "../Images/mech.webp";
import civil from "../Images/civil.jpg";
import code from "../Images/code.jpg";

export default function Carousel() {
  return (
    <div className="container my-3">
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={mech} className="d-block w-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={civil} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={code} className="d-block w-100" alt="..." />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
