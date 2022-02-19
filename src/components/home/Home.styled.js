import styled from "styled-components";

export const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 80vh;

  h2 {
    //font-family: Fascinate;
  }

  animation: gradient 15s ease infinite;

  animation: fadeIn 2s ease-in backwards;
  animation-delay: 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const StyledText = styled.div`
  width: 100%;
  height: 100%;
  display: table;

  h3 {
    text-align: center;
    position: relative;
    display: table-cell;
    vertical-align: middle;

    font-family: Fascinate;
    // font-size: 8vw;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    span {
      display: inline-block;

      &:nth-child(1) {
        color: var(--blue);
        //text-shadow: 0 0 20px var(--white);

        &:after {
          content: "";
          background: var(--blue);
          position: relative;
          top: -0.1em;
          width: clamp(40vw, 43vw, 45vw);
          height: 1em;
          display: block;
          border-radius: 5px;
          //box-shadow: 0 0 20px var(--white);
        }
      }

      &:nth-child(3) {
        color: var(--pink);
        letter-spacing: 0.18em;
        position: relative;
        top: -1.15em;
        z-index: 2;
        text-shadow: 1px 1px 1px var(--blue), 0.2em 0.15em 0 var(--purple);
      }
    }
  }
`;

export const StyledImage = styled.picture`
  width: auto;
  border-radius: 500px;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 100% 100%;

  margin: 50px;

  img {
    max-width: 300px;
  }
`;
