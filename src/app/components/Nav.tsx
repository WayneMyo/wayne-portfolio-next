import { FC, useContext, useEffect, useState } from "react";
import { Context } from "../contexts/Context";

interface NavProps {
    navItems: { key: string; label: string }[];
}

const Nav: FC<NavProps> = ({ navItems }) => {
    const { changeNav, toggle, nav } = useContext(Context);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        const pages = document.querySelectorAll<HTMLElement>(".page");
        const pageLength = pages.length;
        const startingDistance = 400;

        pages.forEach((page, index) => {
            page.style.opacity = "0";
            page.style.zIndex = "2";
            page.style.transform = `translate3d(0px, 75%, -{startingDistance}px)`;

            if (toggle) {
                if (nav === page.id) {
                    setActiveIndex(index);
                    page.style.zIndex = "5";
                    page.style.transform = `translate3d(0px, 75%, -${startingDistance + 50}px)`;
                    page.style.opacity = "1";
                }

                const distance = Array.from({ length: pageLength - 1 }, (_, i) => startingDistance + 135 * (i + 1) + 50);
                for (let i = 0; i < pageLength - 1; i++) {
                    const nextIndex = (activeIndex + i + 1) % pageLength;
                    const next = pages[nextIndex];
                    next.style.zIndex = (pageLength - i).toString();
                    next.style.transform = `translate3d(0px, 75%, -${distance[i]}px)`;
                    next.style.opacity = (0.9 - i * 0.1).toString();
                }
            } else {
                if (nav === page.id) {
                    setActiveIndex(index);
                    page.style.zIndex = "5";
                    page.style.opacity = "1";
                    page.style.transform = `translate3d(0px, 0px, 0px)`;
                }
            }
        });
    }, [toggle, nav, activeIndex]);

    return (
        <nav className={`pages-nav ${toggle ? "pages-nav--open" : ""}`}>
            {
                navItems.map((item, index) => (
                    <div key={index} className="pages-nav__item">
                        <a className="link link--page" onClick={() => changeNav(item.key, false)}>
                            {item.label}
                        </a>
                    </div>
                ))
            }
        </nav>
    );
};

export default Nav;
