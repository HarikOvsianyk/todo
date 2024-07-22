import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Todo } from './features';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <CssVarsProvider>
        <Sheet variant="plain">
          <Todo />
        </Sheet>
      </CssVarsProvider>
    </QueryClientProvider>
  )
}

export default App
