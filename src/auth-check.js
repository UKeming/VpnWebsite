import axios from "axios";
import { domain } from "./domain";

function checkAuth() {
  let login = axios
    .get("http://" + domain + ":80/api/login-status")
    .then((response) => {
      let data = response.data;
      return data.data;
    });
  return login;
}
export default checkAuth;
