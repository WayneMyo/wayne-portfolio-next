import { FC, useContext } from "react";
import { Context } from "./contexts/Context";
import TypingAnimations from "./components/TypingAnimations";

const Home: FC = () => {
    const { nav, changeNav } = useContext(Context);

    const activePageClass = (pageId: string) => (nav === pageId ? "" : "page--inactive");

    const welcomeText = 'I\'m Wayne';
    const animationStrings = ['Developer', 'Consultant', 'Cloud Enthusiast'];
    const socialLinks = [
        {
            key: "linkedin",
            icon: "fab fa-linkedin-in",
            link: "https://www.linkedin.com/in/wayne-myo/",
            title: "LinkedIn"
        },
        {
            key: "github",
            icon: "fab fa-github",
            link: "https://github.com/WayneMyo",
            title: "GitHub"
        },
        {
            key: "instagram",
            icon: "fab fa-instagram",
            link: "https://www.instagram.com/wayne_stayprovocative",
            title: "Instagram"
        }
    ];

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
                            <img src="/static/img/user.png" alt="my-pic" />
                        </div>
                    </div>
                    <div className="col-lg-9 col-xl-8">
                        <div className="page-scroll">
                            <div className="page-content">
                                <div className="v-center-box d-flex align-items-center">
                                    <div className="home-text">
                                        <h6 className="dark-color theme-after">Hi!</h6>
                                        <h1 className="dark-color blue-after">{welcomeText}</h1>
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
                                                    <a className={social.key} href={social.link} target="_blank" rel="noopener noreferrer">
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
