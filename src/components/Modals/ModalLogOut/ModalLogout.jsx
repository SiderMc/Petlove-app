import css from './ModalLogout.module.css';
import logout from '../../../assets/modals/logOut.webp';
import logout2x from '../../../assets/modals/logOut@2x.webp';
import logout3x from '../../../assets/modals/logOut@3x.webp';
import Button from '../../Shared/Button/Button';

export default function ModalLogout() {
  return (
    <div className={css.modal__content}>
      <span className={css.modal__dec}>
        <picture>
          <source srcSet={`${logout} 1x, ${logout2x} 2x, ${logout3x} 3x`} />
          <img
            src={logout}
            className={css.modal__img}
            alt="logout image"
            loading="lazy"
          />
        </picture>
      </span>
      <h2 className={css.modal__title}>Already leaving?</h2>
      <div className={css.modal__actions}>
        <Button primary type="button" className={css.modal__btn}>
          Yes
        </Button>
        <Button simple type="button" className={css.modal__btn}>
          Cancel
        </Button>
      </div>
    </div>
  );
}
