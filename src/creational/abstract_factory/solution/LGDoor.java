package creational.abstract_factory.solution;

public class LGDoor extends Door{
  protected void doClose() {
    System.out.println("close LG Door");
  }

  protected void doOpen() {
    System.out.println("open LG Door");
  }
}
