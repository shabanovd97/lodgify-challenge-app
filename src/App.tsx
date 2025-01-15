import { ThemeProvider } from 'styled-components';

// styles initialization
import 'normalize.css';
import { GlobalStyle } from '@/styles/GlobalStyle';
import { theme } from '@/styles/theme';

// fonts initialization
import '@fontsource/source-sans-3/400.css';
import '@fontsource/source-sans-3/500.css';
import '@fontsource/source-sans-3/700.css';

// common Error handling component
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import TaskWidget from '@/layouts/TaskWidget/TaskWidget';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <GlobalStyle />
        {/* in case if we will need to expand our application with Routing it's a good place to do it here */}
        <main>
          <TaskWidget />
          {/* in the future, we can easily expand our application with new Features thanks to the implemented architecture */}
        </main>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
