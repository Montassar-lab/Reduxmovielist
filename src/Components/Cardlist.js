import { Rating } from '@mui/material';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { handledelete } from '../Redux/Actions';

const Cardlist =({el})=>{

    const dispatch=useDispatch()
    const [showMore, setShowMore] = useState(false);

    return(
        <div>

            <Card style={{ width: '18rem' }}>

            <Link to={`/Descriptionpage/${el.id}`}>
                <Card.Img variant="top" src={el.posterURL} style={{width :'286px',height:'310px'}}/>
            </Link>

                <Card.Body>
                    <Card.Title>{el.title}</Card.Title>
                    <Card.Text>{showMore ? el.description : `${el.description.substring(0, 100)}`}
                    <button onClick={()=> setShowMore(!showMore)} className="btn">{showMore ? 'Show Less' : '...Show More'}</button>
                    </Card.Text>
                    <Rating name="read-only" value={el.rating} readOnly />

                    <Button onClick={()=>dispatch(handledelete(el.id))}>Delete</Button>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Cardlist