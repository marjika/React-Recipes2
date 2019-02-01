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
`;

const Footer = () => (
  <StickyNavbar className="navbar navbar-default navbar-fixed-bottom">
    <div className="container">
        <p className="navbar-text pull-left">NAVBAR</p>
    </div>
    {/* <a className="navbar-brand" href="/">
      React Recipes
    </a> */}
  </StickyNavbar>
);

export default Footer;