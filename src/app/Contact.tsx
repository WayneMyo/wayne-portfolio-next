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
            <Map />
        </SectionContainer>
    );
};

export default Contact;
