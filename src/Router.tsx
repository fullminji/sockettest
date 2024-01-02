import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import WaitingRoom from './pages/WaitingRoom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/waiting-rooms" element={<WaitingRoom />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
