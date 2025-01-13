import { ThemeProvider } from 'styled-components';

// styles initialization
import 'normalize.css';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

// fonts initialization
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/500.css';
import '@fontsource/source-sans-3/700.css';

import Widget from '@/layouts/Widget/Widget';
import ErrorBoundary from '@/components/ErrorBoundary';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <GlobalStyle />
        <main>
          <Widget />
        </main>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
