import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import useOutsideClick from "../../hooks/useOutsideClick"; // custom hook
import "../../styles/HeaderStyle.css"

function Header() {

  const [menuOpened, setMenuOpened] = useState(false);
  const menuRef = useOutsideClick(() => setMenuOpened(false)); // handle outside click

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened ? "-100%" : "0" };
    }
    return {};
  };

  return (
    <section className="h-wrapper">
      <div className="flexCenter paddings innerWidth h-container">
        <span className="flexCenter h-logo-text">
          BlueCraft
          <em>
            <img src="./Title-Icon.png" alt="Em-Logo" width={20} />
          </em>
        </span>

        <div
          ref={menuRef}
          className="flexCenter h-menu"
          style={getMenuStyles(menuOpened)}
        >
          <a href="/">Home</a>
          <a href="/properties">Properties</a>
          <a href="/services">Services</a>
          <a href="/about">About</a>
          <a href="/contact">Contact Us</a>
          <button className="button">
            <a href="/">Get Started</a>
          </button>
        </div>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}

export default Header;
