import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import TableBookingOption from './TableBookingOption';

const AvailableTable = ({selectedDate}) => {

    const [tableBookingOptions, setTableBookingOptions] = useState([]);

    useEffect(() => {
        fetch('tableBookingOptions.json')
        .then(res => res.json())
        .then(data => setTableBookingOptions(data))
    }, [])

    return (
        <div>
            <p className='text-center my-20 text-lg'>Available Table on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-6'>
                {
                    tableBookingOptions.map(option => <TableBookingOption
                        key={option._id}
                        option={option}
                    />)
                }
            </div>
        </div>
    );
};

export default AvailableTable;