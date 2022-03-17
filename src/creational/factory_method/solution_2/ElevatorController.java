package creational.factory_method.solution_2;

public class ElevatorController {
  private int id;
  private int curFloor;

  public ElevatorController(int id) {
    this.id = id;
    this.curFloor = 1;
  }

  public void gotoFloor(int destination) {
    System.out.println(id + " " + curFloor);
    curFloor = destination;
    System.out.println(curFloor);
  }
}
