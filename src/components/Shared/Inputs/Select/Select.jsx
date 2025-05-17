import useModal from '../../../../hooks/useModal';
import SvgIcons from '../../SvgIcons/SvgIcons';
import Input from '../Input/Input';
import css from './Select.module.css';

export default function Select({ field, options, ...rest }) {
  const { isOpen, modalRef, handleOpenModal, handleCloseModal } = useModal();

  const selectToggle = e => {
    isOpen ? handleCloseModal(e) : handleOpenModal(e);
  };

  const handleSelect = value => {
    if (isOpen) {
      field.onChange(value);
      handleCloseModal();
    }
  };
  return (
    <Input readOnly {...field} {...rest} value={field.value} ref={modalRef}>
      <div className={css.select__btn} onClick={selectToggle}>
        {isOpen ? (
          <SvgIcons name="arrow" className={css.icon} />
        ) : (
          <SvgIcons name="arrowOpen" className={css.icon} />
        )}
      </div>
      {isOpen && (
        <ul className={css.select__list}>
          {options.map(option => (
            <li
              className={css.option}
              key={option}
              onClick={() => handleSelect(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </Input>
  );
}
