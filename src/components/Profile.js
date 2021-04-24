import { useState } from 'react'


function Profile({ user, setUser }) {

   const [formData, setFormData] = useState({
      username: user.username,
      profile_img: "",
   });

   function handleChange(e) {
      setFormData({ ...formData, [e.target.name]: e.target.value })
   }

   function handleSubmit(e) {
      e.preventDefault()
      
      // PATCH /me
      fetch(`http://localhost:4000/me/${user.id}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify(formData)
      })
      .then(res => res.json())
      .then(data => {
         setUser(data)
      })

      setFormData({
         username: user.username,
         profile_img: "",
      })
   }


   return (
      <div>
         {user.profile_img ? <img src={user.profile_img} alt="Add a profile image!" /> : null}
         <h1>Update {user.username}'s Profile</h1>
         <div>
            <form onSubmit={handleSubmit}>
               <label>Username: </label>
               <input 
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
               />
               <br></br>
               <label>Profile Image: </label>
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
      </div>
   )
}

export default Profile