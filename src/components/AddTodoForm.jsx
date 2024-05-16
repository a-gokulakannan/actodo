import { useState } from "react"

function AddTodoForm(acti) {
    const activityArr = acti.activityArr
    const setAactivityArr = acti.setAactivityArr

    const [newActivity, setNewActivity] = useState("")

    function handleChange(evt) {
        setNewActivity(evt.target.value)
    }
    function addActivity() {
        setAactivityArr([...activityArr,{id:activityArr.length+1, activity: newActivity}])
        setNewActivity("")
}
return (
    <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage activity</h1>

        <div>
            <input value={newActivity} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?" />
            <button onClick={addActivity} className="bg-black text-white p-1 border border-black">Add</button>
        </div>
    </div>
)
}

export default AddTodoForm