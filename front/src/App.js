import React from 'react';
import Form from './components/Form';
import List from './components/List';
import { StoreProvider } from './components/Store';

const HOST_API = "http://localhost:8080/api";

function App() {
  return <StoreProvider>
    <h1 className = "MyTitle">To-Do List</h1>
    <Form HOST_API = {HOST_API}/>
    <List HOST_API = {HOST_API}/>
  </StoreProvider>
}

export default App;
