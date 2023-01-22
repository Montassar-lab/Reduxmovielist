import { useSelector } from "react-redux"
import Addmovie from "./Addmovie"
import Cardlist from "./Cardlist"
import Filtermovie from "./Filtermovie"



const Afficherlist =()=>{

    const Mlist=useSelector(state=>state.Mlist)
    const titre=useSelector(state=>state.titre)
    const etoile=useSelector(state=>state.etoile)

    return(
        <>
        
        <div className='filtrstyle'>
            <Addmovie/>
            <Filtermovie/>
        </div>
        
        <div className='Cardstyle'>
           
            

            {
                Mlist.filter(el=> el.title.toUpperCase().includes(titre.toUpperCase()) && el.rating>=etoile)
                .map(el=> <Cardlist el={el}/>)
            }

        </div>
        </>
    )
}

export default Afficherlist