import Link from "next/link";

export default function StudentInfo() {
  return (
    <div>
      {/* My name */}
      <h1>Sagar Sapkota</h1>
      <Link
        className="mt-40"
        href={"https://github.com/sagar442-debug?page=1&tab=repositories"}
        target="_blank"
      >
        Github repository
      </Link>
    </div>
  );
}
