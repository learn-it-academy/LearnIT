import React from "react";
import { NavLink } from "react-router-dom";

//import components
import styled from "styled-components";
import { menuData } from "../data/MenuData";
import { FaTimes } from "react-icons/fa";

const DropdownContainer = styled.div`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 50%;
  background: #143a5a;
  display: grid;
  align-items: center;
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  right: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 1.5rem;
  cusrsor: pointer;
  outline: none;
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.div`
  display: grid;
  grid-template-column: 1fr;
  grid-template-row: repeat(4, 80px);
  text-align: center;
  margin-bottom: 0.5rem;
`;

const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

const DropdownLink = styled.a`
  display: flex;
  color: #fff;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  font-family: inter, sans-serif;
  text-decoration: none;
  text-style: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-bottom: 1rem;
  &:hover {
    color: #ff9f0d;
  }
`;

const BtnWarp = styled.div`
display: flex;
justify-content: center;
button{
    background-color: #FF9F0D;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 30px;
    width: 100px;
    color: #fff;
}
}
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <DropdownWrapper>
        <DropdownMenu>
          {menuData.map((item, index) => {
            return (
              <DropdownLink href={item.link} key={index}>
                {item.title}
              </DropdownLink>
            );
          })}
        </DropdownMenu>
        <BtnWarp>
          <NavLink to="/ContactForm">
            <button>Join us</button>
          </NavLink>
        </BtnWarp>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
