import { BsMapFill, BsCloudSunFill } from "react-icons/bs";
import {
  NavContainer,
  CityName,
  CityNameContainer,
  Logo,
  LogoContainer,
} from "./NavLeftStyle";

const NavLeft = () => {
  return (
    <NavContainer>
      <LogoContainer>
        <Logo>Forecast</Logo>
        <BsCloudSunFill size={20} color={"white"} />
      </LogoContainer>
      <CityNameContainer>
        <BsMapFill size={20} color={"white"} />
        <CityName>New York,US</CityName>
      </CityNameContainer>
    </NavContainer>
  );
};

export default NavLeft;
