import Link from "next/link";
import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function Navbar() {
  const user = useContext(AuthContext);
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
        </ul>
      </nav>
    </>
  );
}
