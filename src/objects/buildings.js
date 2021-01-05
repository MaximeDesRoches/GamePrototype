export const BUILDINGS = {
	CURSOR: "cursor",
	GRANDMA: "grandma",
	FARM: "farm",
	FACTORY: "factory",
	MINE: "mine",
	SHIPMENT: "shipment",
	ULTIMATE: "ultimate"
};

export default {
	[BUILDINGS.CURSOR]: {
		name: "Cursor",
		description: "",
		baseCost: 15,
		baseRate: 0.1
	},
	[BUILDINGS.GRANDMA]: {
		name: "Grandma",
		description: "",
		baseCost: 100,
		baseRate: 0.5
	},
	[BUILDINGS.FARM]: {
		name: "Farm",
		description: "",
		baseCost: 500,
		baseRate: 4
	},
	[BUILDINGS.FACTORY]: {
		name: "Factory",
		description: "",
		baseCost: 3000,
		baseRate: 10
	},
	[BUILDINGS.MINE]: {
		name: "Mine",
		description: "",
		baseCost: 10000,
		baseRate: 40
	},
	[BUILDINGS.SHIPMENT]: {
		name: "Shipment",
		description: "",
		baseCost: 40000,
		baseRate: 100
	},
	[BUILDINGS.ULTIMATE]: {
		name: "ULTIMATE MADNESS!",
		description: "",
		baseCost: 999999999,
		baseRate: 999999
	}
};
