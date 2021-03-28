import React from "react";

import PropTypes from "prop-types";

import FriendListItem from "./FriendListltem/FriendListItem";

import s from "./FriendList.module.css";

const FriendList = ({ friendsData }) => (
  <section className={s.item}>
    <h2 className={s.title}>Friends</h2>
    <ul className={s.friends__list}>
      {friendsData.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  </section>
);
//arrayOf-MASIV
//shape - обьект

FriendList.propTypes = {
  friendsData: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;
