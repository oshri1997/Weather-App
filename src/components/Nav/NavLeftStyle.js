import styled from "styled-components";

const NavContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 100%;
  @media (max-width: 1280px) {
    width: 100%;
  }
`;

const CityNameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  width: max-content;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const CityName = styled.h4`
  font-size: 14px;
  margin-left: 10px;
  color: #edf5f4;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: max-content;
  padding: 4px;
  text-align: center;
`;
const Logo = styled.h4`
  font-size: 24px;
  margin-left: 10px;
  color: #fafafa;
  margin-right: 10px;
`;

export { NavContainer, CityNameContainer, CityName, LogoContainer, Logo };
