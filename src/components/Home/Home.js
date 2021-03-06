import React from "react";
import Hex from "../Hex/Hex";
import "./Home.scss";
import img from "../../assets/3v_LOG.png";
const Home = () => {
  return (
    <div className="home">
      <h1>Home</h1>
      <img src={img} alt="" />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure sed ab
        dolorum blanditiis, similique modi perspiciatis, perferendis voluptas
        totam officia sequi, ea doloremque. Saepe voluptatum voluptates
        explicabo praesentium, ipsum atque.
        <svg
          aria-hidden="true"
          class="svg-icon iconFacebook"
          width="20"
          height="20"
          viewBox="0 0 18 18"
        >
          <path
            d="M3 1a2 2 0 00-2 2v12c0 1.1.9 2 2 2h12a2 2 0 002-2V3a2 2 0 00-2-2H3zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5z"
            fill="#4167B2"
          ></path>
        </svg>
      </p>
      <div className="home-hex">
        <Hex />
        <Hex />
        <Hex />
      </div>
    </div>
  );
};

export default Home;
