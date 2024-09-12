import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
    const personName = {
      firstname: 'Bruce',
      secondname: 'Wayne'
    };

    const personList = [
        {
          first: 'Emma',
          last: 'Mourine'
        },
        {
          first: 'Beatrice',
          last: 'Novatus'
        },
        {
          first: 'Bernald',
          last: 'Arnault'
        }
    ]
  return (
    <div className="App">
        <Greet isLoggedIn={false} name="Vishwaz" messageCount={10} />
        <Person name={personName} />
        <PersonList names={personList} />
    </div>
  );
}

export default App;
