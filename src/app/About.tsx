import { FC } from 'react';
import SectionContainer from './components/SectionContainer';

const AboutUs: FC = () => {
    const aboutText = {
        title: 'I\'m Wayne Myo',
        text: `I'm a senior consultant at the Journey to Cloud team within NCS Group - a leading technology services firm in the Asia Pacific region,
            I bring a wealth of experience in technology consulting, cloud solutions architecture and full-stack software development.
            With a graduate diploma in Systems Analysis from the Institute of System Science (NUS), I graduated in 2020, laying the foundation for
            a successful career switch to software engineering from semiconductor engineering.`
    };

    const featureSkills = [
        {
            icon: 'ti-desktop',
            title: 'Software Development',
            text: `Experienced Software Engineer and team lead with proficiency in JavaScript, TypeScript and Python.
            I have professional experiences in front-end technologies such as ReactJS, VueJS and server-side technologies such as
            NodeJS, Django, Flask and FastAPI.`
        },
        {
            icon: 'ti-cloud',
            title: 'Cloud Engineering',
            text: `Specialized in cloud solution architecture on Azure & AWS with a primary focus on GCC (Government on Commercial Cloud) projects.
            Successfully collaborated with multiple government agencies, ranging from Proof of Concepts (POCs) and prototypes through full-scale implementations.
            Demonstrated expertise in solution design and proposal, partnering with industry leaders to deliver business value in Semantic Search Engines & IDP solutions.`
        }
    ];

    const counterData = [
        {
            icon: 'ti-face-smile',
            count: 3,
            title: 'Years of Experience'
        },
        {
            icon: 'ti-book',
            count: 5,
            title: 'Cloud Certifications'
        },
        {
            icon: 'ti-flag',
            count: 3,
            title: 'Projects'
        },
        {
            icon: 'ti-light-bulb',
            count: 7,
            title: 'POCs/Demos Conducted'
        }
    ];

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
                        <h3 className="dark-color">{aboutText.title}</h3>
                        <p className="m-0px">
                            {aboutText.text}
                        </p>
                    </div>{" "}
                    <div className="row m-30px-t">
                        {
                            featureSkills.map((feature, index) => (
                                <div key={index} className="col-md-6 col-sm-6 m-30px-b">
                                    <div className="feature-box">
                                        <i className={`icon dark-color theme-after ${feature.icon}`} />
                                        <div className="feature-content">
                                            <h5 className="dark-color">{feature.title}</h5>
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
                                        <div className="count dark-color">{counter.count}+</div>
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
