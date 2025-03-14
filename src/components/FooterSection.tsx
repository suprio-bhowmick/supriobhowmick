import {
  faFacebook,
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const FooterSection = () => {
  return (
    <div className="my-container">
      <hr className="border-gray-600" />
      <div className="row gap-2 mt-4">
        <div className="w-full lg:w-1/2">
          <ul className="flex gap-5 text-xl justify-center  lg:justify-start">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/2">
          
            <p className="text-center lg:text-right">© Copyright 2025. All Rights Reserved.</p>
         
        </div>
      </div>
    </div>
  );
};

export default FooterSection;
