import React, { memo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buy } from "./redux/buildings";
import { incrementByAmount } from "./redux/points";
import { buildingSelector } from "./selectors/buildings";

const mapStateToProps = (state, props) => {
  return {
    points: state.points.value,
    ...buildingSelector(state, props)
  };
};

function Button({
  points,
  name,
  type = "",
  baseRate = 0.2,
  cost = 0,
  buyBuilding,
  pay
}) {
  const disabled = points < cost;

  function onClick() {
    buyBuilding({ type, qty: 1 });
    pay(-cost);
  }

  return (
    <button className="building" disabled={disabled} onClick={onClick}>
      {name} +{baseRate}pps [{cost}pts]
    </button>
  );
}

export default connect(mapStateToProps, (dispatch) =>
  bindActionCreators(
    {
      buyBuilding: buy,
      pay: incrementByAmount
    },
    dispatch
  )
)(memo(Button));
