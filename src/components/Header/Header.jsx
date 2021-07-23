import {
  HeaderContainer,
  FacesContainer,
  FaceWrapper,
  Name,
  Face,
  TitleWrapper,
  Title,
  TitleBlue,
  TitleRed,
  TimeWrapper,
  Time,
} from "./Header.elements";
import waldo from "../../images/waldo.png";
import wizard from "../../images/wizard.png";
import odlaw from "../../images/odlaw.png";

const Header = ({ time, foundCharacters }) => {
  return (
    <>
      <HeaderContainer>
        <FacesContainer>
          <FaceWrapper charFound={foundCharacters.waldo}>
            <Face src={waldo} alt="" />
            <Name>Waldo</Name>
          </FaceWrapper>
          <FaceWrapper charFound={foundCharacters.wizard}>
            <Face src={wizard} alt="" />
            <Name>Wizard</Name>
          </FaceWrapper>
          <FaceWrapper charFound={foundCharacters.odlaw}>
            <Face src={odlaw} alt="" />
            <Name>Odlaw</Name>
          </FaceWrapper>
        </FacesContainer>
        <TitleWrapper>
          <Title>
            <TitleBlue>Where's</TitleBlue> <TitleRed>Waldo</TitleRed>
          </Title>
        </TitleWrapper>
        <TimeWrapper>
          <Time>
            {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
            {("0" + Math.floor((time / 1000) % 60)).slice(-2)}.
            {("0" + ((time / 100) % 100)).slice(-1)}
          </Time>
        </TimeWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
