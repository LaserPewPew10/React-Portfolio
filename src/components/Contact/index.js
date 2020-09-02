import React from "react";

const Contact = () => {
  return (
    <form className="container">
      <div className="col columnbox">
        <h2>Contact</h2>
        <hr />
        <div className="form-group">
          <label className="name-tag" for="formGroupExampleInput">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="Example input placeholder"
          />
        </div>

        <div className="form-group">
          <label className="input-email" for="exampleInputEmail1">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>

        <div className="form-group">
          <label className="message-tag" for="exampleFormControlTextarea1">
            Message
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
