import merge from "deepmerge";
import typography from "./typography";
import colors from "./colors";
import styles from "./styles";
import prism from "./prism";

const theme = merge(typography, {
  initialColorMode: `light`,
  colors,
  baseFontSize: "21px",
  fonts: {
    heading: `Playfair Display, serif`,
    secondaryHeading: `Lato, system-ui, sans-serif`,
    body: "Georgia, system-ui, serif",
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`
  },
  sizes: {
    container: 728
  },
  styles,
  prism
});

theme.fontSizes = [18, 21, 26, 34, 48, 60];

export default theme;
