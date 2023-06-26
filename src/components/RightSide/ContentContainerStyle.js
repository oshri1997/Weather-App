import styled from "styled-components";

const Container = styled.div`
  height: 100%;
  padding: 40px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const MainCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: auto;
  width: 100%;
  padding: 20px 70px;
  box-shadow: 0px 11px 40px 13px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  border-radius: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 20px;
    width: 95%;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    padding: 20px 0px;
    width: 90%;
  }

  @media (min-width: 1201px) and (max-width: 1600px) {
    padding: 20px 100px;
  }
`;

const LeftChild = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    grid-row-start: 1;
  }
`;

const BigHeader = styled.h1`
  font-size: 40px;
  color: ${(props) => props.color};

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 28px;
  }

  @media (min-width: 1201px) and (max-width: 1600px) {
    font-size: 36px;
  }
`;

const MediumHeader = styled.h2`
  font-size: 36px;
  color: #20242f;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 24px;
  }

  @media (min-width: 1201px) and (max-width: 1600px) {
    font-size: 32px;
  }
`;

const SmallHeader = styled.h3`
  font-size: 14px;
  color: rgba(99, 98, 112, 0.8);

  @media (max-width: 768px) {
    font-size: 12px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 10px;
  }

  @media (min-width: 1201px) and (max-width: 1600px) {
    font-size: 12px;
  }
`;

const RightChild = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: left;

  @media (max-width: 768px) {
    grid-row-start: 1;
  }
`;

const Details = styled.h4`
  color: #ada8b1;
  padding: 2px 0;
  font-size: 15px;

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    font-size: 11px;
  }

  @media (min-width: 1201px) and (max-width: 1600px) {
    font-size: 14px;
  }
`;

export {
  Container,
  MainCard,
  LeftChild,
  BigHeader,
  MediumHeader,
  SmallHeader,
  RightChild,
  Details,
};
