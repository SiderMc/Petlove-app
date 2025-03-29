import css from './Container.module.css'

export default function Container({className="",children}) {
    return <div className={`${css.container} ${className}`.trim()}>
        {children}
    </div>
}