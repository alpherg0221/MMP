import {Box, CssBaseline, CssVarsProvider} from "@mui/joy";
import Sidebar from "./components/sidebar/Sidebar.tsx";

function App() {
  return (
      <CssVarsProvider disableTransitionOnChange>
        <CssBaseline/>
        <Box sx={ { display: 'flex', minHeight: '100vh' } }>
          <Sidebar/>
        </Box>
      </CssVarsProvider>
  )
}

export default App
