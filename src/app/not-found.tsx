import Link from 'next/link';

export const metadata = { title: 'Page not found' };

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white px-6 text-center">
      <p className="text-purple-400 font-semibold tracking-widest">404</p>
      <h1 className="text-4xl md:text-5xl font-bold">This page doesn&apos;t exist</h1>
      <p className="text-gray-400 max-w-md">The link may be old or mistyped. Let&apos;s get you back on track.</p>
      <Link href="/" className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-semibold hover:opacity-90 transition">Back to home</Link>
    </main>
  );
}
