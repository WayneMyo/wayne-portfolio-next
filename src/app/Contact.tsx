import { useState, ChangeEvent, FormEvent } from "react";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import SectionContainer from "./components/SectionContainer";

interface MailData {
    name: string;
    email: string;
    message: string;
    [key: string]: string;
}

const Contact: React.FC = () => {
    const [mailData, setMailData] = useState<MailData>({
        name: '',
        email: '',
        message: '',
    });

    const { name, email, message } = mailData;
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setMailData({ ...mailData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (name.length === 0 || email.length === 0 || message.length === 0) {
            setError(true);
        } else {
            emailjs
                .send('service_seruhwu', 'template_21aw58z', mailData)
                .then(
                    (response: EmailJSResponseStatus) => {
                        setError(false);
                        setSuccess(true);
                        console.log(response);
                        setTimeout(() => {
                            setSuccess(false);
                        }, 3000);
                        setMailData({ name: '', email: '', message: '' });
                    },
                    (err) => {
                        console.log(err.text);
                    }
                );
        }
    };

    return (
        <SectionContainer
            name={"contact"}
            title="CONTACT ME"
            subTitle={"GET IN TOUCH"}
            leftImage="static/img/img-3.png"
        >
            <div className="row">
                <div className="col-lg-12 m-30px-b sm-m-15px-b">
                    <div className="contact-form">
                        <p className="dark-color font-alt m-20px-b">My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!</p>
                        <form className="contactform" onSubmit={(e) => onSubmit(e)}>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            id="name"
                                            name="name"
                                            onChange={(e) => onChange(e)}
                                            value={name}
                                            type="text"
                                            placeholder="Name"
                                            className="validate form-control"
                                            required
                                        />
                                        <span className="input-focus-effect theme-bg" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Email"
                                            name="email"
                                            onChange={(e) => onChange(e)}
                                            value={email}
                                            className="validate form-control"
                                            required
                                        />
                                        <span className="input-focus-effect theme-bg" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <textarea
                                            id="message"
                                            placeholder="Your Comment"
                                            name="message"
                                            onChange={(e) => onChange(e)}
                                            value={message}
                                            className="form-control"
                                            required
                                        />
                                        <span className="input-focus-effect theme-bg" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="send">
                                        <button className="btn btn-theme" type="submit">
                                            {" "}
                                            send message
                                        </button>
                                    </div>
                                    <span
                                        id="suce_message"
                                        className="text-success mt-3"
                                        style={{ display: success ? "block" : "none" }}
                                    >
                                        Message Sent Successfully
                                    </span>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>{" "}
                {/* col */}
            </div>
            <div className="row">
                <div className="col-md-4 m-15px-tb">
                    <div className="contact-info">
                        <i className="theme-color ti-mobile" />
                        <h6 className="dark-color font-alt">Phone</h6>
                        <p>
                            +65 88684394
                        </p>
                    </div>
                </div>
                <div className="col-md-4 m-15px-tb sm-m-0px-b">
                    <div className="contact-info">
                        <i className="theme-color ti-email" />
                        <h6 className="dark-color font-alt">Email</h6>
                        <p>
                            waiyankm93@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default Contact;
