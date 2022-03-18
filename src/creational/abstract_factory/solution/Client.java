package creational.abstract_factory.solution;

public class Client {
  public static void main(String[] args) {
    ElevatorFactory factory = ElevatorFactoryFactory.getFactory(VendorID.SAMSUNG);

    Door door = factory.createDoor();
    Motor motor = factory.createMotor();
    motor.setDoor(door);

    door.open();
    motor.move(Direction.UP);
  }
}
