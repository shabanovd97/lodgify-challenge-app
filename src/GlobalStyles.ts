import { createGlobalStyle } from 'styled-components';

import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/500.css';
import '@fontsource/source-sans-3/700.css';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${(props) => props.theme.fonts.primary};
    font-weight: ${(props) => props.theme.fontWeights.regular};
    font-size: ${(props) => props.theme.fontSizes.normal};
    line-height: ${(props) => props.theme.lineHeights.normal};
    color: ${(props) => props.theme.colors.text};
  }

  p {
    margin: 0;
  }
`;
