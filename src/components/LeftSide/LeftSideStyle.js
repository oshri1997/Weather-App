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
const Input = styled.input`
  width: 300px;
  height: 30px;
  padding: 10px;
  border-radius: 5px 0 0px 5px;
  border: none;
  color: #fff;
  background-color: rgba(255, 255, 255, 0.5);
  &:hover,
  &:focus {
    border: none;
    outline: none;
  }
  &::placeholder {
    color: #fff;
  }
`;
const ButtonSearch = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  width: 30px;
  height: 30px;
  border-left: 1px solid #fff;
  border-radius: 0px 5px 5px 0;
  cursor: pointer;
  transition: all 0.1s ease-in;
  &:hover {
    background-color: rgba(255, 255, 255, 0.55);
  }
`;

export {
  LeftContianer,
  SearchContainer,
  Card,
  CardHeader,
  LineDivider,
  FormContainer,
  Input,
  ButtonSearch,
};
