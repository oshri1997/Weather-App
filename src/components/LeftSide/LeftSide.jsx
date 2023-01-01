import NavLeft from "../Nav/NavLeft";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../../features/weather/weatherSlice";
import {
  LeftContianer,
  SearchContainer,
  Card,
  ButtonSearch,
  CardHeader,
  FormContainer,
  Input,
  LineDivider,
} from "./LeftSideStyle";

const LeftSide = () => {
  const dispatch = useDispatch();
  const [location, setLocation] = useState("");

  const handleChange = (e) => {
    setLocation(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchWeather(location));
    setLocation("");
  };
  return (
    <LeftContianer>
      <NavLeft />
      <SearchContainer>
        <Card>
          <CardHeader>The Only Weather Forecast You Need</CardHeader>
          <LineDivider />
          <FormContainer>
            <Input
              type="text"
              value={location}
              onChange={(e) => handleChange(e)}
              placeholder="Enter Location"
            />
            <ButtonSearch type="submit" onClick={(e) => handleSubmit(e)}>
              <BiSearchAlt2 color="white" size={24} />
            </ButtonSearch>
          </FormContainer>
        </Card>
      </SearchContainer>
    </LeftContianer>
  );
};

export default LeftSide;
