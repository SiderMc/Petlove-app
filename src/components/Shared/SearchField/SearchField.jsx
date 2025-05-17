import { useState } from 'react';
import css from './SearchField.module.css';
import Input from '../Inputs/Input/Input';
import SvgIcons from '../SvgIcons/SvgIcons';

export default function SearchField({...rest}) {
  const [val, setVal] = useState(false);
  return (
    <Input simple {...rest}>
       { val && <button className={css.clear__btn}>
          <SvgIcons name="close" className={css.icon} />
        </button>}
        <SvgIcons name="search" className={css.icon} />
 
    </Input>
  );
}
