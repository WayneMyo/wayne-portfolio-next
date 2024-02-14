import { FC } from "react";

interface MapProps {
    mapSrc: string;
    mapTitle: string;
  }

const Map: FC<MapProps> = ({ mapSrc, mapTitle}) => {
    return (
        <div>
            <iframe
                src={mapSrc}
                title={mapTitle}
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
