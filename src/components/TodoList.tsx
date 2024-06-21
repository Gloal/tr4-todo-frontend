const TodoList = ({ todos: Todo[] }) => {


    //fetch all todos
    //sort with incomplete first
    //display and update count of incomplete

    return (

        <li className="p2 bg-pink-200 my-2 rounded-md up shadow-sm">
        <div>
        <p>{todos}</p>
            </div>
            </li>
        )
}

export default TodoList;