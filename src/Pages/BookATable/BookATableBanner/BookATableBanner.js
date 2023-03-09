import { format } from 'date-fns';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';

const BookATableBanner = () => {

  const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div className="hero bg-base-300 py-20">
  <div className="hero-content gap-10 lg:gap-32 flex-col lg:flex-row">
        <div>
            <DayPicker
            mode='single'
            selected={selectedDate}
            onSelect={setSelectedDate}
            className='p-6 rounded-lg' style={{boxShadow: '-8px -8px 15px rgba(255, 255, 255, 0.1), 5px 5px 15px rgba(0, 0, 0, 0.2)'}} />
            <p>You have selected date: {format(selectedDate, 'PP')}</p>
        </div>
    <div className='text-center lg:text-start'>
      <h1 className="text-5xl font-bold">Pick A Date</h1>
      <p className="py-6">Pick a date if you want to book a table to having coffee with someone.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default BookATableBanner;