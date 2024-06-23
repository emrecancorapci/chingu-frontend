import { Outlet } from 'react-router-dom';

import Header from './components/layout/header';

export default function Layout() {
  return (
    <div className="flex h-screen w-full flex-col gap-2 bg-black p-2">
      <Header />
      <Outlet />
    </div>
  );
}
