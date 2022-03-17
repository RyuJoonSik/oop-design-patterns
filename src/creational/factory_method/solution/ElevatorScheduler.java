package creational.factory_method.solution;

interface ElevatorScheduler {
  public int selectElevator(ElevatorManager manager, int destination, Direction direction);
}