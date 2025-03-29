import css from './AuthNav.module.css'
import Button from '../../Shared/Button/Button'

export default function AuthNav() {
    return <ul className={css.auth__list}>
        <li className={css.auth__list_item}>
        <Button to="/login/" primary>LOG IN</Button>
        </li>
        <li className={css.auth__list_item}>
        <Button to="/registration" secondary>REGISTRATION</Button>
        </li>
    </ul>
}