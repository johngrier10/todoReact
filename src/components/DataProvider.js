import React, {useState, useEffect, createContext} from 'react'


export const DataContext = createContext();

export const DataProvider = (props) => {

    const[todos, setTodos] = useState([])

    useEffect(()=>{
        const todoStore = JSON.parse(localStorage.getItem('todoStore'))
        if (todoStore) setTodos(todoStore)
    },[])

    useEffect(()=>{
        localStorage.setItem('todoStore', JSON.stringify(todos))
    },[todos])


    return (
        <div>
            {/* Wrap components with Provider, permitting access to store. */}
            {/* ********************************************************** */}
            
            <DataContext.Provider value={[todos, setTodos]}>
            {/* Set value prop to state hook. */}
            
                {props.children}
            
            </DataContext.Provider>
        </div>
    )
}

