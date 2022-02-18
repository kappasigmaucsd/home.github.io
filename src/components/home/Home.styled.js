import styled from "styled-components";

export const StyledHome = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 80vh;

  .headers {
    padding: 10px 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  animation: gradient 15s ease infinite;

  animation: blurFadeIn 0.5s ease-in backwards;
  animation-delay: 0.5s;

  @keyframes blurFadeIn {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }
    20%,
    75% {
      opacity: 1;
      transform: scale(1);
    }
  }
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export const StyledImage = styled.div`
  width: auto;
  border-radius: 500px;

  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 100% 100%;

  margin: 50px;

  // img {
  //   max-width: 400px;
  // }
`;
