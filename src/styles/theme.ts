export const theme = {
  colors: {
    primary: '#02BC9C',
    secondary: '#999999',
    text: '#333333',
    white: '#FFFFFF',
    lightGreen: '#E6FDF9',
    lightGrey: '#F2FBFA',
    grey: '#CCCCCC',
    bordreGrey: '#DDDDDD',
    black: '#000000',
    lightBackground: '#EEEEEE',
  },
  fonts: {
    primary: "'Source Sans 3', Arial, sans-serif",
  },
  fontSizes: {
    normal: '16px',
    medium: '18px',
    large: '24px',
  },
  lineHeights: {
    normal: '24px',
    medium: '28px',
    large: '32px',
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    bold: 700,
  },
  spacing: (factor: number) => `${factor * 8}px`,
};
