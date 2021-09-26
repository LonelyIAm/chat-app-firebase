import { getAuth } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider, FirestoreProvider, useFirebaseApp } from "reactfire";
import { Home, Login, Register } from "./pages";

function App() {
  const authInstance = getAuth(useFirebaseApp());
  const firestoreInstance = getFirestore(useFirebaseApp());

  return (
    <AuthProvider sdk={authInstance}>
      <FirestoreProvider sdk={firestoreInstance}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </FirestoreProvider>
    </AuthProvider>
  );
}

export default App;
