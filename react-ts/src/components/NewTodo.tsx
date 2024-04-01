import { useContext, useRef } from "react"
import classes from './NewTodo.module.css'
import { TodosContext } from "../store/todos-context"

const NewTodo:React.FC<{}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)
    const {onAddTodo} = useContext(TodosContext)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value

        if(enteredText.trim().length === 0){
            return
        }

        onAddTodo(enteredText)

        todoTextInputRef.current!.value = ''
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <label>Todo text</label>
            <input type='text' id='text' ref={todoTextInputRef}></input>
            <button>Add Todo</button>
        </form>
    )
}

export default NewTodo