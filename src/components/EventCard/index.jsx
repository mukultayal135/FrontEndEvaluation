/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDateFromUtcDate } from '../../utils/common/date';
import Bookmark from '../Bookmark';
import checked from '../../assets/circle-check-solid.svg';
import circleCross from '../../assets/circle-xmark-solid.svg';

import './EventCard.css';

const EventCard = ({ event, bookMarkHandler }) => {
  return (
    <div className="card ">
      <div className="image">
        <img src={event.imgUrl} alt="" />
      </div>
      <div className="event-details">
        <div className="event-text">
          <div className="event-title">{event.name}</div>
          <div className="event-description">{event.description}</div>
          <div className="event-venue">
            <span>VENUE:</span>
            {event.venue}
          </div>
          <div className="event-date">
            <span>DATE:</span>
            {getFormattedDateFromUtcDate(event.datetime)}
          </div>
        </div>
        <div className="reactions">
          {event.isRegistered ? (
            <div className="registered">
              <img src={checked} className="checked" alt="checked" />
              <span>REGISTERED</span>
            </div>
          ) : !event.areSeatsAvailable ? (
            <div className="availability">
              <img
                src={circleCross}
                className="circleCross"
                alt="circleCross"
              />
              <span>NO SEATS AVAILABLE</span>
            </div>
          ) : (
            false
          )}
          <div className="bookmark-container">
            <Bookmark
              eventId={event.id}
              bookmark={event.isBookmarked}
              bookmarkHandler={bookMarkHandler}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  bookMarkHandler: PropTypes.func.isRequired,
  event: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    venue: PropTypes.string,
    datetime: PropTypes.string,
    timezone: PropTypes.string,
    imgUrl: PropTypes.string,
    areSeatsAvailable: PropTypes.bool,
    isRegistered: PropTypes.bool,
    isBookmarked: PropTypes.bool,
  }).isRequired,
};
export default EventCard;
