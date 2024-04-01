import React, { ReactNode, useContext } from "react"
import TodoComponent from "./TodoItem"
import classes from './Todos.module.css'
import { ContextInterface, TodosContext } from "../store/todos-context"

const Todos: React.FC<{ children?: ReactNode }> = (props) => {

    const {items} :ContextInterface = useContext(TodosContext)
    return (
        <ul className={classes.todos}>
            {items.map(
                item => <TodoComponent todo={item}/>
            )}
        </ul>
    )
}
export default Todos
