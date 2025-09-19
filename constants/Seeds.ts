import { Seeds } from "@/entities/seeds.entities";
import { COLORS } from "./Colors";

export const SEEDS: Seeds[] = [
  {
    id: 1,
    title: "Carrot",
    estimated: "5m",
    stock: "2pc remaining",
    profit: "$5.00",
	cost: "$3.00", 
    icon: { library: "FontAwesome6", name: "carrot", size: 24, color: COLORS.white },
    isActive: true,
    type: "seeds",
  },
  {
    id: 2,
    title: "Potato",
    estimated: "9m",
    stock: "1pc remaining",
    profit: "$9.00",
	cost: "$5.00", 
    icon: { library: "MaterialCommunityIcons", name: "fruit-grapes", size: 24, color: COLORS.white},
    isActive: true,
    type: "seeds",
  },
  {
    id: 3,
    title: "Cabbage",
    estimated: "9m",
    stock: "1pc remaining",
    profit: "$12.00",
	cost: "$7.00", 
    icon: { library: "MaterialCommunityIcons", name: "fruit-grapes", size: 24, color: COLORS.white},
    isActive: true,
    type: "seeds",
  },
];

// export const SHOP_SEEDS: Seeds[] = [
//   {
//     id: 1,
//     title: "Carrot",
//     estimated: "5m",
//     stock: "3pc remaining",
//     profit: "$5.00",
//     icon: { library: "FontAwesome6", name: "carrot", size: 24, color: COLORS.white },
//     isActive: true,
//     type: "seeds",
//   },
//   {
//     id: 2,
//     title: "Potato",
//     estimated: "9m",
//     stock: "5pc remaining",
//     profit: "$9.00",
//     icon: { library: "MaterialCommunityIcons", name: "fruit-grapes", size: 24, color: COLORS.white},
//     isActive: true,
//     type: "seeds",
//   },
//   {
//     id: 3,
//     title: "Cabbage",
//     estimated: "9m",
//     stock: "5pc remaining",
//     profit: "$12.00",
//     icon: { library: "MaterialCommunityIcons", name: "fruit-grapes", size: 24, color: COLORS.white},
//     isActive: true,
//     type: "seeds",
//   },
// ];
