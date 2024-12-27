function Header() {
  return (
    <header>
      <nav className="w-full h-[69px] left-0 top-0 absolute bg-[#fffcf2]">
        <div className="top-[27px] right-[50px] absolute justify-start gap-[40px] inline-flex">
          <a href="#" className="py-2 text-black text-sm">
            PROJECTS
          </a>
          <a href="#" className="py-2 text-black text-sm">
            SKILLS
          </a>
          <a href="#" className="py-2 text-black text-sm">
            ABOUT
          </a>
          <a href="#" className="py-2 text-black text-sm">
            CONTACT
          </a>
          <a
            href="#"
            className="px-6 py-2 bg-[#eb5e28] text-[#fffcf2]  hover:bg-[#403d39] transition-colors text-sm font-medium"
          >
            Projects
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
