import { useState } from "react";
import { FaBars } from "react-icons/fa";

function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-center md:justify-between">
      <h1 className="text-center text-2xl font-black tracking-tight text-slate-900 md:text-left md:text-3xl">
        EMMA <span className="rounded-full bg-slate-900 px-2 py-1 text-xs align-middle text-white">DEV</span>
      </h1>

      <div className="md:hidden">
        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          className="mx-auto flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-wide text-slate-600"
        >
          <FaBars /> Menu
        </button>
        {isMenuOpen ? (
          <nav id="mobile-nav" className="mt-2 flex items-center justify-center gap-5 text-sm font-semibold text-slate-700">
            <a href="#about" className="transition hover:text-blue-700" onClick={closeMenu}>
              About
            </a>
            <a href="#projects" className="transition hover:text-blue-700" onClick={closeMenu}>
              Projects
            </a>
            <a href="#contact" className="transition hover:text-blue-700" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        ) : null}
      </div>

      <nav className="hidden gap-6 text-sm font-semibold text-slate-700 md:flex">
        <a href="#about" className="transition hover:text-blue-700">
          About
        </a>
        <a href="#projects" className="transition hover:text-blue-700">
          Projects
        </a>
        <a href="#contact" className="transition hover:text-blue-700">
          Contact
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;
