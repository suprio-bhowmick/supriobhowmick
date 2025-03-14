import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocation, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import React from "react";

const ContactSection = () => {
  const { theme } = useTheme();
  const contactInfo = [
    {
      name: "Email",
      content: "supriobhowmick2025@gmail.com",
      icon: faEnvelope,
    },
    {
      name: "Mobile",
      content: "+91 8609 825 971",
      icon: faPhone,
    },
    {
      name: "Address",
      content: "Khila, Udaynarayanpur, Howrah - 711410",
      icon: faLocation,
    },
  ];
  return (
    <div id="contact" className="my-container mt-10">
      <div className="row items-center">
        <div className="w-full lg:w-3/5">
          <div className="text-left">
            <h5 className="text-lg">Contact Us</h5>
            <h2 className="text-3xl font-semibold">
              Need help? Don not hesitate to drop me a text.
            </h2>
          </div>
          <form action="" method="post">
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="label">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-input"
                  placeholder="First Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="label">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-input"
                  placeholder="Last Name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div>
                <label htmlFor="mobile" className="label">
                  Mobile Number
                </label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  className="form-input"
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="subject" className="label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input"
                  placeholder="Describe your message..."
                  rows={3}
                  required
                ></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  className={`px-15 py-3  ${
                    theme === "dark"
                      ? "bg-gray-950 text-white"
                      : "bg-gray-200 text-black"
                  } text-lg rounded-full inline-block  border-gray-600 border-1 w-full`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="w-full lg:w-2/5">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
            <p className="text-gray-500">
              Feel free to reach out for any queries!
            </p>
          </div>
          {contactInfo.map((contact, index) => (
            <div
              className={`px-15 py-3  ${
                theme === "dark" ? "bg-dark text-white" : "bg-light text-black"
              } my-5 shadow-md text-center py-5 rounded-sm`}
              key={index}
            >
              <FontAwesomeIcon icon={contact.icon} className="text-3xl" />
              <div className="mt-3">
                <h2 className="text-xl font-medium ">{contact.content}</h2>
                <p>{contact.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
