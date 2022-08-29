import React, { useState, useEffect } from "react";
import "./works.scss"

export default function Works() {
  const [stopSlide, setStopSlide] = useState(window.innerWidth > 768 ? false : true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "./assests/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assests/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assests/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
  ];
  const slide = () => {
    !stopSlide && currentSlide > data.length - 2 ? setCurrentSlide(0) : setCurrentSlide(currentSlide + 1);
  }
  const handleClick = (way) => {
    setStopSlide(true)
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  !stopSlide && window.setTimeout(slide, 3000)

  return (
    <div className="works" id="works">
      <div className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map(d => (
          <div className="container" key={d.id}>
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="icon Image" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt="Image"
                />
              </div>
            </div>
          </div>
        ))
        }
      </div>
      <img
        src="assests/arrow.png"
        alt="arrow" className="arrow left"
        onClick={() => handleClick("left")} />

      <img
        src="assests/arrow.png"
        alt="arrow"
        className="arrow right"
        onClick={() => handleClick()} />
    </div >
  )
} 
