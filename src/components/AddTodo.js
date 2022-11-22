
const AddTodo = (props) => {

    const { todo, setTodo, handleOnClick, handleKeyDownPassword } = props;

    return (
        <>
            <span>Todo's name </span>
            <input type='text' value={todo} onChange={(event) => setTodo(event.target.value)}
                onKeyDown={(event) => handleKeyDownPassword(event)}
            />
            <button onClick={(event) => handleOnClick(event)}>Submit</button>
            <br /> <br />
        </>
    )
}

export default AddTodo;