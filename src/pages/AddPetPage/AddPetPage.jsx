import Container from '../../components/Shared/Container/Container';
import css from './AddPetPage.module.css';
import mobImage from '../../assets/addPet/imageMob.webp';
import mobImage2x from '../../assets/addPet/imageMob@2x.webp';
import mobImage3x from '../../assets/addPet/imageMob@3x.webp';
import tabImage from '../../assets/addPet/imageTab.webp';
import tabImage2x from '../../assets/addPet/imageTab@2x.webp';
import tabImage3x from '../../assets/addPet/imageTab@3x.webp';
import deskImage from '../../assets/addPet/imageDesk.webp';
import deskImage2x from '../../assets/addPet/imageDesk@2x.webp';
import deskImage3x from '../../assets/addPet/imageDesk@3x.webp';
import ImagePage from '../../components/Shared/ImagePage/ImagePage';
import PageTitle from '../../components/Shared/PageTitle/PageTitle';
import AddPetForm from '../../components/Forms/AddPetForm/AddPetForm';

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

export default function AddPetPage() {
  return (
    <section className={css.add__pet}>
      <Container maxWidth="lg">
        <div className={css.add__pet_content}>
          <ImagePage mobImg={mobImg} tabImg={tabImg} deskImg={deskImg} />
          <div className={css.add__pet_form_content}>
              <PageTitle title={'Add my pet /'} className={css.add__pet_title}/>
              <p className={css.add__pet_text}>Personal details</p>
            <AddPetForm/>
          </div>
        </div>
      </Container>
    </section>
  );
}
