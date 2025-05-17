import FilterForm from '../../components/Forms/FilterForm/FilterForm';
import Container from '../../components/Shared/Container/Container';
import PageTitle from '../../components/Shared/PageTitle/PageTitle';
import css from './NoticesPage.module.css';

export default function NoticesPage() {
  return (
    <section className={css.notice}>
      <Container>
        <div className={css.notice_content}>
          <PageTitle title={'Find your favorite pet'} />
          <FilterForm />
        </div>
      </Container>
    </section>
  );
}
