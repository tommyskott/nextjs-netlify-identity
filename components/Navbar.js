import Link from "next/link";
import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function Navbar() {
  const { user, login, logout } = useContext(AuthContext);
  console.log(user);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/vip">
              <a>VIP</a>
            </Link>
          </li>
          <li>
            <button onClick={login}>Login</button>
          </li>
          <li>
            <button onClick={logout}>Logout</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
