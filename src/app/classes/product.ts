export class Product {
  public name: string;
  public price: number;
  public measureUnit: string;
  public image: string;

  constructor(data: any) {
    this.name = data.name;
    this.price = data.price;
    this.measureUnit = data.measureUnit;
    this.image = data.image;
  }
}