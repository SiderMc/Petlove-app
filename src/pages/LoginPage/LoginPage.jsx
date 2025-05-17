import LoginForm from '../../components/Forms/LoginForm/LoginForm';
import ImagePage from '../../components/Shared/ImagePage/ImagePage';
import PageTitle from '../../components/Shared/PageTitle/PageTitle';
import PetSummary from '../../components/Shared/PetSummary/PetSummary';
import css from './LoginPage.module.css';
import mobImage from '../../assets/login/imageMob.webp';
import mobImage2x from '../../assets/login/imageMob@2x.webp';
import mobImage3x from '../../assets/login/imageMob@3x.webp';
import tabImage from '../../assets/login/imageTab.webp';
import tabImage2x from '../../assets/login/imageTab@2x.webp';
import tabImage3x from '../../assets/login/imageTab@3x.webp';
import deskImage from '../../assets/login/imageDesk.webp';
import deskImage2x from '../../assets/login/imageDesk@2x.webp';
import deskImage3x from '../../assets/login/imageDesk@3x.webp';
import image from '../../assets/modals/attention.webp';
import image2x from '../../assets/modals/attention@2x.webp';
import image3x from '../../assets/modals/attention@3x.webp';
import Container from '../../components/Shared/Container/Container';
import { Link } from 'react-router-dom';

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

export default function LoginPage() {
  const petInfo = {
    name: 'Rich',
    date: '21.09.2020',
    description:
      'Rich would be the perfect addition to an active family that loves to play and go on walks. I bet he would love having a doggy playmate too!',
  };
  return (
    <section className={css.login}>
      <Container maxWidth="lg">
        <div className={css.login__content}>
          <ImagePage mobImg={mobImg} tabImg={tabImg} deskImg={deskImg}>
            <PetSummary image={summaryImage} petInfo={petInfo} />
          </ImagePage>
          <div className={css.login__text_content}>
            <PageTitle title={'Log in'} />
            <p className={css.login__text}>
              Welcome! Please enter your credentials to login to the platform:
            </p>
            <LoginForm />
            <p className={css.login__redirect}>
              Don’t have an account? {''}
              <Link to="/registration" className={css.login__redirect_link}>
                Register
              </Link>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
