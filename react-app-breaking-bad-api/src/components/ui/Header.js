import React from "react";
import imageLogo from "../../images/breaking-bad.png";

const Header = () => {
  return (
    <header className="center">
      <img src={imageLogo} alt="imageLogo" />
    </header>
  );
};

export default Header;
