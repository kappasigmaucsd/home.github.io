import styled from "styled-components";

export const StyledLeadership = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2,
  h3 {
    font-family: Fascinate;
    border-radius: 5px;

    & {
      color: var(--pink);
      letter-spacing: 0.18em;
      position: relative;

      text-shadow: 1px 1px 1px var(--blue), 0.2em 0.15em 0 var(--purple);
    }
  }
`;
