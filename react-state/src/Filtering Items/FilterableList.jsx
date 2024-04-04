import React, { useState } from 'react';
import { foods, filterItems } from './data';

const FilterableList = () => {
    const [query, setQuery] = useState('');
    const results = filterItems(foods, query);

    function handleChange(e) {
        setQuery(e.target.value);
    }

    return (
        <div>
            <h1>Filtering</h1>
            <SearchBar query={query} onChange={handleChange} />
            <hr />
            {results.length > 0 ? (
                <List items={results} />
            ) : (
                <p>No results found.</p>
            )}
        </div>
    );
};

export default FilterableList;

function SearchBar({ query, onChange }) {
    return (
        <label>
            Search:{' '}
            <input
                value={query}
                onChange={onChange}
            />
        </label>
    );
}

function List({ items }) {
    return (
        <table>
            <tbody>
                {items.map(food => (
                    <tr key={food.id}>
                        <td>{food.name}</td>
                        <td>{food.description}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
