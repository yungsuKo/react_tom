import { ReactComponent as Chevrondown } from '../svgs/solid/chevron-down.svg';
import { ReactComponent as Chevronup } from '../svgs/solid/chevron-up.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { Component, useEffect, useRef, useState } from 'react';

function Navbar() {
  const [menuState, setMenuState] = useState(false);
  // state = { clicked: false };
  const menuRef = useRef(null);
  // const handleClick = (e) => {
  //   setMenuState(menuState ? false : true);
  //   console.log(menuState);
  // };

  useEffect(() => {
    function handleOutClick(e) {
      console.log('e.target ', e.target);
      console.log('menuState ', menuState);
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        console.log(menuState);
        setMenuState(menuState ? false : true);
      }
    }
    document.addEventListener('mousedown', handleOutClick);
    return () => {
      document.removeEventListener('mousedown', handleOutClick);
    };
  }, [menuState]);

  return (
    <>
      <nav>
        <Link to="/">logo</Link>
        <ul id="navbar" className={menuState ? 'active' : ''} ref={menuRef}>
          <li>
            <Link to="/seller">스토어 매출</Link>
          </li>
          <li>
            <Link>상품 업로드 일자</Link>
          </li>
        </ul>
        <div id="mobile">
          {menuState ? (
            <Chevronup width="20" height="20" fill="orange" />
          ) : (
            <Chevrondown width="20" height="20" fill="orange" />
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
