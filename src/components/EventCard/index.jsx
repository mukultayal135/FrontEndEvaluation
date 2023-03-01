import React from 'react';
import PropTypes from 'prop-types';
import { getFormattedDateFromUtcDate } from '../../utils/common/date';
import './EventCard.css';

const EventCard = ({ event }) => {
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
      </div>
    </div>
  );
};

EventCard.propTypes = {
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
