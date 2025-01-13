import { ThemeProvider } from 'styled-components';

// styles initialization
import 'normalize.css';
import { GlobalStyles } from '@/styles/GlobalStyles';
import { theme } from '@/styles/theme';

// fonts initialization
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/500.css';
import '@fontsource/source-sans-3/700.css';

import Widget from '@/layouts/Widget/Widget';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <main>
        <Widget />
      </main>
    </ThemeProvider>
  );
}

export default App;
