import React from "react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  return (
    <>
      <div className="how-container mt-5 pt-5 pb-3">
        <h1>
          <b>From learning to earning </b>
        </h1>
        <h5 className="my-2">
          Learn skills that matter, get shortlisted easily
        </h5>
        <Link to="/contact" title="mechanical">
          <button type="button" className="btn btn-primary mx-3 my-3">
            Contact Us
          </button>
        </Link>

        <Link className="btn btn-outline-warning mx-3" to="/courses">
          Explore Tracks
        </Link>
        <div className="container px-4 text-center">
          <div className="row gx-5">
            <div className="col mx-2 rounded bg-success-subtle my-3 detailed-box">
              <div className="p-3">
                <h4>Custom column padding</h4>
                <p>
                  Our Data Analytics career track less than one-fourth of any
                  other online data analytics courses.
                </p>
              </div>
            </div>
            <div className="col mx-2 rounded bg-warning-subtle my-3 detailed-box">
              <div className="p-3">
                <h4>Custom column padding</h4>
                <p>
                  Our Data Analyticse's expertise in the field of data analytics
                  certificate prograh of any other online data analytics
                  courses.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-3">
        <h1 className="my-5">World class training, world over.</h1>
        <div className="row">
          <div className="col-md">
            <p className="wtc-head">2M+</p>
            <p className="wtc-content">Engineers and Professionals trained</p>
          </div>
          <div className="col-md">
            <p className="wtc-head">730</p>
            <p className="wtc-content">
              training centres - Asia's biggest network
            </p>
          </div>
          <div className="col-md">
            <p className="wtc-head">24</p>
            <p className="wtc-content">global locations</p>
          </div>
          <div className="col-md">
            <p className="wtc-head">100+</p>
            <p className="wtc-content">industry-ready courses</p>
          </div>
        </div>
      </div>
      <div className="container">
        <p className="fs-1 text-danger fw-bold my-4">Success Stories</p>
      </div>
      <div className="row my-4 ">
        <div className="col-md bg-warning-subtle pt-3">
          <div className="col-md flex flex-col items-center px-12 pt-12 pb-6">
            <span className="material-symbols-outlined fs-1">library_add</span>
            <div className="text-3xl fs-3 fw-bolder font-semibold mb-2 text-center text-theme-red">
              CADD Centre Overseas
            </div>
            <div className="text-base text-center text-theme-gray ">
              CAD training services in Asia, Africa and the Middle East
            </div>
            <div className="p-5">
              <button type="button" className="btn btn-danger">
                Danger
              </button>
            </div>
          </div>
        </div>
        <div className="col-md pt-3">
          <div className="col-md flex flex-col items-center px-12 pt-12 pb-6 bg-slate-300">
            <span className="material-symbols-outlined fs-1">
              settings_accessibility
            </span>
            <div className="text-2xl fs-3 fw-bolder font-semibold mb-2 text-center text-theme-red ">
              CADD Centre Overseas
            </div>
            <div className="text-base text-center text-theme-gray ">
              CAD training services in Asia, Africa and the Middle East
            </div>
            <div className="p-5">
              <button type="button" className="btn btn-danger">
                Danger
              </button>
            </div>
          </div>
        </div>
        <div className="col-md bg-warning-subtle pt-3">
          <div className="col-md flex flex-col items-center px-12 pt-12 pb-6 bg-slate-300">
            <span className="material-symbols-outlined fs-1">
              change_circle
            </span>
            <div className="text-2xl fs-3 fw-bolder font-semibold mb-2 text-center text-theme-red ">
              CADD Centre Overseas
            </div>
            <div className="text-base text-center text-theme-gray ">
              CAD training services in Asia, Africa and the Middle East
            </div>
            <div className="p-5">
              <button type="button" className="btn btn-danger">
                Danger
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
