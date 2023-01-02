import styled from "styled-components";
const Container = styled.div`
  height: 100%;
  padding: 40px;
`;

const MainCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 200px;
  padding: 20px 70px;
  box-shadow: 0px 11px 40px 13px rgba(0, 0, 0, 0.1);
  margin-top: 10px;
  border-radius: 10px;
`;
const LeftChild = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
`;
const BigHeader = styled.h1`
  font-size: 40px;
  color: ${(props) => props.color};
`;
const MediumHeader = styled.h2`
  font-size: 36px;
  color: #20242f;
`;
const SmallHeader = styled.h3`
  font-size: 14px;
  color: rgba(99, 98, 112, 0.8);
`;

const RightChild = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: left;
`;
const Details = styled.h4`
  color: #ada8b1;
  padding: 2px 0;
  font-size: 15px;
`;
const DetailsContainer = styled.div``;
export {
  Container,
  MainCard,
  LeftChild,
  BigHeader,
  MediumHeader,
  SmallHeader,
  RightChild,
  Details,
  DetailsContainer,
};
