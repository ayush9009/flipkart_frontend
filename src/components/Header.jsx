import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";

const Header = () => {
  
  
  return (
    <div className="header">
      <div className="header-container">
        
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
                width="20"
                className="logo"
                src="//img1a.flixcart.com/www/linchpin/fk-cp-zion/img/plus_b13a8b.png"
                alt=""
              />
            </span>
          </div>
        </div>
        <div className="second">
          <input
            type="text"
            placeholder="Search for products, brands and more"
          />
          <SearchIcon />
        </div>
        <div className="dropdown" >
          <Dropdown>
            <Dropdown.Toggle
              id="dropdown-basic"
              size="md"
              style={{
                backgroundColor: "#efefef",
                color: "blue",
                border: "none",
                padding: "7px 30px",
                borderRadius: "0px",
              }}
            >
              More
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="third">
          <Button variant="light" size="md">
            Log In
          </Button>
        </div>
        <div className="fifth-nav">
          <div>
            <AddShoppingCartIcon style={{ fontSize: "28px", color: "white" }} />
          </div>
          <h1>Cart</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
