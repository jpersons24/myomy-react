import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Signup({ setUser }) {

   const history = useHistory();

   const [formData, setFormData] = useState({
      username: "",
      password: "",
   })
   const [errors, setErrors] = useState([]);

   function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
   }

   function handleSubmit(e) {
      e.preventDefault()

      // POST /signup
      fetch('http://localhost:4000/signup', {
         method: "POST",
         headers: {"Content-Type": "application/json"},
         body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
         if (data.errors) {
            setErrors(data.errors)
         } else {
            const { user, token } = data
            localStorage.setItem("token", token)
            setUser(user)
            history.push("/profile")
         }
      })
   }

   return (
      <div className="signup">
         <div className="container">
            <h1>Signup</h1>
            <form className="form" onSubmit={handleSubmit}>
               <label for="username">Username: </label>
               <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
               />
               <br></br>
               <label for="password">Password: </label>
               <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
               />
               <br></br>
               <Button className="btn-login" as="input" type="submit" size="sm" />
               {errors.length > 0 ?
                  errors.map((error) => {
                     return <p style={{ color: "red" }} key={error}>{error}</p>
                  })
               : null}
            </form>
            <p>
               Already have an account? Login <Link to="/login">here!</Link>
            </p>
         </div>
      </div>
   )
};

export default Signup;

