import React from "react";
import { NavLink } from "react-router-dom";

//import components
import styled, { keyframes } from "styled-components";
import Image from "../img/Group-25.png";
import Arrow from "../img/Arrow.svg";
import Img from "../img/image-11.png";
import Img2 from "../img/tick-square.png";
import Img3 from "../img/Rectangle-55.png";

const Activitiesanimation = keyframes`
to {left: 0px;}
from {left: -400px;}
`;
const Activityanimation = keyframes`
to {right: 0px;}
from {right: -400px;}
`;

const ActivityContainer = styled.section`
  padding: 70px;
  @media Screen and (max-width: 1200px) {
    padding: 20px;
  }
  .contain {
    width: 100%;
    display: flex;
    margin-top: 50px;
    padding: 50px;
    @media Screen and (max-width: 1200px) {
      display: grid;
      padding: 10px;
    }
  }
`;
const ActivityContent = styled.div`
  margin-right: 20px;
  width: 50%;
  @media Screen and (max-width: 1200px) {
    width: 100%;
    padding: 20px;
  }
`;
const ActivityContent1 = styled.div`
  width: 50%;
  background-image: url(${Img});
  background-size: contain;
  padding-top: 50px;
  padding-right: 60px;
  @media Screen and (max-width: 1200px) {
    width: 100%;
    margin-right: 0px;
    padding-right: 5px;
  }
  @media Screen and (max-width: 768px) {
    width: 100%;
    margin-right: 0px;
    padding-right: 5px;
  }
  @media Screen and (max-width: 480px) {
    width: 100%;
    margin-right: 0px;
    padding-right: 5px;
  }
  h1 {
    color: #ff9f0d;
    font-family: "Share Tech", sans-serif;
    font-size: 1rem;
  }
  .sectionp {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.5rem;
  }
  .sectionh1 {
    color: #143a5a;
    font-family: Laila, sans-serif;
    font-size: 1.8rem;
    font-weight: 700;
    text-transform: titlecase;
    line-height: 3.13rem;
  }
  .sectiondiv {
    display: flex;
  }
`;
const ActivityImg = styled.img`
  width: 100%;
  padding-left: 50px;
  @media Screen and (max-width: 768px) {
    padding: 0px 20px;
  }
`;
const Activitypage = styled.div`
  margin-top: 20px;
  display: flex;
  .Activity {
    display: flex;
    align-items: center;
    padding: 5px;
  }
  h4 {
    color: #979797;
    font-size: 0.8rem;
    font-family: Inter, sans-serif;
    font-weight: 500;
    @media Screen and (max-width: 1200px) {
      font-size: 0.8rem;
    }
    @media Screen and (max-width: 768px) {
      font-size: 0.7rem;
    }
    @media Screen and (max-width: 480px) {
      font-size: 0.7rem;
    }
  }
`;
const ActivityContent2 = styled.div`
  margin: 50px;
  background: linear-gradient(
      0deg,
      rgba(20, 58, 90, 0.1),
      rgba(20, 58, 90, 0.1)
    ),
    url(${Img3});
  background-size: cover;
  background-repeat: no-repeat;
  height: 40vh;
  display: flex;
  @media Screen and (max-width: 1200px) {
    height: 30vh;
    margin: 10px;
  }
  @media Screen and (max-width: 768px) {
    height: 20vh;
    margin: 10px;
  }
  div {
    width: 70%;
    padding: 60px 50px 0px 50px;
    @media Screen and (max-width: 480px) {
      padding: 30px 10px 0px 10px;
    }
  }
  p {
    font-family: "Laila", sans-serif;
    font-weight: 600;
    font-size: 50px;
    line-height: 50px;
    color: #fff;
    @media Screen and (max-width: 1200px) {
      font-size: 35px;
    }
    @media Screen and (max-width: 480px) {
      font-size: 18px;
      line-height: 20px;
    }
  }
  h1 {
    font-family: "Share tech", sans-serif;
    font-weight: 400;
    font-size: 15px;
    color: #ff9f0d;
  }
  button {
    background: #ff9f0d;
    color: #fff;
    border: 1px solid #143a5a;
    border-radius: 0px 10px 8px 10px;
    height: 40px;
    width: 100px;
    font-size: 1.1rem;
    font-family: share tech;
  }
  .btn {
    width: 30%;
    display: flex;
    padding-top: 100px;
    justify-content: end;
    @media Screen and (max-width: 480px) {
      width: 50%;
      padding-top: 60px;
    }
  }
`;
const Activitypages = styled.div`
  @media screen and (max-width: 1200px) {
    position: relative;
    animation-name: ${Activitiesanimation};
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
  }
`;
const Activitypages1 = styled.div`
  @media screen and (max-width: 1200px) {
    position: relative;
    animation-name: ${Activityanimation};
    animation-duration: 3s;
    animation-iteration-count: 1;
    animation-timing-function: ease-in-out;
  }
`;

const Activity = () => {
  return (
    <ActivityContainer>
      <div className="contain">
        <ActivityContent1>
          <div className="sectiondiv">
            <h1>About Us</h1>
            <img src={Arrow} alt="" />
          </div>
          <h1 className="sectionh1">Our Activities</h1>
          <p className="sectionp">
            Support organizations and projects representing the diversity of
            people, activities and organizations in the communities we serve.
          </p>
          <Activitypage>
            <Activitypages>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Build homes for accommodation for children</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Build church</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>A structure for prayer</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Build a mountain for prayer, fasting and meditation</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Construct primary and secondary schools</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Construct technical and vocational schools</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Building for institution</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Well-equipped library</h4>
              </div>
            </Activitypages>
            <Activitypages1>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Mini finance bank</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Fast food shop</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Affordable housing</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Market center</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Super market</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Fuel and gas's station</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Building for unisex stylist</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Radio and TV station</h4>
              </div>
              <div className="Activity">
                <img src={Img2} alt="" />
                <h4>Gym Center</h4>
              </div>
            </Activitypages1>
          </Activitypage>
        </ActivityContent1>
        <ActivityContent>
          <ActivityImg src={Image} alt="" />
        </ActivityContent>
      </div>
      <ActivityContent2>
        <div>
          <h1>Volunteer With Us</h1>
          <p>Our volunteers who are always going through the service</p>
        </div>

        <div className="btn">
          <NavLink to="/ContactForm">
            <button>Join Us</button>
          </NavLink>
        </div>
      </ActivityContent2>
    </ActivityContainer>
  );
};

export default Activity;
