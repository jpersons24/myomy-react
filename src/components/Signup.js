function Signup() {
   return (
      <div>
         <form>
            <h1>Signup</h1>
            <label>Username: </label>
            <input
               type="text"
               name="username"
               // value=""
               // onChange={}
            />
            <br></br>
            <label>Password: </label>
            <input
                type="text"
                name="password"
                // value=""
                // onChange={}
            />
            <br></br>
            <label>Profile Image URL: </label>
            <input
               type="text"
               name="profile_img"
               // value=""
               // onChange={}
            />
            <br></br>
            <input type="submit" />
         </form>
      </div>
   )
};

export default Signup;