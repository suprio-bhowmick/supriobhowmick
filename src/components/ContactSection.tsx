"use client";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { client } from "@/sanity/lib/client";

interface ContactData {
  email: string;
  mobile: string;
  address: string;
}

const ContactSection = () => {
  const { theme } = useTheme();
  const [contactInfo, setContactInfo] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await client.fetch(
        `*[_type == "contact"][0]{
          email,
          mobile,
          address
        }`
      );
      setContactInfo(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div id="contact" className="my-container mt-10">
      <div className="row items-center">
        <div className="w-full lg:w-3/5">
          <div className="text-left">
            <h5 className="text-lg">Contact Us</h5>
            <h2 className="text-3xl font-semibold">
              Need help? Do not hesitate to drop me a text.
            </h2>
          </div>
          <form method="post">
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="firstName" className="label">First Name</label>
                <input type="text" id="firstName" className="form-input" placeholder="First Name" required />
              </div>
              <div>
                <label htmlFor="lastName" className="label">Last Name</label>
                <input type="text" id="lastName" className="form-input" placeholder="Last Name" required />
              </div>
              <div>
                <label htmlFor="email" className="label">Email Address</label>
                <input type="email" id="email" className="form-input" placeholder="Email Address" required />
              </div>
              <div>
                <label htmlFor="mobile" className="label">Mobile Number</label>
                <input type="text" id="mobile" className="form-input" placeholder="Mobile Number" required />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="label">Message</label>
                <textarea id="message" className="form-input" placeholder="Describe your message..." rows={3} required></textarea>
              </div>
              <div className="sm:col-span-2">
                <button
                  className={`px-15 py-3 ${theme === "dark" ? "bg-gray-950 text-white" : "bg-gray-200 text-black"} text-lg rounded-full border-gray-600 border-1 w-full`}
                >
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full lg:w-2/5">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold">Get In Touch</h2>
            <p className="text-gray-500">Feel free to reach out for any queries!</p>
          </div>
          
          <div className={`px-15 py-3 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-black"} my-5 shadow-md text-center py-5 rounded-sm`}>
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
            <div className="mt-3">
              <h2 className="text-xl font-medium break-words">
                {loading ? <Skeleton width={200} height={20} /> : contactInfo?.email}
              </h2>
              <p>Email</p>
            </div>
          </div>

          <div className={`px-15 py-3 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-black"} my-5 shadow-md text-center py-5 rounded-sm`}>
            <FontAwesomeIcon icon={faPhone} className="text-3xl" />
            <div className="mt-3">
              <h2 className="text-xl font-medium break-words">
                {loading ? <Skeleton width={150} height={20} /> : contactInfo?.mobile}
              </h2>
              <p>Mobile</p>
            </div>
          </div>

          <div className={`px-15 py-3 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-black"} my-5 shadow-md text-center py-5 rounded-sm`}>
            <FontAwesomeIcon icon={faEnvelope} className="text-3xl" />
            <div className="mt-3">
              <h2 className="text-xl font-medium break-words">
                {loading ? <Skeleton width={250} height={20} /> : contactInfo?.address}
              </h2>
              <p>Address</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactSection;
