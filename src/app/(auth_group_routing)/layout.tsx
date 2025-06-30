

import "../globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
    <header className="bg-red-500 p-4 text-center text-4xl">Auth AHeader</header>
    <h1>auth layout for nested</h1>
        <main>{children}</main>
    <header className="bg-blue-400 p-4 text-center text-4xl">Auth Footer</header>
     </div>
  );
}
