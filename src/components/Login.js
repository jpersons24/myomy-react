import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Login({ setUser }) {

   const history = useHistory()

   const [formData, setFormData] = useState({
      username: "",
      password: "",
   });
   const [errors, setErrors] = useState([]);

   function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   }

   function handleSubmit(e) {
      e.preventDefault()

      // POST /login
      fetch('http://localhost:4000/login', {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(formData),
      })
      .then((res) => {
         return res.json().then(data => {
            if (res.ok) {
               return data
            } else {
               throw data
            }
         });
      })
      .then(user => {
         setUser(user)
         history.push("/profile")
      })
      .catch(error => {
         setErrors(error.errors)
      })
   }

   return(
      <div className="login">
         <div className="container">
            <h1>Login</h1>
            <form className="form" onSubmit={handleSubmit}>
               <label for="username">Username: </label>
               <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  value={formData.username}
                  onChange={handleChange}
               />
               <br></br>
               <label for="password">Password: </label>
               <input
                  type="password"
                  name="password"
                  autoComplete="off"
                  value={formData.password}
                  onChange={handleChange}
               />
               <br></br>
               {errors.map((error) => (
                  <p style={{color: "red"}} key={error}>
                     {error}
                  </p>
               ))}
               <Button className="btn-login" as="input" type="submit" size="sm" />
            </form>
            <p>
               Don't have an account? Create one <Link to="/signup">here!</Link>
            </p>
         </div>
      </div>
   )
}

export default Login;

