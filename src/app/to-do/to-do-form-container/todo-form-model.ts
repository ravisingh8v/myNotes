export class todoForm {
  public id: number;
  public todo: string;
  public active: boolean;
  constructor(id: number, todo: string, active: boolean) {
    this.id = id
    this.todo = todo;
    this.active = active
  }
}
