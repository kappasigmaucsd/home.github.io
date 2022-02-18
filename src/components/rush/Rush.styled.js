import styled from "styled-components";

export const StyledRush = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: Fascinate;
    border-radius: 5px;
    //background-color: var(--blue);

    & {
      color: var(--pink);
      letter-spacing: 0.18em;
      position: relative;

      text-shadow: 1px 1px 1px var(--blue), 0.2em 0.15em 0 var(--purple);
    }
  }

  .rush-contact {
    // display: flex;
    // flex-direction: column;
    // justify-content: center;
    // align-items: center;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;
    }

    li > p {
      font-size: 1.5em;
    }

    svg {
      width: 20px;
      height: 20px;
      color: var(--light-grey);
    }
  }
`;
