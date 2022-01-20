import { Exercise } from "./exercise";
import { User } from "./user";

export class Order {
  user: User;
  exercise: Exercise;
  location: {type: string, coordinates: []};
  products: [{name: { type: String }, amount: Number}];

  constructor(data: any) {
    this.user = new User(data.user);
    this.exercise = new Exercise(data.exercise);
    this.location = data.location;
    this.products = data.products;
  }
}