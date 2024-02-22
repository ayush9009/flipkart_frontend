
    import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
// import "./logo.svg";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="header">
      <div className="first">
        <img
          src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png"
          alt="Flipkart"
        />
        <div className="first1">
          <span className="explore">Explore</span>
          <span className="plus">Plus</span>
          <span>
            <img
              width="10"
              className="logo"
              src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
              alt=""
            />
          </span>
        </div>
      </div>
      <div className="second">
        <input type="text" placeholder="Search for products, brands and more" />
        <SearchIcon />
      </div>
      <div className="third">
        <button onClick={handleLoginClick}>Login</button>
        {showLogin && (
          <div className="login__in">
            {/* Your login content goes here */}
          </div>
        )}
      </div>
      {/* <div className="fourth">
        <p className="tp">More</p>
        <ExpandMoreIcon />
      </div> */}
      <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: '#efefef', color: 'blue' }}>
    More
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

      <div className="fifth">
        {/* <img src={Logo} alt="" /> */}
        <p>Cart</p>
      </div>
    </div>
  );
};

export default Header;