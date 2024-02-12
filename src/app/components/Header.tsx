import { FC, useContext } from "react";
import { Context } from "../contexts/Context";

const Header: FC = () => {
  const { changeNav, nav, toggle } = useContext(Context);

  return (
    <header className="header theme-bg">
      <div className="logo">WAYNE MYO</div>
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
