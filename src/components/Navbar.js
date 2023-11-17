import { ReactComponent as Chevrondown } from '../svgs/solid/chevron-down.svg';
import { ReactComponent as Chevronup } from '../svgs/solid/chevron-up.svg';
import { ReactComponent as Android } from '../svgs/brands/android.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';
import React, { useEffect, useRef, useState } from 'react';

function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    function handleOutClick(e) {
      if (menuState && !menuRef.current.contains(e.target)) {
        setMenuState(menuState ? false : true);
      }
    }
    document.addEventListener('mousedown', handleOutClick);
    return () => {
      document.removeEventListener('mousedown', handleOutClick);
    };
  }, [menuState]);

  return (
    <header>
      <nav>
        <Link to="/">
          <Android width="20" height="20" fill="orange" />
        </Link>
        <ul id="navbar" className={menuState ? 'active' : ''} ref={menuRef}>
          <li>
            <Link
              to="/seller"
              onClick={() => {
                setMenuState(!menuState);
              }}
            >
              스토어 매출
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setMenuState(!menuState);
              }}
            >
              상품 업로드 일자
            </Link>
          </li>
          <li>
            <Link
              to="/chat"
              onClick={() => {
                setMenuState(!menuState);
              }}
            >
              chat
            </Link>
          </li>
        </ul>
        <div
          id="mobile"
          onClick={() => {
            setMenuState(!menuState);
          }}
        >
          {menuState ? (
            <Chevronup width="20" height="20" fill="orange" />
          ) : (
            <Chevrondown width="20" height="20" fill="orange" />
          )}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
