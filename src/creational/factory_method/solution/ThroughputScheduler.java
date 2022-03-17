package creational.factory_method.solution;

public class ThroughputScheduler implements ElevatorScheduler{
  private static ElevatorScheduler scheduler;
  private ThroughputScheduler() {}

  public static ElevatorScheduler getInstance() {
    if (scheduler == null) {
      scheduler = new ThroughputScheduler();
    }

    return scheduler;
  }
  
  public int selectElevator(ElevatorManager manager, int destination, Direction direction) {
    return 0; // 임의로 선택
  }
}
