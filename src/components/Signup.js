import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


function Signup({ setUser }) {

   const history = useHistory();

   const [formData, setFormData] = useState({
      username: "",
      password: "",
      profile_img: "",
   })

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
         console.log(data)
         setUser(data)
      })
      
      history.push("/home")
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
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
               />
               <br></br>
               <label for="profile_img">Profile Image URL: </label>
               <input
                  type="text"
                  name="profile_img"
                  value={formData.profile_img}
                  onChange={handleChange}
               />
               <br></br>
               <Button className="btn-login" as="input" type="submit" size="sm" />
            </form>
            <p>
               Already have an account? Login <Link to="/login">here!</Link>
            </p>
         </div>
      </div>
   )
};

export default Signup;

