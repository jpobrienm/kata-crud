import React, {useState, useReducer, createContext} from 'react';
import Form from './components/Form';
import List from './components/List';
import Reducer from './components/Reducer';
import { Store, initialState } from './components/Store';
import { useForm } from './components/useForm';
import StoreProvider from './components/StoreProvider';
import Wrapper from './components/Wrapper';

const HOST_API = "http://localhost:8080/api";

function Save() {
  return <StoreProvider>
    <h1 className = "MyTitle">To-Do List</h1>
    <Form HOST_API = {HOST_API}/>
    <List HOST_API = {HOST_API}/>
  </StoreProvider>
}

export default Save;