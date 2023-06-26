import styled from "styled-components";

const BigHeader = styled.h1`
  font-size: 30px;
  color: #c8306a;

  @media (max-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 28px;
  }

  @media (min-width: 1201px) and (max-width: 1600px) {
    font-size: 32px;
  }
`;

const MediumHeader = styled.h2`
  font-size: 20px;
  color: #78808f;

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 22px;
  }

  @media (min-width: 1201px) and (max-width: 1600px) {
    font-size: 26px;
  }
`;

const SmallHeader = styled.h3`
  font-size: 16px;
  color: rgba(99, 98, 112, 0.4);

  @media (max-width: 768px) {
    font-size: 14px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 12px;
  }

  @media (min-width: 1201px) and (max-width: 1600px) {
    font-size: 18px;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 20px 39px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #d0d0d0;
  padding: 10px;
  height: 160px;
  width: 100%;

  @media (max-width: 768px) {
    height: auto;
    padding: 10px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    height: 180px;
    padding: 15px;
    width: 100%;
  }

  @media (min-width: 1201px) and (max-width: 1600px) {
    height: 200px;
    padding: 20px;
  }
`;

const CardContent = styled.div`
  width: 100%;
  padding: 0 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;

  @media (max-width: 768px) {
    padding: 0 20px;
    height: auto;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    padding: 0 40px;
    height: 140px;
  }

  @media (min-width: 1201px) and (max-width: 1600px) {
    padding: 0 60px;
    height: 160px;
  }
`;

export { BigHeader, MediumHeader, SmallHeader, Container, CardContent };
