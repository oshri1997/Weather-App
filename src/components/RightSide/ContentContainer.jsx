import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import Days from "./DaysContainer";
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
} from "./ContentContainerStyle";

const ContentContainer = () => {
  const dataToday = useSelector((state) => state.weather.data?.list?.[0]);
  const loading = useSelector((state) => state.weather.loading);
  const error = useSelector((state) => state.weather.error);
  const date = moment(dataToday?.dt_txt).format("ddd MMM YYYY");

  const content = () => {
    if (loading) {
      return (
        <>
          <TailSpin
            height="80"
            width="80"
            color="#2F7577"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
            visible={true}
          />
        </>
      );
    }
    if (dataToday) {
      return (
        <>
          <BigHeader color="#20242f">Today</BigHeader>

          <MainCard>
            <LeftChild>
              <BigHeader color="#94164f">{Math.trunc(dataToday.main.temp)}°C</BigHeader>
              <MediumHeader>{dataToday.weather[0].main}</MediumHeader>
              <SmallHeader>{date}</SmallHeader>
            </LeftChild>
            <RightChild>
              <DetailsContainer>
                <Details>Real Feel: {Math.trunc(dataToday.main.feels_like)}°C</Details>
                <Details>Humidiy: {dataToday.main.humidity}%</Details>
                <Details>Cloud Cover: {dataToday.clouds.all}%</Details>
                <Details>Min Temp: {Math.trunc(dataToday.main.temp_min)}°C</Details>
                <Details>Max Temp: {Math.trunc(dataToday.main.temp_max)}°C</Details>
              </DetailsContainer>
            </RightChild>
          </MainCard>
          <Days />
        </>
      );
    }
    if (!loading && !dataToday && error === "")
      return <BigHeader color="#20242f">No Data Yet</BigHeader>;
    if (error) return <BigHeader color="#20242f">Error-try again</BigHeader>;
  };
  return <Container>{content()}</Container>;
};

export default ContentContainer;
