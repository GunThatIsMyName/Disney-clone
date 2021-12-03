import React from "react";
import styled from "styled-components";
import Hero from "./Hero";

function Home() {
  return (
    <Wrapper>
      <Hero />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-size: cover;
  background-repeat: no-repeat;
  background: url("/image/home-background.png");
  min-height: calc(100vh - 2rem);
  position: relative;
  top: 0px;
  overflow-x: hidden;
`;

export default Home;
