import Link from "next/link";

function skills() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/skills/html">Html</Link>
        </li>
        <li>
          <Link href="/skills/css">Css</Link>
        </li>
      </ul>
    </div>
  );
}

export default skills;
