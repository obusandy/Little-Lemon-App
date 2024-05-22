import React from "react";
import { useState } from "react";

const BookingForm = (props) => {
  const [occasion, setOccasion] = useState("");
  const [guests, setGuests] = useState("");
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");

  const handleSumbit = (e) => {
    e.preventDefault();
    props.submitForm(e);
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section className="booking-form">
        <h1 className="form-title">Make Your Reservation</h1>
        <form onSubmit={handleSumbit}>
          <div className="form-group">
            <label htmlFor="book-date">Choose Date</label>
            <input
              id="book-date"
              value={date}
              onChange={(e) => handleChange(e.target.value)}
              type="date"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="book-time">Choose Time</label>
            <select
              id="book-time"
              value={times}
              onChange={(e) => setTimes(e.target.value)}
              required
            >
              <option value="">Select a Time</option>
              {props.availableTimes.availableTimes.map((availableTimes) => {
                return <option key={availableTimes}>{availableTimes}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="book-guests">Number of Guests</label>
            <input
              id="book-guests"
              min="1"
              value={guests}
              onChange={(e) => {
                setGuests(e.target.value);
              }}
              type={"number"}
              placeholder={0}
              max={10}
              required
            ></input>
          </div>
          <div className="form-group">
            <label htmlFor="book-occasion">Occasion</label>
            <select
              id="book-occasion"
              key={occasion}
              value={occasion}
              onChange={(e) => setOccasion(e.target.value)}
              required
            >
              <option value="">Select an Option</option>
              <option>Birthday</option>
              <option>Wedding</option>
              <option>Religious</option>
              <option>Anniversary</option>
            </select>
          </div>
          <div>
            <input
              aria-label="On Click"
              type={"submit"}
              value={"Make Your Reservation"}
            ></input>
          </div>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
