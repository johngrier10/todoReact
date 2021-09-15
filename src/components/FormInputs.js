import React, {useState, useContext} from 'react'
import { DataContext } from './DataProvider'

const FormInputs = () => {
  const [todos, setTodos] = useContext( DataContext );
  const [todoName, setTodosName] = useState( '' );
  
  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete: false}])
  }
    return (
      <form autoComplete='off' onSubmit={addTodo}>
        <input type="text" 
        name="todos" id="todos" 
        required placeholder="What to do?"
        value={todoName} onChange={e => setTodosName(e.target.value.toLocaleLowerCase())}/>

        <button type='submit'>Submit</button>
      </form>
    )
}

export default FormInputs
