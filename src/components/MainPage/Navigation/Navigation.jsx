import { NavLink} from 'react-router-dom'
import css from './Navigation.module.css'
import createActiveLink from '../../../utils/activeLink.js'

export default function Navigation({className=css.active__nav_link}) {
    return <nav className={css.navigation}>
        <ul className={css.navigation__list}>
            <li className={css.navigation__item}>
                <NavLink to="/test"  className={createActiveLink(className, [
                  css.navigation__list_link,
                ])}>News</NavLink>
            </li>
            <li className={css.navigation__item}>
                <NavLink className={css.navigation__list_link}>Find pet</NavLink>
            </li>
            <li className={css.navigation__item}>
                <NavLink className={css.navigation__list_link}>Our friends</NavLink>
            </li>
        </ul>
    </nav>
}