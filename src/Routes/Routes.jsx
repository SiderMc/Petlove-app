import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import Layout from '../components/MainPage/Layout/Layout';
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from '../pages/LoginPage/LoginPage';
import AddPetPage from '../pages/AddPetPage/AddPetPage';
import NoticesPage from '../pages/NoticesPage/NoticesPage';

export default function RoutesApp() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<HomePage />} />
      <Route path="/registration" element={<RegistrationPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      <Route path="/add-pet" element={<AddPetPage/>} />
      <Route path='/notice' element={<NoticesPage/>}/>
      <Route path="*" element={<NotFoundPage/>} />
      </Route>
    </Routes>
  );
}
