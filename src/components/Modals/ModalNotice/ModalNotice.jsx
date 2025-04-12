import axios from 'axios';
import css from './ModalNotice.module.css';

import Button from '../../Shared/Button/Button';
import SvgIcons from '../../Shared/SvgIcons/SvgIcons';

export default function ModalNotice({petId}) {
    
//   const petPrice = pet ? (pet.price != null ? `$ ${pet.price}` : 'free') : '';

  return pet && <div className={css.modal__content}>
    <div className={css.modal__image__content}>
        <img src={pet.imgURL} alt={pet.name} className={css.modal__img} />
        <span className={css.modal__category}>{pet.category}</span>
    </div>
    <h2 className={css.modal__title}>{pet.title}</h2>
    <div className={css.modal__rating}>
        <SvgIcons name={"star"} className={css.icon}/>
        <p className={css.modal__rating_text}>{pet.popularity}</p>
    </div>
    <ul className={css.modal__list}>
        <li className={css.modal__list_item}>
            <p className={css.modal__sup_text}>Name</p>
            <p className={css.modal__sub_text}>{pet.name}</p>
        </li>
        <li className={css.modal__list_item}>
            <p className={css.modal__sup_text}>Birthday</p>
            <p className={css.modal__sub_text}>{pet.birthday}</p>
        </li>
        <li className={css.modal__list_item}>
            <p className={css.modal__sup_text}>Sex</p>
            <p className={css.modal__sub_text}>{pet.sex}</p>
        </li>
        <li className={css.modal__list_item}>
            <p className={css.modal__sup_text}>Species</p>
            <p className={css.modal__sub_text}>{pet.species}</p>
        </li>
    </ul>
    <h3 className={css.modal__comment}>{pet.comment}</h3>
    <p className={css.modal__price}>{petPrice}</p>
    <div className={css.modal__actions}>
        <Button primary type="button">Add to</Button>
        <Button secondary type="button">Contact</Button>
    </div>
  </div>;
}
