import React from "react";
import "./Home.css";
import photo from "../../assets/images/home-photo.jpg";

export default function Home() {
  return (
    <div className="Home">
      <img src={photo} alt="Main Photo" className="photo" />
      <div className="textContainer">
        <div className="text">
          <h1>Men's Suit Guide</h1>
          <h2>Tips for Always Looking Elegant and Appropriate</h2>
          <p>
            Dressing appropriately can convey respect, professionalism, and
            confidence. Therefore, choosing the right tuxedo for every occasion
            is so important. Our website provides tips on fit, measurements, and
            colour combinations to ensure that you're always dressed elegantly
            and appropriately.
          </p>
          <p>
            Whether it's for a job interview, wedding, or any other formal
            occasion, our comprehensive tuxedo guide is here to help you stand
            out. Explore all the information we have available and make sure
            you're always dressed in accordance with the situation.
          </p>
        </div>
      </div>
    </div>
  );
}
