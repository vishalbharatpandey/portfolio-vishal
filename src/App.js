import LandingPage from './components/landing-page';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LandingPage />
      </BrowserRouter>
    </div>
  );
}

export default App;
