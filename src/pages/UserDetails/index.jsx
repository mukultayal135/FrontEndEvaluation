/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  GET_EVENT_BY_ID,
  GET_EVENT_DATA,
  UPDATE_EVENT_DATA,
} from '../../constants/apiEndPoints';
import { Navbar, EventCard } from '../../components';
import makeRequest from '../../utils/makeRequest';
import './UserDetails.css';

const UserDetails = () => {
  const [event, setEvent] = useState();
  const [events, setEvents] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    makeRequest(GET_EVENT_BY_ID(id), {}, navigate).then((response) => {
      setEvent(response);
    });
  }, [event]);

  useEffect(() => {
    makeRequest(GET_EVENT_DATA, {}, navigate).then((response) => {
      setEvents(response);
    });
  }, []);
  const handleRegister = (current, eventId) => {
    makeRequest(
      UPDATE_EVENT_DATA(eventId),
      {
        data: {
          isRegistered: !current,
        },
      },
      navigate
    ).then((response) => {
      const updatedEvents = events.map((singleEvent) => {
        if (singleEvent.id === eventId) {
          return {
            ...event,
            isRegistered: !current,
          };
        }
        return event;
      });
      setEvents(updatedEvents);
    });
  };
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
      const updatedEvents = events.map((singleEvent) => {
        if (singleEvent.id === eventId) {
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
  return event ? (
    <div className="user-details">
      <Navbar />
      <div className="single-card">
        <EventCard
          bookMarkHandler={bookMarkHandler}
          handleRegister={handleRegister}
          event={event}
          singleDetail
          id={id}
        />
      </div>
    </div>
  ) : (
    <div className="blogDataLoader">
      <p>Loading....</p>
    </div>
  );
};

export default UserDetails;
