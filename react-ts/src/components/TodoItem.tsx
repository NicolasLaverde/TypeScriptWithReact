import React, { useContext } from "react";
import Todo from "../models/todo";
import classes from './TodoItem.module.css'
import { ContextInterface, TodosContext } from "../store/todos-context";

const TodoComponent:React.FC<{
    todo: Todo,
}> = ({
        todo: { id, text},
}) => {
    const {onDeleteTodo}: ContextInterface = useContext(TodosContext)
    
    function handlerDeleteTodo (): void {
        onDeleteTodo(id)
    }
    return (
    <li className={classes.item} key={id}>
        <button onClick={handlerDeleteTodo}>
            {text}
        </button>
    </li>)
}

export default TodoComponent