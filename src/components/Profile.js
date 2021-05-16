import { useState } from 'react'


function Profile({ user, setUser }) {

   const [formData, setFormData] = useState({
      username: user.username,
      profile_img: "",
   });
   const [showEdit, setShowEdit] = useState(false);

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
     <div className="profile">
       <div className="container">
         <h1>{user.username}</h1>
         <div className="row justify-content-between">
           <div className="col-3-sm">
             <p>
               Height: {user.height_feet}'{user.height_inches}"
             </p>
           </div>
           <div className="col-3-sm">
             <p>Weight: {user.weight}</p>
           </div>
           <div className="col-3-sm">
             <p>Age: {user.age}</p>
           </div>
         </div>
            
         <button onClick={setShowEdit(() => !showEdit)}>Edit profile</button>
               
               

         {/* <div>
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
         </div> */}
       </div>
     </div>
   );
}

export default Profile