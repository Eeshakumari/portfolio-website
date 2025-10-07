import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.scss";

import Email from "../../assets/icons/email.svg";
import Location from "../../assets/icons/location.svg";
import Phone from "../../assets/icons/phone.svg";

import Input from "../CustomComponents/Input/Input";
import MainBody from "../MainBody/MainBody";
import { externalLinks } from "../../utils/ExpereinceEducation";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const statusInitials = {
  response: "",
  error: false,
};
const Contact = () => {
  const [formDetails, setFormDetails] = useState(initialValues);
  const [mailStatus, setMailStatus] = useState(statusInitials);
  const [mailLoading, setMailLoading] = useState(false);
  const form = useRef();

  const handleChange = (value, title) => {
    setFormDetails({
      ...formDetails,
      [title]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMailLoading(true);
    emailjs
      .sendForm(
        "Eesha-email",
        "template_zgstu8p",
        form.current,
        "wEywtjo9HIaU5G7Ta"
      )
      .then(
        (result) => {
          setMailStatus({
            ...mailStatus,
            response: result.text,
          });
          setMailLoading(false);
          setFormDetails(initialValues);
        },
        (error) => {
          setMailStatus({
            ...mailStatus,
            error: true,
          });
          setMailLoading(false);
          setFormDetails(initialValues);
        }
      );
  };
  return (
    <MainBody>
      <div className="contact_container">
        <div>
          <div className="location_container skeleton"></div>
          <div className="contacts__container">
            <div className="detail__contact">
              <img src={Location} alt="icon" />
              <p>Miami, Florida, USA</p>
            </div>

            <div className="detail__contact">
              <img src={Email} alt="icon" />
              <a href={`mailto:${externalLinks.email}`}>{externalLinks.email}</a>
            </div>

            <div className="detail__contact">
              <img src={Phone} alt="icon" />
              <a href={`tel:${externalLinks.phoneNo}`}>{externalLinks.phoneNo}</a>
            </div>
          </div>

          <>
            <div className="contact__title">
              <h3>
                Contact Me:{" "}
                <span>
                  Feel free to reach out for inquiries, collaborations, or just
                  to say hello.
                </span>
              </h3>
            </div>
            {mailStatus.response === "OK" && (
              <div className="success__mail submission__done">
                <p>Thank you for reaching out! I'll get back to you soon with a
                response.</p>
              </div>
            )}
            {mailStatus.error && (
              <div className="form__failure__container">
                <div className="failure__mail submission__done">
                  <p>Oops! Something went wrong while submitting the form.</p>
                </div>
                <span
                  className="resubmit__form"
                  onClick={() => setMailStatus(statusInitials)}
                >
                  Please try again later!
                </span>
              </div>
            )}
            {!mailStatus.error && mailStatus.response === "" && (
              <form
                className="form__container"
                ref={form}
                onSubmit={(e) => handleSubmit(e)}
              >
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formDetails.name}
                  onChange={(value) => handleChange(value, "name")}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formDetails.email}
                  onChange={(value) => handleChange(value, "email")}
                  required
                />
                <Input
                  type="textarea"
                  name="message"
                  placeholder="Message"
                  value={formDetails.message}
                  onChange={(value) => handleChange(value, "message")}
                  required
                />
                <div className="submit__container">
                  <button type="submit">
                    {mailLoading ? "Sending..." : "Submit"}
                  </button>
                </div>
              </form>
            )}
          </>
        </div>
      </div>
    </MainBody>
  );
};

export default Contact;
