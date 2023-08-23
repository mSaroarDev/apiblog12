import Link from "next/link";

export default function Header() {
  return (
    <>
      <div className="bg-gray-100 py-5 shadow-sm">
        <main>
          <div className="flex gap-5 items-center justify-between">
            <div>
              <Link href="/">
                <h1 className="text-base">Simple Blog</h1>
              </Link>
            </div>
            <div>
              <ul className="flex gap-4 ">
                <li className="hover:underline duration-300">
                  <Link href="/">Home</Link>
                </li>
                <li className="hover:underline duration-300">
                  <Link href="/about">About</Link>
                </li>
                <li className="hover:underline duration-300">
                  <Link href="/contact">Contact</Link>
                </li>
                <li className="hover:underline duration-300">
                  <Link href="/blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
