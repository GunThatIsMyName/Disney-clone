import React from "react";
import styled from "styled-components";
import { BackgroundImg, LogoTwo } from "../images";

function Login() {
  return (
    <Wrapper>
      <div className="login">
        <div className="login__content">
          <img
            className="login__content__one"
            src="https://disney-clone-d1e27.firebaseapp.com/images/cta-logo-one.svg"
            alt="login__logoOne"
          />
          <button className="login__content__btn">Get All Videos</button>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti
            quas veritatis nostrum voluptatum dolorum sint iure voluptas labore,
            ipsa est corporis consequuntur expedita illum modi cum qui.
            Voluptates, molestias corporis.
          </p>
          <img
            className="login__content__two"
            src={LogoTwo}
            alt="login__logoTwo"
          />
        </div>
        <img src={BackgroundImg} className="login__img" alt="login__img" />
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
  .login {
  }
  .login__content {
    display: flex;
    flex-direction: column;
    max-width: 650px;
    p{
        text-align:center;
        margin-bottom:1rem;
    }
    .login__content__btn {
      border: none;
      width: 50%;
      margin: 2rem auto;
      background: #f9b300;
      font-size: 2rem;
      padding: 1rem 2rem;
      border-radius: 10px;
      cursor: pointer;
      transition:0.3s linear;
      &:hover{
          background:#fff;
          color:#f9b300;
      }
    }
  }
  .login__img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
  @media screen and (max-width:740px){
    .login__content{
        max-width:90vw;
    }
  }
`;

export default Login;
