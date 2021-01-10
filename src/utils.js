import numeral from "numeral";

export const fn = (num) => {
	let format = "0.00";
	if (num > 1000) format = "0.000";
	if (num > 10000) format = "0.0000";

	return numeral(num).format(`${format}a`);
};
