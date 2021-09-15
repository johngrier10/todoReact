import React from 'react'

const TodoFooter = () => {
    return (
    <div>
        <label htmlFor="all">
            <input type="checkbox" name="all" id="all" />
            ALL
        </label>
        <p>You have 0 to do</p>
        <button id="delete">Delete</button>
    </div>
    )
}

export default TodoFooter
