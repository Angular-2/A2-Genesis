//This component will hold our deal class which will let Angular 2 know the structure of a deal

export class Deal {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
}