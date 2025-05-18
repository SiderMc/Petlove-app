import OurFriendsList from '../../components/OurFriendsPage/OurFriendsList/OurFriendsList'
import Container from '../../components/Shared/Container/Container'
import PageTitle from '../../components/Shared/PageTitle/PageTitle'
import css from './OurFriendsPage.module.css'

export default function OurFriendsPage() {
    return <section className={css.friends}>
        <Container>
            <div className={css.friends__content}>
                <PageTitle title="Our friends"/>
                <OurFriendsList/>
            </div>
        </Container>
    </section>
}