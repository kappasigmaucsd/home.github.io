import { css } from "styled-components";

export const theme = {
  main_blue: "#0a192f",
  light_blue: "#112240",
  lightest_blue: "#233554",
  white: "#fff",
  darker_black: "#141414",
  lighter_black: "#313131",
  blue: "#00fffb",
  grey: "#8892b0",
  main: "#32cd32",
  lightest_grey: "#ccd6f6",
  light_grey: "#a8b2d1",

  mobile: "576px",

  link: css`
    display: inline-block;
    text-decoration: none;
    text-decoration-skip-ink: auto;
    color: inherit;
    position: relative;
    transition: var(--transition);
    &:hover,
    &:active,
    &:focus {
      color: var(--pink);
      outline: 0;
    }
  `,

  inlineLink: css``,

  smallButton: css`
    color: var(--main);
    background-color: transparent;
    border: 1px solid var(--main);
    border-radius: 5px;
    padding: 0.75rem 1rem;
    font-size: var(--fz-xs);
    font-family: var(--font-mono);
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
  `,
};
