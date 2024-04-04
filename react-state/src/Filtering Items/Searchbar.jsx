import React from 'react'

const Searchbar = ({query, onchange}) => {
  return (
    <label>
      search:{' '}
      <input value={query} onChange={onchange} />
    </label>
  )
}

export default Searchbar
