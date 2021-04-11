import { Link } from 'react-router-dom'

function NavBar({ user, userLogout }) {
   return (
      <header>
         <div>
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
         </div>
         <div>
            <Link to="/home">Home</Link>
            <br></br>
            <Link to="/profile">Profile</Link>
         </div>
      </header>
   )
}

export default NavBar