import { useState } from "react";
import { FaBars, FaCalendarCheck, FaTimes } from "react-icons/fa";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="mb-12 rounded-3xl border border-slate-200 bg-white/85 p-4 shadow-lg shadow-slate-200/70 backdrop-blur md:mb-14">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-black tracking-tight text-slate-900 md:text-3xl">
          EMMA <span className="rounded-full bg-teal-700 px-2 py-1 text-xs align-middle text-white">DEV</span>
        </h1>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-teal-700 transition hover:bg-teal-50 md:hidden"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
          <a href="#about" className="transition hover:text-teal-700">
            About
          </a>
          <a href="#projects" className="transition hover:text-teal-700">
            Projects
          </a>
          <a href="#contact" className="transition hover:text-teal-700">
            Contact
          </a>
        </nav>
      </div>

      <a
        href="#contact"
        className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-teal-800"
      >
        <FaCalendarCheck /> Request Appointment
      </a>

      {isMenuOpen ? (
        <nav id="mobile-nav" className="mt-3 flex flex-col rounded-xl border border-slate-200 bg-white p-3 text-sm font-semibold text-slate-700 md:hidden">
          <a href="#about" className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-teal-700" onClick={closeMenu}>
            About
          </a>
          <a href="#projects" className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-teal-700" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-teal-700" onClick={closeMenu}>
            Contact
          </a>
        </nav>
      ) : null}
    </header>
  );
}

export default SiteHeader;
