import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    width: 100%;
    scroll-behavior: smooth;
  }
  body {
    font-family: Corbel, "Lucida Grande", "Lucida Sans Unicode", "Lucida Sans", "DejaVu Sans", "Bitstream Vera Sans", "Liberation Sans", Verdana, "Verdana Ref", sans-serif;
    background: var(--black);
    margin: 0;
    height: 100%;
    overflow-x: hidden;
    color: var(--white);
    text-rendering: optimizeLegibility;
  }
  section {
    margin: 0 auto;
    padding: 100px 0 50px 0;
    max-width: 1000px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0 0 10px 0;
    font-weight: 600;
    color: var(--lightest-grey);
    line-height: 1.1;
  }
  /* Scrollbar Styles */
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--dark-grey) var(--black);
  }
  body::-webkit-scrollbar {
    width: 12px;
  }
  body::-webkit-scrollbar-track {
    background: var(--black);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--dark-grey);
    border: 3px solid var(--black);
    border-radius: 10px;
  }
  img, svg {
    width: 100%;
    max-width: 100%;
    vertical-align: middle;
  }
  img[alt=""],
  img:not([alt]) {
    filter: blur(5px);
  }
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
    &.feather {
      fill: none;
    }
  }
  a {
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;

    &:hover,
    &:focus {
      color: var(--pink);
    }
  }
  p {
    margin: 0 0 15px 0;
    
    & > a {
      &:hover,
      &:focus,
      &:active {
        color: var(--pink);
        & > * {
          color: var(--pink) !important;
        }
      }
      &:after {
        content: "";
        display: block;
        width: 0;
        height: 1px;
        position: relative;
        bottom: 0.2em;
        background-color: var(--pink);
      }
    }
    
  }
  ul {
    &.fancy-list {
      padding: 0;
      margin: 0;
      list-style: none;
      font-size: var(--fz-lg);
      li {
        position: relative;
        padding-left: 30px;
        margin-bottom: 10px;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          color: var(--pink);
        }
      }
    }
  }
`;
