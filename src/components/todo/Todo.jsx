import React, { useEffect, useRef, useState } from 'react'
import todo_icon from '../../assets/todo_icon.png'
import { TodoItems } from '../todoItems/TodoItems'

export const Todo = () => {

    const [todoList, setTodoList] = useState(localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [w])

    const inputRef = useRef();

    const add = () => {
        const inputText = inputRef.current.value.trim()

        if (inputText === "") {
            return null;
        }
        const newTodo = {
            id: Date.now(),
            text: inputText,
            isComplete: false
        }

        setTodoList((prev) => [...prev, newTodo])

        inputRef.current.value = ""

    }

    const deleteTodo = (id) => {
        setTodoList((prvTodos) => {
            return prvTodos.filter((todo) => todo.id !== id)
        })
    }

    const toggle = (id) => {
        setTodoList((prvTodos) => {
            return prvTodos.map((todo) => {
                if (id === todo.id) {
                    return { ...todo, isComplete: !todo.isComplete }
                }
                return todo
            })
        })

    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todoList))
    }, [todoList])


    return (
        <div className='place-self-center bg-white w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl text-black'>

            {/*---------- title ----------*/}
            <div className='flex gap-1'>
                <img className='w-5' src={todo_icon} alt="" />
                <h1 className='font-semibold'>To DO List</h1>
            </div>

            {/*---------- input box ----------*/}
            <div>
                <form action="" className='flex items-center my-7 bg-gray-200 rounded-full'>
                    <input ref={inputRef} className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600' type="text" placeholder='Add your task' />
                    <button onClick={add} className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>Add +</button>
                </form>

            </div>

            {/*---------- to do list ----------*/}
            <div>
                {todoList.slice().reverse().map((item, index) => {
                    return <TodoItems text={item.text} key={index} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle} />
                })}
            </div>

        </div>
    )
}
