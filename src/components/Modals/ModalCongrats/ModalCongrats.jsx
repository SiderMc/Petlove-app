import css from './ModalCongrats.module.css'
import congrats from '../../../assets/modals/logOut.webp';
import congrats2x from '../../../assets/modals/logOut@2x.webp';
import congrats3x from '../../../assets/modals/logOut@3x.webp';
import Button from '../../Shared/Button/Button';

export default function ModalCongrats() {
    return <div className={css.modal__content}>
      <span className={css.modal__dec}>
        <picture>
          <source srcSet={`${congrats} 1x, ${congrats2x} 2x, ${congrats3x} 3x`} />
          <img
            src={congrats}
            className={css.modal__img}
            alt="logout image"
            loading="lazy"
          />
        </picture>
      </span>
      <h2 className={css.modal__title}>Congrats</h2>
      <p className={css.modal__text}>
      The first fluff in the favorites! May your friendship be the happiest and filled with fun.
      </p>
      <Button to="/" primary>Go to profile</Button>
    </div>
}