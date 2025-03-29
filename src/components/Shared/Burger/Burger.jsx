import css from './Burger.module.css'

export default function Burger({openMenu}) {
    return   <button type='button' className={css.burger_btn} onClick={openMenu}>
    <span className={css.burger__line}></span>
    <span className={css.burger__line}></span>
    <span className={css.burger__line}></span>
  </button>
}