import css from './Header.module.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Burger from '../../Shared/Burger/Burger';
import UserNav from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import SvgIcons from '../../Shared/SvgIcons/SvgIcons';
import { useState } from 'react';
import MobMenu from '../../Shared/MobMenu/MobMenu';
import usePageCheck from '../../../hooks/usePageCheck';
import Container from '../../Shared/Container/Container';

export default function Header() {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const { selector, page } = usePageCheck('/', 'home');

  const handleToggleMenu = () => {
    setOpenMenu(prev => !prev);
  };
  return (
    <>
      <Container>
        <header
          className={page ? css.header__home : css.header}
          data-header={selector}>
          <Link to="/" className={css.logo}>
            <SvgIcons name={page ? 'logoHome' : 'logo'} className={css.icon} />
          </Link>
          <Navigation />
          <AuthNav />
          {/* <UserNav isHome={page} /> */}
          <Burger openMenu={handleToggleMenu} />
        </header>
      </Container>
      <MobMenu isOpen={isOpenMenu} closeMenu={handleToggleMenu} />
    </>
  );
}
