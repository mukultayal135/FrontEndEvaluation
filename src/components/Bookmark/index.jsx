/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import bookmarkreg from '../../assets/bookmark-regular.svg';
import bookmarksolid from '../../assets/bookmark-solid.svg';
import './Bookmark.css';

const Bookmark = ({ bookmark, bookmarkHandler, eventId }) => {
  return (
    <div
      className="bookmark"
      onClick={() => {
        bookmarkHandler(eventId, bookmark);
      }}
    >
      <img src={bookmark ? bookmarksolid : bookmarkreg} alt="" />
    </div>
  );
};

Bookmark.propTypes = {
  eventId: PropTypes.number.isRequired,
  bookmark: PropTypes.bool.isRequired,
  bookmarkHandler: PropTypes.func.isRequired,
};
export default Bookmark;
