import { useEffect } from "react";
import classes from "./NewsletterSignup.module.css";
import { useFetcher } from "react-router-dom";

function NewsletterSignup() {
  //! when use fetcher is executed it give the bunch of attributes in the object
  // 1- if we use a fetcher form like this which we can then this will actually still trigger an action but it will not initailize a route transition --> so fetcher should basically be use whenever you wanna trigger and action, or also a loader without actually navigation to the page to which the loader belongs or the page which the action belongs.

  // 2- this useFether hook, is basically the toll you should use if you wnna interact with some action or a loader without transitioning --> so if you wanna send you request behind the scenes, without triggering any route changes.

  const fetcher = useFetcher();
  const { data, state } = fetcher;
  // state === ""

  useEffect(() => {
    if (state === "idle" && data && data.message) {
      window.alert("signup successful");
    }
  }, [data, state]);
  return (
    <fetcher.Form
      method="post"
      action="/newsletter"
      className={classes.newsletter}
    >
      <input
        type="email"
        placeholder="Sign up for newsletter..."
        aria-label="Sign up for newsletter"
      />
      <button>Sign up</button>
    </fetcher.Form>
  );
}

export default NewsletterSignup;
