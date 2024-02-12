const Map: React.FC = () => {
    return (
        <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.750515247422!2d103.93442746821411!3d1.3451472669604694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da3d043402eed1%3A0x8f0792a39afff4cb!2sTampines!5e0!3m2!1sen!2ssg!4v1707763150060!5m2!1sen!2ssg"
                title="My Location Map"
                width="100%"
                height="500"
                style={{ border: 0, marginTop: "20px" }}
                loading="lazy"
                allowFullScreen>
            </iframe>
        </div>
    );
};

export default Map;
