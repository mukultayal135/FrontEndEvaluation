/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { getFormattedDateFromUtcDate } from '../../utils/common/date';
import Bookmark from '../Bookmark';
import checked from '../../assets/circle-check-solid.svg';
import circleCross from '../../assets/circle-xmark-solid.svg';

import './EventCard.css';

const EventCard = ({
  event,
  bookMarkHandler,
  singleDetail,
  handleRegister,
}) => {
  const navigate = useNavigate();
  return (
    <div data-testid="event-card"
      className="card"
      onClick={() => {
        navigate(`/userDetails/${event.id}`);
      }}
    >
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
        <div className="register-button">
          {singleDetail && event.areSeatsAvailable ? (
            <button
              type="button"
              onClick={() => {
                handleRegister(event.isRegistered, event.id);
              }}
            >
              {event.isRegistered ? 'UNREGISTER' : 'REGISTER'}
            </button>
          ) : (
            false
          )}
        </div>
      </div>
    </div>
  );
};

EventCard.propTypes = {
  singleDetail: PropTypes.bool.isRequired,
  bookMarkHandler: PropTypes.func.isRequired,
  handleRegister: PropTypes.func.isRequired,
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
