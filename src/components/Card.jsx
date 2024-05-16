function Card(beauty) {
    return (
        <div style={{ backgroundColor: beauty.bgcolor}} className="px-10 py-5 border rounded-md text-center flex-grow">
            <h1 className="font-medium text-2xl">{beauty.title}</h1>
            <p>{beauty.subtitle}</p>
          </div>
    )
}

export default Card