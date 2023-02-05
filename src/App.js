import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './SharedComponents/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/"
          element={
            <Navbar />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
