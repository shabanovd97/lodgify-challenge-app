import { ThemeProvider } from 'styled-components';

// styles initialization
import 'normalize.css';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';

// fonts initialization
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/500.css';
import '@fontsource/source-sans-3/700.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>Content</main>
    </ThemeProvider>
  );
}

export default App;
