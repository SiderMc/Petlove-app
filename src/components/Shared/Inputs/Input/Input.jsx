import { useId } from 'react';
import css from './Input.module.css';

export default function Input({
  children,
  simple,
  primary,
  secondary,
  valid,
  noValid,
  name,
  id,
  type,
  errors,
  field,
  ref,
  ...rest
}) {
  const uid = useId();
  const errorMessage = errors?.[name]?.message;
  let inputClass = '';

  switch (true) {
    case valid:
      inputClass = css.input__valid;
      break;
    case noValid:
      inputClass = css.input__error;
      break;
    case primary:
      inputClass = css.input__primary;
      break;
    case secondary:
      inputClass = css.input__secondary;
      break;
    case simple:
      inputClass = css.input__simple;
      break;
    default:
      inputClass = '';
  }
  return (
    <label className={css.input__label} ref={ref}>
      <input
        type={type}
        className={inputClass}
        name={name}
        {...rest}
        {...field}
        id={`${uid}-${id}`}
      />
      {children}
      {errorMessage && <p className={css.input__error_msg}>{errorMessage}</p>}
    </label>
  );
}
