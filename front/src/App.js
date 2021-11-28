import React, {useState, useReducer, createContext} from 'react';
import Form from './components/Form';
import List from './components/List';
import Reducer from './components/Reducer';
import { Store, initialState } from './components/Store';
import { useForm } from './components/useForm';

const HOST_API = "http://localhost:8080/api";


const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return <Store.Provider value={{ state, dispatch }}>
    {children}
  </Store.Provider>

}

function App() {
  const [state, setState] = useForm(initialState)
  return <StoreProvider value={state, setState}>
    <h1 className = "MyTitle">To-Do List</h1>
    <Form HOST_API = {HOST_API}/>
    <List HOST_API = {HOST_API}/>
  </StoreProvider>
}

export default App;
