const Navbar = () => {
  return (
    <div className="hidden md:block">
      <nav aria-label="Global">
        <ul className="flex items-center gap-6 text-sm text-dark-blue">
          <li>
            <a className="transition hover:text-gray-500/75" href="/">
              {" "}
              Pricing{" "}
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-500/75" href="/">
              {" "}
              Product{" "}
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-500/75" href="/">
              {" "}
              About Us{" "}
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-500/75" href="/">
              {" "}
              Careers{" "}
            </a>
          </li>

          <li>
            <a className="transition hover:text-gray-500/75" href="/">
              {" "}
              Community{" "}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
