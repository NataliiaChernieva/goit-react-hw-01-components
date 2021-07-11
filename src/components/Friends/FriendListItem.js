import css from './FriendList.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (<>
    <span className={`${css.status} ${css[isOnline]}`}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt={name} width="48" />
    <p className={css.name}>{name}</p>
  </>);
}