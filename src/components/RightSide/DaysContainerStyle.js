import styled from "styled-components";

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  row-gap: 20px;
  column-gap: 10px;
`;

const DaysContainer = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
`;

const Header = styled.h1`
  font-size: 32px;
  padding: 20px 0;
`;

export { CardsContainer, DaysContainer, Header };
