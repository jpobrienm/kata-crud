import React, { useContext, useRef, useState} from 'react';
import { Store } from './Store';

const Form = (props) =>{
    const HOST_API = props.HOST_API
    const formRef = useRef(null);
    const { dispatch, state: { todo } } = useContext(Store);
    const item = todo.item;
    const [state, setState] = useState(item);

    const onAdd = (event) => {
        event.preventDefault();

        if(state.name === undefined || !/\S/.test(state.name)){
            state.name = "";
            return;
        }

        const request = {
            name: state.name.trim(),
            id: null,
            completed: false
          };
        fetch(HOST_API + "/todo", {
          method: "POST",
          body: JSON.stringify(request),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then((todo) => {
            dispatch({ type: "add-item", item: todo });
            setState({ name: "" });
            formRef.current.reset();
          });
    }

    const onEdit = (event) => {
        event.preventDefault();

        if(state.name === undefined || !/\S/.test(state.name)){
            state.name = undefined;
            return;
        }
    
        const request = {
          name: state.name.trim(),
          id: item.id,
          isCompleted: item.isCompleted
        };
    
    
        fetch(HOST_API + "/todo", {
          method: "PUT",
          body: JSON.stringify(request),
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => response.json())
          .then((todo) => {
            dispatch({ type: "update-item", item: todo });
            setState({ name: "" });
            formRef.current.reset();
          });
    }
    
    return(
    <form className="MyForm" ref={formRef}>
        <input className = "MyInput"
            type="text"
            name="name"
            placeholder="¿Qué piensas hacer hoy?"
            onChange={(event) => {
                setState({ ...state, name: event.target.value })
              }} ></input>
        {item.id && <button className = "MyButton" onClick={onEdit}>Actualizar</button>}
        {!item.id && <button className = "MyButton" onClick={onAdd}>Crear</button>}    
    </form>);
}

export default Form;