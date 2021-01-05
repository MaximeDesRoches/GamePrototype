import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BuildingButton from "./BuildingButton";
import LastConnectionModal from "./LastConnectionModal";
import { incrementByAmount, setLastConnection } from "./redux/points";
import { buildingsStateSelector } from "./selectors/buildings";
import {
	lastConnectionPointsSelector,
	perSecondsSelector
} from "./selectors/points";
import { upgradesStateSelector } from "./selectors/upgrades";
import "./styles/index.scss";
import UpgradeButton from "./UpgradeButton";
import { fn } from "./utils";

const mapStateToProps = (state) => {
	return {
		lastConnectionPoints: lastConnectionPointsSelector(state),
		points: state.points.value,
		pointsPerSecond: perSecondsSelector(state),
		buildings: buildingsStateSelector(),
		upgrades: upgradesStateSelector()
	};
};

function App({
	lastConnectionPoints,
	points,
	pointsPerSecond,
	add,
	buildings,
	upgrades,
	setLC
}) {
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

		window.addEventListener("beforeunload", () => {
			console.log("Last Connection");
			setLC(Date.now());
		});

		let req = requestAnimationFrame(loop);

		return () => {
			cancelAnimationFrame(req);
		};
	}, [pointsPerSecond, add, setLC]);

	return (
		<div className="App">
			<LastConnectionModal />
			<div className="header">
				<div className="points">
					<div className="label">Points</div>
					<div className="value">{fn(points)}</div>
				</div>
				<div className="pps">
					<div className="label">Points per second</div>
					<div className="value">{fn(pointsPerSecond)}</div>
				</div>
			</div>

			<button className="manual" onClick={() => add(1)}>
				+1 pt
			</button>

			{Object.keys(buildings).map((b) => (
				<BuildingButton key={b} type={b} />
			))}

			{Object.keys(upgrades).map((b) => (
				<UpgradeButton key={b} type={b} />
			))}
		</div>
	);
}

export default connect(mapStateToProps, (dispatch) =>
	bindActionCreators(
		{
			add: incrementByAmount,
			setLC: setLastConnection
		},
		dispatch
	)
)(App);
