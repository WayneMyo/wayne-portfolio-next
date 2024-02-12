interface SliderPropsType {
    dots: boolean;
    infinite: boolean;
    autoplay: boolean;
    slidesToShow: number;
    slidesToScroll: number;
    initialSlide: number;
    responsive: {
        breakpoint: number;
        settings: {
            slidesToShow: number;
            slidesToScroll: number;
            infinite: boolean;
            dots: boolean;
        };
    }[];
}

export const SliderProps: { recommendations: SliderPropsType } = {
    recommendations: {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    },
};
