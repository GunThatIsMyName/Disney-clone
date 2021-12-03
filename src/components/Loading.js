import React from "react";
import styled from "styled-components";

function Loading() {
  return <Wrapper>
      <h1>Disney+</h1>
  </Wrapper>;
}

const Wrapper = styled.section`
    background:#0A0B12;
    display:grid;
    place-items:center;
    min-height:100vh;
    h1{
        color:#090b13;
        font-size:10rem;
    }
`;

export default Loading;
