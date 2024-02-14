import { FC, useContext, ReactNode } from "react";
import { useSelector } from "react-redux";
import { Theme } from "../redux/Store";
import { Context } from "../contexts/Context";
import SectionTitle from "./SectionTitle";

interface SectionContainerProps {
    name: string;
    title: string;
    subTitle: string;
    leftImage: string;
    leftImageTitle?: string;
    children?: ReactNode;
    extraClass?: string;
}

const SectionContainer: FC<SectionContainerProps> = ({
    extraClass,
    name,
    title,
    subTitle,
    leftImage,
    leftImageTitle,
    children,
}) => {
    const { nav, changeNav } = useContext(Context);
    const activePageClass = (name: string): string => (name === nav ? "" : "page--inactive");
    const theme = useSelector((state: { theme: { theme: Theme } }) => state.theme).theme;

    return (
        <div
            className={`page ${extraClass} ${theme === Theme.Dark ? "dark-bg" : "light-bg"} ${activePageClass(name)}`}
            id={name}
            onClick={() => changeNav(name, false)}
        >
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    <div
                        className="col-lg-3 col-xl-4 page-title"
                        style={{
                            backgroundImage: `url(${leftImage})`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center center",
                        }}
                    >
                        <div className="v-center-box d-flex align-items-end">
                            <h2>{leftImageTitle ? leftImageTitle : title}</h2>
                        </div>
                    </div>
                    <div className="col-lg-9 col-xl-8">
                        <div className={theme === Theme.Dark ? "page-scroll-dark" : "page-scroll-light"}>
                            <div className="page-content">
                                {/* 
                                    ==========================
                                        Page Title
                                    ==========================
                                */}
                                <SectionTitle title={title} subTitle={subTitle} />
                                {/* 
                                    ==========================
                                        Contact Us
                                    ==========================
                                */}
                                {children}
                            </div>{" "}
                            {/* page-content */}
                        </div>{" "}
                        {/* page-scroll  */}
                    </div>
                </div>{" "}
                {/* row */}
            </div>
        </div>
    );
};

export default SectionContainer;
