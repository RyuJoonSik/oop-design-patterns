package structural.decorator.solution;

public class Client {
  public static void main(String[] args) {
    Display road = new RoadDisplay();
    road.draw();

    Display roadWithLane = new LaneDecorator(new RoadDisplay());
    roadWithLane.draw();

    Display roadWithTraffic1 = new TrafficDecorator(new RoadDisplay());
    roadWithTraffic1.draw();

    Display roadWithTraffic2 = new TrafficDecorator(new LaneDecorator(new RoadDisplay()));
    roadWithTraffic2.draw();

    Display roadWithCrossingAndLaneAndTraffic = new LaneDecorator(new TrafficDecorator(new CrossingDecorator((new RoadDisplay()))));
    roadWithCrossingAndLaneAndTraffic.draw();
  }
}
