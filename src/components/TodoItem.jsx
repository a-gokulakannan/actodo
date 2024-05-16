function TodoItem(act){
    const activityArr = act.activityArr
    const setAactivityArr = act.setAactivityArr

    function handleDelete(deleted){
        var tempArr = activityArr.filter(function(item){
            if(item.id === deleted){
                return false
            }else{
                return true
            }
        })

        setAactivityArr(tempArr)
    }
    return(
        <div className="flex justify-between">
        <p>{act.index+1}.{act.item}</p>
        <button className="text-red-500" onClick={()=>handleDelete(act.id)}>Delete</button>
        </div>
    )
}

export default TodoItem