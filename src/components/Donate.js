import React from "react";

//import components
import styled, { keyframes } from "styled-components";
import Arrow from "../img/Line-5.png";
import Arrow1 from "../img/Line-4.png";

const DonateAnimation = keyframes`
to {left: 0px;}
from {left: -400px;}
`;

const DonateContainer = styled.section`
  padding: 70px;
  @media Screen and (max-width: 1200px) {
    padding: 10px;
  }
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  animation-name: ${DonateAnimation};
  animation-duration: 3s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
`;
const DonatePage = styled.div`
  padding: 20px;
  display: Grid;
  justify-content: center;
  border-radius: 0px 30px;
  box-shadow: 0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5);
  @media Screen and (max-width: 768px) {
    padding: 5px;
    margin: 0px 10px;
    width: 100%;
  }
  h5 {
    padding: 10px;
    color: #143a5a;
    font-size: 0.8rem;
  }
  .Donate {
    display: flex;
    justify-content: center;
    color: #ff9f0d;
  }
  img {
    margin: 10px;
    height: 1px;
    @media Screen and (max-width: 768px) {
      width: 100px;
    }
  }
  h1 {
    color: #143a5a;
    font-family: Inter, sans-serif;
    font-size: 1rem;
  }
`;
const Donateh1 = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  font-family: Laila, sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #143a5a;
`;
const Donatecontent = styled.div`
  .donate {
    padding: 10px;
    display: flex;
  }
`;
const Donatebtn = styled.div`
  margin-right: 10px;
  color: #143a5a;
  button {
    background-color: transparent;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 8px 10px;
    height: 30px;
    width: 100px;
  }
  :hover {
    background-color: #ff9f0d;
    border-radius: 0px 10px 8px 10px;
    transform: scale(1.05);
  }
`;
const Input = styled.div`
  padding: 10px;
  input {
    width: 514px;
    height: 60px;
    padding-left: 10px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 10px 10px;
    font-size: 1rem;
    font-family: share tech;
    @media Screen and (max-width: 480px) {
      width: 320px;
    }
  }
`;
const Input1 = styled.div`
  padding: 10px;
  label {
    font-size: 0.8rem;
    font-weight: 400;
    color: #143a5a;
  }
`;
const Donatebtn1 = styled.div`
  padding: 10px;
  button {
    background-color: #143a5a;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 100%;
    color: #fff;
    @media Screen and (max-width: 480px) {
      width: 320px;
    }
  }
  .btn {
    background: transparent;
    color: #143a5a;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 100%;
    @media Screen and (max-width: 480px) {
      width: 320px;
    }
  }
`;

const Donate = () => {
  return (
    <DonateContainer id="Donate">
      <DonatePage>
        <Donateh1>Donate Today</Donateh1>
        <h5>Select Amount</h5>
        <Donatecontent>
          <div className="donate">
            <Donatebtn>
              <button>$100.00USD</button>
            </Donatebtn>
            <Donatebtn>
              <button>$50.00USD</button>
            </Donatebtn>
            <Donatebtn>
              <button>$25.00USD</button>
            </Donatebtn>
          </div>
          <Input>
            <input type="number" placeholder="Other Amount" />
          </Input>
          <Input1>
            <input type="checkbox" required />
            <label> Make This Month Donation</label>
          </Input1>
          <Donatebtn1>
            <button>Donate with Paypal</button>
          </Donatebtn1>
          <div className="Donate">
            <img src={Arrow1} alt="" />
            <h1>Or</h1>
            <img src={Arrow} alt="" />
          </div>
          <Donatebtn1>
            <button className="btn">Donate with Credit & Debit card</button>
          </Donatebtn1>
        </Donatecontent>
      </DonatePage>
    </DonateContainer>
  );
};

export default Donate;
