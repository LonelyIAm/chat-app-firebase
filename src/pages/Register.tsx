import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "@firebase/auth";
import { useState } from "react";
import { useHistory } from "react-router";
import { useAuth } from "reactfire";

function Register() {
  const history = useHistory();
  const auth = useAuth();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);
  const register = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { user } = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    await updateProfile(user, { displayName: username });
    history.push("/");
  };
  const registerGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
    history.push("/");
  };

  return (
    <>
      <h1>Register</h1>
      <button onClick={registerGoogle}>register with google</button>
      <hr />
      <form onSubmit={register}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={handleUsernameChange}
        />
        <br />
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
        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default Register;
