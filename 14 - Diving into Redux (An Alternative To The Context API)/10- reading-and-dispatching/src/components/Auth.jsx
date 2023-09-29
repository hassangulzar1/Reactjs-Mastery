import { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./Auth.module.css";
import { authActions } from "../store/auth-slice";
const Auth = () => {
  const [inputState, setInputState] = useState({ email: "", password: "" });
  const inputChangeHandler = (e) => {
    setInputState((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.login());
  };
  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input
              onChange={inputChangeHandler}
              type="email"
              name="email"
              id="email"
              value={inputState.email}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input
              onChange={inputChangeHandler}
              name="password"
              type="password"
              value={inputState.password}
              id="password"
            />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
