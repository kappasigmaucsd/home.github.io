import styled from "styled-components";

export const StyledContact = styled.section`
  display: flex;
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

  form {
    display: flex;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 25px;
    padding: 25px;
    border-radius: 25px;
    background-color: var(--blue);

    #name,
    #email,
    #subject,
    #message {
      width: 100%;
    }

    input {
      border-radius: 5px;
      margin: 2px;
      border: 0px solid;
    }

    textarea:focus,
    input:focus {
      outline: none;
    }

    button {
      color: var(--pink);
      border: 1px solid var(--pink);

      border-radius: 4px;
      padding: 1.25rem 1.75rem;
      font-size: var(--fz-sm);
      line-height: 1;
      text-decoration: none;
      cursor: pointer;
      transition: var(--transition);
      &:hover,
      &:focus,
      &:active {
        background-color: var(--main-tint);
        outline: none;
      }
      &:after {
        display: none !important;
      }
    }
  }
`;
