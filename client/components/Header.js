import Nav from "./Nav";
import Link from "next/link";

const Header = () => (
  <div>
    <div className="">
      <Link href="/">
        <a>Stick Around</a>
      </Link>
      <Nav />
    </div>
    <div className="">search</div>
  </div>
);

export default Header;
