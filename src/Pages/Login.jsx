import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(probs) {
    const navigate = useNavigate()
    const [enteredUsername, setEnteredUserName] = useState()
    const [enteredPass, setEnteredPass] = useState()
    const [regUser, setRegUser] = useState(true)

    const users = probs.users


    function handleUserInput(event) {
        setEnteredUserName(event.target.value)
    }

    function handleUserPassword(event) {
        setEnteredPass(event.target.value)

    }

    function checkUser() {
        users.forEach(function (item) {
            var userFound = false
            if (item.username === enteredUsername && item.password === enteredPass) {
                console.log("Login successfull")
                userFound = true
                navigate("/landing", {state:{user:enteredUsername}})
            }
            if (userFound === false) {
                console.log("Login failed")
                setRegUser(false)
            }
        })
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md ">
                <h1 className="text-3xl font-medium">Hey hi</h1>
                {regUser ? <p>I help your activity managing after you login :)</p> : <p className="text-red-600">Please SignUp before Login</p>}

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52 border-black p-2 bg-transparent border rounded-md" placeholder="UserName" onChange={handleUserInput} />
                    <input type="text" className="w-52 border-black p-2 bg-transparent border rounded-md" placeholder="Password" onChange={handleUserPassword} />

                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={checkUser}>Login</button>
                    <p>If you don't have an account? <Link to={"/signup"} className="underline">SignUp</Link></p>
                </div>

            </div>
        </div>
    )
}

export default Login