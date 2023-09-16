import css from './FriendList.module.css';

export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span className={friend.isOnline ? css.online : css.offline} />
      <img
        className={css.avatar}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css.name}>{friend.name}</p>
    </li>
  );
};
