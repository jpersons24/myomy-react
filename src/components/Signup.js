import { useState } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';


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
      <Wrapper>
         <Form onSubmit={handleSubmit}>
            <h1 align="center">Signup</h1>
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
            <input type="submit" />
         </Form>
      </Wrapper>
   )
};

export default Signup;

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