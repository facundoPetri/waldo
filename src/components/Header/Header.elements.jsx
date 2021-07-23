import styled from "styled-components";

export const HeaderContainer = styled.div`
  background: #fcf3ca;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 170px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    min-height: 200px;
    height: 300px;
  }
`;

export const FacesContainer = styled.div`
  display: flex;
  margin-left: 29px;
  width: 4rem;
  height: 100%;
  @media screen and (max-width: 980px) {
    width: auto;
  }
`;

export const FaceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  opacity: ${({ charFound }) => (charFound ? "0.4" : "1")};
`;

export const Name = styled.p`
  font-size: 18px;
`;

export const Face = styled.img`
  padding-right: 0;
  border: 0;
  max-height: 130px;
  border-radius: 35px;
  margin: 0 11px 0 11px;
  border: 0;
`;

export const TitleWrapper = styled.div`
  display: flex;
`;

export const Title = styled.h1`
  font-size: 24px;
  letter-spacing: 1.1px;
  margin: 0;
  padding: 0;
`;

export const TitleBlue = styled.span`
  color: rgba(59, 130, 246, 1);
`;

export const TitleRed = styled.span`
  color: rgba(239, 68, 68, 1);
`;

export const TimeWrapper = styled.div`
  margin-right: 40px;
`;

export const Time = styled.p`
  margin-bottom: 10px;
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 1.2px;
  color: black;
`;
