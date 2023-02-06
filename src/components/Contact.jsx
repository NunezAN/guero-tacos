import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div id="contact" className="p-8 gap-4 flex flex-col bg-teal-700">
      <h1 className="uppercase text-center text-5xl md:text-6xl font-extrabold font-libre py-8 px-4 text-white">
        Contact us
      </h1>
      <div className="text-center">
        <FontAwesomeIcon
          className="text-yellow-600 text-3xl md:text-4xl pr-4"
          icon={faLocationDot}
        />
        <span className="text-3xl">
          7449 Bennett Lawson Rd, Mansfield, TX 76063
        </span>
      </div>
      <div className="text-center">
        <FontAwesomeIcon
          className="text-yellow-600 text-3xl md:text-4xl pr-4"
          icon={faClock}
        />
        <span className="text-3xl">Monday - Sunday 7am - 3pm</span>
      </div>
      <div className="text-center">
        <FontAwesomeIcon
          className="text-yellow-600 text-3xl md:text-4xl pr-4"
          icon={faPhone}
        />
        <span className="text-3xl"> (682) 478-7509</span>
      </div>
      <div className="text-center">
        <FontAwesomeIcon
          className="text-yellow-600 text-3xl md:text-4xl pr-4"
          icon={faEnvelope}
        />
        <span className="text-3xl"> carnitasybarbacoaelguero@gmail.com</span>
      </div>
    </div>
  );
};

export default Contact;
