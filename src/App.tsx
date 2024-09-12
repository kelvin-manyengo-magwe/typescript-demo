import React from 'react';
import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Button } from './components/Button';
import { Input } from './components/Input';

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
        <Button handleClick={ (event, id) => console.log('Button clicked', event, id)} />

        <Input value='' handleChange={(event) => console.log(event)} />
    </div>
  );
}

export default App;
