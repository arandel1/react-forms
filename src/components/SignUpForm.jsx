import { useState } from "react";

function SignUpForm ({ setToken }) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    // console.log("Hello!");
    try {
      const reponse = await fetch("https://fsa-jwt-practice.herokuapp.com/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: "password"
        })
      }
      )
      const result = await reponse.json();
      setToken(result.token);
      console.log(result)
    } catch(error) {
      setError(error.message);
    }
  }
  return(
    <>
      <h2>Sign Up</h2>
      {error && <p>{error}</p>}
      
      <form onSubmit={handleSubmit}>

        <label>
          Username: 
          <input value={username} onChange={(e) => setUsername (e.target.value)}/>
        </label>

        <br/>
        <br/>

        <label>
          Password:<input type = "password" value={password} onChange={(e) => setPassword (e.target.value)}/>
        </label>
        
        <div className="condition">
        {password.length < 10
            ? <p> Password must be greater than 10 characters </p>
            : null}
        </div>

        <br/>

        <button>Submit</button>
        <br/>
      </form>
    </>
  )
}

export default SignUpForm