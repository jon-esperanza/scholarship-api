import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from '../../images/logo.png';
import './styles.css';

function Nav() {
  return (
    <Wrapper>
      <div className="small"></div>
      <ul className ="navul">
        <li className = "navli">
          <div className="logocontainer">
          <Link className="logo" to="/">
            learnlatino
          </Link>
          </div>
        </li>
        <li className="scholarship">
          <div className="scholarships">
            <Link className="text" to="/scholarships">scholarships</Link>
          </div>
        </li>
        <li className="resourceslink">
          <div className="scholarships">
            <Link className="text" to="/scholarships">resources</Link>
          </div>
        </li>
      </ul>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 55px;
  background-color: #3e085c;
  display: flex;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);

  .small {
    height: 5px;
    background-color: #E6B8FF;
    display: flex;
    width: 100%;
    position: fixed;
    top: 55px;
    left: 0;
    right: 0;
    z-index: 3;
    box-shadow: 0 3px 6px 0 rgba(0,0,0,0.2);
  }
  .navul {
    position: fixed;
    width: 100%;
  }
  .navli {
    float: left;
    display: block;
    a {
      text-decoration: none;
      font-size: 25px;
      font-weight: bold;
      color: #d5aeec;
    }
  }
  .resourceslink{
    position: fixed;
    display: block;
    right: 9%;
    margin-left: 20px;
    a {
      font-weight: normal;
      font-size: 17px;
      color: #5d3a6e;
    }
    a:hover {
      color: #d5aeec;
    }
  }
  .scholarship{
    position: fixed;
    display: block;
    right: 18%;
    margin-left: 20px;
    a {
      font-weight: normal;
      font-size: 17px;
      color: #5d3a6e;
    }
    a:hover {
      color: #d5aeec;
    }
  }



`;
export default Nav;