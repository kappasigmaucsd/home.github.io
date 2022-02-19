import styled from "styled-components";

export const StyledPortrait = styled.div`
  padding: 20px;

  .card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--blue);
    border-radius: 50px;

    img {
      border-radius: 50px;
      margin-top: 10px;
      max-height: 250px;
      max-width: 250px;

      filter: none;
      padding: 5px;
      background-color: var(--pink);
    }

    svg {
      width: 20px;
      height: 20px;
      color: var(--white);
    }
    .card-title {
      background-color: var(--pink);
      border-radius: 5px;
      padding: 5px;
      font-size: 1em;
    }
    .portrait-details {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
