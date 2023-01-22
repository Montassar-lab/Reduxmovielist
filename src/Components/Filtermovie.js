import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Rating } from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { changetitre, changetoile, handlereset } from '../Redux/Actions';

const Filtermovie=()=>{

    
    const etoile = useSelector(state=>state.etoile)
    const titre = useSelector(state=>state.titre)
    const dispatch=useDispatch()
    return(
        <div className='frstyle'>
            <Form.Control
                value = {titre}
                type="Text"
                className='inputstylefilter'
                placeholder="type here to filter..."
                onChange={(e)=>dispatch(changetitre(e.target.value) )}
                autoFocus
              />

            <Rating value={etoile} name="simple-controlled" onChange={(e)=>dispatch(changetoile(e.target.value))}/>
            
            <Button onClick={()=>dispatch(handlereset())} variant="outline-warning">Reset</Button>{' '}

        </div>
    )
}

export default Filtermovie