import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import './styles.css';

function Nav() {
  return (
    <Wrapper>
      <ul>
        <li>
          <div className="logocontainer">
          <Link to="/">
            <img className="logo" src={logo} alt='logo'></img>
          </Link>
          </div>
        </li>
        <li className="last">
          <div className="scholarships">
            <Link className="text" to="/scholarships">Scholarships</Link>
          </div>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 8vh;
  background-color: #3e085c;
  display: flex;
  align-content: center;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);


  ul {
    position: fixed;
    width: 93%;
  }
  li {
    float: left;
    display: block;
    margin-left: 20px;
    a {
      text-decoration: none;
      font-size: 20px;
      color: #a044d5;
    }
  }
  .last{
    float: right;
  }
  .last:hover {
    filter: brightness(1.4);
  }
`;
export default Nav;