import css from '../css/Profile.module.css';

export const Profile = props => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.username}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className="followers">Followers</span>
          <span className="quantity">: {followers}</span>
        </li>
        <li>
          <span className="views">Views</span>
          <span className="quantity">: {views}</span>
        </li>
        <li>
          <span className="likes">Likes</span>
          <span className="quantity">: {likes}</span>
        </li>
      </ul>
    </div>
  );
};
