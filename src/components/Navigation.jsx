import { useState } from "react";
import clsx from "clsx";
import { navItems } from "../data/portfolio.js";

export function Navigation({ active }) {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={close} aria-label="Sanjay portfolio home">
          Sanjay.
        </a>
        <div className={clsx("nav-links", open && "is-open")}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={clsx(active === item.id && "active")}
              onClick={close}
            >
              {item.label}
            </a>
          ))}
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
