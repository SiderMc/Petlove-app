import ButtonClose from '../../Shared/ButtonClose/ButtonClose';
import css from './ModalWrapper.module.css';

export default function ModalWrapper({ isOpen,modalRef,closeHandler, children }) {
  return (
    <section className={css.backdrop__modal} data-modal={isOpen?'open':""} >
      <div className={css.modal} ref={modalRef}>
        <div className={css.modal__container}>
          <ButtonClose
            primary
            className={css.modal__close}
            closeHandler={closeHandler}
          />
          {children}
        </div>
      </div>
    </section>
  );
}
