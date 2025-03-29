import usePageCheck from '../../../hooks/usePageCheck';
import AuthNav from '../../MainPage/AuthNav/AuthNav';
import Navigation from '../../MainPage/Navigation/Navigation';
import Button from '../Button/Button';
import ButtonClose from '../ButtonClose/ButtonClose';
import Container from '../Container/Container';
import css from './MobMenu.module.css';

export default function MobMenu({ isOpen, closeMenu }) {
  const { page } = usePageCheck('/');

  return (
    <section
      className={page ? css.mobile__menu_home : css.mobile__menu}
      data-menu={isOpen ? 'open' : ''}>
      <Container>
        <div className={css.mobile__content}>
          <ButtonClose
            primary={page}
            close={closeMenu}
            className={css.btn__close_menu}
          />
          <Navigation className={css.active__nav_link} />
          <AuthNav />
          {/* <Button to="/logout" secondary>LOG OUT</Button> */}
        </div>
      </Container>
    </section>
  );
}
