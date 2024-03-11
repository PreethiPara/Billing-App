import './App.css';
import {theme} from './Constants/theme'
import { ThemeProvider, useTheme } from '@mui/material';
import ClientDashBoard from './Pages/ClientDashBoard/ClientDashBoard';

function App() {
  return (
    <div className="App">
        <ClientDashBoard/>
    </div>
  );
}

export default App;
