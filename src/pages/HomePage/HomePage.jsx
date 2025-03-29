import css from './HomePage.module.css';
import homeHeroMob from '../../assets/homeHero/homeHeroMobile.webp';
import homeHeroMob2x from '../../assets/homeHero/homeHeroMobile@2x.webp';
import homeHeroMob3x from '../../assets/homeHero/homeHeroMobile@3x.webp';
import homeHeroTab from '../../assets/homeHero/homeHeroTablet.webp';
import homeHeroTab2x from '../../assets/homeHero/homeHeroTable@2x.webp';
import homeHeroTab3x from '../../assets/homeHero/homeHeroTable@3x.webp';
import homeHeroDesk from '../../assets/homeHero/homeHeroDesk.webp';
import homeHeroDesk2x from '../../assets/homeHero/homeHeroDesk@2x.webp';
import homeHeroDesk3x from '../../assets/homeHero/homeHeroDesk@3x.webp';
import Container from '../../components/Shared/Container/Container';

export default function HomePage() {
  return (
    <section className={css.hero}>
      <Container>
        <div className={css.hero__content}>
          <div className={css.hero__text_content}>
            <h1 className={css.hero__title}>
              Take good <span className={css.title__dec}> care</span> of your
              small pets
            </h1>
            <p className={css.hero__text}>
              Choosing a pet for your home is a choice that is meant to enrich
              your life with immeasurable joy and tenderness.
            </p>
          </div>
          <div className={css.hero__bg_content}>
            <picture>
              <source
                srcSet={`${homeHeroDesk} 1x, ${homeHeroDesk2x} 2x, ${homeHeroDesk3x} 3x`}
                media="(min-width: 1280px)"
              />
              <source
                srcSet={`${homeHeroTab} 1x, ${homeHeroTab2x} 2x, ${homeHeroTab3x} 3x`}
                media="(min-width: 768px)"
              />
              <source
                srcSet={`${homeHeroMob} 1x, ${homeHeroMob2x} 2x, ${homeHeroMob3x} 3x`}
                media="(max-width: 767px)"
              />

              <img
                src={homeHeroMob}
                className={css.hero__img}
                alt="background"
                loading="lazy"
              />
            </picture>
          </div>
        </div>
      </Container>
    </section>
  );
}
