import { useSelector } from "react-redux";
import NavBar from "../NAVBAR/Navbar";
import NavBarSignIn from "./NavbarSignIn";

export default function Home() {
  const userSelector = useSelector((state) => state.auth);

  return <>{userSelector.id ? <NavBarSignIn /> : <NavBar />}</>;
}
