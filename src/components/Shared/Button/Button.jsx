import { Link } from 'react-router-dom';
import css from './Button.module.css';

export default function Button({
  type,
  to,
  primary,
  secondary,
  transparent,
  simple,
  disabled,
  className = '',
  children,
  ...rest
}) {
  let btnClass = "";
  if (primary) {
    btnClass = `${css.btn__primary} ${className}`.trim();
  }
 else if (secondary) {
    btnClass = `${css.btn__secondary} ${className}`.trim();
  }
 else if (transparent) {
    btnClass = `${css.btn__transparent} ${className}`.trim();
  }
 else if (simple) {
    btnClass = `${css.btn__simple} ${className}`.trim();
  }
 else if(disabled){
    btnClass = `${css.btn__disable} ${className}`.trim();
  }

  if (type && !to) {
    return (
      <button type={type} className={btnClass} {...rest} >
        {children}
      </button>
    );
  }

  if (to && !type) {
    return (
      <Link to={to} className={btnClass} {...rest} >
        {children}
      </Link>
    );
  }
}
