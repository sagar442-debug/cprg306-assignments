import Link from "next/link";

export default function Home() {
  let linkStyles = "text-blue-500 hover:underline";
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href={"./week-2/"}>Link to week-2 page</Link>

      <ul>
        <li>
          <Link href={"./week-2/"}>Link to week-2 page</Link>
        </li>
        <li>
          <Link href={"./week-3/objects/"} className={linkStyles}>
            Link to week-3 objects
          </Link>
        </li>
        <li>
          <Link href={"./week-3/props/"} className={linkStyles}>
            Link to week-3 props
          </Link>
        </li>
      </ul>
    </main>
  );
}
