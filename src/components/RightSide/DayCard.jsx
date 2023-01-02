import { Container, BigHeader, CardContent, MediumHeader, SmallHeader } from "./DayCardStyle";
import moment from "moment/moment";
const Card = ({ data }) => {
  const date = moment(data.dt_txt).format("ddd MMM YYYY");
  return (
    <Container>
      <CardContent>
        <BigHeader>{Math.trunc(data.main.temp)}°C</BigHeader>
        <MediumHeader>{data.weather[0].main}</MediumHeader>
        <SmallHeader>{date}</SmallHeader>
      </CardContent>
    </Container>
  );
};

export default Card;
