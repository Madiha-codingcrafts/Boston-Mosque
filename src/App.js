import { ThemeProvider} from "@mui/material";
import { theme } from './theme/theme';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import {Home } from './pages/Home';
import {PrayersTime } from './pages/PrayersTime';
import "./App.css"

function App() {
  return (
    <div className="app">
        <ThemeProvider theme={theme}>
          <Router>
            <Header />
            <Routes>
              <Route exact path="/" Component={() => <Home/>}/>
              <Route exact path="/prayers" Component={() => <PrayersTime/>}/>
            </Routes>
          </Router>
        </ThemeProvider>
    </div>
  );
}

export default App;
