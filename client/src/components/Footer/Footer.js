import React from "react";
import "./Footer.css";
import styled from 'styled-components';

const StickyNavbar = styled.nav`
  background-color: #016699;
  height: 2%;
  color: white;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  width: 100%;
  bottom: 0;
  position: fixed;
  font-size: 11px;
  padding-top: 30px;
`;

const Footer = () => (
  <StickyNavbar className="navbar navbar-default navbar-fixed-bottom">
    <div className="container" style={{ textAlign:"center" }}>
        <p>React styling practice by <a href="https://marjika.github.io/Portfolio/">Marjika</a></p>
    </div>
    {/* <a className="navbar-brand" href="/">
      React Recipes
    </a> */}
  </StickyNavbar>
);

export default Footer;