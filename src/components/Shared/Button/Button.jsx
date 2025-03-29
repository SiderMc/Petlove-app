import { Link } from 'react-router-dom'
import css from './Button.module.css'

export default function Button({type,to,primary,className="",children}) {
    const btnType = `${primary ? css.btn__primary : css.btn__secondary} ${className}`.trim()
    if(type && !to){
        return <button type={type} className={btnType}>{children}</button>
    }
    if(to && !type){
        return <Link to={to} className={btnType}>{children}</Link>
    }
}