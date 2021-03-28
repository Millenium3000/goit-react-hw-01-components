import React from "react";

import PropTypes from "prop-types";

import defaultImg from "../../images/default.jpg"; //картинка для default

import s from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <li className={s.item}>
      <span className={isOnline ? s.online : s.offline}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  </>
);

FriendListItem.defaultProps = {
  avatar: defaultImg,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
