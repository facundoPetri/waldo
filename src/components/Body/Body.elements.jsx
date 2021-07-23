import styled from "styled-components";

export const BodyContainer = styled.div`
  background: #101522;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
`;

export const WrapperDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Scoreboard = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
`;

export const ScoreboardTitle = styled.h3``;

export const Score = styled.p`
  font-size: 20px;
  margin-top: 3px;
  margin-bottom: 3px;
`;

export const Img = styled.img`
  margin: 30px 0 30px 0;
  max-width: 100%;
  max-height: 100%;
  cursor: pointer;
`;

export const Footer = styled.footer`
  display: flex;
`;

export const FooterText = styled.div`
  color: white;
`;

export const Name = styled.span`
  font-style: italic;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #036d97a6;

  &:hover {
    text-decoration: underline;
  }
`;

export const CharactersDropdown = styled.div`
  position: absolute;
  left: ${({ posX }) => posX};
  top: ${({ posY }) => posY};
  width: 100px;
  height: auto;
  background-color: #f0ebebbe;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
`;

export const CharacterName = styled.p`
  padding: 0.5rem 0.7rem;
  margin: 0;
  font-size: 18px;
  cursor: pointer;
  display: ${({ charFound }) => (charFound ? "none" : "block")};

  &:hover {
    font-size: 19px;
    background-color: #ffffff;
    transition: 0.2s ease-out;
  }
`;
