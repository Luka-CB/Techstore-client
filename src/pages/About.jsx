import React from "react";
import Head from "../components/Head";
import { BsArrowRight, BsArrowDown, BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";
import Image from "../assets/images/about-pic.png";
import useWindowWidth from "../hooks/windowWidth";

const Link = ({ title, btnName, link }) => {
  const windowWidth = useWindowWidth();

  return (
    <div className="links">
      <ul>
        <li>
          <div className="link">
            <p id="name">{title}</p>
            <span id="dash">-</span>
            <b id="here">here</b>
            {windowWidth <= 500 && window.innerWidth <= 500 ? (
              <BsArrowDown id="arrow-icon" />
            ) : (
              <BsArrowRight id="arrow-icon" />
            )}
            <button className="btn">
              <a href={link} target="_blank">
                {btnName === "github" ? (
                  <BsGithub id="icon" />
                ) : (
                  <FaGlobe id="icon" />
                )}
                <span id="btn-name">{btnName}</span>
              </a>
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

const About = () => {
  return (
    <div className="about-container">
      <Head title="About Techstore" />
      <div className="col1">
        <div className="site-info">
          <h1 id="title">techstore</h1>
          <p className="description">
            <b>Techstore</b> is a demo full-stack <b>MERN</b> e-commerce website
            created to showcase in my <b>Portfolio</b>. It allows you to explore
            and buy a variety of technologies, such as{" "}
            <b>TVs, Computers, Cell Phones</b> and <b>Accessories</b>, You can
            also view the details of each product, add it to your cart, and
            leave a review. You can place an order and pay with PayPal securely
            and conveniently. You can sign up with your email, Google, or
            Facebook account and access your profile and order history. You can
            also edit your account information, pay for pending orders, or
            cancel them if you change your mind. Techstore is a modern and
            user-friendly website that demonstrates my skills and creativity.
          </p>
          <div className="image">
            <img src={Image} alt="website image" />
          </div>
          <Link
            title="view portfolio website"
            btnName="portfolio"
            link="https://portfolio-gamma-six-63.vercel.app"
          />
          <Link
            title="view website code"
            btnName="github"
            link="https://github.com/Luka-CB/techstore-client"
          />
        </div>
      </div>
      <div className="col2">
        <img src={Image} alt="website image" />
      </div>
    </div>
  );
};

export default About;
