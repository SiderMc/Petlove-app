import { Outlet } from 'react-router-dom'
import css from './Layout.module.css'

export default function Layout() {
    return <div className={css.wrapper}>
        <div className={css.container}>
            <header className={css.header}></header>
            <main><Outlet/></main>
        </div>
    </div>
}