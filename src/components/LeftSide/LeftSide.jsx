import NavLeft from "../Nav/NavLeft";
import { BiSearchAlt2 } from "react-icons/bi";
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
  return (
    <LeftContianer>
      <NavLeft />
      <SearchContainer>
        <Card>
          <CardHeader>The Only Weather Forecast You Need</CardHeader>
          <LineDivider />
          <FormContainer>
            <Input type="text" placeholder="Enter Location" />
            <ButtonSearch type="submit">
              <BiSearchAlt2 color="white" size={24} />
            </ButtonSearch>
          </FormContainer>
        </Card>
      </SearchContainer>
    </LeftContianer>
  );
};

export default LeftSide;
