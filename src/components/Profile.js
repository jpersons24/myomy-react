import { useState } from 'react'


function Profile({ user, setUser }) {

  const [formData, setFormData] = useState({
    username: user.username,
    profile_img: "",
    weight: user.weight,
    height_feet: user.height_feet,
    height_inches: user.height_inches,
    age: user.age,
  });
  const [showEdit, setShowEdit] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    
    const token = localStorage.getItem("token")

    // PATCH /me
    fetch(`http://localhost:4000/me/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
        setUser(data)
    })

    // setFormData({
    //     username: user.username,
    //     profile_img: "",
    // })
  }

  function handleForm() {
    setShowEdit(() => !showEdit)
  }


  return (
    <div className="profile">
      <div className="container">
        <div className="row justify-content-around">
          <div className="col-4-sm">
            <h3>{user.username}</h3>
            {!showEdit ? 
            <button onClick={handleForm}>Edit Profile</button> 
            : <button onClick={handleForm}>Hide</button>}
          </div>
          <div className="col-4-sm">
            <p>
              Height: {user.height_feet}'{user.height_inches}"
            </p>
          </div>
          <div className="col-4-sm">
            <p>Weight: {user.weight}</p>
          </div>
          <div className="col-4-sm">
            <p>Age: {user.age}</p>
          </div>
        </div>

        {/* ******** form divider ******* */}
        {showEdit ? 
        <div className="row justify-content-center">
          <div className="col-1-sm">
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
              <label>Weight: </label>
              <input
                type="number"
                max="400"
                min="0"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
              />
              <br></br>
              <label>Height (feet): </label>
              <input
                type="number"
                max="8"
                min="4"
                name="height_feet"
                value={formData.height_feet}
                onChange={handleChange}
              />
              <br></br>
              <label>Height (inches): </label>
              <input
                type="number"
                max="11"
                min="1"
                name="height_inches"
                value={formData.height_inches}
                onChange={handleChange}
              />
              <br></br>
              <label>Age: </label>
              <input
                type="number"
                min="18"
                max="100"
                name="age"
                value={formData.age}
                onChange={handleChange}
              />
              <br></br>
              <input type="submit" />
            </form>
          </div>
        </div>
        : null}
      </div>
    </div>
  );
}

export default Profile;