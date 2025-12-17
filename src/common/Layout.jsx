import Header from '@/common/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />

      <main className=" bg-gray-100 min-h-screen pt-24">
        <Outlet />
      </main>
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="
          cursor-pointer
          fixed
          bottom-6 right-6
          z-50
          rounded-full
          bg-black
          text-white
          px-4 py-3
          shadow-lg
          transition
          font-bold
          hover:bg-gray-700

          dark:bg-white
          dark:hover:bg-neutral-300
          dark:text-black
          dark:shadow-black/50
        "
      >
        TOP
      </button>
    </>
  );
};

export default Layout;
