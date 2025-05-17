import { Fragment, useId } from 'react';
import css from './RadioFilter.module.css';
import SvgIcons from '../../SvgIcons/SvgIcons';

export default function RadioFilter({
  radioValues,
  field,
  resetField,
  ...rest
}) {
  const uid = useId();

  const handleReset = e => {
    e.preventDefault();
    resetField(field.name);
  };
  console.log(field.value);
  return (
    <>
      {radioValues.map(item => (
        <Fragment key={item.value}>
          <input
            id={`${uid}-${item.value}`}
            type="radio"
            name={field.name}
            value={item.value}
            checked={field.value === item.value}
            onChange={field.onChange}
            className={css[`radio__input_${item.value}`]}
            {...rest}
          />
          <label
            htmlFor={`${uid}-${item.value}`}
            className={css.filter__label}
            onClick={field.value === item.value ? handleReset : null}>
            {item.label}
            {field.value === item.value && (
              <SvgIcons name="close" className={css.icon} />
            )}
          </label>
        </Fragment>
      ))}
    </>
  );
}
