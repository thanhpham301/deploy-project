import React, { useState, useEffect } from "react";
import "./Slideshow.css";

function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((slideIndex) => (slideIndex + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slideshow-container">
      <div
        className="mySlides fade"
        style={{ display: slideIndex === 0 ? "block" : "none" }}
      >
        <div className="numbertext">1 / 3</div>
        <img
          src="https://cdn.shopify.com/s/files/1/1698/6315/articles/Serena_Williams_Nike_Ad_1445x.jpg?v=1536356940"
          alt=""
          style={{ width: "100%" }}
        />
        <div className="text">Caption Text</div>
      </div>

      <div
        className="mySlides fade"
        style={{ display: slideIndex === 1 ? "block" : "none" }}
      >
        <div className="numbertext">2 / 3</div>
        <img
          src="https://cached.imagescaler.hbpl.co.uk/resize/scaleWidth/743/cached.offlinehbpl.hbpl.co.uk/news/OMC/204E3A37-A813-7E72-078F300B85EDE2E9.jpg"
          alt=""
          style={{ width: "100%" }}
        />
        <div className="text">Caption Two</div>

      </div>

      <div
        className="mySlides fade"
        style={{ display: slideIndex === 2 ? "block" : "none" }}
      >
        <div className="numbertext">3 / 3</div>
        <img
          src="https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1000w,f_auto,q_auto:best/newscms/2018_36/2554476/180904-nike-ad-serena-se-329p.jpg"
          alt=""
          style={{ width: "100%" }}
        />
        <div className="text">Caption Three</div>
      </div>

      <br />

      <div style={{ textAlign: "center" }}>
        <span className={slideIndex === 0 ? "dot active" : "dot"}></span>
        <span className={slideIndex === 1 ? "dot active" : "dot"}></span>
        <span className={slideIndex === 2 ? "dot active" : "dot"}></span>
      </div>
    </div>
  );
}

export default Slideshow;
