import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {

const [countries, setCountry] = useState([])
const [search, setSearch] = useState('')

const hook = () => {
  axios.get('https://restcountries.eu/rest/v2/all').then(response => {
  const countriesData = response.data
  console.log(countriesData)
  setCountry(countriesData)
}) 
}

useEffect(hook, [])

const handleChange = (event) => {
  setSearch(event.target.value)
}

const countriesToShow = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()))
console.log(countriesToShow)

  return (
    <div>
      Search Country: <input value={search} name="search" onChange={handleChange} />
      {countriesToShow.map(country => { return country.name})}
      {countriesToShow.map(country => {return country.capital})}
    </div>
  );
}

export default App;
