import React from "react";
import "./Header.scss";
const Header = (props) => {
  const { countCartItems } = props;
  return (
    <div className="header_top">
      <div className="header_logo">
        <a href="/">Shopping Cart</a>
      </div>
      <div className="header_links">
        <a
          style={{ marginRight: "20px" }}
          href="/cart"
          rel="noopener noreferrer"
        >
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            ""
          )}
        </a>
        <a href="/signin" rel="noopener noreferrer">
          SignIn
        </a>
      </div>
    </div>
  );
}; 

export default Header;
