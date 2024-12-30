import { useEffect, useState } from 'react';
import logo from '../assets/FAS-logo.gif';
import { Link } from 'react-router-dom';

export function Booking() {

 const bookings= JSON.parse(localStorage.getItem('bookings'));
 console.log(bookings);

  return (
    <>
      <div className="header">
        <div><img src={logo} className="logo-image" /></div>
        <div className="Navigation-bar">
          <Link to="/"><div><button className="N-button">Home</button></div></Link>
          <Link to="/booking"><div className="bookingB-container">
            <div><button className="N-button">Booking</button></div>
          </div></Link>
          <div><button className="N-button">About Us</button></div>
          <div><button className="N-button">Contact us</button></div>
        </div>
      </div>
      <div>
        <h1>My Bookings</h1> 
        {bookings.map((books,index)=>{
          return (
            <>
            <div>{books.name}</div>
            <div>{books.description}</div>
            <div>{books.batch}</div>
            <div>{books.date}</div>
            </>
            
          );

        })}
      </div>
    </>
  );
}
