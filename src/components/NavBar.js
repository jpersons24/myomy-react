import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRunning } from '@fortawesome/free-solid-svg-icons';



function NavBar({ user, userLogout }) {
   return (
      <NavBarWrapper className="bg-info">
         <Container fluid>
            <Row sm="2">
               <Col>
                  <NavTabs>
                     <LogoContainer>
                        <FontAwesomeIcon icon={faRunning} className="fa-2x" />
                        <h4>MyoMy</h4>
                     </LogoContainer>
                     <Link to="/home" style={{ padding: "10px", color: "white" }}>
                        Home
                     </Link>
                     <Link to="/profile" style={{ padding: "10px", color: "white"}}>
                        Profile
                     </Link>
                     <Link style={{ padding: "10px", color: "white" }}>
                        Workouts
                     </Link>
                     <Link style={{ padding: "10px", color: "white" }}>
                        Meals
                     </Link>
                     <Link style={{ padding: "10px", color: "white" }}>
                        Calendar
                     </Link>
                  </NavTabs>
               </Col>
               <Col>
                  {user ? ( <Button variant="secondary" href="/login" onClick={userLogout}>Logout</Button> ) : (
                     <AccountControls>
                        <Link to="/login" style={{ padding: "10px", color: "white" }}>
                           Login
                        </Link>
                        <br></br>
                        <Link to="/signup" style={{ padding: "10px", color: "white" }}>
                           Signup
                        </Link>
                     </AccountControls> 
                  )}
               </Col>
            </Row>
         </Container>
      </NavBarWrapper>
   )
}

export default NavBar

const NavBarWrapper = styled.header`
   width: auto;
   padding: 1.5rem 3rem;
   background: #d6cccb;
`

const NavTabs = styled.div`
   display: flex;
   justify-content: flex-start;
   margin: 10px;
`

const AccountControls = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;
`

const LogoContainer = styled.div`
   margin: 0 35px 0 0;
   text-align: center;
   color: white;
`