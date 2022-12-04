import { Usage } from './Usage';
export interface Plant {
  plant_id?: number;
  name: string;
  created: string;
  origine: string;
  price: number;
  color: string;
  usages: Usage[];
}
