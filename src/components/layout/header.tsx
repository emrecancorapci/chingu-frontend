export default function Header() {
  return (
    <div className="flex w-full flex-row justify-center text-white">
      <header className="col-span-12 grid w-full max-w-screen-xl grid-cols-12 border">
        <div className="col-span-3">LOGO</div>
        <nav className="col-span-6 px-4">
          <ul className="grid grid-cols-3 *:col-span-1">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
        <div className="col-span-3 grid grid-cols-2 *:col-span-1">
          <button type="button">Sign In</button>
          <button type="button">Get Started</button>
        </div>
      </header>
    </div>
  );
}
