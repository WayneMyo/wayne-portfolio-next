import { FC } from "react";
import { useSelector } from "react-redux";
import { Theme } from "../redux/Store";

interface SectionTitleProps {
  title: string;
  subTitle: string;
}

const SectionTitle: FC<SectionTitleProps> = ({ title, subTitle }) => {
  const theme = useSelector((state: { theme: { theme: Theme } }) => state.theme).theme;
  const activeTextClass = theme === Theme.Dark ? "light-color" : "dark-color";

  return (
    <div className="section-title">
      <h6 className="theme-after dark-color">{subTitle}</h6>
      <div className="st-title">
        <h2 className={`theme-after ${activeTextClass}`}>{title}</h2>
      </div>
    </div>
  );
};

export default SectionTitle;
