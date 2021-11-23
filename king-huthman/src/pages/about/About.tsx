import React from "react";
import aboutImage from "../../assets/images/huff-web.jpg";
import "./about.styles.css";

function HomePage() {
  return (
    <div className="aboutContainer">
      <div className="aboutParagraphContainer">
        <p className="aboutParagraphText">
          Duis ullamcorper nec diam sit amet suscipit. Quisque eget tincidunt
          augue, sed tristique nisl. Nullam a risus ut sem lobortis lacinia sit
          amet at nisi. Duis quis facilisis lacus. Nullam dictum a ante quis
          sodales. Sed nisi ex, imperdiet iaculis ante sit amet, lobortis
          maximus dui. Mauris diam purus, sodales non vestibulum et, consequat
          id tellus. Morbi eu velit magna. Phasellus sed tortor accumsan,
          suscipit nibh vel, fringilla dolor. Suspendisse mollis urna id diam
          eleifend semper.
        </p>
        <p className="aboutParagraphText">
          In elementum lorem leo, quis volutpat magna auctor egestas. Proin
          porta orci at euismod ornare. Sed ornare ultricies urna sed egestas.
          Maecenas luctus dui ac leo feugiat, et egestas lorem eleifend. Cras
          pretium dolor augue, ut vulputate justo faucibus vitae. Etiam
          molestie, augue eu porta finibus, leo erat fermentum enim, sed
          consectetur nulla mauris eget nibh. Integer a nibh tellus. Quisque
          vitae nibh non erat elementum sodales. Nulla nunc odio, pharetra id
          tortor vel, sollicitudin posuere lacus. Vestibulum consectetur leo
          dui. Nulla hendrerit, felis eu imperdiet volutpat, augue est
          scelerisque libero, nec placerat tellus ex id libero.
        </p>
      </div>
      <img className="image" src={aboutImage} alt="loading..." />
    </div>
  );
}

export default HomePage;
