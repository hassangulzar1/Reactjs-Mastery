import { redirect } from "react-router-dom";

export function action(params) {
  localStorage.removeItem("token");
  return redirect("/");
}
