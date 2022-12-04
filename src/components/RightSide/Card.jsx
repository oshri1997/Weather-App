import { Container, BigHeader, CardContent, MediumHeader, SmallHeader } from "./CardStyle";

const Card = ({ data }) => {
  return (
    <Container>
      <CardContent>
        <BigHeader>{data.temp}</BigHeader>
        <MediumHeader>{data.weather}</MediumHeader>
        <SmallHeader>{data.date}</SmallHeader>
      </CardContent>
    </Container>
  );
};

export default Card;
