import { Link } from 'react-router-dom';
import css from './Button.module.css';

export default function Button({
  type,
  to,
  primary,
  secondary,
  transparent,
  simple,
  disable,
  className = '',
  children,
  ...rest
}) {
  let btnClass = "";
  if (primary) {
    btnClass = `${css.btn__primary} ${className}`.trim();
  }
  if (secondary) {
    btnClass = `${css.btn__secondary} ${className}`.trim();
  }
  if (transparent) {
    btnClass = `${css.btn__transparent} ${className}`.trim();
  }
  if (simple) {
    btnClass = `${css.btn__simple} ${className}`.trim();
  }
  if(disable){
    btnClass = `${css.btn__disable} ${className}`.trim();
  }

  if (type && !to) {
    return (
      <button type={type} className={btnClass} {...rest}>
        {children}
      </button>
    );
  }

  if (to && !type) {
    return (
      <Link to={to} className={btnClass} {...rest}>
        {children}
      </Link>
    );
  }
}
