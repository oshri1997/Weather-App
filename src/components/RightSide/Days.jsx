import React from "react";
import Card from "./Card";
import { DaysContainer, CardsContainer, Header } from "./DaysStyle";

const data = [
  {
    temp: "17°C",
    weather: "Clouds",
    date: "Monday Oct 2021",
  },
  {
    temp: "17°C",
    weather: "Clouds",
    date: "Monday Oct 2021",
  },
  {
    temp: "17°C",
    weather: "Clouds",
    date: "Monday Oct 2021",
  },
  {
    temp: "17°C",
    weather: "Clouds",
    date: "Monday Oct 2021",
  },
];
const Days = () => {
  return (
    <DaysContainer>
      <Header>More On New York,US</Header>
      <CardsContainer>
        {data.map((day, index) => {
          return <Card key={index} data={day}></Card>;
        })}
      </CardsContainer>
    </DaysContainer>
  );
};

export default Days;
