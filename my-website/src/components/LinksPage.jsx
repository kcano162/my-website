import "./mainBox.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const LinksPage = () => {
  const [hoverLink, setHoverLink] = useState{false};

  const iconData = () => [
    {icon: "fa fa-coffee", label: "ko-fi", sitelink: "https://ko-fi.com/hannanodaa/shop"},
    {icon: "fa fa-etsy", label: "etsy", sitelink: "https://www.etsy.com/ca/shop/hannanodaa"},
    {icon: "fa fa-cloud", label: "bluesky", sitelink: "https://bsky.app/profile/hannanodaa.bsky.social"},
    {icon: "fa fa-instagram", label: "instagram", sitelink: "https://www.instagram.com/hannanodaa"},
    {icon: "fa fa-twitter", label: "twitter", sitelink: "https://x.com/hannanodaa"},
    {icon: "fa fa-tumblr", label: "tumblr", sitelink: "https://hannanodaa.tumblr.com/"},
    {icon: "fa fa-tiktok", label: "tiktok", sitelink: "https://www.tiktok.com/@hannanodaa"}
  ];
  return (
    <div className="main">
      <div className="top-bar">
        <h4>links</h4>
        <Link to="/" className="close">
          [x]
        </Link>
      </div>


      <div className="content">
        <div>
          <span
        </div>
      </div>
    </div>
  );
};

export default LinksPage;
