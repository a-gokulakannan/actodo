

function Header(userName) {
    return (
        <div>
            <h1 className="text-3xl font-medium">Hello! {userName.name}</h1>
            <p>I help you manage your activities :)</p>
        </div>
    )
}

export default Header