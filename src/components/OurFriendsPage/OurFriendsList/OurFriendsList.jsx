import OurFriendsICard from '../OurFriendsICard/OurFriendsICard';
import css from './OurFriendsList.module.css';
import { useState,useEffect } from 'react';


export default function OurFriendsList() {
    const [friends, setFriends] = useState([]);
  
    useEffect(() => {

    }, []);
  return (
    <ul className={css.friend__list}>
      {friends.map(friend => (
        <OurFriendsICard key={friend._id} friend={friend} />
      ))}
    </ul>
  );
}
