import { FC, useContext } from "react";
import { Context } from "./contexts/Context";
import TypingAnimations from "./components/TypingAnimations";

const Home: FC = () => {
    const { nav, changeNav } = useContext(Context);

    const activePageClass = (pageId: string) => (nav === pageId ? "" : "page--inactive");

    return (
        <div
            className={`page home-banner white-bg ${activePageClass("home")}`}
            id={"home"}
            onClick={() => changeNav("home", false)}
        >
            <div className="container-fluid p-0">
                <div className="row no-gutters full-screen">
                    <div className="col-lg-3 col-xl-4 blue-bg">
                        <div className="d-flex align-items-end home-user-avtar v-center-box">
                            <img src="/static/img/user.png" alt="my-pic"/>
                        </div>
                    </div>
                    <div className="col-lg-9 col-xl-8">
                        <div className="page-scroll">
                            <div className="page-content">
                                <div className="v-center-box d-flex align-items-center">
                                    <div className="home-text">
                                        <h6 className="dark-color theme-after">Hi!</h6>
                                        <h1 className="dark-color blue-after">I&apos;m Wayne</h1>
                                        <p>
                                            <TypingAnimations />
                                        </p>
                                        <div className="btn-bar">
                                            <a href="/static/Wai-Yan-Khine-Myo-Resume.pdf" download className="btn btn-theme">
                                                Download CV
                                            </a>
                                        </div>
                                    </div>
                                    <ul className="social-icons">
                                        <li>
                                            <a className="facebook" href="https://www.linkedin.com/in/wayne-myo/" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-linkedin-in" />
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a className="twitter" href="https://github.com/WayneMyo" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-github" />
                                            </a>
                                        </li>{" "}
                                        <li>
                                            <a className="linkedin" href="https://www.instagram.com/wayne_stayprovocative" target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
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
