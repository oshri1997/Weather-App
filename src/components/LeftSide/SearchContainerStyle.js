import styled from "styled-components";

const LeftContianer = styled.div`
  background: url("../src/assets/lake-background.jpg") no-repeat;
  background-size: cover;
  height: 100%;
  border-radius: 20px;
  padding: 10px;
`;

const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`\
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 620px;
  height: 240px;
`;
const CardHeader = styled.h2`
  font-size: 24px;
  color: #fff;
  padding: 10px;
`;
const LineDivider = styled.hr`
  width: 180px;
  border: 2px solid #fff;
  border-radius: 5px;
`;
const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  margin-top: 8px;
`;

export { LeftContianer, SearchContainer, Card, CardHeader, LineDivider, FormContainer };
