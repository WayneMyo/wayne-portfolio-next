import { FC } from "react";
import Image from "next/image";
import Slider from "react-slick";
import { SliderProps } from "./components/SliderProps"

const Recommendations: FC = () => {
  return (
    <div className="recommendations-section m-30px-t sm-m-20px-t pb-5">
      <div className="sub-title m-30px-b">
        <h2 className="dark-color theme-after">What People Say?</h2>
      </div>
      <Slider {...SliderProps.recommendations}>
        <div className="recommendations-col">
          <div className="say">
            <p>
              I am writing to recommend Wai Yan, a software engineer with exceptional technical skills and expertise in designing and developing software applications.
              I had the pleasure of working with Wai Yan in a project where he demonstrated his technical skills and vast experience in software development.
            </p>
            <p>
              Wai Yan is a talented and dedicated professional who is an expert in using various technologies such as React.js, Python, Docker, Kubernetes and others frontend and
              backend development tools, making him an invaluable asset to any team.
            </p>
            <p>
              He is a skilled negotiator who ensures that the customer&apos;s needs are met while delivering high-quality software applications. He is an excellent communicator and
              provides exceptional customer service to ensure that the project is delivered on time and within budget.
            </p>
            <p>
              Overall, I am impressed with Wai Yan&apos;s work ethic, technical skills, and collaborative spirit. He is an exceptional team player and a knowledgeable professional who can take
              on any challenge. I highly recommend him for any team looking for a skilled and knowledgeable team member.
            </p>
          </div>
          <div className="user">
            <div className="img">
              <Image src="/static/img/keanseng.jpg" alt="kean-seng-tan-pic" width={60} height={60} />
            </div>
            <div className="name ml-2">
              <span>Kean Seng Tan</span>
              <label>Senior Manager Data Scientist at American Express</label>
            </div>
          </div>
        </div>
        <div className="recommendations-col">
          <div className="say">
            <p>
              I am very glad to have Wai Yan as my intern to work on a project. During the 4 months that he was with NUHS,
              Wai Yan have demonstrated a strong ability to understand and execute a complex project, able to connect the dots easily
              given little to begin with. He is an independent & motivated learner as well and is not afraid to suggest innovative ideas
              to tackle problems. He would be a great help to any organisation!
            </p>
          </div>
          <div className="user">
            <div className="img">
              <Image src="/static/img/weetee.jpg" alt="wee-tee-soh-pic" width={60} height={60} />
            </div>
            <div className="name ml-2">
              <span>Wee Tee Soh</span>
              <label>Deputy Director at Monetary Authority of Singapore (MAS)</label>
            </div>
          </div>
        </div>
      </Slider>{" "}
    </div>
  );
};

export default Recommendations;
