export const breakpoints = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  sitecontent: 600,
  tablet: 768,
  laptop: 1024,
  desktop: 1321,
  laptopL: 1440,
  desktopL: 2560,
};

export const device = {
  mobileS: `@media screen and (min-width: ${breakpoints.mobileS}px)`,
  mobileM: `@media screen and (min-width: ${breakpoints.mobileM}px)`,
  mobileL: `@media screen and (min-width: ${breakpoints.mobileL}px)`,
  sitecontent: `@media screen and (min-width: ${breakpoints.sitecontent}px)`,
  below_sitecontent: `@media screen and (max-width: ${breakpoints.sitecontent}px)`,
  tablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
  below_tablet: `@media screen and (max-width: ${breakpoints.tablet}px)`,
  laptop: `@media screen and (min-width: ${breakpoints.laptop}px)`,
  below_laptop: `@media screen and (max-width: ${breakpoints.laptop}px)`,
  desktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
  laptopL: `@media screen and (min-width: ${breakpoints.laptopL}px)`,
  desktopL: `@media screen and (min-width: ${breakpoints.desktopL}px)`,
  retina: `@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5)`,
};
