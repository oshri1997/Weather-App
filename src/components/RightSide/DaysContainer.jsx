import React from "react";
import { useSelector } from "react-redux";
import Card from "./DayCard";
import { DaysContainer, CardsContainer, Header } from "./DaysContainerStyle";

const Days = () => {
  const daysData = useSelector((state) => state.weather.data?.list);
  const { name: cityName, country: countryName } = useSelector(
    (state) => state.weather.data?.city
  );
  return (
    <>
      {daysData && (
        <DaysContainer>
          <Header>
            More On {cityName},{countryName}
          </Header>
          <CardsContainer>
            {daysData.slice(1, 5).map((day, index) => {
              //without the first day
              return <Card key={index} data={day}></Card>;
            })}
          </CardsContainer>
        </DaysContainer>
      )}
    </>
  );
};

export default Days;
