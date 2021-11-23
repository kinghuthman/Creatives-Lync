import React from "react";
import eyeGif from "../assets/gifs/Eye-Animation_Final_WhiteBG copy.gif";
import "./homepage.styles.css";

function HomePage() {
  return (
    <div className="homeContainer">
      {/* <h2>Looking to ask a question or work together?</h2>
      <h3>Email me at kinghuthman@gmail.com</h3> */}
      <img className="eye" src={eyeGif} alt="eye gif" />
    </div>
  );
}

export default HomePage;
