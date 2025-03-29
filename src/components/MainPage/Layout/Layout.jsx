import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import Header from '../Header/Header';
import Container from '../../Shared/Container/Container';

export default function Layout() {
  return (
    <div className={css.wrapper}>
        <Header />
        <main>
          <Outlet />
        </main>
    </div>
  );
}
