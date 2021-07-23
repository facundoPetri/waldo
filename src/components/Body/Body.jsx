import waldo_bg from "../../images/waldo_bg.jpg";
import {
  BodyContainer,
  Img,
  Footer,
  FooterText,
  Name,
  Link,
  CharactersDropdown,
  CharacterName,
  WrapperDiv,
  Scoreboard,
  Score,
  ScoreboardTitle,
} from "./Body.elements";
import { useState } from "react";

const Body = ({ foundCharacters, scoreboard, validateCharClicked }) => {
  const [posX, setPosX] = useState("-9999px");
  const [posY, setPosY] = useState("-9999px");

  const [charX, setCharX] = useState();
  const [charY, setCharY] = useState();

  const getMousePos = (e) => {
    createCharactersDropdown(e);

    let rect = e.target.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let y = e.clientY - rect.top; //y position within the element.

    let clickedCoordsX = (1024 * x) / rect.width; // x depending on image resize
    let clickedCoordsY = (768 * y) / rect.height; // y depending on image resize

    setCharX(Math.floor(clickedCoordsX));
    setCharY(Math.floor(clickedCoordsY));
  };

  const createCharactersDropdown = ({ pageX, pageY }) => {
    if (posX === "-9999px") {
      setPosX(`${pageX}px`);
      setPosY(`${pageY}px`);
    } else {
      setPosX("-9999px");
      setPosY("-9999px");
    }
  };

  const scores = scoreboard.map((elem, i) => (
    <Score key={i}>
      {i + 1}. {elem.name} {elem.time}
    </Score>
  ));
  return (
    <>
      <BodyContainer>
        <CharactersDropdown posX={posX} posY={posY}>
          <CharacterName
            charFound={foundCharacters.waldo}
            onClick={() => validateCharClicked(charX, charY, "waldo")}
          >
            Waldo
          </CharacterName>
          <CharacterName
            charFound={foundCharacters.wizard}
            onClick={() => validateCharClicked(charX, charY, "wizard")}
          >
            Wizard
          </CharacterName>
          <CharacterName
            charFound={foundCharacters.odlaw}
            onClick={() => validateCharClicked(charX, charY, "odlaw")}
          >
            Odlaw
          </CharacterName>
        </CharactersDropdown>
        <WrapperDiv>
          <Img src={waldo_bg} alt="" onClick={(e) => getMousePos(e)} />
          <Scoreboard>
            <>
              <ScoreboardTitle>Scoreboard</ScoreboardTitle>
              {scores}
            </>
          </Scoreboard>
        </WrapperDiv>
        <Footer>
          <FooterText>
            Hecho por <Name>Facundo Petri</Name> para{" "}
            <Link href="https://www.theodinproject.com/" target="_blank">
              The Odin Project
            </Link>
            .
          </FooterText>
        </Footer>
      </BodyContainer>
    </>
  );
};

export default Body;
