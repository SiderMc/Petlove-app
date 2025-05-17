import css from './PetSummary.module.css';

export default function PetSummary({ image, petInfo }) {
  return (
    <div className={css.summary__info}>
      <span className={css.summary__dec}>
        <picture>
          <source
            srcSet={`${image.oneX} 1x, ${image.twoX} 2x, ${image.threeX} 3x`}
          />
          <img
            src={image.oneX}
            className={css.summary__img}
            alt="pet"
            loading="lazy"
          />
        </picture>
      </span>
      <p className={css.pet__name}>{petInfo.name}</p>
      <p className={css.pet__birthday}>
        Birthday:<span className={css.pet__birthday_date}>{petInfo.date}</span>{' '}
      </p>
      <p className={css.pet__description}>{petInfo.description}</p>
    </div>
  );
}
