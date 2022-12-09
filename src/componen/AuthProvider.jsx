import jsCookie from "js-cookie";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { axiosInstance } from "../configs/ape";
import auth_style from "../redux/action/types";

function Authprovider({ children }) {
  const [isAuthChecked, setisAuthChecked] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fecthdata = async () => {
      const userToken = jsCookie.get("auth_token");

      if (userToken) {
        const userResponse = await axiosInstance.get("/user/refresh-token");
        if (userResponse) {
          dispatch({
            type: auth_style.USER_LOGIN,
            payload: userResponse.data.result.user,
          });
        } else {
          dispatch({
            type: auth_style.USER_LOGOUT,
          });
        }
      }

      setisAuthChecked(true);
    };
    fecthdata();
  }, []);

  if (!isAuthChecked) return <div>loading</div>;
  return children;
}

export default Authprovider;
