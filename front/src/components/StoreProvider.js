import React, {useReducer} from 'react';
import Reducer from './Reducer';
import { Store, initialState } from './Store';

const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
  
    return <Store.Provider value={{ state, dispatch }}>
      {children}
    </Store.Provider>
  
}

export default StoreProvider;