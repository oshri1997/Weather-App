import NavLeft from "../Nav/Navbar";

import {
  LeftContianer,
  SearchContainer,
  Card,
  CardHeader,
  FormContainer,
  LineDivider,
} from "./SearchContainerStyle";
import SearchInput from "./SearchInput";

const LeftSide = () => {
  return (
    <LeftContianer>
      <NavLeft />
      <SearchContainer>
        <Card>
          <CardHeader>The Only Weather Forecast You Need</CardHeader>
          <LineDivider />
          <FormContainer>
            <SearchInput />
          </FormContainer>
        </Card>
      </SearchContainer>
    </LeftContianer>
  );
};

export default LeftSide;
