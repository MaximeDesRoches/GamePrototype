export const BUILDINGS = {
  CURSOR: "cursor",
  GRANDMA: "grandma",
  FARM: "farm",
  FACTORY: "factory",
  MINE: "mine",
  SHIPMENT: "shipment"
};

const b = {
  [BUILDINGS.CURSOR]: {
    name: "Cursor",
    description: "",
    baseCost: 15,
    baseRate: 0.1,
    qty: 0
  },
  [BUILDINGS.GRANDMA]: {
    name: "Grandma",
    description: "",
    baseCost: 100,
    baseRate: 0.5,
    qty: 0
  },
  [BUILDINGS.FARM]: {
    name: "Farm",
    description: "",
    baseCost: 500,
    baseRate: 4,
    qty: 0
  },
  [BUILDINGS.FACTORY]: {
    name: "Factory",
    description: "",
    baseCost: 3000,
    baseRate: 10,
    qty: 0
  },
  [BUILDINGS.MINE]: {
    name: "Mine",
    description: "",
    baseCost: 10000,
    baseRate: 40,
    qty: 0
  },
  [BUILDINGS.SHIPMENT]: {
    name: "shipment",
    description: "",
    baseCost: 40000,
    baseRate: 100,
    qty: 0
  }
};

export default b;
