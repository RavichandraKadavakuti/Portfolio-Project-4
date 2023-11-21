import React from "react";
import Navbar from "../Navbar";
import Contact from "../Contact";
import "./index.css";
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const initialStates = {
  INITIAL: "Initia;",
  SUCCESS: "Success",
  FAILURE: "Failure",
  INPROGRESS: "Inprogress",
};

const ContactForm = () => {
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const [fetchState, setFetchstate] = useState(initialStates.INITIAL);

  const submitForm = async (event) => {
    event.preventDefault();
    const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const testEmail = regex.test(emailId);

    if (name === "" || name.length < 3) {
      setNameError("Please Enter Name");
    } else {
      setNameError("");
    }

    if (testEmail === false) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }

    if (phone.length < 10 || phone.length > 10) {
      setPhoneError("Please Enter Correct Mobile No");
    } else {
      setPhoneError("");
    }

    if (message.length < 10) {
      setMessageError("Please Enter Message");
    } else {
      setMessageError("");
    }

    if (name && emailId && phone && message) {
      try {
        setFetchstate(initialStates.INPROGRESS);
        const data = {
          name: name,
          email: emailId,
          phone: phone,
          message: message,
        };

        const url = "https://formspree.io/f/mzblqqdy";
        const options = {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
          },
        };
        const req = await fetch(url, options);
        const res = await req.json();
        if (res.ok) {
          setFetchstate(initialStates.SUCCESS);
          setSuccessMessage(true);
        } else {
          throw new Error(res.error);
        }
      } catch (error) {
        setFetchstate(initialStates.FAILURE);
        console.log(error.message);
      }
    }
  };

  const onchangeName = (event) => {
    setName(event.target.value);
  };

  const onchangeEmailId = (event) => {
    setEmailId(event.target.value);
  };

  const onchangePhone = (event) => {
    setPhone(event.target.value);
  };

  const onchangeMessage = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <div className="bg-success-subtle d-flex flex-column align-items-center justify-content-center contact-page p-2 p-lg-5">
          {!successMessage && (
            <form
              onSubmit={submitForm}
              className="border border-primary rounded col-12 col-md-6 p-2 p-lg-5 "
            >
              <h1 className="text-center mb-3 mb-lg-5">Submit Form Details</h1>
              <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Enter Full Name
                </label>
                <input
                  id="fullname"
                  type="text"
                  placeholder="Enter Full Name"
                  className="form-control"
                  value={name}
                  onChange={onchangeName}
                />
                {nameError && (
                  <small className="text-danger">{nameError}</small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Enter Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Email"
                  className="form-control"
                  value={emailId}
                  onChange={onchangeEmailId}
                />
                {emailError && (
                  <small className="text-danger">{emailError}</small>
                )}
              </div>
              <div className="mb-3">
                <label htmlFor="mobileno" className="form-label">
                  Enter Phone No
                </label>
                <input
                  id="mobileno"
                  type="text"
                  placeholder="Enter Mobile No"
                  className="form-control"
                  value={phone}
                  onChange={onchangePhone}
                />
                {phoneError && (
                  <small className="text-danger">{phoneError}</small>
                )}
              </div>
              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  value={message}
                  onChange={onchangeMessage}
                ></textarea>
                <label htmlFor="floatingTextarea">Message</label>
                {messageError && (
                  <small className="text-danger">{messageError}</small>
                )}
              </div>
              <div className="d-grid">
                <button type="submit" className="btn btn-lg btn-warning">
                  {fetchState === initialStates.INPROGRESS
                    ? "Please wait sending data"
                    : "Send"}
                </button>
              </div>
            </form>
          )}
          {successMessage && (
            <div className="border border-primary rounded text-center p-5 my-auto col-12 col-md-6">
              <i className="fa-solid fa-circle-check"></i>
              <h1>Thank you</h1>
              <div className="d-grid m-3">
                <Link to="/">
                  <button type="button" className="btn btn-lg btn-primary">
                    Home
                  </button>
                </Link>
              </div>
            </div>
          )}
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
