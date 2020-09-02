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
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                perferendis exercitationem nesciunt reprehenderit corporis
                voluptatem nulla iste neque doloremque commodi, iusto recusandae
                veniam. Id necessitatibus praesentium aspernatur aliquid
                voluptates debitis!
              </div>
            </div>
          </section>
        </article>
      </main>
    </main>
  );
};

export default About;
