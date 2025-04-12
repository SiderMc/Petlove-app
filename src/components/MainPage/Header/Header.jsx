import css from './Header.module.css';
import { Link } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import Burger from '../../Shared/Burger/Burger';
import UserNav from '../UserNav/UserNav';
import AuthNav from '../AuthNav/AuthNav';
import SvgIcons from '../../Shared/SvgIcons/SvgIcons';
import MobMenu from '../../Shared/MobMenu/MobMenu';
import usePageCheck from '../../../hooks/usePageCheck';
import Container from '../../Shared/Container/Container';
import useModal from '../../../hooks/useModal';

export default function Header() {
  const { isOpen, modalRef, handleCloseModal, handleOpenModal } = useModal();
  const { selector, page } = usePageCheck('/', 'home');
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
          <Burger openMenu={handleOpenModal} />
        </header>
      </Container>
      <MobMenu isOpen={isOpen} closeMenu={handleCloseModal} modalRef={modalRef}/>
    </>
  );
}
