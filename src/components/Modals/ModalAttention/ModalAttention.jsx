import AuthNav from '../../MainPage/AuthNav/AuthNav';
import css from './ModalAttention.module.css';
import attention from '../../../assets/modals/attention.webp';
import attention2x from '../../../assets/modals/attention@2x.webp';
import attention3x from '../../../assets/modals/attention@3x.webp';

export default function ModalAttention() {
  return (
    <div className={css.modal__content}>
      <span className={css.modal__dec}>
        <picture>
          <source
            srcSet={`${attention} 1x, ${attention2x} 2x, ${attention3x} 3x`}
          />
          <img
            src={attention}
            className={css.modal__img}
            alt="attention image"
            loading="lazy"
          />
        </picture>
      </span>
      <h2 className={css.modal__title}>Attention</h2>
      <p className={css.modal__text}>
        We would like to remind you that certain functionality is available only
        to authorized users.If you have an account, please log in with your
        credentials. If you do not already have an account, you must register to
        access these features.
      </p>
      <div className={css.modal__actions}>
        <AuthNav />
      </div>
    </div>
  );
}
