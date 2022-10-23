import React from "react";

//import components
import styled, { css } from "styled-components/macro";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import Arrow from "../img/Arrow.svg";
import Arrow1 from "../img/Arrow-1.svg";
import Rectangle from "../img/Rectangle-3885.png";

const AssignmentContainer = styled.div`
  padding: 70px;
  @media Screen and (max-width: 1200px) {
    padding: 20px;
  }
  .Assignment {
    display: flex;
    justify-content: center;
    color: #ff9f0d;
  }
  .gallery {
    color: #ff9f0d;
    font-size: 1rem;
    font-family: Share Tech;
  }
`;
const Assignmenth1 = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px 0px;
  color: #143a5a;
  font-family: Laila, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
`;
const AssignmentContent = styled.div`
  padding: 20px 50px;
  @media Screen and (max-width: 1200px) {
    padding: 20px 20px;
  }
  @media Screen and (max-width: 768px) {
    padding: 20px 20px;
  }
  @media Screen and (max-width: 480px) {
    padding: 20px 20px;
  }
`;
const AssignmentPage1 = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Rectangle});
  border-radius: 0px 30px 30px 30px;
  height: 80vh;
  color: #fff;
  padding: 20px;
  background-size: cover;
  background-repeat: no-repeat;
  @media Screen and (max-width: 1200px) {
    height: 40vh;
  }
  @media Screen and (max-width: 768px) {
    height: 40vh;
  }
  @media Screen and (max-width: 480px) {
    height: 40vh;
  }
  h1 {
    font-family: Laila, sans-serif;
  }
`;
const Assignmentpage = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 10px;
  width: 100%;
  background-color: #ffffff;
  box-shadow: 1.25rem 1.25rem 3.38rem 3.38rem rgba(217, 217, 217, 0.25);
  @media Screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  @media Screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  @media Screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
  div {
    width: 25%;
    padding: 40px;
    @media Screen and (max-width: 1200px) {
      width: 100%;
    }
  }
  .ProjectGoal {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
    text-align: center;
  }
  .Locations {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
    text-align: center;
  }
  .FundingGoal {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
    text-align: center;
  }
  .TotalFunded {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: 1rem;
    font-weight: 500;
    line-height: 2rem;
    text-align: center;
  }
  .Amt1 {
    color: #143a5a;
    font-family: Laila, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-transform: titlecase;
    line-height: 2.93rem;
    text-align: center;
  }
  .USA {
    color: #143a5a;
    font-family: Laila, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-transform: titlecase;
    line-height: 2.93rem;
    text-align: center;
  }
  .Amt2 {
    color: #143a5a;
    font-family: Laila, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-transform: titlecase;
    line-height: 2.93rem;
    text-align: center;
  }
  .Amt3 {
    color: #143a5a;
    font-family: Laila, sans-serif;
    font-size: 2rem;
    font-weight: 700;
    text-transform: titlecase;
    line-height: 2.93rem;
    text-align: center;
  }
`;
const arrowButton = css`
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  background: #000d1a;
  border-radius: 50px;
  padding: 10px;
  margin-right: 0.5rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: #cd853f;
    transform: scale(1.05);
  }
  @media screen and (max-width: 768px) {
    width: 35px;
    height: 35px;
  }
`;

const PrevArrow = styled(IoArrowBack)`
  ${arrowButton}
`;

const NextArrow = styled(IoArrowForward)`
  ${arrowButton}
`;
const SliderButtons = styled.div`
  position: relative;
  bottom: 50px;
  right: 50px;
  display: flex;
  justify-content: end;
  z-index: 10;
`;

const Assignment = () => {
  return (
    <AssignmentContainer>
      <div className="Assignment">
        <img src={Arrow1} alt="" />
        <h1 className="gallery">Gallery</h1>
        <img src={Arrow} alt="" />
      </div>
      <Assignmenth1>Our Assignment</Assignmenth1>
      <AssignmentContent>
        <AssignmentPage1>
          <div>
            <h1>The Foundation</h1>
            <p>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <p>11sep,2021</p>
          </div>
        </AssignmentPage1>
        <SliderButtons>
          <PrevArrow />
          <NextArrow />
        </SliderButtons>
        <div>
          <Assignmentpage>
            <div>
              <h1 className="Amt1">$1,000,00</h1>
              <h1 className="ProjectGoal">Project Goal</h1>
            </div>
            <div>
              <h1 className="USA">USA</h1>
              <h1 className="Locations">Locations</h1>
            </div>

            <div>
              <h1 className="Amt2">$1,5000</h1>
              <h1 className="FundingGoal">Funding Goal</h1>
            </div>

            <div>
              <h1 className="Amt3">55%</h1>
              <h1 className="TotalFunded">Total Funded</h1>
            </div>
          </Assignmentpage>
        </div>
      </AssignmentContent>
    </AssignmentContainer>
  );
};

export default Assignment;
