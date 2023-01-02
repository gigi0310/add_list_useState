
import { useReducer, useState } from 'react';
import './App.css';
import Modal from './Modal';

const data = [
  {id:1, name:'John'},
  {id:2, name:'Anna'},
  {id:3, name:'Betty'},
  {id:4, name:'Gigi'},

  ]

function App() {
  
  
  const [name, setName] = useState('');
  
  const [people, setPeople] = useState(data);

  const [showModal, setShowModal] = useState(false);

  const hanldeSubmit = (e) =>{
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, {id: new Date().getTime().toString(), name}]);
      setName('');
    }else {
      setShowModal(true)
    }
  }


  return (
    <div className="App">
      {showModal && <Modal/>}
      
        <form onSubmit={hanldeSubmit}>

          <input 
            type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <button type='submit'>Add</button>
        </form>
      

      {people.map((person)=>{
        return <div key={person.id} className="nameList">
          <h4>{person.name}</h4>
        </div>
      })}
    </div>
  );
}

export default App;
