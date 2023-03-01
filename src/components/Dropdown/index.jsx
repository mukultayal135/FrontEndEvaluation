/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import Proptypes from 'prop-types';
import filterImg from '../../assets/filter-solid.svg';
import closeFilter from '../../assets/chevron-up-solid.svg';
import './Dropdown.css';

const Dropdown = ({ handleChange }) => {
  const [show, setShow] = useState(true);
  return (
    <div className="filter" onChange={(e) => handleChange(e)}>
      <div className="filter-tag">
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
      {show ? (
        <div className="radio">
          <input type="radio" value="All" name="filter" /> All
          <input type="radio" value="Registered" name="filter" /> Registered
          <input type="radio" value="Bookmarked" name="filter" /> Bookmarked
          <input type="radio" value="SeatsAvailable" name="filter" /> Seats
          Available
        </div>
      ) : (
        false
      )}
    </div>
  );
};
Dropdown.propTypes = {
  handleChange: Proptypes.func.isRequired,
};

export default Dropdown;
