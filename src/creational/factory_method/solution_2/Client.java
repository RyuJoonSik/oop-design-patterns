package creational.factory_method.solution_2;

public class Client {
  public static void main(String[] args) {
    ElevatorManager emWithResponseTimeScheduler = new ElevatorManagerWithResponseTimeScheduling(2);
    emWithResponseTimeScheduler.requestElevator(10, Direction.UP);

    ElevatorManager emWithThroughputScheduler = new ElevatorManagerWithThroughputScheduling(2);
    emWithThroughputScheduler.requestElevator(10, Direction.UP);

    ElevatorManager emWithDynamicScheduler = new ElevatorManagerDyanmicScheduling(2);
    emWithDynamicScheduler.requestElevator(10, Direction.UP);
  }
}