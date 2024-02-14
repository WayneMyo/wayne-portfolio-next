import { FC } from "react";
import SectionContainer from "./components/SectionContainer";
import Recommendations from "./Recommendations";

interface ExperiencesProps { }

const Experiences: FC<ExperiencesProps> = () => {
    const experiences = [
        {
            title: "Senior Consultant - NCS Group",
            date: "May 2022 - Present",
            description: `Senior consultant at Journey to Cloud team. Collaborated with multiple government agencies to 
                conduct customer workshops and drive POC development initiatives. Successfully delivered on-prem 
                Data Migration to Azure GCC1.0 for a large government educational institute.`
        },
        {
            title: "Software Developer Manager - Novade Solutions",
            date: "Feb 2021 - May 2022",
            description: `Led a team of 5 developers to develop and maintain 4 core modules of Novade Enterprise Platform. 
                Developed custom projects for key clients - site cost management application and dashboard for UP-Bihar 
                National Expressway in India.`
        },
        {
            title: "Application Developer (Intern) - National University Health System (NUHS)",
            date: "Sep 2020 - Feb 2021",
            description: `Developed a serverless clinical AI chatbot by leveraging Amazon Lex, Amazon Elasticsearch, Lambda functions 
                and Twilio APIs. Developed real-time chat modules using web sockets and Django - VueJS stack.`
        },
        {
            title: "Technical Specialist - Micron Technology",
            date: "Mar 2016 - Feb 2020",
            description: `Led and mentored a team of 8 technicians, initiated improvement projects, and solved complex equipment issues.`
        },
        {
            title: "Sales Engineer - SMC Singapore SAMVIPC",
            date: "Sep 2020 - Feb 2021",
            description: `Managed key clients and distributors, increasing total sales by 15%, and resolved technical and quality related 
                matters for customers, ensuring customer satisfaction.`
        }
    ];

    const education = [
        {
            title: "Institute of Systems Science (ISS) - NUS",
            date: "Feb 2020 - Feb 2021",
            description: "Graduate Diploma, Systems Analysis"
        },
        {
            title: "Coventry University",
            date: "June 2015 - June 2017",
            description: "Bachelor of Engineering with Honors, Mechanical Engineering"
        },
        {
            title: "Ngee Ann Polytechnic",
            date: "Feb 2011 - Feb 2014",
            description: "Diploma, Automation & Mechatronics Systems"
        }
    ];

    const certificates = [
        {
            title: "AWS Certified Solutions Architect – Associate",
            img: "/static/img/aws-icon.png",
            type: "Cloud Certifications"
        },
        {
            title: "AWS Certified Developer – Associate",
            img: "/static/img/aws-icon.png",
            type: "Cloud Certifications"
        },
        {
            title: "AWS File Storage Specialized",
            img: "/static/img/aws-icon.png",
            type: "Cloud Certifications"
        },
        {
            title: "AWS Certified Cloud Practitioner",
            img: "/static/img/aws-icon.png",
            type: "Cloud Certifications"
        },
        {
            title: "Microsoft Certified Azure Fundamentals",
            img: "/static/img/msft-icon.png",
            type: "Cloud Certifications"
        },
        {
            title: "Google Advanced Data Analytics Certificate",
            img: "/static/img/google-icon.png",
            type: "Others"
        },
        {
            title: "IBM Data Science Professional Certificate",
            img: "/static/img/ibm-icon.png",
            type: "Others"
        },
        {
            title: "ABBYY Vantage Certified Business Analyst",
            img: "/static/img/abbyy-icon.png",
            type: "Others"
        },
        {
            title: "ABBYY Vantage Advanced Designer",
            img: "/static/img/abbyy-icon.png",
            type: "Others"
        }
    ];

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
                        <h2 className="theme-after dark-color">Experience</h2>
                        <ul>
                            {
                                experiences.map((experience, index) => (
                                    <li key={index}>
                                        <div className="r-name">
                                            <i className="theme-bg ti-briefcase" />
                                            <span className="dark-color">{experience.title}</span>
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
                        <h2 className="theme-after dark-color">Education</h2>
                        <ul>
                            {
                                education.map((education, index) => (
                                    <li key={index}>
                                        <div className="r-name">
                                            <i className="theme-bg ti-book" />
                                            <span className="dark-color">{education.title}</span>
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
                    <h2 className="dark-color theme-after">Certificates</h2>
                </div>
                <div className="row">
                    {
                        Object.keys(certificatesByType).map((type, index) => (
                            <div key={index} className="col-md-6 p-30px-r sm-p-15px-r">
                                <h3 className="dark-color">{type}</h3>
                                <div className="skills">
                                    {
                                        certificatesByType[type].map((certificate, index) => (
                                            <div key={index} className="certificate-item">
                                                <div className="certificate-icon">
                                                    <img src={certificate.img} alt='cert-icon' />
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
