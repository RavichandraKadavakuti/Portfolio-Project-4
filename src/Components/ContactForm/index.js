import React from "react";
import "./index.css";
import NavHeader from "../NavHeader";
import NavFooter from "../NavFooter";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";

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

    if (
      name.length > 3 &&
      testEmail &&
      phone.length === 10 &&
      message.length >= 10
    ) {
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
    <div className="container custom-scroll-container">
      <div className="row">
        <NavHeader />
        <div
          data-aos="zoom-in-up"
          className="d-flex flex-column bg-success-subtle p-3 rounded"
        >
          <div className="border border-dark rounded col-12 col-md-6 p-2 my-3 mx-auto ">
            {!successMessage && (
              <form onSubmit={submitForm} className="shadow-lg p-2 p-lg-5">
                <h1 className="text-center mb-3 mb-lg-5">
                  Submit Form Details
                </h1>
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
                    Enter Mobile No
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
              <div className="rounded text-center p-5 my-5 col-12 shadow-lg">
                <i className="fa-solid fa-circle-check"></i>
                <h3>Thank you</h3>

                <Link to="/">
                  <div className="d-grid mt-5">
                    <button
                      type="button"
                      className="btn btn-lg btn-primary custom-home-btn"
                    >
                      Home
                    </button>
                  </div>
                </Link>
              </div>
            )}
          </div>
          <div className="my-5">
            <NavFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
