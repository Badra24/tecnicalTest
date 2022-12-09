import jsCookie from "js-cookie";
import qs from "qs";
import { axiosInstance } from "../.././configs/ape";
import auth_types from "../action/types";

export function userLogin(values, setSubmitting) {
  return async function (dispatch) {
    try {
      let body = {
        username: values.username,
        email: values.email,
        password: values.password,
      };
      const res = await axiosInstance.post("/users/login", qs.stringify(body));

      // const userData = res.data.result;
      const userData = res.data.result.user;
      const token = res.data.result.token;

      if (!userData) {
        throw new Error("User not found");
      }
      if (userData.password !== values.password) {
        throw new Error("Wrong password");
      }

      // const userData = user;
      // const stringifiedUserData = JSON.stringify(userData.email);

      console.log(userData);

      // jsCookie.set("user_data", stringifiedUserData);
      // jsCookie.set("auto_render", rendering)
      jsCookie.set("auth_token", token);
      dispatch({
        type: auth_types.USER_LOGIN,
        payload: userData,
      });

      setSubmitting(false);
    } catch (err) {
      console.log(err);
      alert("Username, Email or Password wrong");

      setSubmitting(false);
    }
  };
}
