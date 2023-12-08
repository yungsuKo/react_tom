import { ReactComponent as Chevrondown } from '../svgs/solid/chevron-down.svg';
import { ReactComponent as Chevronup } from '../svgs/solid/chevron-up.svg';
import { ReactComponent as Android } from '../svgs/brands/android.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { useEffect, useRef, useState } from 'react';
import MyDropdown from './Menu';
import MenuList from './Menu';

function Navbar() {
  return (
    <header>
      <nav>
        <Link to="/">
          <Android width="20" height="20" fill="orange" />
        </Link>
        <ul id="navbar">
          <li>
            <Link to="/seller">스토어 매출</Link>
          </li>
          <li>
            <Link>상품 업로드 일자</Link>
          </li>
          <li>
            <Link to="/chat">chat</Link>
          </li>
        </ul>
        <div id="mobile">
          <MenuList></MenuList>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
