import { useState } from 'react';


function Login({ setUser }) {

   const [formData, setFormData] = useState({
      username: "",
      password: "",
   });

   function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   }

   function handleSubmit(e) {
      e.preventDefault()

      // POST /login
      fetch('http://localhost:4000/login', {
         method: "POST"
      })
         .then(res => res.json())
         .then(user => {
            // response -> user saved in state
            console.log(user)
            setUser(user)
         })
   }

   return(
      <div>
         <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <label>Username: </label>
            <input
               type="text"
               name="username"
               autoComplete="off"
               value={formData.username}
               onChange={handleChange}
            />
            <br></br>
            <label>Password: </label>
            <input
               type="text"
               name="password"
               autoComplete="off"
               value={formData.password}
               onChange={handleChange}
            />
            <br></br>
            <input type="submit"/>
         </form>
      </div>
   )
}

export default Login