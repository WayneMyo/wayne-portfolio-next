import { FC } from "react";
import SectionContainer from "./components/SectionContainer";
import Map from "./components/Map";
import { contactText, contactDetails } from "./data/ContactData.json";

const Contact: FC = () => {
    return (
        <SectionContainer
            name={"contact"}
            title="CONTACT ME"
            subTitle={"GET IN TOUCH"}
            leftImage="static/img/img-3.jpg"
        >
            <div className="row">
                <div className="col-md-16 m-15px-lr">
                    <div className="about-text">
                        <p>{contactText}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    contactDetails.map((contact, index) => (
                        <div key={index} className="col-md-4 m-15px-tb">
                            <div className="contact-info">
                                <i className={`theme-color ${contact.icon}`} />
                                <h6 className="dark-color font-alt">{contact.title}</h6>
                                <p>
                                    <a href={contact.link} target="_blank" rel="noopener noreferrer">{contact.text}</a>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <Map
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.750515247422!2d103.93442746821411!3d1.3451472669604694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d043402eed1%3A0x8f0792a39afff4cb!2sTampines!5e0!3m2!1sen!2ssg!4v1707763150060!5m2!1sen!2ssg"
                mapTitle="My Location Map"
            />
        </SectionContainer>
    );
};

export default Contact;
