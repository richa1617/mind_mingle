interface NavItemProps {
  text: string;
  href: string;
}

function NavItem(props: NavItemProps) {
  return (
    <li className="nav_item_list">
      <a href={props.href}>{props.text}</a>
    </li>
  );
}

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <ul className="navbar_li">
          <NavItem text="Home" href="/" />
          <NavItem text="About " href="/about" />
          <NavItem text="Contact" href="/contact" />
          <NavItem text="Sheep" href="/sheep" />
          <NavItem text="Pig" href="/pig" />
          <NavItem text="Chicken" href="/chicken" />
          <NavItem text="Cow" href="/cow" />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
