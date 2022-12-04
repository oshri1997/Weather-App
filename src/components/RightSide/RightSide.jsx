import Days from "./Days";
import {
  Container,
  BigHeader,
  Details,
  LeftChild,
  MainCard,
  MediumHeader,
  RightChild,
  SmallHeader,
  DetailsContainer,
} from "./RightSideStyle";

const RightSide = () => {
  return (
    <Container>
      <BigHeader color="#20242f">Today</BigHeader>
      <MainCard>
        <LeftChild>
          <BigHeader color="#94164f">17°C</BigHeader>
          <MediumHeader>Clouds</MediumHeader>
          <SmallHeader>Monday Oct 2021</SmallHeader>
        </LeftChild>
        <RightChild>
          <DetailsContainer>
            <Details>Real Feel: 17°C</Details>
            <Details>Humidiy: 83%</Details>
            <Details>Cloud Cover: 90%</Details>
            <Details>Min Temp: 17°C</Details>
            <Details>Max Temp: 17°C</Details>
          </DetailsContainer>
        </RightChild>
      </MainCard>
      <Days />
    </Container>
  );
};

export default RightSide;
