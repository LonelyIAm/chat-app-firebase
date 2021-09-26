import { FC } from "react";
import { Redirect } from "react-router";
import { useSigninCheck } from "reactfire";

const Auth: FC = ({ children }) => {
  const { status, data } = useSigninCheck();

  return status === "loading" ? null : data.signedIn ? (
    <>{children}</>
  ) : (
    <Redirect to="/login" />
  );
};

export default Auth;
