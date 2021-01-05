import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementByAmount, setLastConnection } from "./redux/points";
import { lastConnectionPointsSelector } from "./selectors/points";
import { fn } from "./utils";

const mapStateToProps = (state) => {
	return {
		...lastConnectionPointsSelector(state)
	};
};

function LastConnectionModal({
	lastConnectionPoints,
	lastConnection,
	add,
	setLC
}) {
	function onClick() {
		add(lastConnectionPoints);
		setLC(null);
	}

	useEffect(() => {
		if (lastConnection < 30 && lastConnectionPoints === 0) {
			setLC(null);
		}
	}, [lastConnection, lastConnectionPoints, setLC]);

	const pts = fn(lastConnectionPoints);

	console.log("Last Connection", lastConnection, "seconds ago");

	return lastConnectionPoints > 0 ? (
		<div className="last-connection-modal">
			<div className="content">
				Congrats !
				<br />
				While you were away you got {pts} points!
				<div className="upgrade-button" onClick={onClick}>
					Redeem
				</div>
			</div>
		</div>
	) : null;
}

export default connect(mapStateToProps, (dispatch) =>
	bindActionCreators(
		{
			add: incrementByAmount,
			setLC: setLastConnection
		},
		dispatch
	)
)(LastConnectionModal);
