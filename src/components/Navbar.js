import { ReactComponent as Chevrondown } from '../svgs/solid/chevron-down.svg';
import { ReactComponent as Chevronup } from '../svgs/solid/chevron-up.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Component } from 'react';

class Navbar extends Component {
  state = { clicked: false };
  render() {
    return (
      <>
        <nav>
          <Link to="/">logo</Link>
          <ul id="navbar">
            <li>
              <Link to="/seller">스토어 매출</Link>
            </li>
            <li>
              <Link>상품 업로드 일자</Link>
            </li>
          </ul>
          <div id="mobile">
            {this.state.clicked ? (
              <Chevronup width="20" height="20" fill="orange" />
            ) : (
              <Chevrondown width="20" height="20" fill="orange" />
            )}
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
