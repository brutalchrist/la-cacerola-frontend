export class User {
  public name: string;
  public phone: string;
  public email: string;
  public defaultAddress: string;
  public defaultLocation: {type: string, coordinates: []};

  constructor(data: any) {
    this.name = data.name;
    this.phone = data.phone;
    this.email = data.email;
    this.defaultAddress = data.defaultAddress;
    this.defaultLocation = data.defaultLocation;
  }
}