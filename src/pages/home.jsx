import React,{useState,useEffect} from "react";
import logo from '../assets/FAS-logo.gif';
import physics from '../assets/physics.jpg';
import chemistry from '../assets/chemistry.avif';
import IT from '../assets/IT2.jpg';
import {HashRouter as Router,Route,Routes, Link} from 'react-router-dom';
import { Booking } from "./booking";


export function Home(){

  const [notifications, setNotifications] = useState(0);

  const [bookings, setBookings] = useState([]);

  const handleInputChange = (index, field, value) => {

    setBookings((prevBookings) => {

      const updatedBookings = [...prevBookings];

      if (!updatedBookings[index]) {
        updatedBookings[index] = { name: "", description: "", batch: "", date: "" };
      }
      updatedBookings[index][field] = value;

      return updatedBookings;
    });
  };

  const handleBooking = (index) => {
    setNotifications(notifications + 1);


    localStorage.setItem('bookings', JSON.stringify(bookings));
    console.log("Saved Bookings:", JSON.parse(localStorage.getItem('bookings')));
  };

  return (
    <>
      <div className="header">
        <div><img src={logo} className="logo-image" /></div>
        <div className="Navigation-bar">
          <Link to="/"><button className="N-button">Home</button></Link>
          <Link to="/booking">
            <div className="bookingB-container">
              <button className="N-button">Booking</button>
              {notifications > 0 && <div className="notification-num">{notifications}</div>}
            </div>
          </Link>
          <button className="N-button">About Us</button>
          <button className="N-button">Contact us</button>
        </div>
      </div>

      <div className="display-grid">
        {["Physics", "Chemistry", "IT"].map((lab, index) => (
          <div className="lab-container" key={lab}>
            <h1 className="lab-name">{lab} Laboratory</h1>
            <img src={lab === "Physics" ? physics : lab === "Chemistry" ? chemistry : IT} className="lab-img" />
            <input
              type="text"
              placeholder="Name"
              className="user-name"
              onChange={(e) => handleInputChange(index, "name", e.target.value)}
            />
            <input
              type="text"
              placeholder="Description"
              className="user-description"
              onChange={(e) => handleInputChange(index, "description", e.target.value)}
            />
            <select
              className="user-batch"
              onChange={(e) => handleInputChange(index, "batch", e.target.value)}
              defaultValue="Not Selected"
            >
              <option disabled selected>Batch</option>
              <option>18/19</option>
              <option>19/20</option>
              <option>20/21</option>
              <option>21/22</option>
              <option>22/23</option>
            </select>
            <input
              type="date"
              className="user-date"
              onChange={(e) => handleInputChange(index, "date", e.target.value)}
            />
            <button className="book-button" onClick={() => handleBooking(index)}>Book</button>
          </div>
        ))}
      </div>
    </>
  );
  
}