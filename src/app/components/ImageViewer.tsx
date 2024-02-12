import { FC, Fragment, useEffect, useState } from 'react';
import useClickOutside from './ClickOutside';

interface ImgViewsProps {
    close: (value: boolean) => void;
    src: string | null;
}

const ImgViews: FC<ImgViewsProps> = ({ close, src }) => {
    let domNode = useClickOutside(() => {
        close(false);
    });

    return (
        <Fragment>
            <div className="mfp-bg mfp-ready" onClick={() => close(false)}></div>
            <div
                className="mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready"
                tabIndex={-1}
                style={{ overflow: 'hidden auto' }}
            >
                <div
                    className={` popup-container mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`}
                >
                    <div className="mfp-content" ref={domNode}>
                        <div className="mfp-iframe-scaler">
                            {src && <img className="mfp-img" src={src} />}
                        </div>
                    </div>
                    <div className="mfp-preloader">Loading...</div>
                </div>
            </div>
        </Fragment>
    );
};

const ImageView: FC = () => {
    const [img, setImg] = useState(false);
    const [imgValue, setImgValue] = useState<string | null>(null);

    useEffect(() => {
        setTimeout(() => {
            const a = document.querySelectorAll<HTMLAnchorElement>('a');
            a.forEach((anchor) => {
                if (anchor.href.includes('static/img/')) {
                    if (anchor.getAttribute('download') === null) {
                        anchor.addEventListener('click', (e) => {
                            e.preventDefault();
                            setImgValue(anchor.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);

    return (
        <Fragment>
            {img && <ImgViews close={() => setImg(false)} src={imgValue} />}
        </Fragment>
    );
};

export default ImageView;
