import SvgIcons from '../SvgIcons/SvgIcons';
import css from './ButtonClose.module.css';

export default function ButtonClose({ primary, className="", closeHandler }) {
    const baseClass = primary ? css.primary : css.secondary;
    const btnType = className ? ` ${className}` : "";

    return (
        <button type="button" className={`${css.button__close} ${btnType.trim()}`} onClick={closeHandler}>
            <SvgIcons name="close" className={baseClass} />
        </button>
    );
}
