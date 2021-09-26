import { signOut } from "@firebase/auth";
import { useAuth, useUser } from "reactfire";
import Auth from "../lib/Auth";

function Home() {
  const { data: user } = useUser();
  const auth = useAuth();

  const signout = async () => {
    await signOut(auth);
  };

  return (
    <Auth>
      <h1>Home</h1>
      <p>{JSON.stringify(user?.displayName)}</p>
      <button onClick={signout}>sign out</button>
    </Auth>
  );
}

export default Home;
