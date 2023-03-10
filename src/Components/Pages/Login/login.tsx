import { FC, useContext, useState } from "react";
import { AuthContext } from "../../../Context/context";
import { IAuth } from "../../../Types/types";

const Login: FC = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext) as IAuth;
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const onChangeAdmin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAdmin(e.target.value);
  };
  const login = (e: React.FormEvent) => {
    e.preventDefault();
    if (admin === "admin" && password === "111") {
      setIsAuth(true);
      localStorage.setItem("auth", "true");
    }
  };
  return (
    <>
      <h1 style={{ display: "flex", justifyContent: "center" }}>Sign in </h1>
      <form onSubmit={login}>
        <input
          type="text"
          placeholder="admin"
          value={admin}
          onChange={onChangeAdmin}
        />
        <input
          type="password"
          placeholder="111"
          value={password}
          onChange={onChangePassword}
        />
        <button>Sign in</button>
      </form>
    </>
  );
};

export default Login;
