import { FC } from "react";

const Loader: FC = () => {
    return (
        <div id="loading">
            <div className="load-circle">
                <span className="one" />
            </div>
        </div>
    );
};

export default Loader;
