import Image from "next/image";
import Link from "next/link";

export default ({ hideNav = false }: { hideNav?: boolean }) => {
  return (
    <header className="bg-slate-50">
      <div className="container mx-auto flex min-h-16 flex-row items-center justify-between px-6 align-middle md:px-0">
        <Link href="/">
          <Image src="/next.svg" alt="logo" width="100" height="100" />
        </Link>
        {!hideNav && (
          <nav className="flex gap-8">
            <Link href="/design">Design System</Link>
            <Link href="/login">Login</Link>
            <Link href="/register">Register</Link>
          </nav>
        )}
      </div>
    </header>
  );
};
