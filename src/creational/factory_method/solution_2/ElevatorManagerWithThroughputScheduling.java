package creational.factory_method.solution_2;

public class ElevatorManagerWithThroughputScheduling extends ElevatorManager{
  ElevatorManagerWithThroughputScheduling(int controllerCount) {
    super(controllerCount);
  }

  protected ElevatorScheduler getScheduler() {
    ElevatorScheduler scheduler = ThroughputScheduler.getInstance();

    return scheduler;
  }
}
