import React, { memo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { buy } from "./redux/upgrades";
import { incrementByAmount } from "./redux/points";
import { upgradeSelector } from "./selectors/upgrades";

function UpgradeButton({ points, type, owned, amount, pay, cost, buyUpgrade }) {
	function onClick() {
		if (!owned && points >= cost) {
			buyUpgrade({ type });
			pay(-cost);
		}
	}

	const disabled = points < cost;

	return (
		<button
			disabled={disabled}
			className={`button upgrade-button ${owned ? "owned" : ""}`}
			onClick={onClick}
		>
			{type} [+{amount * 100}%]
		</button>
	);
}

const mapStateToProps = (state, props) => {
	return {
		points: state.points.value,
		...upgradeSelector(state, props)
	};
};

export default connect(mapStateToProps, (dispatch) =>
	bindActionCreators(
		{
			buyUpgrade: buy,
			pay: incrementByAmount
		},
		dispatch
	)
)(memo(UpgradeButton));
