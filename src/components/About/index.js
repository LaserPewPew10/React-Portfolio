import React from "react";
import AboutMe from "../../img/MainImage/FullSizeRender.jpeg";

const About = () => {
  return (
    <main className="container-fluid">
      <div className="row"></div>
      <main className="container-sm main">
        <article>
          <section className="col aboutCard">
            <div className="row">
              <div
                className="col-12"
                style={{ marginBottom: "30px", marginTop: "20px" }}
              >
                <h2 className="abouth2">About Me</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <img className="aboutme" id="a" src={AboutMe} alt="Profile" />
                Greetings! My name's Justin Ramirez and I'm an aspiring
                Full-Stack Software Developer.
                <br />
                <br />I am a Mechanical Engineer with experience for building
                detailed oriented applications for users on the web. I have a
                passion for problem-solving and learning new technologies, which
                can be applied to most positions and web development projects.
              </div>
            </div>
          </section>
        </article>
      </main>
    </main>
  );
};

export default About;
