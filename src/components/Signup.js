import { useState } from 'react';

function Signup() {

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
         // setUser(data)
      })
      // create new user {}
      // set user in state in App
      
   }

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <h1>Signup</h1>
            <label>Username: </label>
            <input
               type="text"
               name="username"
               value={formData.username}
               onChange={handleChange}
            />
            <br></br>
            <label>Password: </label>
            <input
                type="text"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <br></br>
            <label>Profile Image URL: </label>
            <input
               type="text"
               name="profile_img"
               value={formData.profile_img}
               onChange={handleChange}
            />
            <br></br>
            <input type="submit" />
         </form>
      </div>
   )
};

export default Signup;