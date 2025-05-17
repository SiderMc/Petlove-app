import { Fragment, useId } from 'react';
import css from './Radio.module.css';
import SvgIcons from '../../SvgIcons/SvgIcons';

export default function Radio({
  className,
  name,
  radioValues,
  errors,
  ...rest
}) {
  const uid = useId();
  const errorMessage = errors?.[name]?.message;

  return (
    <div className={css.radio__group}>
      {radioValues.map(value => (
        <Fragment key={value}>
          <input
            id={`${uid}-${value}`}
            type="radio"
            name={name}
            value={value}
            className={css[`${className}_input_${value}`]}
            {...rest}
          />
          <label
            htmlFor={`${uid}-${value}`}
            className={css[`${className}_label`]}>
            <SvgIcons name={value} className={css[value]} />
          </label>
        </Fragment>
      ))}
      {errorMessage && (
        <p className={css.input__error_msg}>{errorMessage}</p>
      )}
    </div>
  );
}
