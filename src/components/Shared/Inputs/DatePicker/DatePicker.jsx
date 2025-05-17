import { useMemo, useState } from 'react';
import useModal from '../../../../hooks/useModal';
import SvgIcons from '../../SvgIcons/SvgIcons';
import Input from '../Input/Input';
import css from './DatePicker.module.css';

const getDays = date => {
  const year = date.getFullYear();
  const month = date.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const offset = (firstDayOfMonth + 6) % 7;

  const days = [];
  for (let i = 0; i < offset; i++) {
    days.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    const formatted = `${year}-${(month + 1).toString().padStart(2, '0')}-${i
      .toString()
      .padStart(2, '0')}`;
    days.push({
      day: i,
      formatted,
    });
  }
  return days;
};

export default function DatePicker({ field, ...rest }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const { isOpen, modalRef, handleOpenModal, handleCloseModal } = useModal();
  const days = useMemo(() => getDays(currentMonth), [currentMonth]);
  const monthYearNames = useMemo(
    () =>
      currentMonth.toLocaleDateString('default', { month: 'long' }) +
      ' ' +
      currentMonth.getFullYear(),
    [currentMonth]
  );
  const selectToggle = e => {
    isOpen ? handleCloseModal(e) : handleOpenModal(e);
  };

  const handleSelect = value => {
    if (isOpen) {
      field.onChange(value);
      handleCloseModal();
    }
  };
  const handleChangeMonth = dir => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + dir);
    setCurrentMonth(newMonth);
  };

  const getWeekdays = () => {
    const weekdays = Array.from(
      { length: 7 },
      (_, i) => new Date(2024, 0, i + 1)
    );

    const localizedWeekdays = weekdays.map(day =>
      day.toLocaleDateString('default', { weekday: 'short' })
    );
    return localizedWeekdays;
  };
  return (
    <Input readOnly {...field} {...rest} value={field.value} ref={modalRef}>
      <div className={css.calendar__btn} onClick={selectToggle}>
        <SvgIcons name="calendar" className={css.icon} />
      </div>
      {isOpen && (
        <div className={css.calendar__wrapper}>
          <div className={css.calendar__content}>
            <div className={css.calendar__header}>
              <span
                className={css.navigate__arrow}
                onClick={() => handleChangeMonth(-1)}></span>
              <p className={css.calendar__month}>{monthYearNames}</p>
              <span
                className={`${css.navigate__arrow} ${css.navigate__arrow_right}`}
                onClick={() => handleChangeMonth(1)}></span>
              <ul className={css.calendar__weekdays}>
                {getWeekdays().map((day, index) => (
                  <li key={index} className={css.calendar__weekdays_item}>
                    {day}
                  </li>
                ))}
              </ul>
            </div>
            <ul className={css.calendar__list_days}>
              {days.map((item, index) => (
                <li
                  key={index}
                  className={css.calendar__day}
                  onClick={() => item && handleSelect(item.formatted)}>
                  {item ? item.day : ''}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Input>
  );
}
