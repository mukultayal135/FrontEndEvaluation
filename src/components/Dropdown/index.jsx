/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import filterImg from '../../assets/filter-solid.svg';
import closeFilter from '../../assets/chevron-up-solid.svg';
import seachIcon from '../../assets/magnifying-glass-solid.svg';
import './Dropdown.css';

const Dropdown = ({ handleChange, search }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="filter" onChange={(e) => handleChange(e)}>
      <div className="filter-tag">
        <div>
          <img src={filterImg} alt="filter" />
          <span>FILTER</span>
          <img
            src={closeFilter}
            alt="closetag"
            onClick={() => {
              setShow(!show);
            }}
          />
        </div>

        <div className="event-search">
          <input
            type="text"
            placeholder="EVENT NAME"
            onChange={(e) => {
              search(e);
            }}
          />
          <img src={seachIcon} alt="searchIcon" className="searchIcon" />
        </div>
      </div>
      {show ? (
        <div className="radio">
          <div>
            <input type="radio" value="All" name="filter" /> All
            <input
              type="radio"
              value="Bookmarked"
              name="filter"
              className="bookmarktag"
            />
            Bookmarked
          </div>
          <div>
            <input type="radio" value="Registered" name="filter" /> Registered
            <input
              type="radio"
              value="SeatsAvailable"
              name="filter"
              className="seats"
            />
            Seats Available
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};
Dropdown.propTypes = {
  search: Proptypes.func.isRequired,
  handleChange: Proptypes.func.isRequired,
};

export default Dropdown;
