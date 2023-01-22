import { Link } from "react-router-dom"


const Home=()=>{

    return(
        <div className="home">

            <Link to='/Listmovies'><button>GO TO MOVIES LIST</button></Link>

        </div>
    )
}

export default Home