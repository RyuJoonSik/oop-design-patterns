package creational.factory_method.solution_2;

interface ElevatorScheduler {
  public int selectElevator(ElevatorManager manager, int destination, Direction direction);
}