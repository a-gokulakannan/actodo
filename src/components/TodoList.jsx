import TodoItem from "./TodoItem"

function TodoList(acti) {
   const activityArr = acti.activityArr
   const setAactivityArr = acti.setAactivityArr


    return (
        <div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow">
            <h1 className="text-2xl font-medium">Todays Activity</h1>
            {activityArr.length===0?<p>You haven't add nothing</p> :""}
            {
                activityArr.map(function(item, index){
                   return <TodoItem id={item.id} item={item.activity} index={index} activityArr={activityArr} setAactivityArr={setAactivityArr}/>
                })
            }
        </div>
    )
}

export default TodoList