import React, { useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/AppContext";
import { headerList } from "../utils/help";

function Header() {
  const { user, handleAuth,handleLogout,checkingLoginStatus } = useAppContext();


  useEffect(()=>{
    checkingLoginStatus();
  },[])


  return (
    <Wrapper>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/archive/3/3e/20210207182738%21Disney%2B_logo.svg"
        alt="disney+Logo"
      />
      {user.name !== "" && user.email !== "" && (
        <div className="header__center">
          {headerList.map((item) => {
            return (
              <li key={item.id}>
                {item.icons}
                <span>{item.text}</span>
              </li>
            );
          })}
        </div>
      )}
      {user.name === "" ? (
        <button onClick={handleAuth} className="header__user">
          Login
        </button>
      ) : (
        <div className="header__users" >
          <button onClick={handleLogout} className="header__user">
          Logout
        </button>
        <img src={user.photo} alt={user.name} className="header__user-img" />
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background: #090b13;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  padding: 0.5rem 2rem;
  img {
    height: 45px;
    cursor: pointer;
  }
  .header__center {
    display: flex;
    margin: auto;
    gap: 15px;
    font-size: 1.2rem;
    li {
      display: flex;
      align-items: center;
      svg {
        margin-right: 3px;
      }
      span {
        padding-bottom: 3px;
        border-bottom: 2px solid transparent;
        transition: 0.3s linear;
        cursor: pointer;
        &:hover {
          border-bottom: 2px solid white;
        }
      }
    }
  }
  .header__users{
    display:flex;
    align-items:center;
  }
  .header__user {
    margin-left: auto;
    max-width: 200px;
    font-size: 1.1rem;
    color: #fff;
    border-radius: 5px;
    background: transparent;
    border: 1px solid #fff;
    padding: 7px 16px;
    transition: 0.2s linear;
    cursor: pointer;
    &:hover {
      background: #fff;
      color: #222;
    }
  }
  .header__user-img{
    width:3rem;
    border-radius:50%;
    margin-left:5px;
  }
  @media screen and (max-width: 756px) {
    .header__center {
      display: none;
    }
  }
`;

export default Header;
