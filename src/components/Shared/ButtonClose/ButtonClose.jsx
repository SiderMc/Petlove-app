import SvgIcons from '../SvgIcons/SvgIcons';
import css from './ButtonClose.module.css';

export default function ButtonClose({ primary, className="", close }) {
    const baseClass = primary ? css.primary : css.secondary;
    const btnType = className ? ` ${className}` : "";

    return (
        <button type="button" className={`${css.button__close} ${btnType.trim()}`} onClick={close}>
            <SvgIcons name="close" className={baseClass} />
        </button>
    );
}
