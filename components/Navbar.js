import Link from "next/link";

export default function Navbar() {
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
