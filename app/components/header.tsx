import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-blue-500 p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <Link href="/" className="text-white text-2xl font-bold">
          Playlist
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="/songs" className="text-white hover:underline">
              Albums
            </Link>
          </li>
          <li>
            <Link href="api/auth/signin" className="text-white hover:underline">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
