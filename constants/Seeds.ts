import { Seeds } from "@/entities/seeds.entities";

export const SEEDS: Seeds[] = [
  {
    id: 1,
    name: "Carrot",
    harvestTime: "5m",
    stock: "2pc remaining",
    profit: "$5.00",
	  cost: "$3.00", 
    image: require("@/assets/seeds/carrot.jpg"),
    category: "vegetable",
  },
  {
    id: 2,
    name: "Potato",
    harvestTime: "9m",
    stock: "1pc remaining",
    profit: "$9.00",
	  cost: "$5.00", 
    image: require("@/assets/seeds/potato.jpg"),
    category: "vegetable",
  },
  {
    id: 3,
    name: "Cabbage",
    harvestTime: "9m",
    stock: "1pc remaining",
    profit: "$12.00",
	  cost: "$7.00", 
    image: require("@/assets/seeds/cabbage.jpg"),
    category: "vegetable",
  },
];
