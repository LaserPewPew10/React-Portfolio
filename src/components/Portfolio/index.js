import React from "react";
import Project1 from "../../img/ProjectImages/City of Geneva .jpg";
import Project2 from "../../img/ProjectImages/View-over-Lucerne-Switzerland.jpg";
import Project3 from "../../img/ProjectImages/kimpton-barcelona-1700x750-v2.jpeg";
import Project4 from "../../img/ProjectImages/Romer-town-hall-Germany-Frankfurt-am-Main.jpg";

const Portfolio = () => {
  return (
    <div>
      <main className="container container-sm-main">
        <div className="col-lg-1-col-offset-6 centered card-container">
          <div>
            <section>
              <h2 className="portfolioHeader">Portfolio</h2>
            </section>
          </div>
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
              <div className="card">
                <img
                  src={Project2}
                  className="card-img-top"
                  alt="City of Lucerne"
                />
                <div className="card-body">
                  <h5 className="card-title">NUZ</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img
                  src={Project1}
                  className="card-img-top"
                  id="a"
                  alt="City of Geneva"
                />
                <div className="card-body">
                  <h5 className="card-title">Weather Dashboard</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img
                  src={Project3}
                  className="card-img-top"
                  alt="City of Barcelona"
                />
                <div className="card-body">
                  <h5 className="card-title">Schedule Planner</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img
                  src={Project4}
                  className="card-img-top"
                  alt="City of Frankfurt"
                />
                <div className="card-body">
                  <h5 className="card-title">Password Generator</h5>
                  <p className="card-text"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
