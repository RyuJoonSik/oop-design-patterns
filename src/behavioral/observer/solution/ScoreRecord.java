package behavioral.observer.solution;

import java.util.ArrayList;

public class ScoreRecord extends Subject{
  private ArrayList<Integer> scores = new ArrayList<Integer>();

  public void addScore(int score) {
    scores.add(score);

    notifyObservers();
  }

  public ArrayList<Integer> getScoreRecord() {
    return scores;
  }
}
