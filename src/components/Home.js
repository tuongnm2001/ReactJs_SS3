import React, { useState } from "react";
import _ from "lodash";
import AddTodo from "./AddTodo";
import DisplayTodo from "./DisplayTodo";

const Home = () => {

    const [todo, setTodo] = useState('')
    const [listTodo, setListTodo] = useState(
        [
            { id: 'todo1', name: 'Watching Youtube' },
            { id: 'todo2', name: 'Using Facebook' },
            { id: 'todo3', name: 'Reading Book' }
        ]
    )


    const handleOnClick = () => {
        if (!todo) {
            alert('Todo name empty');
            return;
        }
        let todoItem = {
            id: Math.floor((Math.random() * 1000) + 1), name: todo
        }
        setListTodo([...listTodo, todoItem])
        setTodo('')
    }

    const handleDelete = (id) => {
        let currentListTodo = listTodo;
        currentListTodo = currentListTodo.filter(item => item.id !== id);
        setListTodo(currentListTodo);
    }

    const handleKeyDownPassword = (event) => {
        if (event.key === 'Enter') {
            handleOnClick();
        }
    }

    return (
        <>
            <AddTodo
                todo={todo}
                setTodo={setTodo}
                handleOnClick={handleOnClick}
                handleKeyDownPassword={handleKeyDownPassword}
            />

            <DisplayTodo
                childData={listTodo}
                deleteTodoInParent={handleDelete}
            />

        </>
    )
}

export default Home;