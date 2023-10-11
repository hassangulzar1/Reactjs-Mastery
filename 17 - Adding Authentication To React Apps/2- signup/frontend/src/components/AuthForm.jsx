import { Form, Link, useSearchParams } from "react-router-dom";

import classes from "./AuthForm.module.css";

function AuthForm() {
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required />
        </p>
        <p>
          <label htmlFor="image">Password</label>
          <input id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button>Save</button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;

// Why use Query parameter?
// where I basically toggle this isLogin state whenever I click this button down there. That of course works, there's nothing wrong with it and you could keep it that way. However, we could also leverage a standard web concept for managing this. We could leverage query parameters, search parameters as they're also called. Now, a query parameter is in the end a parameter that's appended in the URL after a question mark.And we could say that we, for example wanna support a mode query parameter which is either set to log in or to sign up. And depending on what it's set to we wanna load a different version of that form. So it's the same route, it's the same path, the path is always /auth,but we get this extra parameter which defines how exactly this component should be rendered. And that's not uncommon to do and an advantage of using query parameters would b that we can directly link to this page  in signup or log in mode so that we could link a user directly to the signup page, even though it's one at the same page just with a different UI being rendered.And that's why I want to replace this state based logic with my query parameter logic, not because it's generally better, but because it offers these advantages I mentioned. Now to switch to that state based logic, I will get rid of this switch off handler functio  and the useState call here,
