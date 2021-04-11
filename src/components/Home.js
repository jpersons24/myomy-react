function Home({ user }) {
   return (
      <div>
         <h1>Welcome, {user.username}! Start logging your activity today!</h1>
      </div>
   )
}

export default Home;