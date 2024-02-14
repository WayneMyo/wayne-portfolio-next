import { FC, Fragment } from "react";
import { useSelector } from "react-redux";
import { Theme } from "./redux/Store";
import Slider from "react-slick";
import { recommendations } from "./data/RecommendationsData.json";

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
};

const sliderProps: { recommendations: SliderPropsType } = {
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

const Recommendations: FC = () => {
  const theme = useSelector((state: { theme: { theme: Theme } }) => state.theme).theme;
  const activeTextClass = theme === Theme.Dark ? "light-color" : "dark-color";

  return (
    <div className="recommendations-section m-30px-t sm-m-20px-t pb-5">
      <div className="sub-title m-30px-b">
        <h2 className={`theme-after ${activeTextClass}`}>What People Say?</h2>
      </div>
      <Slider {...sliderProps.recommendations}>
        {
          recommendations.map((recommendation, index) => (
            <div key={index} className="recommendations-col">
              <div className="say">
                {recommendation.say.map((paragraph, i) => (
                  <Fragment key={i}>
                    <p>{paragraph}</p>
                    {i < recommendation.say.length - 1 && <br />}
                  </Fragment>
                ))}
              </div>
              <div className="user">
                <div className="img">
                  <img src={recommendation.img} alt="user-pic" />
                </div>
                <div className="name ml-2">
                  <span>{recommendation.name}</span>
                  <label>{recommendation.designation}</label>
                </div>
              </div>
            </div>
          ))
        }
      </Slider>{" "}
    </div>
  );
};

export default Recommendations;
