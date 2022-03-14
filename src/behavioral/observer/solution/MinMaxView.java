package behavioral.observer.solution;

import java.util.ArrayList;
import java.util.Collections;

public class MinMaxView implements Observer{
  private ScoreRecord scoreRecord;

  public MinMaxView(ScoreRecord scoreRecord) {
    this.scoreRecord = scoreRecord;
  }

  public void update() {
    ArrayList<Integer> record = scoreRecord.getScoreRecord();
    displayMinMax(record);
  }

  private void displayMinMax(ArrayList<Integer> record) {
    int min = Collections.min(record, null);
    int max = Collections.max(record, null);
    System.out.println(min + " " + max);
  }
}
