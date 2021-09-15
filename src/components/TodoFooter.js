import React, {useContext, useState} from 'react'
import { DataContext } from './DataProvider';

const TodoFooter = () => {

    const initialState = false;
    const [checkAll, setCheckAll   ] = useState(initialState)
    const[todos, setTodos] = useContext(DataContext)

    const handleCheckAll = () => {
        const newTodos = [...todos]
        newTodos.forEach((todo) =>{
            todo.complete = !checkAll;
        })
        setTodos(newTodos)
        setCheckAll(!checkAll)
    }
    return (
    <div>
        <label htmlFor="all">
            <input type="checkbox" 
            onClick={handleCheckAll}
            name="all" id="all" />
            ALL
        </label>
        <p>You have {todos.length} Todos to do.</p>
        <button id="delete">Delete</button>
    </div>
    )
}

export default TodoFooter
