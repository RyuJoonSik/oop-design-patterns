package behavioral.command.solution;

public class Client {
  public static void main(String[] args) {
    Lamp lamp = new Lamp();
    Command lampOCommand = new LampOnCommand(lamp);
    Command lampOffCommand = new LampOffCommand(lamp);

    Button button1 = new Button(lampOCommand);
    button1.pressed();

    Alarm alarm = new Alarm();
    Command alaCommand = new AlarmOnCommand(alarm);

    Button button2 = new Button(alaCommand);
    button2.pressed();

    button2.setCommand(lampOCommand);
    button2.pressed();

    button2.setCommand(lampOffCommand);
    button2.pressed();
  }
}
