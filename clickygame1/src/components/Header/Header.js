import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    {/*pass in all children defined in the Header component tag from App.js*/}
    <div className="title">{props.children}</div>
    <div className="scores">
      {/* score and highscore passed down from app.js as props */}
      Score: {props.score} Highscore: {props.highscore}
    </div>
  </div>
);

export default Header;
