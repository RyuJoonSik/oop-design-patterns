package creational.factory_method.solution_2;

import java.util.Calendar;

public class ElevatorManagerDyanmicScheduling extends ElevatorManager{
  ElevatorManagerDyanmicScheduling(int controllerCount) {
    super(controllerCount);
  }

  protected ElevatorScheduler getScheduler() {
    ElevatorScheduler scheduler = null;
    int hour = Calendar.getInstance().get(Calendar.HOUR_OF_DAY);
        if (hour < 12) {
          scheduler = ResponseTimeScheduler.getInstance();
        } else {
          scheduler = ThroughputScheduler.getInstance();
        }

    return scheduler;
  }
}
