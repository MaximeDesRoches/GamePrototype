import React, { memo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buy } from "./redux/buildings";
import { incrementByAmount } from "./redux/points";
import { buildingSelector } from "./selectors/buildings";
import { fn } from "./utils";

function BuildingButton({
	points,
	name,
	type = "",
	rate = 0.2,
	cost = 0,
	buyBuilding,
	pay,
	qty
}) {
	const disabled = points < cost;

	function onClick() {
		buyBuilding({ type, qty: 1 });
		pay(-cost);
	}

	return (
		<div className="building-container">
			<div className="building-quantity">{qty}</div>
			<button
				className="button building"
				disabled={disabled}
				onClick={onClick}
			>
				{name} +{fn(rate)} pps [{fn(cost)} pts]
			</button>
		</div>
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
)(memo(BuildingButton));
