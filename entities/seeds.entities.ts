export type Seeds = {
  id: number;
  name: string;
  harvestTime: string;
  stock: string;
  profit: string;
  cost: string;
  status?: 'available' | 'planted' | 'growing' | 'ready' | 'harvested';
  isActive?: boolean;
  category?: 'vegetable' | 'fruit' | 'grain' | 'flower' | 'tree';
  elapsed?: number;
  plantedAt?: Date;
  harvestReadyAt?: Date;
  harvestedAt?: Date; 
  image?: any; 
};
