import { BsMapFill, BsCloudSunFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import {
  NavContainer,
  CityName,
  CityNameContainer,
  Logo,
  LogoContainer,
} from "./NavLeftStyle";

const NavLeft = () => {
  const location = useSelector((state) => state.weather.data?.city);

  return (
    <NavContainer>
      <LogoContainer>
        <Logo>Forecast</Logo>
        <BsCloudSunFill size={20} color={"white"} />
      </LogoContainer>
      <CityNameContainer>
        <BsMapFill size={20} color={"white"} />
        {location && (
          <CityName>
            {location.name},{location.country}
          </CityName>
        )}
      </CityNameContainer>
    </NavContainer>
  );
};

export default NavLeft;
