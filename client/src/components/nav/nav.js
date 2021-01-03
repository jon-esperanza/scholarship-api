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
          <Link className="logo" to="/">
            learnlatino
          </Link>
          </div>
        </li>
        <li className="last">
          <div className="scholarships">
            <Link className="text" to="/scholarships">scholarships</Link>
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
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);


  ul {
    position: relative;
    width: 93%;
  }
  li {
    float: left;
    display: block;
    a {
      text-decoration: none;
      font-size: 25px;
      font-weight: bold;
      color: #d5aeec;
    }
  }
  .last{
    position: fixed;
    right: 3%;
    a {
      font-weight: normal;
      font-size: 17px;
      color: #a044d5;
    }
    a:hover {
      color: #d5aeec;
    }
  }

  .last:hover {
    border-bottom-style: grooved;
    border-bottom: 1px solid #d5aeec;
    transition-delay: .05s;
  }


`;
export default Nav;