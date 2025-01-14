export const theme = {
  colors: {
    primary: '#02BC9C',
    lightPrimary: '#E6FDF9',
    primaryText: '#333333',
    secondaryText: '#000000',
    lightPrimaryText: '#F2FBFA',
    lightSecondaryText: '#999999',
    primaryBorder: '#CCCCCC',
    secondaryBorder: '#DDDDDD',
    primaryBackground: '#FFFFFF',
    secondaryBackground: '#EEEEEE',
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
