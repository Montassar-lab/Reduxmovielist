import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link, useParams } from "react-router-dom"


const Moviedetail =()=>{

        const {ID}=useParams()
        const Mlist=useSelector(state=>state.Mlist)
        const found = Mlist.find(el=>el.id==ID)

    return(
        <div>
            <h1>{found.title}</h1>
            <p>{found.description}</p>

            
            <iframe width="560" height="315" src={found.videoURL} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <br/>

            <Link to='/Listmovies'><Button variant="outline-info">BACK TO Movies</Button></Link>
        </div>
    )
}

export default Moviedetail