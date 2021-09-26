import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "@firebase/auth";
import { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "reactfire";

function Login() {
  const auth = useAuth();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const loginGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    history.push("/");
  };
  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    history.push("/");
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={loginGoogle}>login with google</button>
      <hr />
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={handleEmailChange}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
