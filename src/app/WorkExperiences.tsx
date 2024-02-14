import { FC } from "react";
import Image from "next/image";
import SectionContainer from "./components/SectionContainer";
import Recommendations from "./Recommendations";

interface ExperiencesProps { }

const Experiences: FC<ExperiencesProps> = () => {
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
                        <h2 className="theme-after dark-color">Experience</h2>
                        <ul>
                            <li>
                                <div className="r-name">
                                    <i className="theme-bg ti-briefcase" />
                                    <span className="dark-color">Senior Consultant - NCS Group</span>
                                    <label>May 2022 - Present</label>
                                </div>
                                <div className="r-info">
                                    <p>
                                        Senior consultant at Journey to Cloud team. Collaborated with multiple government agencies to
                                        conduct customer workshops and drive rapic POC development initiatives. Successfully delivered on-prem
                                        Data Migration to Azure GCC1.0 for a large government educational institute.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="r-name">
                                    <i className="theme-bg ti-briefcase" />
                                    <span className="dark-color">Software Developer Manager - Novade Solutions</span>
                                    <label>Feb 2021 - May 2022</label>
                                </div>
                                <div className="r-info">
                                    <p>
                                        Led a team of 5 developers to develop and maintain 4 core modules of Novade Enterprise Platform.
                                        Developed custom projects for key clients - site cost management application and dashboard for UP-Bihar National Expressway in India.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="r-name">
                                    <i className="theme-bg ti-briefcase" />
                                    <span className="dark-color">Application Developer (Intern) - National University Health System (NUHS)</span>
                                    <label>Sep 2020 - Feb 2021</label>
                                </div>
                                <div className="r-info">
                                    <p>
                                        Developed a serverless clinical AI chatbot by leveraging Amazon Lex, Amazon Elasticsearch, Lambda functions and Twilio APIs.
                                        Developed real-time chat modules using web sockets and Django - VueJS stack.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="r-name">
                                    <i className="theme-bg ti-briefcase" />
                                    <span className="dark-color">Technical Specialist - Micron Technology</span>
                                    <label>Mar 2016 - Feb 2020</label>
                                </div>
                                <div className="r-info">
                                    <p>
                                        Led and mentored a team of 8 technicians, initiated improvement projects, and solved complex equipment issues.
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="r-name">
                                    <i className="theme-bg ti-briefcase" />
                                    <span className="dark-color">Sales Engineer - SMC Singapore SAMVIPC</span>
                                    <label>Sep 2020 - Feb 2021</label>
                                </div>
                                <div className="r-info">
                                    <p>
                                        Managed key clients and distributors, increasing total sales by 15%, and resolved technical and quality related matters for customers, ensuring customer satisfaction.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>{" "}
                {/* col */}
                <div className="col-md-6">
                    <div className="resume-row">
                        <h2 className="theme-after dark-color">Education</h2>
                        <ul>
                            <li>
                                <div className="r-name">
                                    <i className="theme-bg fas fa-graduation-cap" />
                                    <span className="dark-color">Institute of Systems Science (ISS) - NUS</span>
                                    <label>Feb 2020 - Feb 2021</label>
                                </div>
                                <div className="r-info">
                                    <p>
                                        Graduate Diploma, Systems Analysis
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="r-name">
                                    <i className="theme-bg fas fa-graduation-cap" />
                                    <span className="dark-color">Coventry University</span>
                                    <label>June 2015 - June 2017</label>
                                </div>
                                <div className="r-info">
                                    <p>
                                        Bachelor of Engineering with Honors, Mechanical Engineering
                                    </p>
                                </div>
                            </li>
                            <li>
                                <div className="r-name">
                                    <i className="theme-bg fas fa-graduation-cap" />
                                    <span className="dark-color">Ngee Ann Polytechnic</span>
                                    <label>Feb 2011 - Feb 2014</label>
                                </div>
                                <div className="r-info">
                                    <p>
                                        Diploma, Automation & Mechatronics Systems
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>{" "}
                {/* col */}
            </div>{" "}
            {/* row */}
            <div className="skill-row m-30px-t sm-m-20px-t">
                <div className="sub-title m-30px-b">
                    <h2 className="dark-color theme-after">Certificates</h2>
                </div>
                <div className="row">
                    <div className="col-md-6 p-30px-r sm-p-15px-r">
                        <h3 className="dark-color">Cloud Certifications</h3>
                        <div className="skills">
                            <div className="certificate-item">
                                <div className="certificate-icon">
                                    <img src="/static/img/aws-icon.png" alt="aws-icon" />
                                </div>
                                <h3>AWS Certified Solutions Architect – Associate</h3>
                            </div>
                            <div className="certificate-item">
                                <div className="certificate-icon">
                                    <img src="/static/img/aws-icon.png" alt="aws-icon" />
                                </div>
                                <h3>AWS Certified Developer – Associate</h3>
                            </div>
                            <div className="certificate-item">
                                <div className="certificate-icon">
                                    <img src="/static/img/aws-icon.png" alt="aws-icon" />
                                </div>
                                <h3>AWS File Storage Specialized</h3>
                            </div>
                            <div className="certificate-item">
                                <div className="certificate-icon">
                                    <img src="/static/img/aws-icon.png" alt="aws-icon" />
                                </div>
                                <h3>AWS Certified Cloud Practitioner</h3>
                            </div>
                            <div className="certificate-item">
                                <div className="certificate-icon">
                                    <img src="/static/img/msft-icon.png" alt="msft-icon" />
                                </div>
                                <h3>Microsoft Certified Azure Fundamentals</h3>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 p-30px-l sm-p-15px-l sm-m-30px-t">
                        <h3 className="dark-color">Others</h3>
                        <div className="skills">
                            <div className="certificate-item">
                                <div className="certificate-icon">
                                    <img src="/static/img/google-icon.png" alt="google-icon" />
                                </div>
                                <h3>Google Advanced Data Analytics Certificate</h3>
                            </div>
                            <div className="certificate-item">
                                <div className="certificate-icon">
                                    <img src="/static/img/ibm-icon.png" alt="ibm-icon" />
                                </div>
                                <h3>IBM Data Science Professional Certificate</h3>
                            </div>
                            <div className="certificate-item">
                                <div className="certificate-icon">
                                    <img src="/static/img/abbyy-icon.png" alt="abbyy-icon" />
                                </div>
                                <h3>ABBYY Vantage Certified Business Analyst</h3>
                            </div>
                            <div className="certificate-item">
                                <div className="certificate-icon">
                                    <img src="/static/img/abbyy-icon.png" alt="abbyy-icon" />
                                </div>
                                <h3>ABBYY Vantage Advanced Designer</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Recommendations />
        </SectionContainer>
    );
};

export default Experiences;
