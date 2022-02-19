import styled from "styled-components";

export const StyledRush = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-family: Fascinate;
    border-radius: 5px;

    & {
      color: var(--pink);
      letter-spacing: 0.18em;
      position: relative;

      text-shadow: 1px 1px 1px var(--blue), 0.2em 0.15em 0 var(--purple);
    }
  }

  iframe {
    padding: 15px;
    // background-color: var(--pink);
    border-radius: 5px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: var(--fz-lg);

    li {
      //font-size: 1em;
      margin-bottom: 10px;
    }
  }

  .rush-events,
  .rush-contacts {
    width: 80%;
    margin: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .rush-contact {
    li > p {
      font-size: 1.5em;
    }

    li > a {
      margin: 0;
      padding: 0;
    }

    svg {
      width: 20px;
      height: 20px;
      color: var(--light-grey);
    }
  }
`;
