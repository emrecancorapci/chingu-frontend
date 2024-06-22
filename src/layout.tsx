import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="flex h-screen w-full flex-col gap-2 bg-black p-2">
      <Outlet />
    </div>
  );
}
