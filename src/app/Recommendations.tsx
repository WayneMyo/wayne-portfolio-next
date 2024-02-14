import { FC, Fragment } from "react";
import Slider from "react-slick";

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
  const recommendations = [
    {
      img: "/static/img/keanseng.jpg",
      name: "Kean Seng Tan",
      designation: "Senior Manager Data Scientist at American Express",
      say: [
        `I am writing to recommend Wai Yan, a software engineer with exceptional technical skills and expertise in designing and developing software applications.
        I had the pleasure of working with Wai Yan in a project where he demonstrated his technical skills and vast experience in software development.`,
        `Wai Yan is a talented and dedicated professional who is an expert in using various technologies such as React.js, Python, Docker, Kubernetes and others frontend and
        backend development tools, making him an invaluable asset to any team.`,
        `He is a skilled negotiator who ensures that the customer's needs are met while delivering high-quality software applications. He is an excellent communicator and
        provides exceptional customer service to ensure that the project is delivered on time and within budget.`,
        `Overall, I am impressed with Wai Yan's work ethic, technical skills, and collaborative spirit. He is an exceptional team player and a knowledgeable professional who can take
        on any challenge. I highly recommend him for any team looking for a skilled and knowledgeable team member.`
      ]
    },
    {
      img: "/static/img/weetee.jpg",
      name: "Wee Tee Soh",
      designation: "Deputy Director at Monetary Authority of Singapore (MAS)",
      say: [
        `I am very glad to have Wai Yan as my intern to work on a project. During the 4 months that he was with NUHS,
        Wai Yan have demonstrated a strong ability to understand and execute a complex project, able to connect the dots easily
        given little to begin with. He is an independent & motivated learner as well and is not afraid to suggest innovative ideas
        to tackle problems. He would be a great help to any organisation!`
      ]
    },
  ];

  return (
    <div className="recommendations-section m-30px-t sm-m-20px-t pb-5">
      <div className="sub-title m-30px-b">
        <h2 className="dark-color theme-after">What People Say?</h2>
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
