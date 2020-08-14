import React from 'react';

const handleChange = (filter, updateFilter) => e => (
    updateFilter(filter, parseInt(e.currentTarget.value))
);

const FilterForm = ({ min_seating, max_seating, updateFilter }) => (
    <div>
        <span className="filter">Filter results:</span>
        <br />
        <label>Minimum Seats</label>
        <input
            type="number"
            value={min_seating}
            onChange={handleChange('min_seating', updateFilter)}
        />
        <br />
        <label>Maximum Seats</label>
        <input
            type="number"
            value={max_seating}
            onChange={handleChange('max_seating', updateFilter)}
        />
    </div>
);

export default FilterForm;
