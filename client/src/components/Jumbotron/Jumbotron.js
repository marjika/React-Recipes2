import React from "react";
import "./Jumbotron.css";
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 3.5em;
  text-align: center;
  color: #016699;
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
`;

const Jumbotron = () => (
  <div className="jumbotron text-center">
    <Title>React Recipes</Title>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="http://www.recipepuppy.com/about/api/"
    >
      Powered by Recipe Puppy
    </a>
  </div>
);

export default Jumbotron;
