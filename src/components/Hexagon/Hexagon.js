import React from "react";
import "./Hexagon.scss";

const Hexagon = () => {
  const menu = [
    {
      link: "https://instagram.com/incrediblecast",
      img: "https://farm9.staticflickr.com/8461/8048823381_0fbc2d8efb.jpg",
      alt: "pic1",
      h1: "Головна",
    },
    {
      link: "http://twitter.com/incrediblecast",
      img: "https://farm5.staticflickr.com/4144/5053682635_b348b24698.jpg",
      alt: "pic2",
      h1: "Продукція",
    },
    {
      link: "http://facebook.com/casthrademosthene",
      img: "https://farm3.staticflickr.com/2827/10384422264_d9c7299146.jpg",
      alt: "pic3",
      h1: "Статьи",
    },
    {
      link: "https://instagram.com/incrediblecast",
      img: "https://farm7.staticflickr.com/6217/6216951796_e50778255c.jpg",
      alt: "pic4",
      h1: "Партнери",
    },
    {
      link: "https://instagram.com/incrediblecast",
      img: "https://farm7.staticflickr.com/6083/6055581292_d94c2d90e3.jpg",
      alt: "pic5",
      h1: "Контакти",
    },
  ];
  return (
    <ul id="hexGrid">
      {menu.map((item) => {
        return (
          <li className="hex" key={item.alt}>
            <a className="hexIn" href={item.link}>
              <img src={item.img} alt={item.alt} />
              <h1>{item.h1}</h1>
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Hexagon;
