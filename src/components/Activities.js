import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

//import components
import styled from "styled-components";
import Rectangle from "../img/Rectangle-15.png";
import Rectangle1 from "../img/Rectangle-16.png";
import Rectangle2 from "../img/Rectangle-17.png";
import Rectangle3 from "../img/Rectangle-18.png";
import Rectangle4 from "../img/Rectangle-19.png";
import Rectangle5 from "../img/Rectangle-20.png";
import Arrow from "../img/Arrow.svg";
import Arrow1 from "../img/Arrow-1.svg";

const ActivitiesContainer = styled.section`
  padding: 70px;
  @media Screen and (max-width: 1200px) {
    padding: 100px;
  }
  @media Screen and (max-width: 768px) {
    padding: 20px;
  }
  .Activities {
    display: flex;
    justify-content: center;
    color: #ff9f0d;
  }
  h1 {
    color: #ff9f0d;
    font-family: Share Tech;
    font-size: 1rem;
  }
`;
const ActivitiesPage = styled.div`
  display: flex;
  padding: 20px 90px;
  width: 100%;
  @media Screen and (max-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    justify-content: center;
    padding: 20px 30px;
  }
  @media Screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    padding: 20px 30px;
    grid-gap: 10px;
  }
  @media Screen and (max-width: 480px) {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    padding: 20px 30px;
    grid-gap: 10px;
  }
`;
const ActivitiesContent = styled.div`
  width: 50%;
  @media Screen and (max-width: 1200px) {
    width: 100%;
  }
  @media Screen and (max-width: 768px) {
    width: 100%;
  }
  @media Screen and (max-width: 480px) {
    width: 100%;
  }
`;
const ActivitiesContent1 = styled.div`
  width: 50%;
  @media Screen and (max-width: 1200px) {
    width: 100%;
  }
  @media Screen and (max-width: 768px) {
    width: 100%;
  }
  @media Screen and (max-width: 480px) {
    width: 100%;
  }
`;
const ActivitiesImg = styled.img`
  width: 100%;
  height: 50vh;
  @media Screen and (max-width: 768px) {
    height: 35vh;
  }
  @media Screen and (max-width: 480px) {
    height: 25vh;
  }
`;
const ActivitiesImgs = styled.img`
  width: 100%;
  height: 24.8vh;
  @media Screen and (max-width: 1200px) {
    height: 25vh;
  }
  @media Screen and (max-width: 768px) {
    height: 35vh;
  }
  @media Screen and (max-width: 480px) {
    height: 25vh;
  }
`;
const Activitiesh1 = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0px;
  color: #143a5a;
  font-family: Laila, sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
`;
const Activitiespages = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Activitypages = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const Activities = () => {
  return (
    <ActivitiesContainer>
      <div className="Activities">
        <img src={Arrow1} alt="" />
        <h1>Gallery</h1>
        <img src={Arrow} alt="" />
      </div>
      <Activitiesh1>Our Activities</Activitiesh1>
      <ActivitiesPage>
        <ScrollAnimation animateIn="fadeIn">
          <Activitiespages>
            <ActivitiesContent>
              <ActivitiesImg src={Rectangle} alt="" />
            </ActivitiesContent>
            <ActivitiesContent1>
              <ActivitiesImgs src={Rectangle1} alt="" />
              <ActivitiesImgs src={Rectangle2} alt="" />
            </ActivitiesContent1>
          </Activitiespages>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn">
          <Activitypages>
            <ActivitiesContent>
              <ActivitiesImg src={Rectangle3} alt="" />
            </ActivitiesContent>
            <ActivitiesContent1>
              <ActivitiesImgs src={Rectangle4} alt="" />
              <ActivitiesImgs src={Rectangle5} alt="" />
            </ActivitiesContent1>
          </Activitypages>
        </ScrollAnimation>
      </ActivitiesPage>
    </ActivitiesContainer>
  );
};

export default Activities;
