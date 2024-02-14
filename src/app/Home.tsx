import { FC, useContext } from "react";
import { useSelector } from "react-redux";
import { Theme } from "./redux/Store";
import { Context } from "./contexts/Context";
import TypingAnimations from "./components/TypingAnimations";
import { welcomeText, animationStrings, socialLinks } from "./data/HomeData.json";

const Home: FC = () => {
    const { nav, changeNav } = useContext(Context);
    const activePageClass = (pageId: string) => (nav === pageId ? "" : "page--inactive");
    const theme = useSelector((state: { theme: { theme: Theme } }) => state.theme).theme;

    return (
        <div
            className={`page ${theme === Theme.Dark ? "home-banner-dark dark-bg" : "home-banner-light light-bg"} ${activePageClass("home")}`}
            id={"home"}
            onClick={() => changeNav("home", false)}
        >
            <div className="container-fluid p-0">
                <div className="row no-gutters full-screen">
                    <div className="col-lg-3 col-xl-4 blue-bg">
                        <div className="d-flex align-items-end home-user-avtar v-center-box">
                            <img src="/static/img/user.png" alt="my-pic" />
                        </div>
                    </div>
                    <div className="col-lg-9 col-xl-8">
                        <div className={theme === Theme.Dark ? "page-scroll-dark" : "page-scroll-light"}>
                            <div className="page-content">
                                <div className="v-center-box d-flex align-items-center">
                                    <div className="home-text">
                                        <h6 className="dark-color theme-after">Hi!</h6>
                                        <h1 className={`${theme === Theme.Dark ? "light-color" : "dark-color"} blue-after`}>{welcomeText}</h1>
                                        <p>
                                            <TypingAnimations animationStrings={animationStrings} />
                                        </p>
                                        <div className="btn-bar">
                                            <a href="/static/Wai-Yan-Khine-Myo-Resume.pdf" download className="btn btn-theme">Download CV</a>
                                        </div>
                                    </div>
                                    <ul className="social-icons">
                                        {
                                            socialLinks.map((social, index) => (
                                                <li key={index}>
                                                    <a className={`${social.key} mx-1`} href={social.link} target="_blank" rel="noopener noreferrer">
                                                        <i className={social.icon} />
                                                    </a>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
