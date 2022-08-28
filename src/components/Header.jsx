import React from "react";


export default function Header(props) {
  return (
    <header className="header-block row center">
      <div >
        <a href="#/">
          <h1> BEAUTY SHOP</h1>
        </a>
      </div>
      <div className="nav-options">
        <a href="#/cart" id="cart">
          My Cart{' '}
          {props.countCartItems ? (
            <button className="badge">{props.countCartItems}</button>
          ) : (
            ''
          )}
        </a>{' '}
        <a href="#/signin"> My account</a>
      </div>
    </header>
  );
}