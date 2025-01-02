import { useState,} from 'react';
import logo from '../assets/FAS-logo.gif';
import { Link } from 'react-router-dom';

export function Booking() {
  
  const [bookings, setBookings] = useState(() => {
    return JSON.parse(localStorage.getItem('bookings')) || [];
  });

  
  const deleteBooking = (index) => {
    const updatedBookings = bookings.filter((_, i) => i !== index);
    setBookings(updatedBookings); 
    localStorage.setItem('bookings', JSON.stringify(updatedBookings)); 
  };

  const physics='Physics Lab';
  const chemistry='Chemistry Lab';
  const it='It Lab';

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
        
        <div className='head-title'>
        <h1 >My Bookings</h1> 
        </div>
        
        <div className='bookings-container-2'>
          <div className='display-name-2'>Name</div>
          <div>Lab Name</div>
          <div className='display-description-2'>Description</div>
          <div className='display-batch-2'>Batch</div>
          <div className='display-date-2'>Date</div>
          <div className='display-delete-2'>Delete</div>
        </div>

        {bookings.map((books, index) => (
          <div key={index} className='bookings-container'>
            <div className='display-name'>{books.name}</div>
            <div>{books.labName}</div>
            <div className='display-description'>{books.description}</div>
            <div className='display-batch'>{books.batch}</div>
            <div className='display-date'>{books.date}</div>
            <button className='delete-button' onClick={() => deleteBooking(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
}
