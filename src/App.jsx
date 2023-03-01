import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, UserDetails } from './pages';
import { HOME_ROUTE } from './constants/routes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<Home />} />
          <Route path="userDetails/:id" ß element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
