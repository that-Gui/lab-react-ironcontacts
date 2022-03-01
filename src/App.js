
/* import logo from './logo.svg'; */
import './App.css';
import React, { useState } from 'react';
import contacts from "./contacts.json";


function App() {
  const [people, setPeople] = useState(contacts.slice(0, 5));
  console.log(people);

  let random = () => {
    let rando = contacts[Math.floor(Math.random() * contacts.length)];
    setPeople([rando, ...people]);
  }; 

  let sort = () => {
    
    setPeople(people.sort(people.popularity()));
  };


  return (
    <div className="App">
      <div>
        <h1>IronContacts</h1>
        <table>
        <thead>
          {/* <tr><th>IronContacts</th></tr> */}
          <tr>
            <th><button onClick={random}>Add Random Contact</button></th>
            <th><button onClick={sort}>Popularity '↕️'</button></th>
            <th><button>Name '↕️'</button></th>
            </tr>
          <tr><th>Picture</th><th>Name</th><th>Popularity</th><th>WonOscar</th><th>WonEmmy</th></tr>
          </thead>
          <tbody>
          {people.map((ele)=>
            <tr key={ele.id}>
            <td><img src={ele.pictureUrl} alt='pic of contact'/></td>
            <td>{ele.name}</td>
            <td>{ele.popularity}</td>
            <td>{ele.wonOscar ? '🏆' : ''}</td>
            <td>{ele.wonEmmy ? '🏆' : ''}</td>
            </tr>
          )}</tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
