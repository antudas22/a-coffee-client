import React from 'react';

const TableBookingOption = ({option}) => {
    const {name, slots} = option;
    return (
        <div className="card bg-base-300 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p className=''>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
    <div className='my-2'>
    {
        slots.length > 0 ?
        <select className="select select-warning w-full max-w-xs">
        {
            slots.map(slot => <option>{slot}</option>)
        }
        </select>
        :
        <select className="select select-warning w-full max-w-xs" disabled>
            <option>Please Try Another Day</option>
        </select>
    }
    </div>
    <p>Book a time for two {name} with one table and two chair.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Book Now</button>
    </div>
  </div>
</div>
    );
};

export default TableBookingOption;