import styled from "styled-components";

export const StyledSplash = styled.div`
  position: fixed;

  width: 100%;
  height: 100%;

  background-color: black;
  /*
  -webkit-animation-duration: 10s;animation-duration: 10s;
  -webkit-animation-fill-mode: both;animation-fill-mode: both;*/

  img {
    position: fixed;
    top: 50%;
    left: 50%;

    width: 100px;

    transform: translate(-50%, -50%);
  }

  @-webkit-keyframes fadeOut {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
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

  .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }
`;
