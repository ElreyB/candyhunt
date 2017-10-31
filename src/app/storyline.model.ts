export class Storyline {
  public choiceA: string = 'Ring the doorbell';
  public choiceB: string = 'Prank the house';
  constructor (public description: string, public candy: string[], public id: number) { }
}
