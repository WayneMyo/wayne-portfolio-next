import { FC } from 'react';
import SectionContainer from './components/SectionContainer';

const AboutUs: FC = () => {
    return (
        <SectionContainer
            name={'about'}
            extraClass="about-section"
            title={'About Me'}
            subTitle={'WHO I AM'}
            leftImage="static/img/img-1.png"
            leftImageTitle={'About Me'}
        >
            <div className="row">
                <div className="col-md-4">
                    <img src="static/img/black-white-user.jpg" />
                </div>
                <div className="col-md-8 md-m-30px-t">
                    <div className="about-text">
                        <h3 className="dark-color">I'm Wayne Myo</h3>
                        <p className="m-0px">
                            I'm a senior consultant at the Journey to Cloud team within NCS Group - a leading technology services firm in the Asia Pacific region,
                            I bring a wealth of experience in technology consulting, cloud solutions architecture and full-stack software development.
                            With a graduate diploma in Systems Analysis from the Institute of System Science (NUS), I graduated in 2020, laying the foundation for
                            a successful career switch to software engineering from semiconductor engineering.
                        </p>
                    </div>{" "}
                    {/* about-text */}
                    <div className="row m-30px-t">
                        <div className="col-md-6 col-sm-6 m-30px-b">
                            <div className="feature-box">
                                <i className="icon dark-color theme-after ti-desktop" />
                                <div className="feature-content">
                                    <h5 className="dark-color">Software Development</h5>
                                    <p>
                                        Experienced Software Engineer and team lead with proficiency in JavaScript, TypeScript and Python.
                                        I have professional experiences in front-end technologies such as ReactJS, VueJS and server-side technologies such as
                                        NodeJS, Django, Flask and FastAPI.
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        {/* col */}
                        <div className="col-md-6 col-sm-6 m-30px-b">
                            <div className="feature-box">
                                <i className="icon dark-color theme-after ti-cloud" />
                                <div className="feature-content">
                                    <h5 className="dark-color">Cloud Engineering</h5>
                                    <p>
                                        Specialized in cloud solution architecture on Azure & AWS with a primary focus on GCC (Government on Commercial Cloud) projects.
                                        Successfully collaborated with multiple government agencies, ranging from Proof of Concepts (POCs) and prototypes through full-scale implementations.
                                        Demonstrated expertise in solution design and proposal, partnering with industry leaders to deliver business value in Semantic Search Engines & IDP solutions.
                                    </p>
                                </div>
                            </div>
                        </div>{" "}
                        {/* col */}
                    </div>{" "}
                    {/* row */}
                    <div className="btn-bar">
                        <a href="#" className="btn btn-theme">
                            Download CV
                        </a>
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
                    <div className="col-md-3 col-sm-6 md-m-15px-tb">
                        <div className="counter-col counter-box">
                            <div className="counter-data" data-count={3}>
                                <i className="theme-color ti-face-smile" />
                                <div className="count dark-color">3+</div>
                                <h6>Years of Experience</h6>
                            </div>
                        </div>
                    </div>{" "}
                    {/* col */}
                    <div className="col-md-3 col-sm-6 md-m-15px-tb">
                        <div className="counter-col counter-box">
                            <div className="counter-data" data-count={5}>
                                <i className="theme-color ti-book" />
                                <div className="count dark-color">5+</div>
                                <h6>Cloud Certifications</h6>
                            </div>
                        </div>
                    </div>{" "}
                    {/* col */}
                    <div className="col-md-3 col-sm-6 md-m-15px-tb">
                        <div className="counter-col counter-box">
                            <div className="counter-data" data-count={3}>
                                <i className="theme-color ti-flag" />
                                <div className="count dark-color">3+</div>
                                <h6>Projects</h6>
                            </div>
                        </div>
                    </div>{" "}
                    {/* col */}
                    <div className="col-md-3 col-sm-6 md-m-15px-tb">
                        <div className="counter-col counter-box">
                            <div className="counter-data" data-count={7}>
                                <i className="theme-color ti-light-bulb" />
                                <div className="count dark-color">7+</div>
                                <h6>POCs/Demos Conducted</h6>
                            </div>
                        </div>
                    </div>{" "}
                    {/* col */}
                </div>{" "}
                {/* row */}
            </div>
        </SectionContainer>
    );
};

export default AboutUs;
