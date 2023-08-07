import Link from "next/link";

function Navbar() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/recipe">Recipe</Link>
      <Link href="/login">Login</Link>
    </div>
  );
}

export default Navbar;
