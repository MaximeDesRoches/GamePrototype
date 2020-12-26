import React, { memo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buy } from "./redux/buildings";
import { incrementByAmount } from "./redux/points";
import { buildingSelector } from "./selectors/buildings";

function Button({
	points,
	name,
	type = "",
	rate = 0.2,
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
			{name} +{rate.toFixed(2)}pps [{cost}pts]
		</button>
	);
}

const mapStateToProps = (state, props) => {
	return {
		points: state.points.value,
		...buildingSelector(state, props)
	};
};

export default connect(mapStateToProps, (dispatch) =>
	bindActionCreators(
		{
			buyBuilding: buy,
			pay: incrementByAmount
		},
		dispatch
	)
)(memo(Button));
