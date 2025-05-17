import css from './Container.module.css'

export default function Container({className="",maxWidth,children }) {
    const containerType = maxWidth ==="lg"? `${css.container__lg} ${className}`.trim():`${css.container} ${className}`.trim()
    return <div className={containerType}>
        {children}
    </div>
}