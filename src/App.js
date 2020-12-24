import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Button from "./Button";
import { incrementByAmount } from "./redux/points";
import { perSecondsSelector } from "./selectors/points";
import "./styles.scss";

const mapStateToProps = (state) => {
  return {
    points: state.points.value,
    pointsPerSecond: perSecondsSelector(state),
    buildings: state.buildings
  };
};

function App({ points, pointsPerSecond, add, buildings }) {
  useEffect(() => {
    let last;

    function loop(t) {
      if (last === undefined) last = t;
      req = requestAnimationFrame(loop);

      const delta = t - last;

      if (pointsPerSecond > 0) {
        add(pointsPerSecond * (delta / 1000));
      }

      last = t;
    }

    let req = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(req);
    };
  }, [pointsPerSecond, add]);

  return (
    <div className="App">
      <div className="ui">
        <div>Points: {points.toFixed(2)}</div>
        <div>Points per second: {pointsPerSecond.toFixed(2)}</div>
      </div>

      <button className="manual" onClick={() => add(1)}>
        +1 pt
      </button>

      {Object.keys(buildings).map((b) => (
        <Button key={b} type={b} />
      ))}
    </div>
  );
}

export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(
    {
      add: incrementByAmount
    },
    dispatch
  )
)(App);
