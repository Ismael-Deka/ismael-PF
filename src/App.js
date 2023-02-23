import './App.css';
import { Route, Routes } from 'react-router';
import HomePage from './ pages/HomePage';
import PortfolioPage from './ pages/PortfolioPage';
import AboutMePage from './ pages/AboutMePage';
import RectGradiant from './assets/svg/rect_gradiant.svg';
import './assets/css/fonts.css';
import MenuBar from './components/MenuBar';

function App() {
  return (
    <div
      className="flex"
      style={{
        backgroundImage: `url(${RectGradiant})`, backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed',
      }}
    >
      <MenuBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pf" element={<PortfolioPage />} />
        <Route path="/about-me" element={<AboutMePage />} />
      </Routes>
    </div>
  );
}

export default App;
