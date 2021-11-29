import React, {useReducer, createContext} from 'react';
import Reducer from './Reducer';

export const initialState = {todo: { list: [], item: {} }};
export const Store = createContext(initialState);

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
  
    return <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  
}