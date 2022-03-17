package creational.factory_method.solution_2;

public class ElevatorManagerWithResponseTimeScheduling extends ElevatorManager{
  ElevatorManagerWithResponseTimeScheduling(int controllerCount) {
    super(controllerCount);
  }

  protected ElevatorScheduler getScheduler() {
    ElevatorScheduler scheduler = ResponseTimeScheduler.getInstance();

    return scheduler;
  }
}
