import { Link } from 'react-router-dom';
import css from './UserNav.module.css';
import SvgIcons from '../../Shared/SvgIcons/SvgIcons';
import Button from '../../Shared/Button/Button';

export default function UserNav({isHome}) {
  return (
    <div className={css.user__navigation}>
      {!isHome && <Button to="/logout" primary className={css.logout}>
        LOG OUT
      </Button>}
      <Link className={css.user__nav}>
        <span className={css.user__avatar}>
          <SvgIcons name="user" className={css.icon} />
        </span>
        <p className={css.user__name}>Anna</p>
      </Link>
    </div>
  );
}
