import ReactSlider from "react-slider";
import Description from "./Description";
import Container from "./Container";
import classNames from "classnames";

function DaysRange({ period, onChange, showPeriodSelect }) {
  return (
    <Container
      className={classNames("range-container", {
        hidden: !showPeriodSelect,
      })}
    >
      <ReactSlider
        className="date-range"
        thumbClassName="slider-thumb"
        thumbActiveClassName="touched"
        markClassName="slider-marked"
        trackClassName="slider-track"
        snapDragDisabled={true}
        defaultValue={period}
        value={period}
        min={1}
        max={7}
        renderThumb={(props, _) => <div {...props}></div>}
        renderTrack={(props, _) => <div {...props}></div>}
        renderMark={props => <span {...props} />}
        onChange={onChange}
      />
      <Description>
        <span className="description-amount">{period}</span>
        <span className="description-days"> days</span>
      </Description>
    </Container>
  );
}

export default DaysRange;
