import styled from "styled-components";
const imgUrl = new URL("../../assets/lake-background.jpg", import.meta.url).href;

const LeftContianer = styled.div`
  background: url(${imgUrl}) no-repeat;
  background-size: cover;
  width: 100%;
  height: auto;
  border-radius: 20px;
  padding: 10px;
`;

const SearchContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 620px;
  height: 240px;

  @media (max-width: 768px) {
    width: 90%;
  }
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

  @media (max-width: 768px) {
    width: 90%;
  }
`;

// const LeftContianer = styled.div`
//   background: url(${imgUrl}) no-repeat;
//   background-size: cover;
//   height: 100%;
//   border-radius: 20px;
//   padding: 10px;
// `;

// const SearchContainer = styled.div`
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Card = styled.div`\
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   flex-direction: column;
//   width: 620px;
//   height: 240px;
// `;
// const CardHeader = styled.h2`
//   font-size: 24px;
//   color: #fff;
//   padding: 10px;
// `;
// const LineDivider = styled.hr`
//   width: 180px;
//   border: 2px solid #fff;
//   border-radius: 5px;
// `;
// const FormContainer = styled.form`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 40px;
//   margin-top: 8px;
// `;

export { LeftContianer, SearchContainer, Card, CardHeader, LineDivider, FormContainer };
