import { createGlobalStyle } from 'styled-components';
import { device } from "../utils/device";

import CoolCatsHandwritingRegularWoff from '../fonts/CoolCatsHandwritingRegular.woff';
import CoolCatsHandwritingRegularWoff2 from '../fonts/CoolCatsHandwritingRegular.woff2';

export const styledBorderPartial = `
  border: 4px solid var(--disabled);
  border-radius: var(--site-radius);
  margin-bottom: var(--site-spacing);
`;

export const styledInputPartial = `
  appearance: none;
  outline: none;
  padding: calc(var(--site-spacing) / 2);
  background: transparent;
  display: block;
  width: 100%;
  ${styledBorderPartial}

  &::placeholder {
    color: var(--disabled);
    font-weight: 600;
  }

  &:focus {
    border-color: var(--primary);
  }
`;

export const styledButtonPartial = `
  border: 0 none;
  background: var(--bluecat);
  color: var(--white);
  cursor: pointer;
  border-radius: var(--button-radius);
  font-family: var(--coolcats-font);
  display: block;
  font-family: var(--coolcats-font);
  font-weight: normal;
  text-transform: uppercase;
  text-align: center;
  height: 40px;
  line-height: 40px;
  padding: 0 32px;

  &:not([disabled]) {
    &:hover {
      filter: brightness(1.1);
    }
  }

  &[disabled] {
    background-color: var(--disabled);
    cursor: not-allowed;
  }
`;

const GlobalStyle = createGlobalStyle`
  :root {
    --white: white;
    --primary: #222;
    --secondary: #0070f3;
    --bluecat: #90CFF1;
    --disabled: #CCC;
    --border-width: 4px;
    --site-spacing: 16px;
    --site-spacingx2: calc(var(--site-spacing) * 2);
    --wrapper-spacing: 28px;
    --coolcats-font: "CoolCats Regular", sans-serif !important;
    --poppins-font: 'Poppins', sans-serif !important;
    --footer-header-color: white;
    --site-width: 1320px;
    --site-overflow-width: 1920px;
    --site-content-width: 600px;
    --font-size-p: 14px;
    --line-height-p: 24px;
    --font-size-h1: 48px;
    --font-size-h1-mobile: 28px;
    --line-height-h1: 48px;
    --line-height-h1-mobile: calc(28px * 1.25);
    --font-size-h2: 36px;
    --font-size-h2-mobile: 24px;
    --line-height-h2: 36px;
    --line-height-h2-mobile: calc(24px * 1.25);
    --font-size-h3: 32px;
    --font-size-h3-mobile: 20px;
    --line-height-h3: 32px;
    --line-height-h3-mobile: calc(20px * 1.25);
    --font-size-h4: 24px;
    --font-size-h4-mobile: 18px;
    --line-height-h4: 24px;
    --line-height-h4-mobile: calc(18px * 1.25);
    --font-size-h5: 14px;
    --font-size-h5-mobile: 16px;
    --line-height-h5: 18px;
    --line-height-h5-mobile: calc(16px * 1.25);
    --button-radius: 20px;
    --site-radius: 8px;
    --footer-background: var(--blue);
    --transparent-black: rgba(0, 0, 0, 0.5);
  }

  @font-face {
    font-family: 'CoolCats Regular';
    font-style: normal;
    font-weight: 400;
    src: local('CoolCats Regular'), url(${CoolCatsHandwritingRegularWoff}) format('woff2'),
    local('CoolCats Regular'), url(${CoolCatsHandwritingRegularWoff2}) format('woff');
    font-display: swap;
  }

  *:where(:not(html, iframe, canvas, img, svg, video, audio, input, select):not(svg *, symbol *)) {
    all: unset;
    display: revert;
  }

  iframe {
    display: none;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    transition: all 0.3s;
  }

  a, button {
    cursor: revert;
  }

  ol, ul, menu {
    list-style: none;
  }

  img {
    max-width: 100%;
  }

  table {
    border-collapse: collapse;
  }

  input, textarea {
    -webkit-user-select: auto;
  }

  textarea {
    white-space: revert;
  }

  ::placeholder {
    color: unset;
  }

  :where([hidden]) {
    display: none;
  }

  :where([contenteditable]:not([contenteditable="false"])) {
    -moz-user-modify: read-write;
    -webkit-user-modify: read-write;
    overflow-wrap: break-word;
    -webkit-line-break: after-white-space;
    -webkit-user-select: auto;
  }

  /* apply back the draggable feature - exist only in Chromium and Safari */
  :where([draggable="true"]) {
    -webkit-user-drag: element;
  }

  html,
  body {
    color: var(--primary);
    padding: 0;
    margin: 0;
    font-family: var(--poppins-font), -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  html {
    background-color: var(--footer-background);
  }

  body {
    overflow: overlay;
    overflow-x: hidden;
    background-color: white;

    button {
      ${styledButtonPartial}
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  p {
    font-size: 14px;

    ${device.mobileL} {
      font-size: 16px;
    }
  }
`;

export default GlobalStyle;
