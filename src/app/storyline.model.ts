export class Storyline {
  public choiceA = "Ring the doorbell";
  public choiceB = "Prank the house";
  constructor(
    public description: string,
    public candy: string[],
    public id: number
  ) {}
}
