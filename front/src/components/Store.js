import React, {useReducer, createContext} from 'react';
import Reducer from './Reducer';

// el componente parent sirve para indicar el contenedor de las listas
export const initialState = {todo: {list: [], item: {}}, list:[]};
export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
  
    return <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  
}