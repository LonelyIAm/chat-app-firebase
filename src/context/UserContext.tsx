import { NextOrObserver, onAuthStateChanged, User } from "@firebase/auth";
import { createContext, FC, useContext, useEffect, useState } from "react";
import { auth } from "../lib/firebase";

const UserContext = createContext<User | null>(null);
const useUser = () => useContext(UserContext);

const UserProvider: FC = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(
      auth,
      setUser as NextOrObserver<User>
    );
    return unsubscribe;
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export { UserProvider, useUser };
