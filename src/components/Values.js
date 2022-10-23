import React from "react";

//import components
import styled, { keyframes } from "styled-components";
import Arrow from "../img/Arrow.svg";
import Arrow1 from "../img/Arrow-1.svg";
import Image1 from "../img/Be-empathic.svg";
import Image2 from "../img/Be-inclusive.svg";
import Image3 from "../img/Be-leaders.svg";
import Image4 from "../img/Be-trustworthy.svg";

const Valueanimation = keyframes`
  0% {
    border-radius: 0px 30px;
    box-shadow: 0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5);
    transform: scale(0);
    justify-content: center;
  }
  50% {
    border-radius: 0px 30px;
    box-shadow: 0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5);
    transform: scale(1.05);
    justify-content: center;
  }
`;

const ValueContainer = styled.section`
  padding: 70px;
  @media Screen and (max-width: 1200px) {
    padding: 20px;
  }
  .Value {
    display: flex;
    justify-content: center;
    color: #ff9f0d;
  }
  .values1 {
    font-size: 1rem;
    font-family: Share Tech;
  }
`;
const Valueh1 = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  color: #143a5a;
  font-family: Laila, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
`;
const ValueContent = styled.div`
  transition: 3s ease-in-out;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 30px;
  padding: 20px 70px;
  @media Screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px 30px;
  }
  @media Screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    padding: 20px 20px;
  }
  @media Screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 20px 20px;
  }
  .img {
    display: flex;
    justify-content: flex-start;
    @media Screen and (max-width: 1200px) {
      display: grid;
      justify-content: center;
    }
  }
`;
const Valuepage = styled.div`
  transform: translatey(0px);
  animation-name: ${Valueanimation};
  animation-duration: 6s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
  padding: 20px;
  &:hover {
    .img {
      display: flex;
      justify-content: center;
    }
    border-radius: 0px 30px;
    box-shadow: 0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5);
    transform: scale(1.05);
  }
  @media Screen and (max-width: 1200px) {
    border-radius: 0px 30px;
    box-shadow: 0.25rem 0.25rem 3.38rem rgba(217, 217, 217, 0.5);
  }
`;
const ValueImg = styled.img`
  height: 40px;
`;
const ValueH = styled.div`
  font-weight: 600;
  font-size: 1rem;
  font-family: Inter, sans-serif;
  text-align: center;
  color: #143a5a;
  line-height: 3rem;
  text-transform: uppercase;
`;
const Valueh2 = styled.div`
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 175%;
  font-family: Inter, sans-serif;
  text-align: center;
  color: #143a5a;
`;

const Values = () => {
  return (
    <ValueContainer>
      <div className="Value">
        <img src={Arrow1} alt="" />
        <h1 className="values1">Gallery</h1>
        <img src={Arrow} alt="" />
      </div>
      <Valueh1>Our Values</Valueh1>
      <ValueContent>
        <Valuepage>
          <div className="img">
            <ValueImg src={Image1} alt="" />
          </div>
          <ValueH>Be empathic</ValueH>
          <Valueh2>
            We put ourselves in the other person’s shoes, we take time to
            understand his/her/their lived experience
          </Valueh2>
        </Valuepage>
        <Valuepage>
          <div className="img">
            <ValueImg src={Image2} alt="" />
          </div>
          <ValueH>Be inclusive</ValueH>
          <Valueh2>
            Be inclusive We welcome diversity of voice, experiences and
            perspectives
          </Valueh2>
        </Valuepage>
        <Valuepage>
          <div className="img">
            <ValueImg src={Image3} alt="" />
          </div>
          <ValueH>Be leaders</ValueH>
          <Valueh2>
            We lead in the community leveraging our resources to benefit our
            charitable partners
          </Valueh2>
        </Valuepage>
        <Valuepage>
          <div className="img">
            <ValueImg src={Image4} alt="" />
          </div>
          <ValueH>Be trustworthy</ValueH>
          <Valueh2>
            We earn the trust of our donors, our community and charitable
            partners by being present, transparent and accessible
          </Valueh2>
        </Valuepage>
      </ValueContent>
    </ValueContainer>
  );
};

export default Values;
