import Link from 'next/link';
import Image from 'next/image';

export const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Agents</h1>
        {/* <Image src="/logo.png" alt="site logo" width={128} height={77} /> */}
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/agents/">Agents Listing</Link>
    </nav>
  );
};
