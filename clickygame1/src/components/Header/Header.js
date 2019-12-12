import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    {/*pass in all children defined in the Header component tag from App.js*/}
    <div className="title">{props.children}</div>
    <div className="score">
      {/* score and highscore passed down from app.js as props */}
      SCORE: {props.score}
    </div>
    <div className="highscore">
      {/* score and highscore passed down from app.js as props */}
      HIGHSCORE: {props.highscore}
    </div>
  </div>
);

export default Header;
