import { FC } from "react";
import { useSelector } from "react-redux";
import { Theme } from "./redux/Store";
import SectionContainer from "./components/SectionContainer";
import AboutData from "./data/AboutData.json";

const AboutUs: FC = () => {
    const { aboutText, featureSkills, counterData } = AboutData;
    const theme = useSelector((state: { theme: { theme: Theme } }) => state.theme).theme;
    const activeTextClass = theme === Theme.Dark ? "light-color" : "dark-color";

    return (
        <SectionContainer
            name={'about'}
            extraClass="about-section"
            title={'About Me'}
            subTitle={'WHO I AM'}
            leftImage="static/img/img-1.jpg"
            leftImageTitle={'About Me'}
        >
            <div className="row">
                <div className="col-md-4">
                    <img src="static/img/black-white-user.jpg" alt="my-pic-black-white" />
                </div>
                <div className="col-md-8 md-m-30px-t">
                    {/* about-text */}
                    <div className="about-text">
                        <h3 className={activeTextClass}>{aboutText.title}</h3>
                        <p className="m-0px">
                            {aboutText.text}
                        </p>
                    </div>{" "}
                    <div className="row m-30px-t">
                        {
                            featureSkills.map((feature, index) => (
                                <div key={index} className="col-md-6 col-sm-6 m-30px-b">
                                    <div className="feature-box">
                                        <i className={`icon ${activeTextClass} theme-after ${feature.icon}`} />
                                        <div className="feature-content">
                                            <h5 className={activeTextClass}>{feature.title}</h5>
                                            <p>
                                                {feature.text}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                        {/* col */}
                    </div>{" "}
                    {/* row */}
                    <div className="btn-bar">
                        <a href="/static/Wai-Yan-Khine-Myo-Resume.pdf" download className="btn btn-theme">Download CV</a>
                    </div>
                </div>
            </div>{" "}
            {/* row */}
            {/* 
     ==========================
       Counter
     ==========================
     */}
            <div className="counter-row m-50px-t p-40px-t lg-m-35px-t lg-p-25px-t sm-p-15px-t">
                <div className="row">
                    {
                        counterData.map((counter, index) => (
                            <div key={index} className="col-md-3 col-sm-6 md-m-15px-tb">
                                <div className="counter-col counter-box">
                                    <div className="counter-data" data-count={counter.count}>
                                        <i className={`theme-color ${counter.icon}`} />
                                        <div className={`count ${activeTextClass}`}>{counter.count}+</div>
                                        <h6>{counter.title}</h6>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>{" "}
                {/* row */}
            </div>
        </SectionContainer>
    );
};

export default AboutUs;
