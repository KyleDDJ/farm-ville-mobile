export type SeedsIcon = {
  library: "Entypo" | "MaterialIcons" | "Octicons" | "FontAwesome6" | "AntDesign" | "MaterialCommunityIcons";
  name: string; 
  size: number; 
  color: string;
};

export type Seeds = {
  id: number;
  title: string;
  estimated: string;
  stock: string;
  profit: string;
  status?: string;
  icon: SeedsIcon;
  cost?: string;
  isActive?: boolean;
  type?: "seeds",
  elapsed?: number;
  startedAt?: Date;  
  completedAt?: Date;   
};
