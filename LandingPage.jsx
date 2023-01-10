import React from "react";
import Footer from "../Footer/Footer";
import "./LandingPage.css";
import NavBar from "../NavBar/NavBar";

export default function LandingPage() {
  return (
    <div>
      <NavBar/> 
      <div className="card mb-3" id="vid">
        <video width="100%" height="40%" autoPlay controls>
          <source src="/assets/globalvideo.mp4" type="video/mp4" />
          <source src="/assets/globalvideo.ogg" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div className="card-body">
          <h5 className="card-title">SERVICE</h5>
          <div className="row">
            <div className="col-lg-6" id="fcol">
              <p className="card-text">
                <span className="fw-bolder display-6">For those in need of cars for work</span>
              </p>
              <p className="card-text">
                By connecting financial institutions with auto dealers and
                external stakeholders, we provide innovative services to those
                in mobility-related work who need access to finance but are
                unable to pass conventional credit screening.
              </p>
              <p className="card-text">
                Our services is offered to those who require the use of cars for
                logistics work and commuting, but are unable to gain access to
                conventional auto loans. Our services is not available to those
                whose main use of cars is for leisure activities.
              </p>
              <p className="card-text">
                Our services is not available to those whose main use of cars is
                for leisure activities.
              </p>
            </div>
            <div className="col-lg-6">
              <img
                className="img-fluid"
                src="/assets/index_02_01.png"
                alt="index_02_01"
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="p-4" id="button1">
              For more Information
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col p-5" id="button2">
            <span>
              As the partner that realizes the SGDs, we are supported by our
              shareholders.
            </span>
          </div>
        </div>

        <div class="row">
          <div className="col p-5">
            <img
              className="img-fluid"
              src="/assets/partner_logo.png"
              alt="partner_logo"
              id="partner_logo"
            />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <button className="p-4" id="button1">
              For Company Profile
            </button>
          </div>
        </div>

          <Footer/>

      </div>
    </div>
  );
}
