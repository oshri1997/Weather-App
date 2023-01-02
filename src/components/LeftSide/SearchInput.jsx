import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { ButtonSearch, Input } from "./SearchInputStyle";
import { fetchWeather } from "../../features/weather/weatherSlice";

const SearchInput = () => {
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
    <>
      <Input
        type="text"
        value={location}
        onChange={(e) => handleChange(e)}
        placeholder="Enter Location"
      />
      <ButtonSearch type="submit" onClick={(e) => handleSubmit(e)}>
        <BiSearchAlt2 color="white" size={24} />
      </ButtonSearch>
    </>
  );
};

export default SearchInput;
