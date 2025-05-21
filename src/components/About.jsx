import "./mainBox.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="main">
      <div className="top-bar">
        <h4>about</h4>
        <Link to="/" className="close">
          [x]
        </Link>
      </div>
      <div className="content">
        <div className="home-title">
          <h1>Title</h1>
          <p className="desc">description</p>
        </div>
      </div>
    </div>
  );
};

export default About;
