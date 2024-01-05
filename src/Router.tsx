import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WaitingRoom from './pages/WaitingRoom';
import Main from './pages/Main/Main';
import Room from './pages/Room/Room';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/waiting-rooms" element={<WaitingRoom />} />
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
