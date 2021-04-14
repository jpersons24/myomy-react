import { Link } from 'react-router-dom'
import styled from 'styled-components'

function NavBar({ user, userLogout }) {
   return (
      <Header>
         <NavTabs>
            <Link 
               to="/home" 
               style={{
                  marginRight: "10px",
                  paddingLeft: "5px"
               }}
            >
               Home
            </Link>
            <br></br>
            <Link 
               to="/profile"
               style={{
                  marginRight: "10px",
                  paddingLeft: "5px"
            }}
            >
               Profile
            </Link>
         </NavTabs>
         <AccountControls>
            {user ? ( <button onClick={userLogout}>Logout</button> )
            :
            (
               <>
                  <Link to="/login">Login</Link>
                  <br></br>
                  <Link to="/signup">Signup</Link>
               </>
            )
            }
         </AccountControls>
      </Header>
   )
}

export default NavBar

const Header = styled.header`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
`

const NavTabs = styled.div`
   display: flex;
   justify-content: space-around;
   margin: 10px;
`

const AccountControls = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 10px;
`