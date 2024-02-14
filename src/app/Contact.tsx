import SectionContainer from "./components/SectionContainer";
import Map from "./components/Map";

const Contact: React.FC = () => {
    return (
        <SectionContainer
            name={"contact"}
            title="CONTACT ME"
            subTitle={"GET IN TOUCH"}
            leftImage="static/img/img-3.jpg"
        >
            <div className="row">
                <div className="col-md-4 m-15px-tb">
                    <div className="contact-info">
                        <i className="theme-color ti-mobile" />
                        <h6 className="dark-color font-alt">Phone</h6>
                        <p>
                            <a href="https://wa.me/6588684394" target="_blank" rel="noopener noreferrer">+65 88684394</a>
                        </p>
                    </div>
                </div>
                <div className="col-md-4 m-15px-tb sm-m-0px-b">
                    <div className="contact-info">
                        <i className="theme-color ti-email" />
                        <h6 className="dark-color font-alt">Email</h6>
                        <p>
                            <a href="mailto:waiyankm93@gmail.com">waiyankm93@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>
            <Map 
                mapSrc="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.750515247422!2d103.93442746821411!3d1.3451472669604694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d043402eed1%3A0x8f0792a39afff4cb!2sTampines!5e0!3m2!1sen!2ssg!4v1707763150060!5m2!1sen!2ssg"
                mapTitle="My Location Map"
            />
        </SectionContainer>
    );
};

export default Contact;
