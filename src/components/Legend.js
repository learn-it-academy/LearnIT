import React from "react";

//import components
import styled, { keyframes } from "styled-components";
import Image1 from "../img/Workinpartnership.svg";
import Image2 from "../img/Engageincommunity.svg";
import Image3 from "../img/Supportorganizations.svg";
import Image4 from "../img/IOS.svg";
import Arrow from "../img/Arrow.svg";
import Arrow1 from "../img/Arrow-1.svg";

const Float = keyframes`
0% {
  box-shadow: 0 0px 0px 0px rgba(0,0,0,0.6);
  transform: translatey(0px);
}
50% {
    box-shadow: 0 0px 0px 0px rgba(0,0,0,0.2);
  transform: translatey(-10px);
}
100% {
    box-shadow: 0 0px 0px 0px rgba(0,0,0,0.6);
  transform: translatey(0px);
}
`;

const LegendContainer = styled.section`
  margin-top: 30px;
  padding: 70px;
  @media Screen and (max-width: 1200px) {
    padding: 20px;
  }
`;
const LegendContent = styled.div`
  padding: 50px;
  @media Screen and (max-width: 1200px) {
    padding: 5px;
  }
  .legend {
    display: flex;
    justify-content: center;
  }
  h1 {
    color: #ff9f0d;
    font-family: Share Tech;
    font-size: 1rem;
  }
`;
const Legendh1 = styled.div`
  padding: 20px 10px 10px 10px;
  display: flex;
  justify-content: center;
  color: #143a5a;
  font-family: Laila, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
`;
const Legendp = styled.div`
  padding: 10px 10%;
  text-align: center;
  display: flex;
  justify-content: center;
  color: #979797;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  line-height: 2rem;
  @media Screen and (max-width: 1200px) {
    font-size: 0.8rem;
    padding: 10px;
  }
  @media Screen and (max-width: 768px) {
    font-size: 0.8rem;
    padding: 10px;
  }
  @media Screen and (max-width: 480px) {
    font-size: 0.8rem;
    padding: 10px;
  }
`;
const LegendContent1 = styled.div`
  padding: 0rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  @media Screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    padding: 0rem 1.5rem;
  }
  @media Screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 0rem 1.5rem;
    .bt {
      display: grid;
      justify-content: center;
    }
  }
  @media Screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
    padding: 0rem 1.5rem;
    .bt {
      display: grid;
      justify-content: center;
      margin: 10px 0px;
    }
  }
  button {
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 60px;
    width: 60px;
    color: #fff;
  }
  .btn1 {
    background-color: #143a5a;
  }
  .btn2 {
    background-color: #5fa31b;
  }
  .btn3 {
    background-color: #3c8cc7;
  }
  .btn4 {
    background-color: #c03098;
  }
`;
const LegendImg = styled.img`
  width: 60%;
`;
const Legendh2 = styled.div`
  color: #979797;
  font-family: Inter, sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  line-height: 1.5rem;
  @media Screen and (max-width: 1200px) {
    font-size: 0.8rem;
  }
  @media Screen and (max-width: 768px) {
    font-size: 0.8rem;
    text-align: center;
  }
  @media Screen and (max-width: 480px) {
    font-size: 0.8rem;
    text-align: center;
  }
`;
const LegendH = styled.div`
  color: #143a5a;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  text-transform: uppercase;
  line-height: 300%;
  @media Screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;
const Legendbtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 24px;
  padding-top: 30px;
  button {
    background-color: #ff9f0d;
    border: none;
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 100px;
    color: #fff;
    font-family: share tech;
    font-size: 18px;
    @media Screen and (max-width: 1200px) {
      height: 50px;
    }
    @media Screen and (max-width: 768px) {
      height: 50px;
    }
    @media Screen and (max-width: 480px) {
      height: 50px;
    }
  }
  div {
    margin-right: 30px;
  }
`;
const Legendpage = styled.div`
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
  transform: translatey(0px);
  animation-name: ${Float};
  animation-duration: 6s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  @media screen and (max-width: 768px) {
    justify-content: center;
    display: flex;
  }
`;

const Legend = () => {
  return (
    <LegendContainer id="About">
      <LegendContent>
        <div className="legend">
          <img src={Arrow1} alt="" />
          <h1>who we do</h1>
          <img src={Arrow} alt="" />
        </div>
        <Legendh1>Mission Statement</Legendh1>
        <Legendp>
          Our aim to increase Children literacy through reading. Giving them
          books like bible reading activities, gospel books, etc. to upsurge
          scripture knowledge and build stronger connection with GOD.
        </Legendp>
      </LegendContent>
      <LegendContent1>
        <div>
          <Legendpage>
            <button className="btn1">
              <LegendImg src={Image1} alt="" className="img1" />
            </button>
          </Legendpage>
          <LegendH>1. Work in partnership</LegendH>
          <Legendh2>
            Work in partnership with local organizations in and out of the
            communities learn more...
          </Legendh2>
        </div>
        <div>
          <Legendpage>
            <button className="btn2">
              <LegendImg src={Image2} alt="" className="img1" />
            </button>
          </Legendpage>
          <LegendH>2. Engage in community</LegendH>
          <Legendh2>
            Engage in community mobilization and sensitization
          </Legendh2>
        </div>
        <div>
          <Legendpage>
            <button className="btn3">
              <LegendImg src={Image3} alt="" className="img1" />
            </button>
          </Legendpage>
          <LegendH>3. Support organizations</LegendH>
          <Legendh2>
            Support organizations and projects representing the diversity of
            people, activities and organizations.
          </Legendh2>
        </div>
        <div>
          <Legendpage>
            <button className="btn4">
              <LegendImg src={Image4} alt="" className="img1" />
            </button>
          </Legendpage>
          <LegendH>4. improve our skill</LegendH>
          <Legendh2>
            Evaluation of grants to improve our skills and knowledge and we will
            share key findings with our stakeholders.
          </Legendh2>
        </div>
      </LegendContent1>
      <Legendbtn>
        <button>See more</button>
      </Legendbtn>
    </LegendContainer>
  );
};

export default Legend;
