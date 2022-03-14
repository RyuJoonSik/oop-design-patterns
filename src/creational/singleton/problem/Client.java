package creational.singleton.problem;

/* 
  싱글턴 패턴: 하나의 인스턴스만을 생성하는 책임이 있으며 getInstance 메서드를 통해
  모든 클라이언트에게 동일한 인스턴스를 반환하는 작업을 수행
*/

public class Client {
  private static final int THREAD_NUM = 5;
  public static void main(String[] args) {
    UserThread[] user = new UserThread[THREAD_NUM];

    for (int i = 0; i < THREAD_NUM; i++) {
      user[i] = new UserThread(i + 1 + "-thread");
      user[i].start();
    }
  }
}