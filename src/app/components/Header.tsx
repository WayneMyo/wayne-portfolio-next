import { FC, useContext } from "react";
import { Context } from "../contexts/Context";

interface HeaderProps {
  logoName: string;
}

const Header: FC<HeaderProps> = ({ logoName }) => {
  const { changeNav, nav, toggle } = useContext(Context);

  return (
    <header className="header theme-bg">
      <div className="logo">{logoName}</div>
      <div className="menu-toggle">
        <button
          className={`menu-button ${toggle ? "menu-button--open" : ""}`}
          onClick={() => changeNav(nav, !toggle)}
        >
          <span>Menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
