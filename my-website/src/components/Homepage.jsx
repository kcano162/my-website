import React, { useState } from "react";
import "./mainBox.css";

import { Link } from "react-router-dom";

const Homepage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(false);
  reverse();

  const iconData = [
    { icon: "fa-child", label: "About", path: "/about" },
    { icon: "fa-paperclip", label: "Links", path: "/links" },
    { icon: "fa-question-circle", label: "Portfolio", path: "/portfolio" },
    { icon: "fa-paint-brush", label: "FAQ", path: "/faq" },
    { icon: "fa-envelope-o", label: "Contact", path: "/contact" },
  ];

  return (
    <div className="main">
      <div className="top-bar">
        <h4>home</h4>
        {/* <h4 className="close">[x]</h4> */}
      </div>
      <div className="content">
        <div className="home-title">
          <h1>Title</h1>
          <p className="desc">description</p>
        </div>
        <div className="icon-links">
          {iconData.map((item, index) => (
            <span
              key={index}
              onMouseOver={() => setHoveredIndex(index)}
              onMouseOut={() => setHoveredIndex(null)}
              className={`link-nav ${hoveredIndex === index ? "enlarged" : ""}`}
            >
              <Link to={item.path} className={`fa ${item.icon}`}></Link>
              <Link className="home-links" to={item.path}>
                {item.label}
              </Link>
            </span>
          ))}
        </div>
        <div className="icon-names"></div>
      </div>
    </div>
  );
};

export default Homepage;
