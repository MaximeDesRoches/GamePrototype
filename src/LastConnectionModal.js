import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { incrementByAmount, setLastConnection } from "./redux/points";
import { lastConnectionPointsSelector } from "./selectors/points";

const mapStateToProps = (state) => {
	return {
		lastConnectionPoints: lastConnectionPointsSelector(state)
	};
};

function LastConnectionModal({ lastConnectionPoints, add, setLC }) {
	function onClick() {
		add(lastConnectionPoints);
		setLC(null);
	}

	return lastConnectionPoints > 0 ? (
		<div className="last-connection-modal">
			<div className="content">
				Congrats !
				<br />
				While you were away you got {lastConnectionPoints} points!
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
