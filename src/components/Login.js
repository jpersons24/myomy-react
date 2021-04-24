import { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import styled from 'styled-components';


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
         history.push("/home")
      })
      .catch(error => {
         setErrors(error.errors)
      })
   }

   return(
      <Wrapper>
         <Form onSubmit={handleSubmit}>
            <h1 align="center">Login</h1>
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
            <input type="submit" />
            <p style={{margin: "15px"}}>Don't have an account? Create one <Link to="/signup">here!</Link></p>
         </Form>
      </Wrapper>
   )
}

export default Login;


const Wrapper = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin-top: 50px;
`

const Form = styled.form`
   padding: 20px;
   border-style: double;
   border-color: black;
   border-radius: 10px;
`