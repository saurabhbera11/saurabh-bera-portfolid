import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../Styles/Layouts";
import Title from "../Components/Title";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Contact() {
  const defaultState = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  const [EmailContent, setEmailContent] = useState(defaultState);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (EmailContent.name && EmailContent.email && EmailContent.subject && EmailContent.message) {
      emailjs.send('service_glz3clp','template_4p8maej', EmailContent,
      "user_9jMgCEIvRXxm2OP7QOJuu").then(()=>{
        toast.success('Email Sent', {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          });
          setEmailContent(defaultState);
      })

    }
    else{
      toast.error('Please fill in all the required information', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        });
    }
  };
  return (
    <MainLayout>
      <Title title={"Contact"} span={"Contact"}></Title>
      <ContactPageStyled>
        <InnerLayout className={"contact-section"}>
          <div className="left-content">
            <div className="contact-title">
              <h4>Get In Touch</h4>
            </div>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-field">
                <label htmlFor="name">Enter Your Name* </label>
                <input
                  type="text"
                  id="name"
                  value={EmailContent.name}
                  onChange={(e) =>
                    setEmailContent({ ...EmailContent, name: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Enter Your Email* </label>
                <input
                  type="email"
                  id="email"
                  value={EmailContent.email}
                  onChange={(e) =>
                    setEmailContent({ ...EmailContent, email: e.target.value })
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="Subject">Enter Subject* </label>
                <input
                  type="text"
                  id="Subject"
                  value={EmailContent.subject}
                  onChange={(e) =>
                    setEmailContent({
                      ...EmailContent,
                      subject: e.target.value,
                    })
                  }
                />
              </div>
              <div className="form-field">
                <label htmlFor="textarea">Message</label>
                <textarea
                  name="textarea"
                  id="textarea"
                  cols="30"
                  rows="10"
                  value={EmailContent.message}
                  onChange={(e) =>
                    setEmailContent({
                      ...EmailContent,
                      message: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="form-field">
                <button type="submit" className="btn">
                  Send
                </button>
              </div>
            </form>
          </div>
          <div className="right-content">
            <ContactItem
              icon={<PhoneIcon />}
              title={"Phone"}
              contact1={"+91 9372674979"}
              contact2={"+91 9892746009"}
            />
            <ContactItem
              icon={<EmailIcon />}
              title={"Email"}
              contact1={"saurab.bera@gmail.com"}
              contact2={"2019sourabh.bera@ves.ac.in"}
            />
            <ContactItem
              icon={<LocationOnIcon />}
              title={"Address"}
              contact1={"1001/10th Floor Veer Mahal Building, Lalbaug"}
              contact2={"Mumbai Maharshtra India-400012"}
            />
          </div>
        </InnerLayout>
      </ContactPageStyled>
      <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover={false}
/>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px){
            grid-template-columns: repeat(1, 1fr);
            .f-button{
                margin-bottom: 3rem;
            }
        }
    .right-content {
      margin-top: 3rem;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.4rem;
      }
    }
    .form {
      width: 100%;
      @media screen and (max-width: 502px){
                width: 100%;
            }
      .form-field {
        margin-top: 0.8rem;
        position: relative;
        width: 100%;
        label {
          position: absolute;
          font-size: 13px;
          left: 20px;
          top: -10px;
          display: inline-block;
          background-color: var(--background-dark-color);
        }
        input {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          height: 50px;
          padding: 0.5rem 15px;
          width: 100%;
          color: inherit;
          font-size: 1rem;
        }
        textarea {
          border: 1px solid var(--border-color);
          outline: none;
          background: transparent;
          padding: 0.5rem 15px;
          width: 100%;
          color: inherit;
          font-size: 0.6rem;
        }
      }
      .btn {
        background-color: var(--primary-color);
        padding: 0.8rem 1.5rem;
        color: white;
        cursor: pointer;
        display: inline-block;
        font-size: inherit;
        text-transform: uppercase;
        position: relative;
        font-size: 0.5;
        transition: all 0.4s ease-in-out;
        outline: none;
        border: none;
        &::after {
          content: "";
          left: 0;
          bottom: 0;
          width: 100%;
          height: 0.4rem;
          content: "";
          position: absolute;
          transition: all 0.3s ease-in-out;
        }
        &:hover::after {
          background-color: var(--white-color);
        }
      }
    }
  }
`;

export default Contact;
