export class Player {
  public candyCount = 5;
  public location = 0;
  public sideOfStreet: string;
  constructor(
    public name: string,
    public costume: string,
    public prank: string,
    public candy: string
  ) {}
}
