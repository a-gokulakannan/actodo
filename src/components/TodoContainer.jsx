import { useState } from "react"
import AddTodoForm from "./AddTodoForm"
import TodoList from "./TodoList"


function TodoContainer() {
    const [activityArr, setAactivityArr] = useState([
        
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <AddTodoForm activityArr={activityArr} setAactivityArr={setAactivityArr}/>
                <TodoList activityArr={activityArr} setAactivityArr={setAactivityArr}/>

            </div >
        </div>
    )
}

export default TodoContainer