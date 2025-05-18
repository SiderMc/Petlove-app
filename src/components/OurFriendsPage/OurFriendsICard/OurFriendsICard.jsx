import css from './OurFriendsICard.module.css';

export default function OurFriendsICard({ friend }) {
  const workDay = () => {
    if (friend.workDays) {
      const day = friend.workDays.find(time => time.from && time.to);
      return day ? `${day.from} - ${day.to}` : 'Day and night';
    }
    return 'Day and night';
  };

  return (
    <li className={css.friends__card}>
      <p className={css.friends__card_worktime}>{workDay()}</p>
      <img
        src={friend.imageUrl}
        alt={friend.title}
        className={css.friends__card_img}
      />
      <h2 className={css.friends__card_title}>{friend.title}</h2>
      {friend.email ? (
        <a
          href={`mailto:${friend.email}`}
          className={css.friends__card_name}
          target="_blank"
          rel="noopener noreferrer">
          Email: <p className={css.friends__card_desc}>{friend.email}</p>
        </a>
      ) : (
        <a
          href={friend.url}
          className={css.friends__card_name}
          target="_blank"
          rel="noopener noreferrer">
          Email: <p className={css.friends__card_desc}>website only</p>
        </a>
      )}
      {friend.addressUrl ? (
        <a
          href={friend.addressUrl}
          className={css.friends__card_name}
          target="_blank"
          rel="noopener noreferrer">
          Address: <p className={css.friends__card_desc}>{friend.address}</p>
        </a>
      ) : (
        <a
          href={friend.url}
          className={css.friends__card_name}
          target="_blank"
          rel="noopener noreferrer">
          Address: <p className={css.friends__card_desc}>website only</p>
        </a>
      )}
      {friend.phone ? (
        <a
          href={`tel:${friend.phone}`}
          className={css.friends__card_name}
          target="_blank"
          rel="noopener noreferrer">
          Phone: <p className={css.friends__card_desc}>{friend.phone}</p>
        </a>
      ) : (
        <a
          href={friend.url}
          className={css.friends__card_name}
          target="_blank"
          rel="noopener noreferrer">
          Address: <p className={css.friends__card_desc}>website only</p>
        </a>
      )}
    </li>
  );
}
