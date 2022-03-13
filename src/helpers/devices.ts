export const breakpoints = [
  "360px",
  "576px",
  "768px",
  "992px",
  "1200px",
  "1400px",
];

const devices = {
  xSmall: `@media screen and (max-width: ${breakpoints[0]})`,
  small: `@media screen and (max-width: ${breakpoints[1]})`,
  medium: `@media screen and (max-width: ${breakpoints[2]})`,
  large: `@media screen and (max-width: ${breakpoints[3]})`,
  xLarge: `@media screen and (max-width: ${breakpoints[4]})`,
  xxLarge: `@media screen and (min-width: ${breakpoints[5]})`,
};

export default devices;
