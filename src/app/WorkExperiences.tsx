import { FC } from "react";
import { useSelector } from "react-redux";
import { Theme } from "./redux/Store";
import SectionContainer from "./components/SectionContainer";
import Recommendations from "./Recommendations";
import WorkExperiencesData from "./data/WorkExperiencesData.json";

interface ExperiencesProps { }

const Experiences: FC<ExperiencesProps> = () => {
    const { experiences, education, certificates } = WorkExperiencesData;
    const theme = useSelector((state: { theme: { theme: Theme } }) => state.theme).theme;
    const activeTextClass = theme === Theme.Dark ? "light-color" : "dark-color";

    const certificatesByType = certificates.reduce((acc, certificate) => {
        if (!acc[certificate.type]) {
            acc[certificate.type] = [];
        }
        acc[certificate.type].push(certificate);
        return acc;
    }, {} as { [key: string]: { title: string; img: string; type: string }[] });

    return (
        <SectionContainer
            name="resume"
            extraClass="resume-section"
            title="Resume"
            subTitle="History"
            leftImage="static/img/img-2.jpg"
        >
            <div className="row">
                <div className="col-md-6">
                    <div className="resume-row">
                        <h2 className={`theme-after ${activeTextClass}`}>Experience</h2>
                        <ul>
                            {
                                experiences.map((experience, index) => (
                                    <li key={index}>
                                        <div className="r-name">
                                            <i className="theme-bg ti-briefcase" />
                                            <span className={activeTextClass}>{experience.title}</span>
                                            <label>{experience.date}</label>
                                        </div>
                                        <div className="r-info">
                                            <p>{experience.description}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>{" "}
                {/* col */}
                <div className="col-md-6">
                    <div className="resume-row">
                        <h2 className={`theme-after ${activeTextClass}`}>Education</h2>
                        <ul>
                            {
                                education.map((education, index) => (
                                    <li key={index}>
                                        <div className="r-name">
                                            <i className="theme-bg ti-book" />
                                            <span className={activeTextClass}>{education.title}</span>
                                            <label>{education.date}</label>
                                        </div>
                                        <div className="r-info">
                                            <p>{education.description}</p>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>{" "}
                {/* col */}
            </div>{" "}
            {/* row */}
            <div className="skill-row m-30px-t sm-m-20px-t">
                <div className="sub-title m-30px-b">
                    <h2 className={`theme-after ${activeTextClass}`}>Certificates</h2>
                </div>
                <div className="row">
                    {
                        Object.keys(certificatesByType).map((type, index) => (
                            <div key={index} className="col-md-6 p-30px-r sm-p-15px-r">
                                <h3 className={activeTextClass}>{type}</h3>
                                <div className="skills">
                                    {
                                        certificatesByType[type].map((certificate, index) => (
                                            <div key={index} className="certificate-item">
                                                <div className="certificate-icon">
                                                    <img src={certificate.img} alt="cert-icon" />
                                                </div>
                                                <h3>{certificate.title}</h3>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <Recommendations />
        </SectionContainer>
    );
};

export default Experiences;
