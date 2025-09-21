export type Seeds = {
  id: number;
  title: string;
  estimated: string;
  stock: string;
  profit: string;
  status?: string;
  cost?: string;
  isActive?: boolean;
  type?: "seeds",
  elapsed?: number;
  startedAt?: Date;  
  completedAt?: Date;   
  image?: any; 
};
