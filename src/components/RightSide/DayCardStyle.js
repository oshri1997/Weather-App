import styled from "styled-components";

const BigHeader = styled.h1`
  font-size: 30px;
  color: #c8306a;
`;
const MediumHeader = styled.h2`
  font-size: 20px;
  color: #78808f;
`;
const SmallHeader = styled.h3`
  font-size: 16px;
  color: rgba(99, 98, 112, 0.4);
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
`;
const CardContent = styled.div`
  width: 100%;
  padding: 0 70px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 120px;
`;

export { BigHeader, MediumHeader, SmallHeader, Container, CardContent };
