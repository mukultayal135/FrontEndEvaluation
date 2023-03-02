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
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterTerm, setFilterTerm] = useState('All');
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(GET_EVENT_DATA, {}, navigate).then((response) => {
      setEvents(response);
      setFilteredEvents(response);
    });
  }, []);
  useEffect(() => {
    console.log('filterTerm', filterTerm);
    console.log('searchTerm', searchTerm);
    if (filterTerm === 'All') {
      setFilteredEvents(
        events.filter((singleEvent) =>
          singleEvent.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else if (filterTerm === 'Bookmarked') {
      setFilteredEvents(
        events.filter(
          (singleEvent) =>
            singleEvent.isBookmarked === true &&
            singleEvent.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else if (filterTerm === 'SeatsAvailable') {
      setFilteredEvents(
        events.filter(
          (singleEvent) =>
            singleEvent.areSeatsAvailable === true &&
            singleEvent.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else if (filterTerm === 'Registered') {
      setFilteredEvents(
        events.filter(
          (singleEvent) =>
            singleEvent.isRegistered === true &&
            singleEvent.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [filterTerm, searchTerm, events]);
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
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
    // if (e.target.value === '') {
    //   setFilteredEvents(events);
    // } else {
    //   setFilteredEvents(
    //     filteredEvents.filter((singleEvent) =>
    //       singleEvent.name.toLowerCase().includes(e.target.value.toLowerCase())
    //     )
    //   );
    // }
  };
  const handlerFilter = (e) => {
    console.log('filter: ', e.target.value);
    setFilterTerm(e.target.value);
    // const tag = e.target.value;
    // if (tag === 'All') {
    //   setFilteredEvents(events);
    // } else if (tag === 'Bookmarked') {
    //   setFilteredEvents(
    //     events.filter((singleEvent) => singleEvent.isBookmarked === true)
    //   );
    // } else if (tag === 'SeatsAvailable') {
    //   setFilteredEvents(
    //     events.filter((singleEvent) => singleEvent.areSeatsAvailable === true)
    //   );
    // } else if (tag === 'Registered') {
    //   setFilteredEvents(
    //     events.filter((singleEvent) => singleEvent.isRegistered === true)
    //   );
    // }
  };
  return filteredEvents ? (
    <div className="mainbody">
      <Dropdown handleChange={handlerFilter} search={handleSearch} />
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
    <div className="DataLoader">
      <p>Loading....</p>
    </div>
  );
};

export default MainBody;
