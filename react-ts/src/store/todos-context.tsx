import React, { ReactNode, useEffect, useState } from "react"
import Todo from "../models/todo"

export interface ContextInterface {
    items: Todo[]
    onAddTodo: (text: string) => void
    onDeleteTodo: (id: string) => void
}

export const TodosContext = React.createContext<ContextInterface>({
    items: [],
    onAddTodo: (text: string) => { },
    onDeleteTodo: (id: string) => { }
})

const TodosContextProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {

    const [todos, setTodos] = useState<Todo[]>([])
    useEffect(() => {
        async function onCreateTodo(text: string): Promise<Todo> {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(new Todo(text));
                }, 100)
            })
        }

        async function onAddTodoInitState() {
            const todosState = [
                new Todo('Learn React'),
                await onCreateTodo('Learn TypeScript')
            ]
            setTodos(todosState)
        }

        onAddTodoInitState()

    }, [])

    const onAddTodo = (text: string): void => {
        const newTodo = new Todo(text)
        setTodos(prevTodos => ([...prevTodos, newTodo]))
    }
    const onDeleteTodo = (id: string): void => {
        console.log(todos)
        setTodos(prevTodos => (
            [...prevTodos.filter(t => t.id !== id)]
        ))
    }

    const value: ContextInterface = {
        items: todos,
        onAddTodo: onAddTodo,
        onDeleteTodo
    }
    return (
        <TodosContext.Provider value={value}>
            {children}
        </TodosContext.Provider>
    )
}

export default TodosContextProvider