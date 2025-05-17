import css from './ImagePage.module.css';

export default function ImagePage({ children,mobImg, tabImg, deskImg }) {
  return (
    <div className={css.image__content}>
      <picture>
        <source
          srcSet={`${deskImg.oneX} 1x, ${deskImg.twoX} 2x, ${deskImg.threeX} 3x`}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`${tabImg.oneX} 1x, ${tabImg.twoX} 2x, ${tabImg.threeX} 3x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${mobImg.oneX} 1x, ${mobImg.twoX} 2x, ${mobImg.threeX} 3x`}
          media="(max-width: 767px)"
        />

        <img
          src={mobImg.oneX}
          className={css.section__img}
          alt="page image"
          loading="lazy"
        />
      </picture>
      {children}
    </div>
  );
}
