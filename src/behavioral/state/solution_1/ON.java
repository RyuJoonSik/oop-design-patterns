package behavioral.state.solution_1;

import behavioral.state.solution_1.OFF;

public class ON implements State {
  public void on_button_pushed(Light light) {
    System.out.println("반응 없음");
  }
  
  public void off_button_pushed(Light light) {
    System.out.println("Light On!");
    light.setState(new OFF());
  }
}
