 
/* import logo from './logo.svg'; */
import './App.css';
import React, { useState } from 'react';
import contacts from "./contacts.json";


function App() {
  const [people, setPeople] = useState(contacts.slice(0, 5));

  const random = () => {
    let rando = contacts[Math.floor(Math.random() * contacts.length)];
    setPeople([rando, ...people]);
  }; 

  const sortByPop = () => setPeople([...people].sort((a, b) => a.popularity - b.popularity));

  const sortByAlpha = () => setPeople([...people].sort((a, b) => a.name > b.name ? 1 : -1));


  const delppl = (id) =>  {
    const filteredppl = people.filter((ele) => {
      return ele.id !== id;
    });
    setPeople(filteredppl);
  };

  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>
        <table>
        <thead>
          <tr>
            <th><button onClick={random}>Add Random Contact</button></th>
            <th><button onClick={sortByPop}>Popularity '↕️'</button></th>
            <th><button onClick={sortByAlpha}>Name '↕️'</button></th>
            </tr>
          <tr><th>Picture</th><th>Name</th><th>Popularity</th><th>WonOscar</th><th>WonEmmy</th><th>Action </th></tr>
          </thead>
          <tbody>
          {people.map((ele)=>
            <tr key={ele.id}>
            <td><img src={ele.pictureUrl} alt='pic of contact'/></td>
            <td>{ele.name}</td>
            <td>{ele.popularity}</td>
            <td>{ele.wonOscar ? '🏆' : ''}</td>
            <td>{ele.wonEmmy ? '🏆' : ''}</td>
            <td><button onClick={()=> delppl(ele.id)}>  '💣' </button></td>
            </tr>
          )}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
