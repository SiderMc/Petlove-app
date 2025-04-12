import Container from '../../components/Shared/Container/Container';
import css from './NotFoundPage.module.css';

import nfpMob from '../../assets/notFoundPage/notFoundMobile.webp';
import nfpMob2x from '../../assets/notFoundPage/notFoundMobile@2x.webp';
import nfpMob3x from '../../assets/notFoundPage/notFoundMobile@3x.webp';
import nfpTab from '../../assets/notFoundPage/notFoundTab.webp';
import nfpTab2x from '../../assets/notFoundPage/notFoundTab@2x.webp';
import nfpTab3x from '../../assets/notFoundPage/notFoundTab@3x.webp';
import nfpDesk from '../../assets/notFoundPage/notFoundDesk.webp';
import nfpDesk2x from '../../assets/notFoundPage/notFoundDesk@2x.webp';
import nfpDesk3x from '../../assets/notFoundPage/notFoundDesk@3x.webp';

export default function NotFoundPage() {
  return (
    <Container>
      <div className={css.page}>
        <picture>
          <source
            srcSet={`${nfpDesk} 1x, ${nfpDesk2x} 2x, ${nfpDesk3x} 3x`}
            media="(min-width: 1280px)"
          />
          <source
            srcSet={`${nfpTab} 1x, ${nfpTab2x} 2x, ${nfpTab3x} 3x`}
            media="(min-width: 768px)"
          />
          <source
            srcSet={`${nfpMob} 1x, ${nfpMob2x} 2x, ${nfpMob3x} 3x`}
            media="(max-width: 767px)"
          />

          <img
            src={nfpMob}
            className={css.page__img}
            alt="background"
            loading="lazy"
          />
        </picture>
      </div>
    </Container>
  );
}
