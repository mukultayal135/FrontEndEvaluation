/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  GET_EVENT_DATA,
  UPDATE_EVENT_DATA,
} from '../../constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';
import EventCard from '../EventCard';
import Dropdown from '../Dropdown';
import './MainBody.css';

const MainBody = () => {
  const [events, setEvents] = useState();
  const [filteredEvents, setFilteredEvents] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(GET_EVENT_DATA, {}, navigate).then((response) => {
      setEvents(response);
      setFilteredEvents(response);
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
  const handlerFilter = (e) => {
    const tag = e.target.value;
    if (tag === 'All') {
      setFilteredEvents(events);
    } else if (tag === 'Bookmarked') {
      setFilteredEvents(
        events.filter((singleEvent) => singleEvent.isBookmarked === true)
      );
    } else if (tag === 'SeatsAvailable') {
      setFilteredEvents(
        events.filter((singleEvent) => singleEvent.areSeatsAvailable === true)
      );
    } else if (tag === 'Registered') {
      setFilteredEvents(
        events.filter((singleEvent) => singleEvent.isRegistered === true)
      );
    }
  };
  return filteredEvents ? (
    <div className="mainbody">
      <Dropdown handleChange={handlerFilter} />
      <div className="even-container">
        {filteredEvents.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            bookMarkHandler={bookMarkHandler}
            singleDetail={false}
            handleRegister={() => {}}
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
