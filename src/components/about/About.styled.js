import styled from "styled-components";

export const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //min-height: 100vh;

  h2 {
    font-family: Fascinate;
    border-radius: 5px;
    //background-color: var(--blue);

    &:nth-child(1) {
      color: var(--pink);
      letter-spacing: 0.18em;
      position: relative;

      text-shadow: 1px 1px 1px var(--blue), 0.2em 0.15em 0 var(--purple);
    }
  }
`;

export const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  background-color: var(--blue);

  margin: 0 100px;
  padding: 25px;

  @media only screen and (max-width: 768px) {
    margin: 0 25px;
  }
`;

export const StyledImage = styled.picture`
  border-radius: 10px;
  background-color: var(--blue);
  padding: 20px;
  margin: 25px 100px;

  img {
    padding: 10px;
    border-radius: 10px;
    background-color: var(--pink);
  }

  @media only screen and (max-width: 768px) {
    padding: 5px;
    margin: 25px;

    img {
      padding: 5px;
    }
  }
`;
