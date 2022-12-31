import { BsMapFill, BsCloudSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";
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
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  useEffect(() => {
    if (location) {
      console.log(city);
      setCity(location.name);
      setCountry(location.country);
    }
  }, [location]);
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
            {city},{country}
          </CityName>
        )}
      </CityNameContainer>
    </NavContainer>
  );
};

export default NavLeft;
