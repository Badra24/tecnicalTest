import jsCookie from "js-cookie";
import qs from "qs";
import { axiosInstance } from "../.././configs/ape";
import auth_types from "../action/types";

export function userRegister(values, setSubmitting) {
  return async function (dispatch) {
    try {
      let body = {
        email: values.email,
        username: values.username,
        full_name: values.full_name,
        password: values.password,
        phone: values.phone,
      };

      const res = await axiosInstance.post(
        "/user/register",
        qs.stringify(body)
      );

      const userData = res.data.result.user;
      const token = res.data.result.token;

      jsCookie.set("auth_token", token);
      dispatch({
        type: auth_types.USER_LOGIN,
        payload: userData,
      });

      setSubmitting(false);
    } catch (err) {
      console.log(err);

      setSubmitting(false);
    }
  };
}
