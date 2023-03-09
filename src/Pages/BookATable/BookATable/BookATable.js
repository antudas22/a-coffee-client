import React, { useState } from 'react';
import AvailableTable from '../AvailableTable/AvailableTable';
import BookATableBanner from '../BookATableBanner/BookATableBanner';

const BookATable = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    return (
        <div>
            <BookATableBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AvailableTable
                selectedDate={selectedDate}
            />
        </div>
    );
};

export default BookATable;