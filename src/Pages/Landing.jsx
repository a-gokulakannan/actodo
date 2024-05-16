import Header from "../components/Header";
import Card from "../components/Card";
import TodoContainer from "../components/TodoContainer";
import { useLocation } from "react-router-dom"


function Landing() {
    const data = useLocation()
    return (
        <div>
            <div className="bg-black p-16">
                <div className="bg-[#EFEFEF] p-10 border rounded-md">
                    {/* Header  */}
                    <Header name={data.state.user} />
                    {/* Card */}
                    <div className="flex justify-between gap-7 my-5 flex-wrap">
                        <Card bgcolor={"#685BAE"} title={"23"} subtitle={"Chennai"} />
                        <Card bgcolor={"#C9534F"} title={"Augst"} subtitle={"23.00.23"} />
                        <Card bgcolor={"#C0862F"} title={"Build using"} subtitle={"React"} />

                    </div>
                    {/* Todo container */}
                    <TodoContainer />
                </div>
            </div>
        </div>

    )
}


export default Landing