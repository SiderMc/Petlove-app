import Container from '../../components/Shared/Container/Container';
import ImagePage from '../../components/Shared/ImagePage/ImagePage';
import css from './RegistrationPage.module.css';
import mobImage from '../../assets/registration/imageMob.webp';
import mobImage2x from '../../assets/registration/imageMob@2x.webp';
import mobImage3x from '../../assets/registration/imageMob@3x.webp';
import tabImage from '../../assets/registration/imageTab.webp';
import tabImage2x from '../../assets/registration/imageTab@2x.webp';
import tabImage3x from '../../assets/registration/imageTab@3x.webp';
import deskImage from '../../assets/registration/imageDesk.webp';
import deskImage2x from '../../assets/registration/imageDesk@2x.webp';
import deskImage3x from '../../assets/registration/imageDesk@3x.webp';
import image from '../../assets/modals/logOut.webp';
import image2x from '../../assets/modals/logOut@2x.webp';
import image3x from '../../assets/modals/logOut@3x.webp';
import PageTitle from '../../components/Shared/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import RegistrationForm from '../../components/Forms/RegistrationForm/RegistrationForm';
import PetSummary from '../../components/Shared/PetSummary/PetSummary';

const mobImg = {
  oneX: mobImage,
  twoX: mobImage2x,
  threeX: mobImage3x,
};

const tabImg = {
  oneX: tabImage,
  twoX: tabImage2x,
  threeX: tabImage3x,
};
const deskImg = {
  oneX: deskImage,
  twoX: deskImage2x,
  threeX: deskImage3x,
};
const summaryImage = {
  oneX: image,
  twoX: image2x,
  threeX: image3x,
};

export default function RegistrationPage() {
  const petInfo = {
    name: 'Jack',
    date: '18.10.2021',
    description:
      ' Jack is a gray Persian cat with green eyes. He loves to be pampered and groomed, and enjoys playing with toys.',
  };
  return (
    <section className={css.registration}>
      <Container maxWidth="lg">
        <div className={css.registration__content}>
          <ImagePage mobImg={mobImg} tabImg={tabImg} deskImg={deskImg}>
            <PetSummary image={summaryImage} petInfo={petInfo} />
          </ImagePage>
          <div className={css.registration__text_content}>
            <PageTitle title={'Registration'} />
            <p className={css.registration__text}>
              Thank you for your interest in our platform.
            </p>
            <RegistrationForm />
            <p className={css.registration__redirect}>
              Already have an account?{' '}
              <Link to="/login" className={css.registration__redirect_link}>
                {' '}
                Login
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
