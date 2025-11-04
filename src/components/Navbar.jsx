import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navLinks = [
  { to: '/', label: 'Trang chủ' },
  { to: '/listings', label: 'Tất cả homestay' },
  { to: '/about', label: 'Về DayLaDau' },
  { to: '/contact', label: 'Liên hệ' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="bg-white/90 backdrop-blur border-b border-slate-200 sticky top-0 z-40">
      <nav className="container-width flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 text-primary font-semibold text-lg">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white font-bold">
            D
          </span>
          DayLaDau
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/listings"
            className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90"
          >
            Đặt homestay
          </Link>
        </div>
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-600 hover:bg-slate-100"
          aria-label="Toggle navigation"
        >
          {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-width flex flex-col py-4 gap-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-primary' : 'text-slate-600'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/listings"
              onClick={closeMenu}
              className="rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white hover:bg-primary/90 text-center"
            >
              Đặt homestay
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
