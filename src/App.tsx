import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import { Todo } from './features';

const App = () => {
  return (
    <CssVarsProvider>
      <Sheet variant="plain">
        <Todo />
      </Sheet>
    </CssVarsProvider>
  )
}

export default App
