import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container-x flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="h-display mt-4 text-5xl sm:text-7xl">Page not found</h1>
      <Link href="/" className="btn-solid mt-10">
        Back to home
      </Link>
    </div>
  );
}
