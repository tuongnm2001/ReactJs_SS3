
const DisplayTodo = (props) => {

    const deleteTodoFromChild = (id) => {
        props.deleteTodoInParent(id) // call fuction from parent(Home.js)
    }

    const listTodo = props.childData;

    return (
        <div>
            <span>---List Todos---</span>
            {
                listTodo.map((item, index) => {
                    return (
                        <div key={item.id}>
                            {item.name} ----- <span onClick={() => deleteTodoFromChild(item.id)} style={{ cursor: 'pointer' }}>x</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default DisplayTodo;