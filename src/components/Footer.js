import React from "react";
import { FaLinkedinIn, FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer className="leading-9 text-green-100 font-sans bg-gradient-to-tr text-center gap-2 p-4 from-green-900 via-green-900 to-green-600">
      <section className="grid grid-cols-2 md:grid-cols-3">
        <ul className="list-none">
          <li>
            <a href="/lecturenote">Lecture Notes</a>
          </li>
          <li>
            <a href="/pastquestions">Past Questions</a>
          </li>
          <li>
            <a href="/projects">Project Topics</a>
          </li>
        </ul>
        <ul className="list-none">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">How it works</a>
          </li>
          <li>
            <a href="/">FAQs</a>
          </li>
        </ul>
        <div className="py-4 md:py-0">
          Connect with Us
          <ul className="text-green-300 list-none flex justify-around">
            <li>
              <a href="https://twitter.com/SalvadorLekan">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="/">
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a href="/">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </section>
      <small className="inline-block pt-6">greenbrain 2019</small>
    </footer>
  );
}

export default Footer;
