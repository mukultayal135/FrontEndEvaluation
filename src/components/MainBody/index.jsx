/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GET_EVENT_DATA,
  UPDATE_EVENT_DATA,
} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import EventCard from '../EventCard';
import './MainBody.css';

const MainBody = () => {
  const [events, setEvents] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(GET_EVENT_DATA, {}, navigate).then((response) => {
      setEvents(response);
    });
  }, []);
  const bookMarkHandler = (eventId, current) => {
    makeRequest(
      UPDATE_EVENT_DATA(eventId),
      {
        data: {
          isBookmarked: !current,
        },
      },
      navigate
    ).then((response) => {
      const updatedEvents = events.map((event) => {
        if (event.id === eventId) {
          return {
            ...event,
            isBookmarked: !current,
          };
        }
        return event;
      });
      setEvents(updatedEvents);
    });
  };
  return events ? (
    <div className="mainbody">
      <div className="even-container">
        {events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            bookMarkHandler={bookMarkHandler}
          />
        ))}
      </div>
    </div>
  ) : (
    <div className="blogDataLoader">
      <p>Loading....</p>
    </div>
  );
};

export default MainBody;
