import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1>The News Page</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-framwork">
            NextJs Is A Great Framework
          </Link>
        </li>
        <li>Something Else</li>
      </ul>
    </div>
  );
};

export default page;
