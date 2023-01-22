import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

const Heading =()=>{

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">MOVILIX</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home"><Link to='/'>Home</Link></Nav.Link>
                            <Nav.Link href="#Movies"><Link to='/Listmovies'>Movies</Link></Nav.Link>
                            <Nav.Link href="#Contact"><Link to='/Contact'>Contact</Link></Nav.Link>
                        </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Heading