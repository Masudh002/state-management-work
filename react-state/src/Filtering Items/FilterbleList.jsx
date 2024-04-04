import React, { useState } from 'react'
import { filterItems, foods } from './data';
import List from './List';
import Searchbar from './Searchbar';
const FilterbleList = () => {
    const [query, setQuery] = useState('');
    const results = filterItems(foods, query);

    function handleChange(e){
        setQuery(e.target.value);
    }

  return (
    <div>
       <Searchbar query={query} onchange={handleChange}/>
       <List items={results}/>
    </div>
  )
}


export default FilterbleList
