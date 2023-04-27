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
            <b>Techstore</b> is demo full-stack <b>MERN</b> e-commerce website,
            created to feature in my <b>Portfolio</b>. You can search and view
            technologies such as <b>TVs, Computers, Cell Phones</b> and{" "}
            <b>Accessories</b>, you can add them to the cart. You can view each
            product separately and add to cart from there or leave a review. you
            can make an order and pay it with paypal. Authentication is possible
            via local, google or facebook, after authentication you can view
            your account and make modification to it, also you can view orders
            you've made and pay if haven't already or delete them.
          </p>
          <div className="image">
            <img src={Image} alt="website image" />
          </div>
          <Link title="view portfolio website" btnName="portfolio" link="#" />
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
