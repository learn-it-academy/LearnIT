import React from "react";

//import components
import styled from "styled-components";
import Image from "../img/image-7.png";
import Arrow from "../img/Arrow.svg";
import Arrow1 from "../img/Arrow-1.svg";

const SectionContainer = styled.section`
  display: flex;
  padding: 70px;
  @media Screen and (max-width: 1200px) {
    display: grid;
    justify-content: center;
    padding: 20px;
  }
  @media Screen and (max-width: 768px) {
    display: grid;
    justify-content: center;
  }
  @media Screen and (max-width: 480px) {
    display: grid;
    justify-content: center;
  }
`;
const SectionContent = styled.div`
  margin-left: 20px;
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
const SectionContent1 = styled.div`
  width: 50%;
  padding-top: 100px;
  padding-right: 60px;
  @media Screen and (max-width: 1200px) {
    width: 100%;
    padding-top: 50px;
    padding: 10px 20px;
  }
  @media Screen and (max-width: 768px) {
    width: 100%;
    padding-top: 50px;
    padding: 10px 20px;
  }
  @media Screen and (max-width: 480px) {
    width: 100%;
    padding-top: 50x;
    padding: 10px 20px;
  }
  h1 {
    color: #ff9f0d;
    font-family: Share Tech;
    font-size: 1rem;
  }
  .sectionp {
    color: #979797;
    font-family: Inter, sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 2rem;
    @media Screen and (max-width: 1200px) {
      font-size: 0.75rem;
    }
  }
  .sectionh1 {
    color: #143a5a;
    font-family: Laila, sans-serif;
    font-size: 2.81rem;
    font-weight: 700;
    text-transform: titlecase;
    line-height: 3.13rem;
    @media Screen and (max-width: 1200px) {
      font-size: 2rem;
    }
  }
  .sectiondiv {
    display: flex;
  }
`;
const SectionImg = styled.img`
  width: 100%;
  padding-left: 50px;
  @media Screen and (max-width: 1200px){
    padding: 5px;
  }
`;

const Section = () => {
  return (
    <SectionContainer>
      <SectionContent>
        <SectionImg src={Image} alt="" />
      </SectionContent>
      <SectionContent1>
        <div className="sectiondiv">
          <img src={Arrow1} alt="" />
          <h1>About Us</h1>
          <img src={Arrow} alt="" />
        </div>
        <h1 className="sectionh1">
          Rescue for Christ
          <br /> Foundation
        </h1>
        <p className="sectionp">
          Rescue for Christ Foundation is registered in the United States of
          American (USA) with registration number and also registered with the
          Government of Sierra Leone through the Ministry of Planning and
          Economic Development.
        </p>
        <p className="sectionp">
          The founder and President of RCF is Madam Gladys Suale-Stanley based
          in the Delaware, United States of America. RCI is an independent
          non-governmental social development organization that focuses on
          Christian values and installs those values into vulnerable women and
          youths in Sierra Leone. RCI is committed to helping women and youths
          that were gravely affected by the 11 years of senseless war.{" "}
        </p>
      </SectionContent1>
    </SectionContainer>
  );
};

export default Section;
