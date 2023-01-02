import styled from "styled-components";

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
export { Input, ButtonSearch };
