import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { Navigate } from "react-router-dom"


function Signup(probs) {

    const navigate = useNavigate()
    const [enteredUsername, setEnteredUserName] = useState()
    const [enteredPass, setEnteredPass] = useState()

    const users = probs.users
    const setUsers = probs.setUsers

    function handleUserInput(event) {
        setEnteredUserName(event.target.value)
    }

    function handleUserPassword(event) {
        setEnteredPass(event.target.value)

    }

    function addUser(){
        setUsers([...users, {username: enteredUsername, password: enteredPass}])
        navigate("/")
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md ">
                <h1 className="text-3xl font-medium">Hey hi</h1>
                <p>Signup here :)</p>

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-2 bg-transparent border rounded-md" placeholder="UserName" onChange={handleUserInput}/>
                    <input type="text" className="w-52 border-black p-2 bg-transparent border rounded-md" placeholder="Password" onChange={handleUserPassword}/>
                    <input type="text" className="w-52 border-black p-2 bg-transparent border rounded-md" placeholder="Confirm Password" />

                    <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={addUser}>Sign Up</button>
                    <p>Already have an account? <Link to={"/login"} className="underline">Login</Link></p>
                </div>

            </div>
        </div>
    )
}

export default Signup