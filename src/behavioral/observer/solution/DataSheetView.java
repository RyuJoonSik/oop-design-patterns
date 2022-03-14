package behavioral.observer.solution;

import java.util.ArrayList;

public class DataSheetView implements Observer{
  private ScoreRecord scoreRecord;
  private int viewCount;

  public DataSheetView(ScoreRecord scoreRecord, int viewCount) {
    this.scoreRecord = scoreRecord;
    this.viewCount = viewCount;
  }

  public void update() {
    ArrayList<Integer> record = scoreRecord.getScoreRecord();
    displayScores(record, viewCount);
  }

  private void displayScores(ArrayList <Integer> record, int viewCount) {
    System.out.println(viewCount);

    for (int i = 0; i < viewCount && i < record.size(); i++) {
      System.out.print(record.get(i));
    }

    System.out.println();
  }
}
