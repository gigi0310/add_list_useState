
import { useReducer, useState } from 'react';
import './App.css';
import Modal from './Modal';
import reducer from './useReducer';

const data = [
  {id:1, name:'John'},
  {id:2, name:'Anna'},
  {id:3, name:'Betty'},
  {id:4, name:'Gigi'},
  ]



const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: '',
}

function App() {
  
  
  const [name, setName] = useState('');
  
  const [state, dispatch] = useReducer(reducer, defaultState);

  const hanldeSubmit = (e) =>{
    e.preventDefault();
    if (name) {
      const newItem = {id:new Date().getTime().toString(), name};
      dispatch({type:'ADD_ITEM', payload: newItem});
      setName ('');
    }else {
      dispatch({type:'NO_VALUE'})
    }
  }


  const closeModal = () => {
    dispatch({type: 'CLOSE_MODAL'})

  }
  return (
    <div className="App">

      <h1>useReducer</h1>
      {state.isModalOpen && <Modal className="modal" closeModal={closeModal} modalContent={state.modalContent}/>}
      


        <form onSubmit={hanldeSubmit}>

          <input 
            type='text'
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />
          <button className='add_btn' type='submit'>Add</button>
        </form>
      

      {state.people.map((person)=>{
        return <div key={person.id} className="nameList">
          <h4>{person.name}</h4>
          <button className='remove_btn' onClick={()=>dispatch({type:'REMOVE_ITEM', payload: person.id})}>Remove</button>
        </div>
      })}
    </div>
  );
}

export default App;
