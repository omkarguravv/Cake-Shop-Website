import './App.css';
import { useState } from "react";

function registerUser() {

}

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPaassword] = useState('');

  async function registerUser(){
    
  }

  return (
    <>
      <h1>Register</h1>
      <form onSumit={registerUser} action="">
        <input value={name} OnChange={(e) => setName(e.target.value)} type="text" />
        <input value={email} OnChange={(e) => setEmail(e.target.value)} type="text" />
        <input value={password} OnChange={(e) => setPaassword(e.target.value)} type="text" />
        <button type="submit" value="Register" >submit</button>
      </form>



    </>
  );
}

export default App;
