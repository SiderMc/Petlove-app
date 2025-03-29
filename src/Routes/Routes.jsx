import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Layout from '../components/MainPage/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage />} />
      <Route path="/test" element={<div>Test</div>} />
      <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  );
}
